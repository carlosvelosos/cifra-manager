"use client";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/ui/sidebar";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Metadata export in a client component is generally handled by Next.js for root layouts.
// export const metadata: Metadata = {
//   title: "CifraManager - Organize suas Cifras",
//   description:
//     "A modern web application to manage your guitar and ukulele chords.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarPinned, setIsSidebarPinned] = useState(false);

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50`}
      >
        <Sidebar
          isPinned={isSidebarPinned}
          onPinToggle={() => setIsSidebarPinned(!isSidebarPinned)}
        />
        <main
          className={`p-4 transition-all duration-300 ease-in-out ${
            isSidebarPinned ? "ml-64" : "ml-4"
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
