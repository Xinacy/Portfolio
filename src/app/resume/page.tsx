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
              <span className="flex items-center gap-1">
                <Mail className="size-4 text-gray-400" />
                gaurav@xinacy.com
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-4 h-4 text-gray-400" />
                in/Xinacy
              </span>
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
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      AI/ML Engineer
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-400">
                      Tryzent Technologies
                    </h4>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-gray-300">
                      July 2025 - Present
                    </div>
                    <div className="text-gray-500">Remote (Delhi, India)</div>
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>
                    Developed an agentic workflow using LangGraph to summarize
                    Zoom meetings via the Zoom Real-Time Messaging System.
                  </li>
                  <li>
                    Built a document extraction pipeline using LlamaIndex to
                    assist GST filings by extracting key data from invoices and
                    bank statements.
                  </li>
                  <li>
                    Developed an AI tool using LangGraph & LlamaCloud to analyze
                    resumes against job descriptions and optimize ATS scores.
                  </li>
                  <li>
                    Integrated automated PDF editing and a job search feature
                    with location and remote filters.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Founder</h3>
                    <h4 className="text-lg font-semibold text-gray-400">
                      Mysty
                    </h4>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-gray-300">
                      February 2025 - June 2025
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>
                    Served a small user base (1M+ users, 100+ orgs) with
                    scalable, high-performance architecture.
                  </li>
                  <li>
                    Tech stack used: discord.py, PostgreSQL, websockets,
                    Tortoise-ORM, Redis, Docker & more.
                  </li>
                  <li>
                    Integrated Discord Oauth2 for user login on web dashboard
                    using FastAPI, JWT & PostgreSQL.
                  </li>
                  <li>
                    Payment gateways integrated: Stripe, Oxapay and Paypal.
                  </li>
                  <li>
                    Dashboard built on Next.js, FastAPI and Websockets with
                    Webhooks to receive payments from the payment gateways.
                  </li>
                  <li>
                    The project was discontinued due to financial constraints
                    and lack of sustained funding.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Co-Founder</h3>
                    <h4 className="text-lg font-semibold text-gray-400">
                      Quotient
                    </h4>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-gray-300">
                      September 2020 - April 2025
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>
                    Served a large user base (10M+ users, 15k+ orgs) with
                    scalable, high-performance architecture.
                  </li>
                  <li>
                    Tech stack used: discord.py, React, FastAPI, PostgreSQL,
                    websockets, Tortoise-ORM & more.
                  </li>
                  <li>
                    Integrated Discord Oauth2 for user login on web dashboard
                    using FastAPI, JWT & PostgreSQL.
                  </li>
                  <li>
                    Payment gateway integrated: PayuMoney Payment Gateway.
                  </li>
                  <li>
                    Built an OCR and Image hashing microservice using
                    Pytesseract, Imagehash, PIL, and other technologies.
                    (handles 100k+ hits/month).
                  </li>
                  <li>
                    Project discontinued in April 2025 due to the untimely
                    passing of a core team member.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">Founder</h3>
                    <h4 className="text-lg font-semibold text-gray-400">
                      Flantic
                    </h4>
                  </div>
                  <div className="text-right text-sm">
                    <div className="font-medium text-gray-300">
                      March 2021 - March 2023
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>
                    Served a large user base (55M+ users, 200k+ orgs) with
                    scalable, high-performance architecture.
                  </li>
                  <li>
                    Tech stack used: discord.py, PostgreSQL, websockets,
                    Tortoise-ORM & more.
                  </li>
                  <li>Payment gateway integrated: Razorpay Payment Gateway.</li>
                  <li>
                    Horizontally scaled the bot up to 200k servers using PM2.
                  </li>
                  <li>Acquired by Green Bot Development in 2023.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-600 pb-1 text-white">
              PROJECT
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Crypto Payout Bot
                  </h3>
                  <div className="text-sm font-medium text-gray-300">
                    October 2024 - October 2024
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>
                    A freelance project for a European Twitch streamer client.
                  </li>
                  <li>
                    This bot uses Oxapay payment gateway to facilitate crypto
                    transactions.
                  </li>
                  <li>It provides live transaction info and wallet balance.</li>
                  <li>
                    It handled over $32k$ in payouts and over 500+ paid
                    participants.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    HTTP-Interaction Bot Template
                  </h3>
                  <div className="text-sm font-medium text-gray-300">
                    September 2023 - September 2023
                  </div>
                </div>
                <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
                  <li>A template repository for discord http interactions.</li>
                  <li>
                    It can be hosted on server-less architecture like Vercel
                    with no expenses.
                  </li>
                  <li>It has custom command handler making use of FastAPI.</li>
                  <li>
                    It handles proper authentication logic by verifying the
                    signature through request headers.
                  </li>
                  <li>
                    This project is no longer maintained and has been archived
                    due to inactivity.
                  </li>
                </ul>
              </div>
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
                websockets, discord.py
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
                Kafka, Amazon S3, Cloudflare R2.
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
