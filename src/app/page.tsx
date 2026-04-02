import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  Send,
  Briefcase,
  Heart,
  Code,
  MapPin,
  ArrowUpRight,
  Star,
  Terminal,
  Wrench,
  Plus,
} from "lucide-react";
import { GithubIcon, DiscordIcon, XIcon, LinkedinIcon } from "@/icons";
import GitHubCalendar from "react-github-calendar";
import { work, skills } from "@/lib/resume";
import TechIcon from "@/components/TechIcon";
import { CometCard } from "@/components/ui/comet-card";

const socials = [
  { icon: GithubIcon, href: "https://github.com/Xinacy", label: "GitHub" },
  { icon: XIcon, href: "https://x.com/Xinacy", label: "X" },
  {
    icon: LinkedinIcon,
    href: "https://linkedin.com/in/Xinacy",
    label: "LinkedIn",
  },
  {
    icon: DiscordIcon,
    href: "https://discord.com/users/1211202988518146050",
    label: "Discord",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/Xiinacy",
    label: "Instagram",
  },
];

const statusLabels: Record<string, string> = {
  completed: "past",
  discontinued: "discontinued",
  acquired: "acquired",
};

const statusColor: Record<string, string> = {
  completed: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30",
  discontinued: "bg-red-500/15 text-red-400/80 border-red-500/20",
  acquired: "bg-emerald-500/15 text-emerald-400/80 border-emerald-500/20",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative pt-28 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <div className="relative shrink-0">
              <CometCard
                className="shrink-0"
                rotateDepth={12}
                translateDepth={14}
              >
                <div className="size-28 sm:size-32 rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <Image
                    alt="Gaurav"
                    src="https://cdn.xinacy.com/spidey.jpg"
                    height={500}
                    width={500}
                    className="size-full object-cover object-center"
                    priority
                  />
                </div>
              </CometCard>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Gaurav, 21
                  </h1>
                </div>
                <p className="mt-1.5 text-base text-gray-400 font-medium flex items-center gap-2">
                  <Terminal className="size-4 text-gray-500" />
                  Software Engineer
                </p>
                <p className="mt-1 text-gray-600 flex items-center gap-1.5 text-sm">
                  <MapPin className="size-3.5" />
                  India
                </p>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-8 rounded-lg border border-white/8 text-gray-500 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                    aria-label={s.label}
                  >
                    <s.icon className="size-4" />
                  </Link>
                ))}
                <div className="w-px h-5 bg-white/10 mx-1" />
                <Link
                  href="mailto:gaurav@xinacy.com"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Send className="size-3" />
                  Contact
                </Link>
                <Link
                  href="/resume"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-white/10 text-gray-400 rounded-lg hover:bg-white/5 hover:text-white transition-all"
                >
                  Resume
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-3 text-[15px] leading-relaxed text-gray-400">
            <p>
              I like owning the path from fuzzy problem to something people can
              actually use, quick iteration, clear tradeoffs, and the small
              touches that make an app feel intentional instead of merely
              functional.
            </p>
            <p>
              Backend-first engineer. Built scalable APIs, payment integrations,
              microservices, and real-time systems. Did some AI/ML work along
              the way - inference gateways, fine-tuning pipelines, face
              recognition - at <span className="text-white">MegaLLM</span> and{" "}
              <span className="text-white">Tryzent Technologies</span>.
            </p>
            <p>
              Before that: founded <span className="text-white">Flantic</span>{" "}
              (55M+ users, acquired), co-founded{" "}
              <span className="text-white">Quotient</span> (10M+ users), and
              built <span className="text-white">Mysty</span> (1M+ users) - all
              from scratch with Python, FastAPI, PostgreSQL, Redis, and Docker.
            </p>
            <p>
              Scalability, reliability, and a bit of chaos engineering. Open to
              work - full-time, freelance, or collabs.{" "}
              <Link
                href="mailto:gaurav@xinacy.com"
                className="text-white underline underline-offset-4 decoration-white/20 hover:decoration-white/60 transition-all"
              >
                Let&apos;s talk.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <SectionHeader icon={Wrench} title="Skills & Tools" />
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 self-start shrink-0 text-sm text-gray-500 hover:text-white border border-white/10 rounded-lg px-3 py-2 hover:bg-white/5 hover:border-white/15 transition-all"
            >
              Show all skills
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-8 space-y-8">
            {skills.map((category) => (
              <div key={category.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((name) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-200"
                    >
                      <TechIcon name={name} className="size-4 shrink-0" />
                      <span className="text-sm text-gray-300">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <SectionHeader icon={Briefcase} title="Work Experience" />
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 self-start shrink-0 text-sm text-gray-500 hover:text-white border border-white/10 rounded-lg px-3 py-2 hover:bg-white/5 hover:border-white/15 transition-all"
            >
              Show all work
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <div className="space-y-2 mt-8">
            {work.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/2 hover:bg-white/4 hover:border-white/10 transition-all duration-300"
              >
                <Image
                  alt={item.company}
                  src={`https://cdn.xinacy.com/${item.logo}`}
                  width={40}
                  height={40}
                  className="size-10 rounded-xl object-cover border border-white/10"
                  priority
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-semibold text-sm">
                      {item.company}
                    </h3>
                    {item.status && (
                      <span
                        className={`text-[10px] uppercase tracking-wider font-medium px-1.5 py-0.5 rounded-full border ${statusColor[item.status] || "bg-white/5 text-gray-400 border-white/10"}`}
                      >
                        {statusLabels[item.status] || item.status}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {item.position}
                  </p>
                </div>
                <span className="text-gray-600 text-[11px] font-mono shrink-0 hidden sm:block">
                  {item.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="py-14 px-6">
        <div className="max-w-200 mx-auto">
          <SectionHeader icon={Code} title="GitHub Activity" />
          <p className="text-gray-600 text-xs mt-2 ml-11">
            Personal account only - company commits cannot be displayed here.
          </p>

          <div className="mt-8 rounded-xl border border-white/5 bg-white/2 p-5">
            <div className="flex justify-center overflow-x-auto">
              <GitHubCalendar
                username="Xinacy"
                blockSize={11}
                blockMargin={3}
                colorScheme="dark"
                fontSize={11}
                style={{ color: "#ffffff" }}
                theme={{
                  light: [
                    "#161b22",
                    "#0e4429",
                    "#006d32",
                    "#26a641",
                    "#39d353",
                  ],
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-gray-600 text-[11px] flex items-center gap-1.5">
                Less
                <span className="inline-flex gap-0.5 mx-1">
                  <div className="size-2 bg-[#161b22] rounded-sm" />
                  <div className="size-2 bg-[#0e4429] rounded-sm" />
                  <div className="size-2 bg-[#006d32] rounded-sm" />
                  <div className="size-2 bg-[#26a641] rounded-sm" />
                  <div className="size-2 bg-[#39d353] rounded-sm" />
                </span>
                More
              </div>
              <Link
                href="https://github.com/Xinacy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium border border-white/10 text-gray-500 rounded-lg hover:bg-white/5 hover:text-white transition-all"
              >
                <GithubIcon className="size-3" />
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pb-20 pt-10 px-4">
        <div className="container mx-auto max-w-3xl animate-fade-in-blur border border-dashed border-black/20 py-8 dark:border-white/10 rounded-md">
          <div className="mt-6 flex w-full flex-col pb-8 pl-6 pr-6 sm:flex sm:items-center sm:justify-between sm:px-12">
            <p className="mb-4 text-center text-base opacity-50 sm:mb-3 md:text-xl">
              Hey, you scrolled this far, let&apos;s talk.
            </p>
            <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
              <Link
                href="mailto:gaurav@xinacy.com"
                className="group inline-flex cursor-pointer items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all dark:border-white/30 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
              >
                <div className="relative z-20 flex items-center gap-2 transition-all duration-300 group-hover:gap-8">
                  <div className="size-5 shrink-0 overflow-hidden rounded-full">
                    <Image
                      alt="Gaurav"
                      src="https://cdn.xinacy.com/spidey.jpg"
                      width={20}
                      height={20}
                      className="size-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute left-6 flex translate-x-full items-center gap-0 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    aria-hidden
                  >
                    <Plus className="size-3" strokeWidth={2} />
                    <div className="ml-1 mr-2 flex size-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                      You
                    </div>
                  </div>
                  <span className="relative ml-0 block whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:ml-4">
                    Shoot a Message
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <footer className="py-10 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-gray-700 text-xs max-w-sm mx-auto">
            This portfolio is open source. Feel free to star, fork, or
            contribute.
          </p>
          <Link
            href="https://github.com/Xinacy/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs border border-white/8 text-gray-500 rounded-lg hover:bg-white/5 hover:text-white transition-all"
          >
            <Star className="size-3" />
            Star on GitHub
          </Link>
          <div className="flex items-center justify-center gap-1.5 text-gray-700 text-[11px] pt-1">
            <span>Made with</span>
            <Heart className="size-2.5 text-red-500 hover:fill-current hover:cursor-pointer" />
            <span>by Gaurav</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center size-8 rounded-lg bg-white/5 border border-white/8">
        <Icon className="size-4 text-gray-400" />
      </div>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Divider() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}
