// app/api/ggsi-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const DROPBOX_ACCESS_TOKEN = process.env.DROPBOX_ACCESS_TOKEN;

// Define types
interface UploadedFile {
  filename: string;
  path: string;
  size: number;
}

interface EmailData {
  fullName: string;
  dateOfBirth: string;
  gender: string;
  region: string;
  email: string;
  whatsapp: string;
  highestQualification: string;
  institution: string;
  fieldOfStudy: string;
  studyDestination: string;
  academicGoals: string;
  careerAspirations: string;
  leadershipExperience: string;
  communityImpact: string;
  motivationForGGSI: string;
  referee1Name: string;
  referee1Relationship: string;
  referee1Institution: string;
  referee1Position: string;
  referee1Email: string;
  referee1Phone: string;
  referee2Name: string;
  referee2Relationship: string;
  referee2Institution: string;
  referee2Position: string;
  referee2Email: string;
  referee2Phone: string;
  declaration: string;
  uploadedFiles: UploadedFile[];
}

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
      console.log("File Uploaded succesfully to Dropbox");
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

// Build email content - typed
const buildEmailContent = (data: EmailData): string => {
  const {
    fullName,
    dateOfBirth,
    gender,
    region,
    email,
    whatsapp,
    highestQualification,
    institution,
    fieldOfStudy,
    studyDestination,
    academicGoals,
    careerAspirations,
    leadershipExperience,
    communityImpact,
    motivationForGGSI,
    referee1Name,
    referee1Relationship,
    referee1Institution,
    referee1Position,
    referee1Email,
    referee1Phone,
    referee2Name,
    referee2Relationship,
    referee2Institution,
    referee2Position,
    referee2Email,
    referee2Phone,
    declaration,
    uploadedFiles,
  } = data;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New GGSI Application</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; background: #f4f4f7; margin: 0; padding: 20px; }
        .container { max-width: 700px; margin: 0 auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px; text-align: center; color: white; }
        .content { padding: 30px; }
        .section { margin-bottom: 25px; border-bottom: 1px solid #e5e7eb; padding-bottom: 20px; }
        .section-title { font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 15px; }
        .row { display: flex; margin-bottom: 8px; }
        .label { width: 150px; font-weight: 600; color: #4b5563; }
        .value { flex: 1; color: #1f2937; }
        .badge { display: inline-block; background: #e0e7ff; color: #4338ca; padding: 2px 12px; border-radius: 20px; font-size: 12px; }
        .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px; }
        .file-list { background: #f0fdfa; padding: 12px; border-radius: 8px; margin-top: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 New GGSI Application</h1>
          <p>GOES Global Scholarships Initiative</p>
        </div>
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Personal Information</div>
            <div class="row"><span class="label">Full Name:</span><span class="value"><strong>${fullName}</strong></span></div>
            <div class="row"><span class="label">Date of Birth:</span><span class="value">${dateOfBirth}</span></div>
            <div class="row"><span class="label">Gender:</span><span class="value">${gender}</span></div>
            <div class="row"><span class="label">Region:</span><span class="value">${region}</span></div>
            <div class="row"><span class="label">Email:</span><span class="value"><a href="mailto:${email}">${email}</a></span></div>
            <div class="row"><span class="label">WhatsApp:</span><span class="value">${whatsapp}</span></div>
          </div>

          <div class="section">
            <div class="section-title">📚 Academic Information</div>
            <div class="row"><span class="label">Qualification:</span><span class="value"><span class="badge">${highestQualification}</span></span></div>
            <div class="row"><span class="label">Institution:</span><span class="value">${institution}</span></div>
            <div class="row"><span class="label">Field of Study:</span><span class="value">${fieldOfStudy}</span></div>
            <div class="row"><span class="label">Study Destination:</span><span class="value"><span class="badge">${studyDestination}</span></span></div>
          </div>

          <div class="section">
            <div class="section-title">🎯 Motivational Assessment</div>
            <div><strong>Academic Goals:</strong></div>
            <p>${academicGoals}</p>
            <div><strong>Career Aspirations:</strong></div>
            <p>${careerAspirations}</p>
            <div><strong>Leadership Experience:</strong></div>
            <p>${leadershipExperience}</p>
            <div><strong>Community Impact:</strong></div>
            <p>${communityImpact}</p>
            <div><strong>Motivation for GGSI:</strong></div>
            <p>${motivationForGGSI}</p>
          </div>

          <div class="section">
            <div class="section-title">👥 Referee Information</div>
            <div><strong>Referee 1:</strong></div>
            <div class="row"><span class="label">Name:</span><span class="value">${referee1Name}</span></div>
            <div class="row"><span class="label">Relationship:</span><span class="value">${referee1Relationship}</span></div>
            <div class="row"><span class="label">Institution:</span><span class="value">${referee1Institution}</span></div>
            <div class="row"><span class="label">Position:</span><span class="value">${referee1Position}</span></div>
            <div class="row"><span class="label">Email:</span><span class="value"><a href="mailto:${referee1Email}">${referee1Email}</a></span></div>
            <div class="row"><span class="label">Phone:</span><span class="value">${referee1Phone}</span></div>
            <br>
            <div><strong>Referee 2:</strong></div>
            <div class="row"><span class="label">Name:</span><span class="value">${referee2Name}</span></div>
            <div class="row"><span class="label">Relationship:</span><span class="value">${referee2Relationship}</span></div>
            <div class="row"><span class="label">Institution:</span><span class="value">${referee2Institution}</span></div>
            <div class="row"><span class="label">Position:</span><span class="value">${referee2Position}</span></div>
            <div class="row"><span class="label">Email:</span><span class="value"><a href="mailto:${referee2Email}">${referee2Email}</a></span></div>
            <div class="row"><span class="label">Phone:</span><span class="value">${referee2Phone}</span></div>
          </div>

          <div class="section">
            <div class="section-title">📎 Uploaded Documents</div>
            ${
              uploadedFiles.length > 0
                ? `
              <div class="file-list">
                <ul>
                  ${uploadedFiles.map((f: UploadedFile) => `<li><strong>${f.filename}</strong> (Saved to Dropbox)</li>`).join("")}
                </ul>
              </div>
              <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">Files saved in: /GGSI_Applications/</p>
            `
                : `<p>No files uploaded.</p>`
            }
          </div>

          <div class="section">
            <div class="section-title">✅ Declaration</div>
            <p>${declaration === "true" ? "✅ Accepted" : "❌ Not Accepted"}</p>
          </div>
        </div>
        <div class="footer">
          <p>📧 Reply directly to this email to contact ${fullName}</p>
          <p style="margin-top: 8px;">GOES Global Scholarships Initiative • Awaken Purpose Network</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    // Parse multipart form data using Next.js built-in method
    const formData = await request.formData();

    // Extract text fields
    const fullName = formData.get("fullName") as string;
    const dateOfBirth = formData.get("dateOfBirth") as string;
    const gender = formData.get("gender") as string;
    const region = formData.get("region") as string;
    const email = formData.get("email") as string;
    const whatsapp = formData.get("whatsapp") as string;
    const highestQualification = formData.get("highestQualification") as string;
    const institution = formData.get("institution") as string;
    const fieldOfStudy = formData.get("fieldOfStudy") as string;
    const studyDestination = formData.get("studyDestination") as string;
    const academicGoals = formData.get("academicGoals") as string;
    const careerAspirations = formData.get("careerAspirations") as string;
    const leadershipExperience = formData.get("leadershipExperience") as string;
    const communityImpact = formData.get("communityImpact") as string;
    const motivationForGGSI = formData.get("motivationForGGSI") as string;
    const referee1Name = formData.get("referee1Name") as string;
    const referee1Relationship = formData.get("referee1Relationship") as string;
    const referee1Institution = formData.get("referee1Institution") as string;
    const referee1Position = formData.get("referee1Position") as string;
    const referee1Email = formData.get("referee1Email") as string;
    const referee1Phone = formData.get("referee1Phone") as string;
    const referee2Name = formData.get("referee2Name") as string;
    const referee2Relationship = formData.get("referee2Relationship") as string;
    const referee2Institution = formData.get("referee2Institution") as string;
    const referee2Position = formData.get("referee2Position") as string;
    const referee2Email = formData.get("referee2Email") as string;
    const referee2Phone = formData.get("referee2Phone") as string;
    const declaration = formData.get("declaration") as string;

    // Extract files (documents)
    const documents = formData.getAll("documents") as File[];

    // Validation
    if (!fullName || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Upload files to Dropbox
    const uploadedFiles: UploadedFile[] = [];
    const timestamp = Date.now();
    const safeName = fullName.replace(/\s/g, "_");

    for (const file of documents) {
      if (file && DROPBOX_ACCESS_TOKEN) {
        const dropboxPath = `/GGSI_Applications/${timestamp}_${safeName}_${file.name}`;
        try {
          const result = await uploadToDropbox(file, dropboxPath);
          if (result) {
            uploadedFiles.push({
              filename: file.name,
              path: dropboxPath,
              size: result.size,
            });
            console.log("✅ File uploaded to Dropbox:", dropboxPath);
            console.log(
              "DROPBOX_ACCESS_TOKEN exists?",
              !!process.env.DROPBOX_ACCESS_TOKEN,
            );
          } else {
            console.warn("⚠️ Dropbox upload failed for:", file.name);
            console.log(
              "DROPBOX_ACCESS_TOKEN exists?",
              !!process.env.DROPBOX_ACCESS_TOKEN,
            );
          }
        } catch (error) {
          console.error("Dropbox upload error:", error);
        }
      }
    }

    // Build email content
    const emailContent = buildEmailContent({
      fullName,
      dateOfBirth,
      gender,
      region,
      email,
      whatsapp,
      highestQualification,
      institution,
      fieldOfStudy,
      studyDestination,
      academicGoals,
      careerAspirations,
      leadershipExperience,
      communityImpact,
      motivationForGGSI,
      referee1Name,
      referee1Relationship,
      referee1Institution,
      referee1Position,
      referee1Email,
      referee1Phone,
      referee2Name,
      referee2Relationship,
      referee2Institution,
      referee2Position,
      referee2Email,
      referee2Phone,
      declaration,
      uploadedFiles,
    });

    // Send email notification
    const { error } = await resend.emails.send({
      from: "GGSI Application <onboarding@resend.dev>",
      to: [process.env.GGSI_RECIPIENT_EMAIL || "moamaa111@gmail.com"],
      subject: `New GGSI Application: ${fullName}`,
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
