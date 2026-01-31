import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

async function addToGoogleSheets(data: any) {
  try {
    if (!process.env.GOOGLE_SHEETS_CREDENTIALS || !process.env.GOOGLE_SHEET_ID) {
      console.log('Google Sheets not configured, skipping...');
      return;
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Feedback!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          data.name,
          data.email,
          data.phone || 'N/A',
          data.rating,
          data.feedback
        ]]
      }
    });
  } catch (error) {
    console.error('Google Sheets error:', error);
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Send email notification
    if (process.env.RESEND_API_KEY && process.env.NOTIFICATION_EMAIL) {
      const stars = '⭐'.repeat(data.rating);
      
      await resend.emails.send({
        from: 'Kumar Electricals <feedback@kumarelectricals.com>',
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: data.email,
        subject: `💬 New Customer Feedback - ${stars}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .rating { font-size: 32px; text-align: center; margin: 20px 0; }
                .detail { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #10b981; }
                .detail strong { color: #059669; display: inline-block; min-width: 100px; }
                .feedback-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #d1fae5; }
                .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">💬 Customer Feedback</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Kumar Electricals</p>
                </div>
                <div class="content">
                  <div class="rating">
                    ${stars}
                    <p style="font-size: 18px; color: #059669; margin: 5px 0;">${data.rating} out of 5 stars</p>
                  </div>
                  
                  <div class="detail">
                    <strong>👤 Name:</strong> ${data.name}
                  </div>
                  
                  <div class="detail">
                    <strong>✉️ Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                  </div>
                  
                  ${data.phone ? `
                  <div class="detail">
                    <strong>📞 Phone:</strong> <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a>
                  </div>
                  ` : ''}
                  
                  <div class="feedback-box">
                    <h3 style="margin-top: 0; color: #059669;">📝 Feedback Message:</h3>
                    <p style="margin: 0; white-space: pre-wrap;">${data.feedback}</p>
                  </div>
                  
                  ${data.rating >= 4 ? `
                  <div style="margin-top: 20px; padding: 15px; background: #d1fae5; border-radius: 8px; border-left: 4px solid #10b981;">
                    <strong style="color: #065f46;">🌟 Great Review!</strong>
                    <p style="margin: 10px 0 0 0; color: #047857;">Consider asking for a Google review or testimonial.</p>
                  </div>
                  ` : data.rating <= 2 ? `
                  <div style="margin-top: 20px; padding: 15px; background: #fee2e2; border-radius: 8px; border-left: 4px solid #ef4444;">
                    <strong style="color: #991b1b;">⚠️ Low Rating Alert</strong>
                    <p style="margin: 10px 0 0 0; color: #b91c1c;">Please contact customer immediately to address concerns.</p>
                  </div>
                  ` : ''}
                </div>
                <div class="footer">
                  <p>Kumar Electricals • New Hyderabad, Nishatganj, Lucknow</p>
                  <p>+91 94538 16645</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    }

    // Add to Google Sheets
    await addToGoogleSheets(data);

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your feedback!' 
    });

  } catch (error) {
    console.error('Feedback submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
}
