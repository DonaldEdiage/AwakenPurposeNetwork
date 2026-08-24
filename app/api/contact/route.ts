// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormEmail } from "../../emailTemplates/contactFormEmail.js";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse JSON body
    const body = await request.json();
    const { fullName, email, phone, organization, reason, message } = body;

    // Validation
    if (!fullName || !email || !message || !reason) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Generate email content
    const emailContent = contactFormEmail({
      fullName,
      email,
      phone,
      organization,
      reason,
      message,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "APN Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
      subject: `New Contact Form: ${reason} - ${fullName}`,
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
      message:
        "Your message has been sent successfully! We'll respond within 24-48 hours.",
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
