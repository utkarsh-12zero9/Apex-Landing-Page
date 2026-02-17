import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex School of Business",
  description: "Launch your career with Apex School of Business - Top B-School. Expert faculty, industry exposure, and 100% placement assistance.",
  icons: {
    icon: "/logo.png",
  },
  keywords: [
    "Apex School of Business",
    "Top B-School Jaipur",
    "Best MBA College Rajasthan",
    "PGDM Course",
    "Management Studies",
    "Business Administration",
    "Corporate Training",
    "Placement Assistance",
    "Entrepreneurship",
    "Leadership",
    "Best B-School in India"
  ],
  openGraph: {
    title: "Apex - School of Business",
    description: "Launch your career with Apex School of Business - Top B-School. Expert faculty, industry exposure, and 100% placement assistance.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Apex School of Business",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
