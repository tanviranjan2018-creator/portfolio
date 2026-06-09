import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanvi Ranjan — Portfolio",
  description: "Student portfolio of Tanvi Ranjan — academic excellence, sports champion, leader and community contributor.",
  openGraph: {
    title: "Tanvi Ranjan — Portfolio",
    description: "Curious student who excels in everything she tries.",
    url: "https://tanviranjan.com",
    siteName: "Tanvi Ranjan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
