// app/api/eligibility-check/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { eligibilityCheckEmail } from "../../emailTemplates/eligibilityCheckEmail.js";

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Parse JSON body
    const body = await request.json();
    const { fullName, email, whatsapp, background, message, date, time } = body;

    // Validation
    if (!fullName || !email || !whatsapp || !date || !time) {
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

    // Generate email content using template
    const emailContent = eligibilityCheckEmail({
      fullName,
      email,
      whatsapp,
      background,
      message,
      date,
      time,
      consultationType: "Free 15-Minute Eligibility Check",
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "Eligibility Check <onboarding@resend.dev>",
      to: [process.env.ELIGIBILITY_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
      subject: `New Eligibility Check Request: ${fullName}`,
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
      message: "Eligibility check request submitted successfully!",
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
