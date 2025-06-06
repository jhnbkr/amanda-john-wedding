import type { Metadata, Viewport } from "next";
import { Geist, Charm } from "next/font/google";
import "./globals.css";

const fontSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontSerif = Charm({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amanda & John",
  description: "Join us for our wedding celebration",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body className={`${fontSans.variable} ${fontSerif.variable} antialiased bg-white`}>{children}</body>
    </html>
  );
}
