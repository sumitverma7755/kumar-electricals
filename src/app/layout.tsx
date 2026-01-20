import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kumar Electricals – Electrical Repairs & Supplies in Lucknow",
  description: "Reliable electrical shop in New Hyderabad, Lucknow. We handle fan repairs, house wiring, and sell genuine electrical parts. Serving since 2014.",
  keywords: "electrical shop lucknow, fan repair, house wiring, electrical supplies, kumar electricals new hyderabad",
  openGraph: {
    title: "Kumar Electricals – Electrical Repairs & Supplies in Lucknow",
    description: "Reliable electrical shop in New Hyderabad, Lucknow. Fan repairs, house wiring, genuine parts.",
    type: "website",
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
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
