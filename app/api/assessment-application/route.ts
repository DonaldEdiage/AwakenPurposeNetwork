// app/api/assessment-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { assessmentApplicationEmail } from "../../emailTemplates/assessmentApplicationEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);
const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;

// Upload file to Dropbox
const uploadToDropbox = async (file: File, path: string) => {
  try {
    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    const uploadResponse = await fetch(
      "https://content.dropboxapi.com/2/files/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${DROPBOX_ACCESS_TOKEN}`,
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
    // Parse multipart form data using Next.js built-in method
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

    if (cvFile && DROPBOX_ACCESS_TOKEN) {
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
    } else if (cvFile) {
      hasCV = true;
      console.warn("⚠️ Dropbox token not configured");
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
    const { data, error } = await resend.emails.send({
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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

// OPTIONS handler for CORS
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
