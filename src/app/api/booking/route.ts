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
      range: 'Bookings!A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          data.name,
          data.phone,
          data.email || 'N/A',
          data.service,
          data.date,
          data.time,
          data.address,
          data.message || 'N/A'
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
        from: 'Kumar Electricals <bookings@kumarelectricals.com>',
        to: process.env.NOTIFICATION_EMAIL,
        replyTo: data.email || undefined,
        subject: `🔔 New Service Booking - ${data.service}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                .detail { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #f59e0b; }
                .detail strong { color: #d97706; display: inline-block; min-width: 120px; }
                .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0;">⚡ New Service Booking</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Kumar Electricals</p>
                </div>
                <div class="content">
                  <h2 style="color: #1f2937; margin-top: 0;">Booking Details</h2>
                  
                  <div class="detail">
                    <strong>👤 Name:</strong> ${data.name}
                  </div>
                  
                  <div class="detail">
                    <strong>📞 Phone:</strong> <a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a>
                  </div>
                  
                  ${data.email ? `
                  <div class="detail">
                    <strong>✉️ Email:</strong> <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                  </div>
                  ` : ''}
                  
                  <div class="detail">
                    <strong>🔧 Service:</strong> ${data.service}
                  </div>
                  
                  <div class="detail">
                    <strong>📅 Date:</strong> ${data.date}
                  </div>
                  
                  <div class="detail">
                    <strong>🕐 Time:</strong> ${data.time}
                  </div>
                  
                  <div class="detail">
                    <strong>📍 Address:</strong> ${data.address}
                  </div>
                  
                  ${data.message ? `
                  <div class="detail">
                    <strong>💬 Message:</strong> ${data.message}
                  </div>
                  ` : ''}
                  
                  <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                    <strong style="color: #92400e;">⏰ Quick Action Required!</strong>
                    <p style="margin: 10px 0 0 0; color: #78350f;">Please call the customer within 1 hour to confirm the booking.</p>
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
      message: 'Booking request submitted successfully!' 
    });

  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit booking request' },
      { status: 500 }
    );
  }
}
