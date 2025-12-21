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
} from "lucide-react";
import DownloadButton from "@/components/ResumeDownload";
import { Metadata } from "next";
import work from "@/lib/work";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "Resume | Gaurav",
  description: "i have a resume but pdfs are boring",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "Resume | Gaurav",
    description: "i have a resume but pdfs are boring",
  },
  twitter: {
    card: "summary",
    title: "Resume | Gaurav",
    description: "i have a resume but pdfs are boring",
    creator: "@Xinacy",
  },
};

export default function ResumePage() {
  const resumeUrl = "https://cdn.xinacy.com/resume.pdf";

  return (
    <div className="min-h-screen bg-black pb-28">
      <div className="max-w-5xl mx-auto px-6 py-6 sm:py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            className="bg-transparent border-gray-600/50"
            asChild
          >
            <Link href="/" aria-label="Back to home">
              <ChevronLeft className="size-4" />
              Back to home
            </Link>
          </Button>
        </div>

        <header className="mb-6 sm:mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Resume</h1>

          <div className="flex flex-wrap gap-3 justify-center">
            <DownloadButton />
            <Button
              variant="outline"
              className="bg-transparent border-gray-600/50"
              asChild
            >
              <Link href={resumeUrl} target="_blank">
                <ExternalLink className="size-4" />
                Open in new tab
              </Link>
            </Button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto bg-black text-white rounded-lg shadow-2xl p-8 md:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-white">Gaurav</h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300">
              <span className="flex items-center gap-1">
                <MapPin className="size-4 text-gray-400" /> India
              </span>
              <a
                href="mailto:gaurav@xinacy.com"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Mail className="size-4 text-gray-400" />
                gaurav@xinacy.com
              </a>
              <a
                href="https://linkedin.com/in/Xinacy"
                target="_blank"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gray-400" />
                in/Xinacy
              </a>
              <span className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-gray-400" />
                xinacy.com
              </span>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-1 text-white">
              SUMMARY
            </h2>
            <p className="leading-relaxed text-gray-300">
              Experienced software developer proficient in Python, JavaScript,
              TypeScript, and React, with a strong foundation in DevOps. Skilled
              in building scalable web and real-time applications, with
              expertise in payment gateway integrations, microservices, and
              system optimizations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-1 text-white">
              EXPERIENCE
            </h2>

            <div className="space-y-6">
              {work.map((exp) => (
                <div key={exp.company}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-400">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-medium text-gray-300">
                        {exp.duration}
                      </div>
                      {exp.location && (
                        <div className="text-gray-500">{exp.location}</div>
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
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-1 text-white">
              EDUCATION
            </h2>
            <div>
              <h3 className="text-xl font-bold text-white">
                Bachelor of Technology in Computer Science (AI & ML)
              </h3>
              <p className="text-gray-400">
                Maharshi Dayanand University · Haryana · 2026
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-1 text-white">
              SKILLS
            </h2>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <strong className="text-white">Languages:</strong> Python,
                JavaScript, TypeScript, HTML, CSS, SQL.
              </div>
              <div>
                <strong className="text-white">Library/Frameworks:</strong>{" "}
                React, Next.js, TailwindCSS, FastAPI, Express, Tortoise-ORM,
                websockets, discord.py, Electron
              </div>
              <div>
                <strong className="text-white">AI/LLM Frameworks:</strong>{" "}
                LangChain, LlamaIndex, LangGraph, Hugging Face, OpenAI API.
              </div>
              <div>
                <strong className="text-white">Database:</strong> PostgreSQL,
                MongoDB.
              </div>
              <div>
                <strong className="text-white">DevOps:</strong> Sentry,
                Prometheus, Grafana, Loki, Docker, Kubernetes, Jenkins.
              </div>
              <div>
                <strong className="text-white">Others:</strong> Redis, Nginx,
                Caddy, Traefik, Kafka, Amazon S3, Cloudflare R2.
              </div>
            </div>
          </section>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          For the original PDF version, use the download button above.
        </p>
      </div>
    </div>
  );
}
