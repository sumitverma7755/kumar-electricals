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
      range: 'Contact!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          data.name,
          data.email,
          data.phone,
          data.message
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
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Kumar Electricals <contact@kumarelectricals.com>',
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: data.email,
        subject: `📧 New Contact Message from ${data.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .detail { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #3b82f6; }
                .detail strong { color: #2563eb; display: inline-block; min-width: 100px; }
                .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 2px solid #dbeafe; }
                .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">📧 New Contact Message</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Kumar Electricals</p>
                </div>
                <div class="content">
                  <h2 style="color: #1f2937; margin-top: 0;">Contact Details</h2>
                  
                  <div class="detail">
                    <strong>👤 Name:</strong> ${data.name}
                  </div>
                  
                  <div class="detail">
                    <strong>✉️ Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                  </div>
                  
                  <div class="detail">
                    <strong>📞 Phone:</strong> <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a>
                  </div>
                  
                  <div class="message-box">
                    <h3 style="margin-top: 0; color: #2563eb;">💬 Message:</h3>
                    <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
                  </div>
                  
                  <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <strong style="color: #1e40af;">📞 Quick Action</strong>
                    <p style="margin: 10px 0 0 0; color: #1e3a8a;">Please respond to this inquiry within 24 hours.</p>
                  </div>
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
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
