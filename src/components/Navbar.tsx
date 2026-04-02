"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Briefcase, FileText, Mail } from "lucide-react";
import { GithubIcon } from "@/icons";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Resume", href: "/resume", icon: FileText },
  { label: "Contact", href: "mailto:gaurav@xinacy.com", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-lg tracking-tight hover:text-[#00E676] transition-colors"
        >
          gaurav<span className="text-[#00E676]">.</span>
        </Link>

        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <item.icon className="size-3.5" />
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="https://github.com/Xinacy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200"
        >
          <GithubIcon className="size-4" />
          <span className="hidden sm:inline">GitHub</span>
        </Link>
      </nav>
    </header>
  );
}
