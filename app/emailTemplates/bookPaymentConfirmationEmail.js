// netlify/functions/emailTemplates/bookPaymentConfirmationEmail.js

export const bookPaymentConfirmationEmail = ({
  paymentMethod,
  mtnNumber,
  orangeNumber,
  price,
  title,
  bookId,
  lang,
}) => {
  const method = paymentMethod === "mtn" ? "MTN Mobile Money" : "Orange Money";
  const number = paymentMethod === "mtn" ? mtnNumber : orangeNumber;

  const language = lang === "fr" ? "French" : "English";

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Book Order</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f7; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #2563eb, #7c3aed); padding: 30px 20px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: 600; }
        .header p { color: rgba(255,255,255,0.9); margin: 8px 0 0; font-size: 14px; }
        .content { padding: 30px; }
        .section { margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 20px; }
        .section:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
        .info-row { display: flex; margin-bottom: 8px; flex-wrap: wrap; }
        .info-label { width: 140px; font-weight: 600; color: #4b5563; }
        .info-value { flex: 1; color: #1f2937; }
        .badge { display: inline-block; background-color: #e0e7ff; color: #4338ca; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .payment-badge { display: inline-block; background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .footer { background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 0; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📖 New Book Order</h1>
          <p>Payment Confirmation</p>
        </div>
        
        <div class="content">
          <div class="section">
            <div class="section-title">📋 Order Details</div>
            <div class="info-row">
              <div class="info-label">Book:</div>
              <div class="info-value"><strong>${title}</strong></div>
            </div>
            ${bookId ? `<div class="info-row"><div class="info-label">Book ID:</div><div class="info-value">${bookId}</div></div>` : ""}
            <div class="info-row">
              <div class="info-label">Price:</div>
              <div class="info-value"><strong>${price} FCFA</strong></div>
            </div>
            <div class="info-row">
              <div class="info-label">Language:</div>
              <div class="info-value">${language}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">💳 Payment Details</div>
            <div class="info-row">
              <div class="info-label">Payment Method:</div>
              <div class="info-value"><span class="payment-badge">${method}</span></div>
            </div>
            <div class="info-row">
              <div class="info-label">Pay to:</div>
              <div class="info-value">${number}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">📎 Payment File</div>
            <div class="info-row">
              <div class="info-label">File:</div>
              <div class="info-value">Uploaded to Dropbox</div>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>📧 This payment confirmation was submitted via the GOES book store.</p>
          <p style="margin-top: 8px;">Awaken Purpose Network</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
