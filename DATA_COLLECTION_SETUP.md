# 📊 Data Collection Setup Guide

This guide will help you set up **Email Notifications** and **Google Sheets** integration to collect data from your website forms (Service Booking, Feedback, and Contact).

---

## 🎯 Overview

All form submissions are now:
1. **Sent to your email** via Resend (instant notifications)
2. **Saved to Google Sheets** (organized database for easy access)

Three forms are connected:
- **Service Booking** → Saved to "Bookings" sheet
- **Feedback** → Saved to "Feedback" sheet  
- **Contact** (if added) → Saved to "Contact" sheet

---

## 📧 Step 1: Set Up Email (Resend)

### 1.1 Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### 1.2 Get API Key
1. Go to **API Keys** in the dashboard
2. Click **Create API Key**
3. Name it: "Kumar Electricals Website"
4. Copy the API key (starts with `re_`)

### 1.3 Add Domain (Optional but Recommended)
For production:
1. Go to **Domains** in Resend dashboard
2. Add your domain (e.g., `kumarelectricals.com`)
3. Add the DNS records shown to your domain provider
4. Wait for verification (usually 5-10 minutes)

For testing:
- Use the default `onboarding@resend.dev` sender (100 emails/day limit)

---

## 📊 Step 2: Set Up Google Sheets

### 2.1 Create Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: "Kumar Electricals - Form Submissions"
4. Create **three sheets** (tabs at bottom):
   - **Bookings** - for service booking requests
   - **Feedback** - for customer feedback
   - **Contact** - for general inquiries (if you add contact form)

### 2.2 Add Column Headers

**In "Bookings" sheet**, add these headers in row 1:
```
Timestamp | Name | Phone | Email | Service | Date | Time | Address | Message
```

**In "Feedback" sheet**, add these headers in row 1:
```
Timestamp | Name | Email | Phone | Rating | Message
```

**In "Contact" sheet** (if needed), add these headers in row 1:
```
Timestamp | Name | Email | Phone | Message
```

### 2.3 Get Sheet ID
From your Google Sheet URL:
```
https://docs.google.com/spreadsheets/d/1ABC-XYZ123_SHEET_ID_HERE/edit
                                      ^^^^^^^^^^^^^^^^^^^^
                                      Copy this part
```

### 2.4 Create Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project: "Kumar Electricals Website"
3. Enable **Google Sheets API**:
   - Search "Google Sheets API" in the library
   - Click **Enable**
4. Create Service Account:
   - Go to **IAM & Admin** → **Service Accounts**
   - Click **Create Service Account**
   - Name: "website-forms"
   - Description: "Service account for website form submissions"
   - Click **Create and Continue**
   - Skip roles (click **Continue** then **Done**)
5. Create Key:
   - Click on the service account you just created
   - Go to **Keys** tab
   - Click **Add Key** → **Create new key**
   - Choose **JSON** format
   - Download the JSON file

### 2.5 Share Sheet with Service Account
1. Open the JSON file you downloaded
2. Find the `client_email` field (looks like: `website-forms@project-id.iam.gserviceaccount.com`)
3. Go back to your Google Sheet
4. Click **Share** button
5. Paste the service account email
6. Give it **Editor** access
7. Uncheck "Notify people"
8. Click **Share**

---

## ⚙️ Step 3: Configure Environment Variables

### 3.1 Local Development

Create a `.env.local` file in your project root:

```bash
# Email Configuration
RESEND_API_KEY=re_your_actual_api_key_here
NOTIFICATION_EMAIL=your-email@gmail.com

# Google Sheets Configuration
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"kumar-electricals-123","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nYOUR_KEY_HERE\n-----END PRIVATE KEY-----\n","client_email":"website-forms@kumar-electricals-123.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/..."}

GOOGLE_SHEET_ID=1ABC-XYZ123_YOUR_SHEET_ID_HERE
```

**Important:** 
- Copy the **entire contents** of the downloaded JSON file for `GOOGLE_SHEETS_CREDENTIALS`
- Remove all line breaks - it must be a single line
- The private key should have `\n` for line breaks, not actual line breaks

### 3.2 Production (Vercel)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   - `RESEND_API_KEY`
   - `NOTIFICATION_EMAIL`
   - `GOOGLE_SHEETS_CREDENTIALS`
   - `GOOGLE_SHEET_ID`
4. Click **Save**
5. Redeploy your site for changes to take effect

---

## 🧪 Step 4: Test the Integration

### 4.1 Test Locally
```bash
npm run dev
```

1. Go to `http://localhost:3000`
2. Fill out the **Service Booking** form
3. Check your email for notification
4. Check your Google Sheet "Bookings" tab for new row
5. Repeat for **Feedback** form

### 4.2 Test in Production
After deploying:
1. Visit your live website
2. Submit a test booking
3. Verify email arrives
4. Verify data appears in Google Sheet

---

## 📱 Accessing Data on Mobile

Since your data is in Google Sheets:
1. Install **Google Sheets app** on your phone
2. Log in with the same Google account
3. Open "Kumar Electricals - Form Submissions"
4. You can view/filter/export data anytime, anywhere!

---

## 🎨 Email Templates

### What You'll Receive

**Service Booking Email:**
- Beautiful HTML-formatted email with amber theme
- All booking details (name, phone, service, date, time, address)
- Clear subject line: "🔧 New Service Booking Request"

**Feedback Email:**
- Color-coded by rating:
  - ⭐⭐⭐⭐⭐ (4-5 stars) → Green theme
  - ⭐⭐ (1-2 stars) → Red theme
  - ⭐⭐⭐ (3 stars) → Standard
- Subject: "💬 New Customer Feedback (★★★★★)"

**Contact Email:** (if you add contact form)
- Blue-themed professional format
- Subject: "📧 New Contact Form Submission"

---

## 🔒 Security Notes

1. **Never commit `.env.local`** to Git (it's already in `.gitignore`)
2. Keep your Resend API key secret
3. Keep Google Service Account JSON secure
4. Only share Google Sheet with the service account email
5. Use environment variables in Vercel (never hardcode)

---

## 🆘 Troubleshooting

### Emails Not Sending
- Check `RESEND_API_KEY` is correct
- Verify email sender domain is verified in Resend
- Check Vercel logs for errors
- Ensure `NOTIFICATION_EMAIL` is valid

### Data Not Saving to Sheets
- Verify `GOOGLE_SHEET_ID` is correct
- Check service account has Editor access to sheet
- Ensure sheet names match exactly: "Bookings", "Feedback", "Contact"
- Verify `GOOGLE_SHEETS_CREDENTIALS` is valid JSON on single line
- Check column headers match expected format

### Testing API Endpoints
Test manually with curl:
```bash
curl -X POST http://localhost:3000/api/booking \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "9999999999",
    "email": "test@example.com",
    "service": "Electrical Repair",
    "date": "2024-02-15",
    "time": "10:00 AM",
    "address": "Test Address",
    "message": "Test booking"
  }'
```

---

## 📊 Data Fields Collected

### Service Booking Form
- Timestamp (auto)
- Customer Name
- Phone Number
- Email (optional)
- Service Type
- Preferred Date
- Preferred Time
- Service Address
- Additional Message

### Feedback Form
- Timestamp (auto)
- Customer Name
- Email (optional)
- Phone (optional)
- Rating (1-5 stars)
- Feedback Message

---

## 🎉 You're All Set!

Once configured:
- ✅ Get instant email notifications for every form submission
- ✅ All data automatically saved to organized Google Sheets
- ✅ Access data from anywhere (phone, tablet, computer)
- ✅ Easy to export for analysis or backup
- ✅ No database management needed!

**Need help?** Check Vercel logs if something isn't working, and verify all environment variables are set correctly.
