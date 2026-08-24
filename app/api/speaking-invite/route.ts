// app/api/speaking-invite/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { speakingInviteEmail } from "../../emailTemplates/speakingInviteEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse JSON body
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      organization,
      eventName,
      eventDates,
      eventLocation,
      audienceType,
      attendance,
      eventDescription,
      message,
    } = body;

    // Basic validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !organization ||
      !eventName ||
      !eventDates ||
      !eventLocation ||
      !audienceType ||
      !attendance ||
      !eventDescription ||
      !message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Use the imported email template
    const emailContent = speakingInviteEmail({
      fullName,
      email,
      phone,
      organization,
      eventName,
      eventDates,
      eventLocation,
      audienceType,
      attendance,
      eventDescription,
      message,
    });

    // Send email
    const { data, error } = await resend.emails.send({
      from: "APN Speaking <onboarding@resend.dev>",
      to: [process.env.SPEAKING_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
      subject: `Speaking Invitation: ${eventName} - ${fullName}`,
      html: emailContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send invitation" },
        { status: 500 },
      );
    }

    console.log("✅ Speaking invitation sent:", data);

    return NextResponse.json({
      success: true,
      message:
        "Your invitation request has been sent successfully! We'll respond within 24-48 hours.",
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
