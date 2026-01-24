import type { Metadata, Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Provider as JotaiProvider } from "jotai";
import { Toaster } from "@/components/ui/sonner";
import { FloatingDock } from "@/components/ui/floating-dock";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import { Home as HomeIcon, Briefcase, FileText, Mail } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingDonateButton from "@/components/FloatingDonateButton";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = { themeColor: "#FF69B4" }; // Hot Pink for Gay Pride 🏳️‍🌈

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "🏳️‍🌈 Gaurav | Professional Gay & Chief Slay Officer",
  description: "serving looks, slaying code, and spreading the gay agenda ✨💅",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "🏳️‍🌈 Gaurav | Professional Gay",
    description: "serving looks, slaying code, and spreading the gay agenda ✨💅",
  },
  twitter: {
    card: "summary",
    title: "🏳️‍🌈 Gaurav | Professional Gay",
    description: "serving looks, slaying code, and spreading the gay agenda ✨💅",
    creator: "@Xinacy",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dockItems = [
    {
      title: "Gay HQ 🏠",
      icon: (
        <HomeIcon className="h-full w-full text-red-400" />
      ),
      href: "/",
    },
    {
      title: "Gay Journey 💼",
      icon: (
        <Briefcase className="h-full w-full text-orange-400" />
      ),
      href: "/work",
    },
    {
      title: "Gay Resume 📄",
      icon: (
        <FileText className="h-full w-full text-yellow-400" />
      ),
      href: "/resume",
    },
    {
      title: "Slide Into DMs 💌",
      icon: (
        <Mail className="h-full w-full text-pink-400" />
      ),
      href: "mailto:gaurav@xinacy.com",
    },
  ];

  return (
    <html lang="en" className="overscroll-none dark">
      <body
        className={cn(
          "font-sans antialiased overscroll-none dark",
          fontSans.variable
        )}
      >
        <JotaiProvider>
          <Toaster position="bottom-center" closeButton richColors />
          {children}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <FloatingDock items={dockItems} />
          </div>
          <SpeedInsights />
          <Analytics />
          <FloatingDonateButton />
        </JotaiProvider>
      </body>
    </html>
  );
}
