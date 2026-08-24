// netlify/functions/emailTemplates/assessmentApplicationEmail.js

export const assessmentApplicationEmail = (data) => {
  const {
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
    hasCV = false,
    uploadedFile = null,
  } = data;

  // Map goal values to display names
  const goalMap = {
    "study-bachelor": "Study Abroad (Bachelor)",
    "study-master": "Study Abroad (Master)",
    "study-phd": "Study Abroad (PhD)",
    employment: "International Employment",
    internship: "Internship Opportunities",
    research: "Research / PhD Pathway",
  };

  // Map education values to display names
  const educationMap = {
    "high-school": "High School",
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    phd: "PhD / Doctorate",
    diploma: "Diploma / Certificate",
    other: "Other",
  };

  // Map status values to display names
  const statusMap = {
    student: "Student",
    graduate: "Graduate",
    employed: "Employed",
    researcher: "Researcher",
  };

  // Map timeline values to display names
  const timelineMap = {
    asap: "ASAP",
    "3-6-months": "3–6 months",
    "6-12-months": "6–12 months",
    flexible: "Flexible",
  };

  // Map age range values
  const ageMap = {
    "18-24": "18–24",
    "25-34": "25–34",
    "35-44": "35–44",
    "45+": "45+",
  };

  const displayGoal = goalMap[goal] || goal;
  const displayEducation = educationMap[highestEducation] || highestEducation;
  const displayStatus = statusMap[currentStatus] || currentStatus;
  const displayTimeline = timelineMap[timeline] || timeline;
  const displayAge = ageMap[ageRange] || ageRange;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Assessment Application</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f7; margin: 0; padding: 20px; }
        .container { max-width: 700px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px 20px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: 600; }
        .header p { color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px; }
        .content { padding: 30px; }
        .section { margin-bottom: 24px; border-bottom: 1px solid #e5e7eb; padding-bottom: 20px; }
        .section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .section-title { font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 16px; display: flex; align-items: center; gap: 8px; }
        .section-title span { background: linear-gradient(135deg, #2563eb, #7c3aed); width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; color: white; }
        .info-row { display: flex; margin-bottom: 8px; flex-wrap: wrap; }
        .info-label { width: 140px; font-weight: 600; color: #4b5563; }
        .info-value { flex: 1; color: #1f2937; }
        .badge { display: inline-block; background-color: #e0e7ff; color: #4338ca; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .message-box { background-color: #f9fafb; border-left: 4px solid #3b82f6; padding: 16px; border-radius: 8px; margin-top: 8px; }
        .message-box p { margin: 0; color: #374151; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 12px; }
        .status-tag { display: inline-block; background-color: #fef3c7; color: #92400e; padding: 2px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📋 New Assessment Application</h1>
          <p>Apply for Assessment Form</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">
              <span>👤</span> Personal Information
            </div>
            <div class="info-row">
              <div class="info-label">Full Name:</div>
              <div class="info-value"><strong>${fullName}</strong></div>
            </div>
            <div class="info-row">
              <div class="info-label">Email Address:</div>
              <div class="info-value"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone/WhatsApp:</div>
              <div class="info-value">${phone}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Country:</div>
              <div class="info-value">${country}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Age Range:</div>
              <div class="info-value">${displayAge}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>🎓</span> Background Information
            </div>
            <div class="info-row">
              <div class="info-label">Highest Education:</div>
              <div class="info-value"><span class="badge">${displayEducation}</span></div>
            </div>
            <div class="info-row">
              <div class="info-label">Field of Study:</div>
              <div class="info-value">${fieldOfStudy}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Current Status:</div>
              <div class="info-value"><span class="badge">${displayStatus}</span></div>
            </div>
            <div class="info-row">
              <div class="info-label">Year of Completion:</div>
              <div class="info-value">${yearOfCompletion || "Not specified"}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>🎯</span> Goal Selection
            </div>
            <div class="info-row">
              <div class="info-label">Selected Pathway:</div>
              <div class="info-value"><span class="badge" style="background-color: #dbeafe; color: #1e40af;">${displayGoal}</span></div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>🌍</span> Target Preferences
            </div>
            <div class="info-row">
              <div class="info-label">Preferred Countries:</div>
              <div class="info-value">${preferredCountries}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Budget Range:</div>
              <div class="info-value">${budgetRange || "Not specified"}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Timeline:</div>
              <div class="info-value"><span class="badge">${displayTimeline}</span></div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>💬</span> Motivation
            </div>
            <div class="message-box">
              <p>${motivation.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          
        // In the CV Upload section of your email template
        <div className="section">
          <div className="section-title">
            <span>📎</span> CV Upload
          </div>
          <div className="info-row">
            <div className="info-label">CV Uploaded:</div>
            <div className="info-value">${hasCV ? "✅ Yes" : "❌ No"}</div>
          </div>
          ${
            uploadedFile &&
            typeof uploadedFile === "object" &&
            uploadedFile.filename
              ? `
            <div className="info-row">
              <div className="info-label">File Name:</div>
              <div className="info-value">${uploadedFile.filename}</div>
            </div>
            <div className="info-row">
              <div className="info-label">File Size:</div>
              <div className="info-value">${uploadedFile.size ? (uploadedFile.size / 1024).toFixed(1) + " KB" : "Unknown"}</div>
            </div>
            <div className="info-row">
              <div className="info-label">Dropbox Path:</div>
              <div className="info-value" style="font-size: 12px; color: #6b7280;">${uploadedFile.path || "Not available"}</div>
            </div>
          `
              : ""
          }
          ${
            hasCV && !uploadedFile
              ? `
            <div className="info-row">
              <div className="info-label">Status:</div>
              <div className="info-value" style="color: #f59e0b;">⚠️ CV received but not saved to Dropbox</div>
            </div>
          `
              : ""
          }
        </div>
          
          <div class="section" style="background-color: #f0fdf4; padding: 12px; border-radius: 8px; border: 1px solid #bbf7d0;">
            <div class="info-row">
              <div class="info-label">Lead Status:</div>
              <div class="info-value"><span class="status-tag">🟡 New Lead</span></div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>📧 Reply directly to this email to contact ${fullName}</p>
          <p style="margin-top: 8px;">Apply for Assessment • Awaken Purpose Network</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
