import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = { themeColor: "#00E676" };

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "Intro | Gaurav",
  description: "yet another swe portfolio on the internet",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "Intro | Gaurav",
    description: "yet another swe portfolio on the internet",
  },
  twitter: {
    card: "summary",
    title: "Intro | Gaurav",
    description: "yet another swe portfolio on the internet",
    creator: "@Xinacy",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overscroll-none dark scroll-smooth">
      <body
        className={cn(
          "font-sans antialiased overscroll-none dark",
          fontSans.variable,
        )}
      >
        <JotaiProvider>
          <Toaster position="bottom-center" closeButton richColors />
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <FloatingDonateButton />
        </JotaiProvider>
      </body>
    </html>
  );
}
