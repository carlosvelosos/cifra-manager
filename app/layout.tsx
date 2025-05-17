import type { Metadata } from "next";
import { Geist } from "next/font/google"; // Corrected import
import { Geist_Mono } from "next/font/google"; // Corrected import
import "./globals.css";
import Sidebar from "@/components/ui/sidebar"; // Added import

const geistSans = Geist({
  // Corrected instantiation
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  // Corrected instantiation
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CifraManager - Organize suas Cifras", // Updated title
  description:
    "A modern web application to manage your guitar and ukulele chords.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50`} // Added font-sans and bg-gray-50
      >
        <Sidebar />
        <main className="ml-16 p-4">
          {/* Added ml-16 for sidebar offset and p-4 for padding */}
          {children}
        </main>
      </body>
    </html>
  );
}
