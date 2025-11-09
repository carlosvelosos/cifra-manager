import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./AppShell";
import { HighlightProvider } from "@/lib/highlight-context";
import { ChordsProvider } from "@/lib/chords-context";
import { ThemeProvider } from "@/lib/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CifraManager - Organize suas Cifras",
  description:
    "A modern web application to manage your guitar and ukulele chords.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {" "}
        <ThemeProvider>
          <HighlightProvider>
            <ChordsProvider>
              <AppShell>{children}</AppShell>
            </ChordsProvider>
          </HighlightProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
