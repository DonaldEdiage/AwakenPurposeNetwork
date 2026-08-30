// app/api/book-payment-upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bookPaymentConfirmationEmail } from "../../emailTemplates/bookPaymentConfirmationEmail.js";

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

    const paymentMethod = formData.get("paymentMethod") as string;
    const price = formData.get("price") as string;
    const title = formData.get("title") as string;
    const bookId = formData.get("bookId") as string;
    const lang = formData.get("lang") as string;
    const paymentFile = formData.get("paymentFile") as File | null;

    if (!paymentMethod || !price || !title) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const mtnNumber = "650898613";
    const orangeNumber = "656596734";

    let uploadedFile = null;
    if (paymentFile) {
      const timestamp = Date.now();
      const safeTitle = title.replace(/\s/g, "_");
      const bookIdPrefix = bookId || "book";
      const dropboxPath = `/Book_Payments/${timestamp}_${bookIdPrefix}_${safeTitle}_${paymentFile.name}`;

      try {
        const result = await uploadToDropbox(paymentFile, dropboxPath);
        if (result) {
          uploadedFile = {
            filename: paymentFile.name,
            path: dropboxPath,
            size: result.size,
          };
          console.log("✅ Book payment file uploaded to Dropbox:", dropboxPath);
        } else {
          console.warn("⚠️ Dropbox upload failed, but file was received");
        }
      } catch (error) {
        console.error("Dropbox upload error:", error);
      }
    } else {
      console.warn("⚠️ No payment file provided");
    }

    const emailContent = bookPaymentConfirmationEmail({
      paymentMethod,
      mtnNumber,
      orangeNumber,
      price,
      title,
      bookId,
      lang,
    });

    const { error } = await resend.emails.send({
      from: "Book Payment Confirmation <onboarding@resend.dev>",
      to: [
        process.env.PAYMENT_RECIPIENT_EMAIL || "awakenpurposenetwork@gmail.com",
      ],
      subject: `📖 New Book Order: ${title} (${paymentMethod})`,
      html: emailContent,
      replyTo: process.env.REPLY_TO_EMAIL || "info@goes.com",
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
      message: "Book payment confirmation submitted successfully!",
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
