import React from "react";
import { CometCard } from "@/components/ui/comet-card";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Instagram,
  Send,
  Briefcase,
  Link as LinkIcon,
  Heart,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, DiscordIcon, XIcon, LinkedinIcon } from "@/icons";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import work from "@/lib/work";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <div className="lg:h-screen flex">
        <div className="hidden lg:flex w-80 xl:w-96 shrink-0 p-8 items-center justify-center">
          <CometCard className="w-full max-w-md">
            <div className="bg-[#1A1A1A] rounded-xl border p-6 shadow-2xl w-full">
              <ProfileCardContent />
            </div>
          </CometCard>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12 pb-28 lg:pb-32">
            <CometCard className="block lg:hidden mb-8 sm:mb-12 mt-6 sm:mt-10 w-full max-w-md mx-auto">
              <div className="bg-[#1A1A1A] rounded-xl border p-4 sm:p-6 shadow-2xl w-full">
                <ProfileCardContent />
              </div>
            </CometCard>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <span className="text-xl sm:text-2xl mr-2">👋</span>
                <h1 className="text-white text-lg sm:text-xl font-medium">
                  Hello
                </h1>
              </div>

              <div className="space-y-2 mb-6">
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                  I&apos;m Gaurav,
                </h2>
                <h3 className="text-[#00E676] text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Software Engineer
                </h3>
                <p className="text-white text-lg sm:text-xl">Based in India.</p>
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl">
                tldr; i code the web, do some devops, wire up ai agents, and
                make workflows click. scalability, reliability, and a bit of
                chaos engineering.
              </p>
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-white mr-2" />
                <h2 className="text-2xl font-bold">Work Experience</h2>
              </div>

              {work.map((item, index) => (
                <div key={index}>
                  <Card className="bg-[#1A1A1A] relative overflow-hidden border-0">
                    <GlowingEffect
                      spread={100}
                      glow={true}
                      disabled={false}
                      proximity={100}
                      inactiveZone={0.01}
                      className="border"
                    />
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            alt={item.company}
                            src={`https://cdn.xinacy.com/${item.logo}`}
                            width={40}
                            height={40}
                            className="size-10 rounded-full object-cover"
                            priority
                          />
                          <div>
                            <h3 className="text-white text-lg font-bold">
                              {item.company}
                            </h3>
                            <p className="text-gray-400 text-sm">
                              {item.position}
                            </p>
                          </div>
                        </div>
                        <div className="text-gray-400 text-sm font-medium text-right">
                          {item.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index !== work.length - 1 && (
                    <div className="flex items-center justify-center py-5">
                      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-500 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Code className="w-6 h-6 text-white mr-2" />
                <h2 className="text-2xl font-bold">GitHub Activity</h2>
              </div>

              <CometCard>
                <div className="bg-[#1A1A1A] rounded-xl border border-gray-600/50 p-6 shadow-lg">
                  <div className="overflow-x-auto">
                    <GitHubCalendar
                      username="Xinacy"
                      blockSize={12}
                      blockMargin={3}
                      colorScheme="dark"
                      fontSize={12}
                      style={{
                        color: "#ffffff",
                      }}
                      theme={{
                        light: [
                          "#161b22",
                          "#0e4429",
                          "#006d32",
                          "#26a641",
                          "#39d353",
                        ],
                        dark: [
                          "#161b22",
                          "#0e4429",
                          "#006d32",
                          "#26a641",
                          "#39d353",
                        ],
                      }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-gray-400 text-xs sm:text-sm">
                      Less{" "}
                      <span className="inline-flex gap-1 mx-2">
                        <div className="w-2.5 h-2.5 bg-[#161b22] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#0e4429] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#006d32] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#26a641] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#39d353] rounded-sm"></div>
                      </span>{" "}
                      More
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent border-[#00E676] text-[#00E676] hover:bg-[#00E676] hover:text-white transition-all duration-300"
                      asChild
                    >
                      <Link
                        href="https://github.com/Xinacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <GithubIcon className="size-4" />
                        View Profile
                      </Link>
                    </Button>
                  </div>
                </div>
              </CometCard>
            </div>

            <footer className="mt-16 border-t border-gray-800 pt-8">
              <div className="text-center">
                <p className="text-gray-400 mb-4 max-w-lg mx-auto">
                  This portfolio is open source and available for the community.
                  Feel free to star, fork, or contribute!
                </p>

                <div className="flex items-center justify-center mb-4">
                  <Button
                    variant="outline"
                    className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link
                      href="https://github.com/Xinacy/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="size-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
                  <span>Made with</span>
                  <Heart className="size-4 text-red-500 hover:fill-current hover:cursor-pointer" />
                  <span>by Gaurav</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfileCardContent() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <Image
          alt="Gaurav"
          src="https://cdn.xinacy.com/spidey.jpg"
          height={500}
          width={500}
          className="rounded-2xl w-full aspect-square object-cover object-center border-[0.5px]"
          priority
        />
      </div>

      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold">Gaurav</h2>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <Button variant="outline" className="size-10" asChild>
          <Link
            href="https://instagram.com/Xinacy_7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10" asChild>
          <Link
            href="https://x.com/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10" asChild>
          <Link
            href="https://github.com/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10" asChild>
          <Link
            href="https://linkedin.com/in/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10" asChild>
          <Link
            href="https://discord.com/users/1211202988518146050"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="size-5" />
          </Link>
        </Button>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          variant="outline"
          className="bg-[#1A1A1A] border border-gray-600/50 hover:bg-gray-800"
          asChild
        >
          <Link href="/resume">
            <LinkIcon className="size-4" />
            Resume
          </Link>
        </Button>
        <Button className="bg-[#00E676] text-black hover:bg-[#00D166]" asChild>
          <Link href="mailto:gaurav@xinacy.com">
            <Send className="size-4" />
            Contact Me
          </Link>
        </Button>
      </div>
    </>
  );
}
