import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientWrapper } from "@/components/layout/ClientWrapper";
import { Navigation } from "@/features/navigation/Navigation";

const fontSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yugal Kaushal | AI Orchestrator",
  description: "2026 AI Portfolio showcasing Multi-Agent Systems, RAG, and MCP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontMono.variable} antialiased h-screen overflow-hidden flex bg-background text-foreground selection:bg-primary/30`}
      >
        <ClientWrapper>
           {children}
        </ClientWrapper>
        <Navigation />
      </body>
    </html>
  );
}
