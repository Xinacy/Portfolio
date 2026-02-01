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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, DiscordIcon, XIcon, LinkedinIcon } from "@/icons";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import work from "@/lib/work";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative pride-bg-animated pride-cursor">
      {/* Floating Pride Emojis */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {['🏳️‍🌈', '🌈', '💖', '💜', '💙', '🦄', '✨', '🏳️‍⚧️', '💕', '🌸'].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce"
            style={{
              left: `${(i * 10) + 5}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <div className="lg:h-screen flex relative z-10">
        <div className="hidden lg:flex w-80 xl:w-96 shrink-0 p-8 items-center justify-center">
          <CometCard className="w-full max-w-md">
            <div className="bg-[#1A1A1A] rounded-xl rainbow-border p-6 shadow-2xl w-full rainbow-glow">
              <ProfileCardContent />
            </div>
          </CometCard>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 py-12 pb-28 lg:pb-32">
            <CometCard className="block lg:hidden mb-8 sm:mb-12 mt-6 sm:mt-10 w-full max-w-md mx-auto">
              <div className="bg-[#1A1A1A] rounded-xl rainbow-border p-4 sm:p-6 shadow-2xl w-full rainbow-glow">
                <ProfileCardContent />
              </div>
            </CometCard>

            <div className="mb-12">
              <div className="flex items-center mb-4">
                <span className="text-xl sm:text-2xl mr-2 sparkle">🏳️‍🌈</span>
                <h1 className="rainbow-text text-lg sm:text-xl font-medium">
                  Hey Bestie! 💅
                </h1>
              </div>

              <div className="space-y-2 mb-6">
                <h2 className="rainbow-text text-2xl sm:text-3xl lg:text-4xl font-bold">
                  I&apos;m Gaurav,
                </h2>
                <h3 className="gay-pride-text text-2xl sm:text-3xl lg:text-4xl font-bold">
                  Professional Gay 🌈
                </h3>
                <p className="trans-pride-text text-lg sm:text-xl font-semibold">Based in the Gay Agenda&apos;s Headquarters 💖</p>
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed max-w-3xl">
                tldr; i write <span className="rainbow-text font-bold">fabulously gay code</span>, spread the{" "}
                <span className="bi-pride-text font-bold">gay agenda</span>, and make every pixel{" "}
                <span className="pan-pride-text font-bold">sparkle with pride</span>.
                currently serving: hot takes, good vibes, and code that slays ✨💅
              </p>
            </div>

            {/* Pride Skills Section */}
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Sparkles className="w-6 h-6 text-pink-400 mr-2 sparkle" />
                <h2 className="rainbow-text text-2xl font-bold">My Gay Superpowers 💪</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { skill: "Being Gay", emoji: "🏳️‍🌈", color: "rainbow-text" },
                  { skill: "Slaying Code", emoji: "💅", color: "trans-pride-text" },
                  { skill: "Serving Looks", emoji: "✨", color: "bi-pride-text" },
                  { skill: "Spreading Love", emoji: "💖", color: "pan-pride-text" },
                  { skill: "Making Everything Gay", emoji: "🌈", color: "gay-pride-text" },
                  { skill: "Reading Homophobes", emoji: "📚", color: "nb-pride-text" },
                  { skill: "Professional Yas Queen-ing", emoji: "👑", color: "rainbow-text" },
                  { skill: "Gay Chaos", emoji: "🦄", color: "trans-pride-text" },
                ].map((item, index) => (
                  <Card key={index} className="bg-[#1A1A1A] relative overflow-hidden rainbow-border hover:rainbow-glow transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <span className="text-3xl sparkle">{item.emoji}</span>
                      <p className={`${item.color} font-bold mt-2 text-sm`}>{item.skill}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-pink-400 mr-2" />
                <h2 className="rainbow-text text-2xl font-bold">My Gay Journey 🦄</h2>
              </div>

              {work.map((item, index) => (
                <div key={index}>
                  <Card className="bg-[#1A1A1A] relative overflow-hidden border-0 rainbow-border hover:rainbow-glow transition-all duration-300">
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
                            className="size-10 rounded-full object-cover disco-effect"
                            priority
                          />
                          <div>
                            <h3 className="rainbow-text text-lg font-bold">
                              {item.company}
                            </h3>
                            <p className="trans-pride-text text-sm font-semibold">
                              {item.position}
                            </p>
                          </div>
                        </div>
                        <div className="bi-pride-text text-sm font-medium text-right">
                          {item.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index !== work.length - 1 && (
                    <div className="flex items-center justify-center py-5">
                      <div className="w-full h-1 pride-gradient rounded-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Code className="w-6 h-6 text-pink-400 mr-2" />
                <h2 className="rainbow-text text-2xl font-bold">GitHub Activity (Very Gay) 🌈</h2>
              </div>

              <CometCard>
                <div className="bg-[#1A1A1A] rounded-xl rainbow-border p-6 shadow-lg rainbow-glow">
                  <div className="overflow-x-auto disco-effect">
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
                          "#ff0000",
                          "#ff8000",
                          "#ffff00",
                          "#00ff00",
                          "#0080ff",
                        ],
                        dark: [
                          "#ff0000",
                          "#ff8000",
                          "#ffff00",
                          "#00ff00",
                          "#0080ff",
                        ],
                      }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="rainbow-text text-xs sm:text-sm font-bold">
                      Less Gay{" "}
                      <span className="inline-flex gap-1 mx-2">
                        <div className="w-2.5 h-2.5 bg-[#ff0000] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#ff8000] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#ffff00] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#00ff00] rounded-sm"></div>
                        <div className="w-2.5 h-2.5 bg-[#0080ff] rounded-sm"></div>
                      </span>{" "}
                      More Gay
                    </div>
                    <Button
                      variant="outline"
                      className="rainbow-button text-white hover:text-white border-0"
                      asChild
                    >
                      <Link
                        href="https://github.com/Xinacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <GithubIcon className="size-4" />
                        View Gay Profile 🌈
                      </Link>
                    </Button>
                  </div>
                </div>
              </CometCard>
            </div>

            <footer className="mt-16 border-t-2 pride-gradient pt-8">
              <div className="text-center">
                <p className="rainbow-text mb-4 max-w-lg mx-auto font-bold text-lg">
                  This portfolio is VERY gay and open source. Star it because you love love! 🏳️‍🌈
                </p>

                <div className="flex items-center justify-center mb-4 gap-2">
                  <Button
                    variant="outline"
                    className="rainbow-button text-white border-0 font-bold"
                    asChild
                  >
                    <Link
                      href="https://github.com/Xinacy/Portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubIcon className="size-4" />
                      Star This Gay Repo ⭐
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1 text-sm">
                  <span className="rainbow-text font-bold">Made with</span>
                  <Heart className="size-4 text-pink-500 fill-current sparkle" />
                  <span className="rainbow-text font-bold">and Gay Pride by Gaurav</span>
                  <span className="sparkle">🏳️‍🌈</span>
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
      <div className="flex justify-center mb-4 relative">
        <div className="absolute inset-0 pride-gradient opacity-30 rounded-2xl blur-xl"></div>
        <Image
          alt="Gaurav - Professional Gay"
          src="https://cdn.xinacy.com/spidey.jpg"
          height={500}
          width={500}
          className="rounded-2xl w-full aspect-square object-cover object-center rainbow-border disco-effect"
          priority
        />
        <div className="absolute -top-2 -right-2 text-3xl sparkle">🏳️‍🌈</div>
        <div className="absolute -bottom-2 -left-2 text-3xl sparkle" style={{ animationDelay: '0.5s' }}>✨</div>
      </div>

      <div className="text-center mb-6">
        <h2 className="rainbow-text text-xl sm:text-2xl font-bold">Gaurav 🦄</h2>
        <p className="trans-pride-text text-sm font-semibold mt-1">Professional Gay | Chief Slay Officer</p>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <Button variant="outline" className="size-10 rainbow-border hover:rainbow-glow" asChild>
          <Link
            href="https://instagram.com/Xinacy7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="size-5 text-pink-400" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10 rainbow-border hover:rainbow-glow" asChild>
          <Link
            href="https://x.com/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XIcon className="size-5 text-blue-400" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10 rainbow-border hover:rainbow-glow" asChild>
          <Link
            href="https://github.com/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="size-5 text-purple-400" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10 rainbow-border hover:rainbow-glow" asChild>
          <Link
            href="https://linkedin.com/in/Xinacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="size-5 text-blue-500" />
          </Link>
        </Button>
        <Button variant="outline" className="size-10 rainbow-border hover:rainbow-glow" asChild>
          <Link
            href="https://discord.com/users/1211202988518146050"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="size-5 text-indigo-400" />
          </Link>
        </Button>
      </div>

      <div className="flex gap-3 justify-center">
        <Button
          variant="outline"
          className="rainbow-border hover:rainbow-glow bg-[#1A1A1A]"
          asChild
        >
          <Link href="/resume">
            <LinkIcon className="size-4" />
            <span className="rainbow-text font-bold">Gay Resume</span>
          </Link>
        </Button>
        <Button className="rainbow-button text-white font-bold border-0" asChild>
          <Link href="mailto:gaurav@xinacy.com">
            <Send className="size-4" />
            Slide Into DMs 💌
          </Link>
        </Button>
      </div>
    </>
  );
}
