// app/api/book-payment-upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bookPaymentConfirmationEmail } from "../../emailTemplates/bookPaymentConfirmationEmail.js";

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

    // Extract book-specific fields
    const paymentMethod = formData.get("paymentMethod") as string;
    const price = formData.get("price") as string;
    const title = formData.get("title") as string;
    const bookId = formData.get("bookId") as string;
    const lang = formData.get("lang") as string;
    const paymentFile = formData.get("paymentFile") as File | null;

    // Validation – these fields are required
    if (!paymentMethod || !price || !title) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Payment numbers (consistent with frontend)
    const mtnNumber = "650898613";
    const orangeNumber = "656596734";

    // Upload file to Dropbox (using bookId and title)
    let uploadedFile = null;
    if (paymentFile && DROPBOX_ACCESS_TOKEN) {
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
    } else if (paymentFile) {
      console.warn("⚠️ Dropbox token not configured");
    }

    // Generate email content using book-specific template
    const emailContent = bookPaymentConfirmationEmail({
      paymentMethod,
      mtnNumber,
      orangeNumber,
      price,
      title,
      bookId,
      lang,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "Book Payment Confirmation <onboarding@resend.dev>",
      to: [process.env.PAYMENT_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
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
