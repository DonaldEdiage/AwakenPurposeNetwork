// netlify/functions/emailTemplates/goesApplicationEmail.js

export const goesApplicationEmail = (data, files = []) => {
  const {
    fullName,
    country,
    qualification,
    opportunity,
    targetCountry,
    contact,
  } = data;

  // Map qualification values to display names
  const qualificationMap = {
    "high-school": "High School / Secondary",
    bachelors: "Bachelor's Degree",
    masters: "Master's Degree",
    phd: "PhD / Doctorate",
    diploma: "Diploma / Certificate",
    other: "Other",
  };

  // Map opportunity values to display names
  const opportunityMap = {
    study: "Study / Education",
    work: "Work / Employment",
    internship: "Internship",
    research: "Research / PhD",
  };

  const displayQualification = qualificationMap[qualification] || qualification;
  const displayOpportunity = opportunityMap[opportunity] || opportunity;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New GOES Application</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f4f4f7;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          padding: 30px 20px;
          text-align: center;
        }
        .header h1 {
          color: white;
          margin: 0;
          font-size: 24px;
          font-weight: 600;
        }
        .header p {
          color: rgba(255,255,255,0.9);
          margin: 8px 0 0;
          font-size: 14px;
        }
        .content {
          padding: 30px;
        }
        .section {
          margin-bottom: 24px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 20px;
        }
        .section:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-title span {
          background: linear-gradient(135deg, #0891b2, #06b6d4);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: white;
        }
        .info-row {
          display: flex;
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .info-label {
          width: 140px;
          font-weight: 600;
          color: #4b5563;
        }
        .info-value {
          flex: 1;
          color: #1f2937;
        }
        .badge {
          display: inline-block;
          background-color: #cffafe;
          color: #0e7490;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        .files-list {
          background-color: #f0fdfa;
          border-left: 4px solid #14b8a6;
          padding: 16px;
          border-radius: 8px;
          margin-top: 8px;
        }
        .files-list ul {
          margin: 8px 0 0 20px;
          padding: 0;
        }
        .files-list li {
          margin: 4px 0;
          color: #0f766e;
        }
        .footer {
          background-color: #f9fafb;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #e5e7eb;
        }
        .footer p {
          margin: 0;
          color: #6b7280;
          font-size: 12px;
        }
        .note {
          background-color: #fffbeb;
          border-left: 4px solid #f59e0b;
          padding: 12px 16px;
          margin-top: 16px;
          border-radius: 8px;
          font-size: 13px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎓 New GOES Application</h1>
          <p>Global Opportunities & Education Services</p>
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
              <div class="info-label">Country of Residence:</div>
              <div class="info-value">${country}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Highest Qualification:</div>
              <div class="info-value"><span class="badge">${displayQualification}</span></div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>🎯</span> Application Details
            </div>
            <div class="info-row">
              <div class="info-label">Desired Opportunity:</div>
              <div class="info-value"><span class="badge">${displayOpportunity}</span></div>
            </div>
            <div class="info-row">
              <div class="info-label">Target Country:</div>
              <div class="info-value"><strong>${targetCountry}</strong></div>
            </div>
            <div class="info-row">
              <div class="info-label">Contact:</div>
              <div class="info-value"><a href="mailto:${contact}" style="color: #0891b2;">${contact}</a></div>
            </div>
          </div>
          
          ${
            files.length > 0
              ? `
          <div class="section">
            <div class="section-title">
              <span>📎</span> Uploaded Documents
            </div>
            <div class="files-list">
              <ul>
                ${files.map((file) => `<li><strong>${file.filename}</strong> (${file.contentType})</li>`).join("")}
              </ul>
              <p style="margin-top: 12px; font-size: 12px; color: #0f766e;">
                ⚠️ File contents are not included in this email. Please contact the applicant directly.
              </p>
            </div>
          </div>
          `
              : ""
          }
        </div>
        
        <div class="footer">
          <p>📧 Reply directly to this email to respond to ${fullName}</p>
          <p style="margin-top: 8px;">Global Opportunities & Education Services (GOES) • A Division of Awaken Purpose Network</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
