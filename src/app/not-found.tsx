"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CometCard } from "@/components/ui/comet-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, ArrowLeft, Zap, Sparkles, Heart } from "lucide-react";

export default function NotFound() {
  const [count, setCount] = useState(15);
  const router = useRouter();
  const progressValue = ((15 - count) / 15) * 100;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (count === 0) {
      handleRedirect();
      return;
    }
    const t = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [count]);

  const handleRedirect = () => {
    if (
      document.referrer &&
      new URL(document.referrer).hostname === window.location.hostname
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleManualRedirect = () => {
    handleRedirect();
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden pride-bg-animated pride-cursor">
      {/* Floating Pride Emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['🏳️‍🌈', '🌈', '💖', '💜', '💙', '🦄', '✨', '🏳️‍⚧️', '💕', '🌸', '👑', '💅', '🎀', '🌟'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
            }}
            animate={{
              y: [null, -150],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        {['🏳️‍🌈', '🌈', '💖', '💜', '💙', '🦄', '✨', '🏳️‍⚧️', '💕', '🌸', '👑', '💅', '🎀', '🌟'].map((emoji, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0.8,
            }}
            animate={{
              y: [null, -100],
              opacity: [0.8, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <CometCard>
          <div className="bg-black backdrop-blur-sm p-10 rounded-2xl rainbow-border rainbow-glow">
            <div className="text-center space-y-8">
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="text-8xl md:text-9xl font-bold rainbow-text relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  404
                  <motion.div
                    className="absolute -top-4 -right-4"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-4xl">🏳️‍🌈</span>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-4"
                    animate={{
                      rotate: [0, -360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-pink-500 sparkle" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <TextGenerateEffect
                words="Oh no bestie! This page has gone to a fabulous place we can't find 💅🌈"
                className="text-2xl md:text-3xl text-center rainbow-text"
                duration={0.8}
              />

              <motion.p
                className="trans-pride-text text-lg leading-relaxed max-w-md mx-auto font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Don&apos;t worry queen, we&apos;ll get you back to somewhere iconic ✨
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <div className="flex items-center justify-center gap-2 text-sm rainbow-text font-bold">
                  <Zap className="w-4 h-4 text-yellow-400 sparkle" />
                  <span>Yeeting you back in {count} seconds 🌈</span>
                </div>
                <div className="w-full max-w-xs mx-auto h-3 rounded-full overflow-hidden rainbow-border">
                  <div
                    className="h-full pride-gradient transition-all duration-300"
                    style={{ width: `${progressValue}%` }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.5 }}
              >
                <Button
                  onClick={handleManualRedirect}
                  size="lg"
                  className="group relative overflow-hidden rainbow-button text-white font-bold border-0"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Slay me back 💅
                  </motion.div>
                </Button>

                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden rainbow-border hover:rainbow-glow"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ y: -1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="rainbow-text font-bold">Go to Gay HQ 🏠</span>
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="flex items-center justify-center gap-2 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 3 }}
              >
                <span className="rainbow-text text-sm font-bold">Made with</span>
                <Heart className="size-4 text-pink-500 fill-current sparkle" />
                <span className="rainbow-text text-sm font-bold">and Gay Pride</span>
                <span className="sparkle">🏳️‍🌈</span>
              </motion.div>
            </div>
          </div>
        </CometCard>
      </motion.div>
    </div>
  );
}
