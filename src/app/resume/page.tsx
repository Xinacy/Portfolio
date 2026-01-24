import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  ChevronLeft,
  Mail,
  Linkedin,
  Globe,
  MapPin,
  Sparkles,
  Heart,
} from "lucide-react";
import DownloadButton from "@/components/ResumeDownload";
import { Metadata } from "next";
import work from "@/lib/work";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "Gay Resume 🏳️‍🌈 | Gaurav",
  description: "my resume but make it ✨gay✨",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "Gay Resume 🏳️‍🌈 | Gaurav",
    description: "my resume but make it ✨gay✨",
  },
  twitter: {
    card: "summary",
    title: "Gay Resume 🏳️‍🌈 | Gaurav",
    description: "my resume but make it ✨gay✨",
    creator: "@Xinacy",
  },
};

export default function ResumePage() {
  const resumeUrl = "https://cdn.xinacy.com/resume.pdf";

  return (
    <div className="min-h-screen bg-black pb-28 pride-bg-animated pride-cursor">
      <div className="max-w-5xl mx-auto px-6 py-6 sm:py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            className="rainbow-border hover:rainbow-glow"
            asChild
          >
            <Link href="/" aria-label="Back to home">
              <ChevronLeft className="size-4" />
              <span className="rainbow-text font-bold">Back to Gay HQ 🏳️‍🌈</span>
            </Link>
          </Button>
        </div>

        <header className="mb-6 sm:mb-8 text-center">
          <h1 className="rainbow-text text-3xl font-bold mb-2 flex items-center justify-center gap-2">
            <Sparkles className="size-8 text-pink-400 sparkle" />
            Gay Resume
            <Sparkles className="size-8 text-pink-400 sparkle" />
          </h1>

          <div className="flex flex-wrap gap-3 justify-center">
            <DownloadButton />
            <Button
              variant="outline"
              className="rainbow-border hover:rainbow-glow"
              asChild
            >
              <Link href={resumeUrl} target="_blank">
                <ExternalLink className="size-4" />
                <span className="rainbow-text">Open in new tab</span>
              </Link>
            </Button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto bg-black text-white rounded-lg shadow-2xl p-8 md:p-12 rainbow-border rainbow-glow">
          <div className="text-center mb-8">
            <h1 className="rainbow-text text-5xl font-bold mb-4">Gaurav 🦄</h1>
            <p className="trans-pride-text text-xl font-bold mb-4">Professional Gay | Chief Fabulousness Officer</p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1 rainbow-text">
                <MapPin className="size-4 text-pink-400" /> Gay Agenda HQ 🏳️‍🌈
              </span>
              <a
                href="mailto:gaurav@xinacy.com"
                className="flex items-center gap-1 trans-pride-text hover:opacity-80 transition-colors"
              >
                <Mail className="size-4 text-blue-400" />
                gaurav@xinacy.com
              </a>
              <a
                href="https://linkedin.com/in/Xinacy"
                target="_blank"
                className="flex items-center gap-1 bi-pride-text hover:opacity-80 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-purple-400" />
                in/Xinacy
              </a>
              <span className="flex items-center gap-1 pan-pride-text">
                <Globe className="w-4 h-4 text-yellow-400" />
                xinacy.com
              </span>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="rainbow-text text-2xl font-bold mb-4 border-b-2 pride-gradient pb-1">
              🌈 WHO I AM (VERY GAY)
            </h2>
            <p className="leading-relaxed text-gray-300">
              Certified <span className="rainbow-text font-bold">Professional Gay™</span> with expertise in slaying code,
              spreading the gay agenda, and making every codebase{" "}
              <span className="trans-pride-text font-bold">fabulously queer</span>.
              Skilled in being iconic, serving looks, and turning heteronormative software into a
              <span className="bi-pride-text font-bold"> pride parade</span>.
              Currently accepting offers from companies with excellent rainbow lighting. 💅✨
            </p>
          </section>

          <section className="mb-8">
            <h2 className="rainbow-text text-2xl font-bold mb-4 border-b-2 pride-gradient pb-1">
              💼 GAY EXPERIENCE
            </h2>

            <div className="space-y-6">
              {work.map((exp) => (
                <div key={exp.company}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold trans-pride-text">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold rainbow-text">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-medium bi-pride-text">
                        {exp.duration}
                      </div>
                      {exp.location && (
                        <div className="pan-pride-text">{exp.location}</div>
                      )}
                    </div>
                  </div>
                  <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="rainbow-text text-2xl font-bold mb-4 border-b-2 pride-gradient pb-1">
              🎓 GAY EDUCATION
            </h2>
            <div>
              <h3 className="text-xl font-bold trans-pride-text">
                Bachelor of Being Fabulous (in Gay & Slaying)
              </h3>
              <p className="bi-pride-text">
                The School of Life · Everywhere · Since Forever
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Minor in Professional Shade Throwing · GPA: Iconic/Iconic 💅
              </p>
            </div>
          </section>

          <section>
            <h2 className="rainbow-text text-2xl font-bold mb-4 border-b-2 pride-gradient pb-1">
              ✨ GAY SKILLS
            </h2>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <strong className="rainbow-text">Being Gay:</strong>{" "}
                Professional Level, Expert, Master Certified 🏳️‍🌈
              </div>
              <div>
                <strong className="trans-pride-text">Slaying:</strong>{" "}
                Code, Looks, Presentations, Life Goals, The Patriarchy ✨
              </div>
              <div>
                <strong className="bi-pride-text">Spreading Joy:</strong>{" "}
                Hugs, Compliments, Positive Vibes, Glitter (non-biodegradable, sorry) 💖
              </div>
              <div>
                <strong className="pan-pride-text">Languages:</strong>{" "}
                Gay, Fluent Sarcasm, Python, TypeScript, Love 💕
              </div>
              <div>
                <strong className="gay-pride-text">Frameworks:</strong>{" "}
                React, Next.js, The Gay Agenda, Self-Love, Radical Acceptance
              </div>
              <div>
                <strong className="nb-pride-text">Tools:</strong>{" "}
                Eyebrow Tweezers, Git, Docker, Excellent Taste, Rainbow Flags
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-[#1A1A1A] rounded-lg rainbow-border text-center">
            <p className="rainbow-text font-bold text-lg">
              References available upon request (they&apos;re all my friends and they think I&apos;m fabulous) 💅
            </p>
          </div>
        </div>

        <p className="text-center text-xs rainbow-text mt-4 font-bold flex items-center justify-center gap-2">
          Made with <Heart className="size-4 text-pink-500 fill-current sparkle" /> and Gay Pride 🏳️‍🌈
        </p>
      </div>
    </div>
  );
}
