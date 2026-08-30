// app/api/goes-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { goesApplicationEmail } from "../../emailTemplates/goesApplicationEmail.js";

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
      console.log("✅ File uploaded to Dropbox:", path);
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
    const country = formData.get("country") as string;
    const qualification = formData.get("qualification") as string;
    const opportunity = formData.get("opportunity") as string;
    const targetCountry = formData.get("targetCountry") as string;
    const contact = formData.get("contact") as string;

    // Extract files
    const fileEntries = formData.getAll("documents") as File[];
    const uploadedFiles = [];

    // Upload each file to Dropbox
    const timestamp = Date.now();
    const safeName = fullName.replace(/\s/g, "_");

    for (const file of fileEntries) {
      if (file) {
        const dropboxPath = `/GOES_Applications/${timestamp}_${safeName}_${file.name}`;
        try {
          const result = await uploadToDropbox(file, dropboxPath);
          if (result) {
            uploadedFiles.push({
              filename: file.name,
              path: dropboxPath,
              size: result.size,
            });
            console.log("✅ File uploaded to Dropbox:", dropboxPath);
          } else {
            console.warn("⚠️ Dropbox upload failed for:", file.name);
          }
        } catch (error) {
          console.error("Dropbox upload error for", file.name, ":", error);
        }
      }
    }

    // Build files array for email template (with content type info)
    const files = uploadedFiles.map((f) => ({
      filename: f.filename,
      contentType: "application/octet-stream", // or you can get it from the file
    }));

    // Validation
    if (
      !fullName ||
      !country ||
      !qualification ||
      !opportunity ||
      !targetCountry ||
      !contact
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Generate email content using template
    const emailContent = goesApplicationEmail(
      { fullName, country, qualification, opportunity, targetCountry, contact },
      files,
    );

    // Send email notification
    const { error } = await resend.emails.send({
      from: "GOES Application <onboarding@resend.dev>",
      to: [
        process.env.GOES_RECIPIENT_EMAIL || "awakenpurposenetwork@gmail.com",
      ],
      subject: `New GOES Application: ${fullName}`,
      html: emailContent,
      replyTo: contact,
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
      message:
        "Application submitted successfully! We will contact you within 24-48 hours.",
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
