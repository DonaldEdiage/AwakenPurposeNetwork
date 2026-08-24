// netlify/functions/emailTemplates/speakingInviteEmail.js

export const speakingInviteEmail = (data) => {
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
  } = data;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Speaking Engagement Invitation</title>
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
          background: linear-gradient(135deg, #f59e0b, #ef4444);
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
          background: linear-gradient(135deg, #f59e0b, #ef4444);
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
        .message-box {
          background-color: #f9fafb;
          border-left: 4px solid #f59e0b;
          padding: 16px;
          border-radius: 8px;
          margin-top: 8px;
        }
        .message-box p {
          margin: 0;
          color: #374151;
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
        .badge {
          display: inline-block;
          background-color: #fed7aa;
          color: #9b2c1d;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }
        .highlight {
          background-color: #fffbeb;
          border-radius: 8px;
          padding: 12px;
          margin-top: 8px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎤 New Speaking Engagement Invitation</h1>
          <p>Awaken Purpose Network</p>
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
              <div class="info-value"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></div>
            </div>
            <div class="info-row">
              <div class="info-label">Phone:</div>
              <div class="info-value">${phone}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Organization/Church:</div>
              <div class="info-value">${organization}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>📅</span> Event Information
            </div>
            <div class="info-row">
              <div class="info-label">Event Name:</div>
              <div class="info-value"><strong>${eventName}</strong></div>
            </div>
            <div class="info-row">
              <div class="info-label">Event Date(s):</div>
              <div class="info-value">${eventDates}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Event Location:</div>
              <div class="info-value">${eventLocation}</div>
            </div>
            <div class="info-row">
              <div class="info-label">Type of Audience:</div>
              <div class="info-value"><span class="badge">${audienceType}</span></div>
            </div>
            <div class="info-row">
              <div class="info-label">Estimated Attendance:</div>
              <div class="info-value">${attendance}</div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>📝</span> Event Description
            </div>
            <div class="message-box">
              <p>${eventDescription.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">
              <span>💬</span> Additional Message
            </div>
            <div class="message-box">
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>📧 Reply directly to this email to respond to ${fullName}</p>
          <p style="margin-top: 8px;">Awaken Purpose Network • Awakening Purpose, Strengthening Faith</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
