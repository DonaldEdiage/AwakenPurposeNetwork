// app/api/assessment-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { assessmentApplicationEmail } from "../../emailTemplates/assessmentApplicationEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔑 Helper: Get a fresh access token using the refresh token
async function getDropboxAccessToken() {
  const refreshToken = process.env.DROPBOX_REFRESH_TOKEN;
  const clientId = process.env.DROPBOX_APP_KEY;
  const clientSecret = process.env.DROPBOX_APP_SECRET;

  if (!refreshToken || !clientId || !clientSecret) {
    throw new Error("Missing Dropbox OAuth environment variables");
  }

  const response = await fetch("https://api.dropboxapi.com/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Dropbox token refresh error:", data);
    throw new Error("Failed to refresh Dropbox access token");
  }

  return data.access_token;
}

// 📤 Upload file to Dropbox using a fresh access token
const uploadToDropbox = async (file: File, path: string) => {
  try {
    const accessToken = await getDropboxAccessToken();

    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    const uploadResponse = await fetch(
      "https://content.dropboxapi.com/2/files/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/octet-stream",
          "Dropbox-API-Arg": JSON.stringify({
            path: path,
            mode: "add",
            autorename: true,
            mute: false,
          }),
        },
        body: fileBuffer,
      },
    );

    if (uploadResponse.ok) {
      return await uploadResponse.json();
    } else {
      const errorText = await uploadResponse.text();
      console.error("Dropbox upload error:", errorText);
      return null;
    }
  } catch (error) {
    console.error("Dropbox upload error:", error);
    return null;
  }
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract text fields
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const ageRange = formData.get("ageRange") as string;
    const highestEducation = formData.get("highestEducation") as string;
    const fieldOfStudy = formData.get("fieldOfStudy") as string;
    const currentStatus = formData.get("currentStatus") as string;
    const yearOfCompletion = formData.get("yearOfCompletion") as string;
    const goal = formData.get("goal") as string;
    const preferredCountries = formData.get("preferredCountries") as string;
    const budgetRange = formData.get("budgetRange") as string;
    const timeline = formData.get("timeline") as string;
    const motivation = formData.get("motivation") as string;

    // Extract file (CV)
    const cvFile = formData.get("cv") as File | null;

    // Validation
    if (!fullName || !email || !phone || !country || !goal || !motivation) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Upload CV to Dropbox
    let uploadedFile = null;
    let hasCV = false;

    if (cvFile) {
      hasCV = true;
      const timestamp = Date.now();
      const safeName = fullName.replace(/\s/g, "_");
      const dropboxPath = `/Assessment_Applications/${timestamp}_${safeName}_${cvFile.name}`;

      try {
        const result = await uploadToDropbox(cvFile, dropboxPath);
        if (result) {
          uploadedFile = {
            filename: cvFile.name,
            path: dropboxPath,
            size: result.size,
          };
          console.log("✅ CV uploaded to Dropbox:", dropboxPath);
        } else {
          console.warn("⚠️ Dropbox upload failed, but CV was received");
        }
      } catch (error) {
        console.error("Dropbox upload error:", error);
      }
    } else {
      console.warn("⚠️ No CV file provided");
    }

    // Generate email content
    const emailContent = assessmentApplicationEmail({
      fullName,
      email,
      phone,
      country,
      ageRange,
      highestEducation,
      fieldOfStudy,
      currentStatus,
      yearOfCompletion,
      goal,
      preferredCountries,
      budgetRange,
      timeline,
      motivation,
      hasCV,
      uploadedFile,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "Assessment Application <onboarding@resend.dev>",
      to: [
        process.env.ASSESSMENT_RECIPIENT_EMAIL ||
          "awakenpurposenetwork@gmail.com",
      ],
      subject: `New Assessment Application: ${fullName} - ${goal}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      cvUploaded: hasCV,
      cvSaved: uploadedFile !== null,
    });
  } catch (error) {
    console.error("Handler error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: "Internal server error: " + errorMessage },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
