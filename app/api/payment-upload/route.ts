// app/api/payment-upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { paymentConfirmationEmail } from "../../emailTemplates/paymentConfirmationEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);
const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;

// Upload file to Dropbox
const uploadToDropbox = async (file: File, path: string) => {
  try {
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
    const paymentMethod = formData.get("paymentMethod") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;

    // Extract file (the first uploaded file)
    const paymentFile = formData.get("paymentFile") as File | null;

    // Validation
    if (!paymentMethod || !fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const mtnNumber = "650898613";
    const orangeNumber = "656596734";
    const amount = "30,000 FCFA";

    // Upload file to Dropbox
    let uploadedFile = null;
    if (paymentFile && DROPBOX_ACCESS_TOKEN) {
      const timestamp = Date.now();
      const safeName = fullName.replace(/\s/g, "_");
      const dropboxPath = `/Consultaion_Payment_Confirmations/${timestamp}_${safeName}_${paymentFile.name}`;

      try {
        const result = await uploadToDropbox(paymentFile, dropboxPath);
        if (result) {
          uploadedFile = {
            filename: paymentFile.name,
            path: dropboxPath,
            size: result.size,
          };
          console.log("✅ Payment file uploaded to Dropbox:", dropboxPath);
        } else {
          console.warn("⚠️ Dropbox upload failed, but file was received");
        }
      } catch (error) {
        console.error("Dropbox upload error:", error);
      }
    } else if (paymentFile) {
      console.warn("⚠️ Dropbox token not configured");
    }

    // Generate email content using template
    const emailContent = paymentConfirmationEmail({
      paymentMethod,
      mtnNumber,
      orangeNumber,
      amount,
      fullName,
      email,
      whatsapp,
      date,
      time,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "Payment Confirmation <onboarding@resend.dev>",
      to: [process.env.PAYMENT_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
      subject: `New Payment Confirmation: ${fullName} - ${paymentMethod}`,
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
      message: "Payment confirmation submitted successfully!",
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
