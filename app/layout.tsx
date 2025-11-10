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

const siteUrl = "https://web.yogiitsu.app";

export const metadata: Metadata = {
  title: "요기있수 (YOGIITSU)",
  description: "수원대학교 위치기반 서비스, 요기있수",
  openGraph: {
    title: "요기있수 (YOGIITSU)",
    description: "수원대학교 위치기반 서비스, 요기있수",
    url: siteUrl,
    siteName: "YOGIITSU",
    images: [
      {
        url: `${siteUrl}/preview_logo.png`,
        width: 1200,
        height: 630,
        alt: "YOGIITSU",
      },
    ],
    type: "website",
    locale: "ko_KR",
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
