import type { Metadata } from "next";
import { Geist, DM_Sans } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "GITAM Aero Astro Club - GAAC",
  description: "Join the GITAM Aero Astro Club - A passionate community exploring Robotics, Programming, and Astronomy through innovative projects and learning.",
  keywords: "GITAM, Aero, Astro, Club, Robotics, Programming, Astronomy, GAAC",
  authors: [{ name: "GITAM Aero Astro Club" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${dmSans.variable} antialiased`}
        style={{ margin: 0, padding: 0, backgroundColor: '#0B0C0D' }}
      >
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}