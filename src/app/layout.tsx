import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kumar Electricals - Trusted Electrical Shop in Lucknow Since 2000",
  description: "Expert electrical repairs, genuine parts & house wiring services in New Hyderabad, Nishatganj, Lucknow. 25+ years of trusted service. Authorized dealer for Havells, Anchor, Philips, Orient. Open 7 days, 10 AM - 9 PM.",
  keywords: "electrical shop lucknow, electrician nishatganj, house wiring lucknow, fan repair lucknow, electrical parts lucknow, havells dealer lucknow, motor winding lucknow, inverter installation lucknow, new hyderabad electrician, ceiling fan repair, cooler motor repair, electrical services lucknow",
  authors: [{ name: "Kumar Electricals" }],
  creator: "Kumar Electricals",
  publisher: "Kumar Electricals",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://kumar-electricals-pi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Kumar Electricals - Trusted Electrical Shop in Lucknow Since 2000",
    description: "Expert electrical repairs, genuine parts & house wiring services in Nishatganj, Lucknow. 25+ years of trusted service.",
    url: 'https://kumar-electricals-pi.vercel.app',
    siteName: 'Kumar Electricals',
    images: [
      {
        url: '/Logo.png?v=2',
        width: 800,
        height: 600,
        alt: 'Kumar Electricals Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kumar Electricals - Trusted Electrical Shop in Lucknow Since 2000",
    description: "Expert electrical repairs, genuine parts & house wiring services in Nishatganj, Lucknow. 25+ years of trusted service.",
    images: ['/Logo.png?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
