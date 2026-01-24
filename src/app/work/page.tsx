import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, MapPin, Award, Sparkles, Heart } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import work from "@/lib/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "Gay Journey 🏳️‍🌈 | Gaurav",
  description: "my gay journey through life, love, and code ✨",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "Gay Journey 🏳️‍🌈 | Gaurav",
    description: "my gay journey through life, love, and code ✨",
  },
  twitter: {
    card: "summary",
    title: "Gay Journey 🏳️‍🌈 | Gaurav",
    description: "my gay journey through life, love, and code ✨",
    creator: "@Xinacy",
  },
};

export default function WorkPage() {
  const timelineData = work.map((exp) => ({
    title: exp.duration,
    content: (
      <div className="mb-8" key={exp.company}>
        <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 rainbow-border hover:rainbow-glow transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="size-8 disco-effect">
                  <AvatarFallback className="bg-gray-800 text-white text-sm rainbow-text">
                    {exp.company.charAt(0).toUpperCase()}
                  </AvatarFallback>
                  <AvatarImage
                    alt={exp.company}
                    src={`https://cdn.xinacy.com/${exp.logo}`}
                  />
                </Avatar>
                <h3 className="text-2xl font-bold trans-pride-text">
                  {exp.position}
                </h3>
                <Badge
                  variant="outline"
                  className={`
                  ${exp.status === "current"
                      ? "bg-pink-900/20 border-pink-500/50 rainbow-text"
                      : exp.status === "acquired"
                        ? "bg-purple-900/20 border-purple-500/50 bi-pride-text"
                        : "bg-blue-900/20 border-blue-500/50 trans-pride-text"
                    }
                `}
                >
                  {exp.status === "current"
                    ? "Currently Slaying 💅"
                    : exp.status === "acquired"
                      ? "Iconically Acquired ✨"
                      : exp.status === "discontinued"
                        ? "Too Iconic 4 This World"
                        : exp.status === "completed"
                          ? "Slayed & Done 🌈"
                          : "Legendary"}
                </Badge>
              </div>
              <h4 className="text-xl font-semibold rainbow-text mb-3">
                {exp.company}
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
            </div>

            <div className="lg:text-right lg:ml-6">
              <div className="flex items-center gap-2 bi-pride-text text-sm mb-2">
                <Calendar className="w-4 h-4 text-pink-400" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2 pan-pride-text text-sm mb-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{exp.location}</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-gray-800/50 rainbow-text font-bold"
              >
                {exp.type}
              </Badge>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="text-lg font-semibold rainbow-text mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400 sparkle" />
              Gay Achievements 🏆
            </h5>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 pride-gradient rounded-full mt-2 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {exp.note && (
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border-l-4 pride-gradient">
              <p className="rainbow-text text-sm italic font-semibold">{exp.note}</p>
            </div>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pb-28 pride-bg-animated pride-cursor">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 sm:py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            className="rainbow-border hover:rainbow-glow transition-colors"
            asChild
          >
            <Link href="/" aria-label="Back to home">
              <ChevronLeft className="size-4" />
              <span className="rainbow-text font-bold">Back to Gay HQ 🏳️‍🌈</span>
            </Link>
          </Button>
        </div>

        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="size-10 text-pink-400 sparkle" />
            <h1 className="text-5xl md:text-6xl font-bold rainbow-text">
              My Gay Journey 🦄
            </h1>
            <Sparkles className="size-10 text-pink-400 sparkle" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="trans-pride-text text-xl font-semibold mt-4">
            A timeline of slaying, serving, and spreading the gay agenda ✨
          </p>
          <div className="mt-6 h-1 pride-gradient rounded-full max-w-md mx-auto" />
        </header>

        <div className="relative hidden md:block">
          <Timeline data={timelineData} />
        </div>

        <div className="block md:hidden space-y-8">
          {work.map((exp) => (
            <div key={exp.company} className="mb-8">
              <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 rainbow-border hover:rainbow-glow transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="size-6 disco-effect">
                      <AvatarFallback className="bg-gray-800 text-white text-xs rainbow-text">
                        {exp.company.charAt(0).toUpperCase()}
                      </AvatarFallback>
                      <AvatarImage
                        alt={exp.company}
                        src={`https://cdn.xinacy.com/${exp.logo}`}
                      />
                    </Avatar>
                    <h3 className="text-xl font-bold trans-pride-text">
                      {exp.position}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-xs
                      ${exp.status === "current"
                          ? "bg-pink-900/20 border-pink-500/50 rainbow-text"
                          : exp.status === "acquired"
                            ? "bg-purple-900/20 border-purple-500/50 bi-pride-text"
                            : "bg-blue-900/20 border-blue-500/50 trans-pride-text"
                        }
                    `}
                    >
                      {exp.status === "current"
                        ? "Slaying 💅"
                        : exp.status === "acquired"
                          ? "Acquired ✨"
                          : exp.status === "discontinued"
                            ? "Too Iconic"
                            : exp.status === "completed"
                              ? "Slayed 🌈"
                              : "Legend"}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold rainbow-text mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm mb-3">
                    {exp.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-2 bi-pride-text text-xs">
                      <Calendar className="w-3 h-3 text-pink-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 pan-pride-text text-xs">
                      <MapPin className="w-3 h-3 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/50 rainbow-text text-xs font-bold"
                  >
                    {exp.type}
                  </Badge>
                </div>
                <div className="mb-5">
                  <h5 className="text-base font-semibold rainbow-text mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400 sparkle" />
                    Gay Achievements 🏆
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300 text-xs"
                      >
                        <div className="w-1 h-1 pride-gradient rounded-full mt-1.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {exp.note && (
                  <div className="mt-3 p-2 bg-gray-800/30 rounded-lg border-l-2 pride-gradient">
                    <p className="rainbow-text text-xs italic font-semibold">{exp.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 pt-8 border-t-2 pride-gradient">
          <p className="rainbow-text font-bold text-lg flex items-center justify-center gap-2">
            Made with <Heart className="size-5 text-pink-500 fill-current sparkle" /> and Gay Pride 🏳️‍🌈
          </p>
        </div>
      </div>
    </div>
  );
}
