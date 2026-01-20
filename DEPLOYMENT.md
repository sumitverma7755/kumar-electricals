# Kumar Electricals - Deployment Guide

## 🚀 Quick Start

### Development
```bash
npm run dev
```
Visit http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## 📝 Customization Checklist

### 1. Contact Information
Update the following files with actual contact details:

**Phone Number** (Replace `+919876543210`):
- `src/components/Header.tsx` (line 35)
- `src/components/Hero.tsx` (line 35)
- `src/components/Contact.tsx` (line 52)
- `src/components/Footer.tsx` (line 60)
- `src/components/StructuredData.tsx` (line 23)

**Email** (Replace `info@kumarelectricals.com`):
- `src/components/Contact.tsx` (line 82)
- `src/components/Footer.tsx` (line 63)
- `src/components/StructuredData.tsx` (line 24)

**WhatsApp** (Replace `919876543210`):
- `src/components/Hero.tsx` (line 35)

### 2. Images
Replace placeholder images with actual shop photos:

**Hero Section** (`src/components/Hero.tsx` line 44):
```tsx
src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
```

**About Section** (`src/components/About.tsx` line 30):
```tsx
src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
```

### 3. Google Maps
The map is already configured with coordinates: `26.867192, 80.949335`
If you need to adjust, update `src/components/Contact.tsx` (line 95)

### 4. Social Media Links
Update social media URLs in `src/components/Footer.tsx` (lines 77-99)

### 5. Business Hours
Modify shop hours in `src/components/Contact.tsx` (lines 68-70)

### 6. SEO & Metadata
Update domain and additional SEO info in:
- `src/app/layout.tsx` (metadata)
- `src/components/StructuredData.tsx` (structured data)

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Custom Server
```bash
npm run build
npm start
```

## 🎨 Color Customization

The site uses Tailwind CSS with these primary colors:
- **Brand/Accent**: `amber-500` (#f59e0b)
- **Text**: `slate-900` (#0f172a)
- **Background**: `white` / `slate-50`

To change colors, search and replace in all component files.

## 📱 Features Included

✅ Fully responsive mobile-first design
✅ Smooth scroll animations with Framer Motion
✅ SEO optimized with structured data
✅ Google Maps integration
✅ Click-to-call functionality
✅ WhatsApp integration
✅ Accessible components
✅ Fast loading with Next.js optimization

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📞 Support

For technical support or customization requests, contact your developer.
