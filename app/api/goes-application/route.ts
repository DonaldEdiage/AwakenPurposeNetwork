// app/api/goes-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { goesApplicationEmail } from "../../emailTemplates/goesApplicationEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data using Next.js built-in method
    const formData = await request.formData();

    // Extract text fields
    const fullName = formData.get("fullName") as string;
    const country = formData.get("country") as string;
    const qualification = formData.get("qualification") as string;
    const opportunity = formData.get("opportunity") as string;
    const targetCountry = formData.get("targetCountry") as string;
    const contact = formData.get("contact") as string;

    // Extract files
    const files: { filename: string; contentType: string }[] = [];
    const fileEntries = formData.getAll("documents") as File[];

    for (const file of fileEntries) {
      if (file) {
        files.push({
          filename: file.name,
          contentType: file.type || "application/octet-stream",
        });
      }
    }

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
