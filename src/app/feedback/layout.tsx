import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Feedback - Kumar Electricals Lucknow",
  description: "Share your experience with Kumar Electricals. Leave feedback via WhatsApp, Google Review, or our feedback form. We value your input to serve you better.",
  openGraph: {
    title: "Customer Feedback - Kumar Electricals Lucknow",
    description: "Share your experience with Kumar Electricals. We value your feedback.",
    url: 'https://kumar-electricals-pi.vercel.app/feedback',
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
