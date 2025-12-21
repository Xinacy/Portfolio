import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, MapPin, Award } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import work from "@/lib/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://xinacy.com/"),
  title: "Work Experience | Gaurav",
  description: "i worked at some cool places i believe so",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    url: "https://xinacy.com/",
    title: "Work Experience | Gaurav",
    description: "i worked at some cool places i believe so",
  },
  twitter: {
    card: "summary",
    title: "Work Experience | Gaurav",
    description: "i worked at some cool places i believe so",
    creator: "@Xinacy",
  },
};

export default function WorkPage() {
  const timelineData = work.map((exp) => ({
    title: exp.duration,
    content: (
      <div className="mb-8" key={exp.company}>
        <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="size-8">
                  <AvatarFallback className="bg-gray-800 text-white text-sm">
                    {exp.company.charAt(0).toUpperCase()}
                  </AvatarFallback>
                  <AvatarImage
                    alt={exp.company}
                    src={`https://cdn.xinacy.com/${exp.logo}`}
                  />
                </Avatar>
                <h3 className="text-2xl font-bold text-white">
                  {exp.position}
                </h3>
                <Badge
                  variant="outline"
                  className={`
                  ${
                    exp.status === "current"
                      ? "bg-green-900/20 border-green-500/50 text-green-400"
                      : exp.status === "acquired"
                      ? "bg-blue-900/20 border-blue-500/50 text-blue-400"
                      : "bg-gray-900/20 border-gray-500/50 text-gray-400"
                  }
                `}
                >
                  {exp.status === "current"
                    ? "Current"
                    : exp.status === "acquired"
                    ? "Acquired"
                    : exp.status === "discontinued"
                    ? "Discontinued"
                    : exp.status === "completed"
                    ? "Completed"
                    : "L"}
                </Badge>
              </div>
              <h4 className="text-xl font-semibold text-blue-400 mb-3">
                {exp.company}
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                {exp.description}
              </p>
            </div>

            <div className="lg:text-right lg:ml-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-gray-800/50 text-gray-300"
              >
                {exp.type}
              </Badge>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              Key Achievements
            </h5>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {exp.note && (
            <div className="mt-4 p-3 bg-gray-800/30 rounded-lg border-l-4 border-gray-500">
              <p className="text-gray-400 text-sm italic">{exp.note}</p>
            </div>
          )}
        </div>
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-black relative overflow-hidden pb-28">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 sm:py-8">
        <div className="mb-8">
          <Button
            variant="outline"
            className="bg-transparent border-gray-600/50 hover:border-gray-500/50 transition-colors"
            asChild
          >
            <Link href="/" aria-label="Back to home">
              <ChevronLeft className="size-4" />
              Back to home
            </Link>
          </Button>
        </div>

        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Work Experience
            </h1>
          </div>
          <div className="mt-6 h-px bg-linear-to-r from-transparent via-gray-600 to-transparent" />
        </header>

        <div className="relative hidden md:block">
          <Timeline data={timelineData} />
        </div>

        <div className="block md:hidden space-y-8">
          {work.map((exp) => (
            <div key={exp.company} className="mb-8">
              <div className="bg-linear-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="size-6">
                      <AvatarFallback className="bg-gray-800 text-white text-xs">
                        {exp.company.charAt(0).toUpperCase()}
                      </AvatarFallback>
                      <AvatarImage
                        alt={exp.company}
                        src={`https://cdn.xinacy.com/${exp.logo}`}
                      />
                    </Avatar>
                    <h3 className="text-xl font-bold text-white">
                      {exp.position}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-xs
                      ${
                        exp.status === "current"
                          ? "bg-green-900/20 border-green-500/50 text-green-400"
                          : exp.status === "acquired"
                          ? "bg-blue-900/20 border-blue-500/50 text-blue-400"
                          : "bg-gray-900/20 border-gray-500/50 text-gray-400"
                      }
                    `}
                    >
                      {exp.status === "current"
                        ? "Current"
                        : exp.status === "acquired"
                        ? "Acquired"
                        : exp.status === "discontinued"
                        ? "Discontinued"
                        : exp.status === "completed"
                        ? "Completed"
                        : "L"}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm mb-3">
                    {exp.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/50 text-gray-300 text-xs"
                  >
                    {exp.type}
                  </Badge>
                </div>
                <div className="mb-5">
                  <h5 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    Key Achievements
                  </h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300 text-xs"
                      >
                        <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {exp.note && (
                  <div className="mt-3 p-2 bg-gray-800/30 rounded-lg border-l-2 border-gray-500">
                    <p className="text-gray-400 text-xs italic">{exp.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
