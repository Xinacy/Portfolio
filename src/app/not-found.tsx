"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { CometCard } from "@/components/ui/comet-card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Home, ArrowLeft, Zap, Sparkles } from "lucide-react";

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
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl"
      >
        <CometCard>
          <div className="bg-black backdrop-blur-sm p-10 rounded-2xl border border-gray-200/50">
            <div className="text-center space-y-8">
              <motion.div
                className="relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="text-8xl md:text-9xl font-bold bg-linear-to-r from-indigo-600 via-black-600 to-indigo-600 bg-clip-text text-transparent relative"
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
                    <Sparkles className="w-8 h-8 text-blue-600" />
                  </motion.div>
                </motion.div>
              </motion.div>

              <TextGenerateEffect
                words="Oops! This page has wandered off into the digital void"
                className="text-2xl md:text-3xl text-center text-gray-800"
                duration={0.8}
              />

              <motion.p
                className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Don&apos;t worry though, we&apos;ll help you find your way back
                to something amazing.
              </motion.p>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
              >
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4" />
                  <span>Auto-redirecting in {count} seconds</span>
                </div>
                <Progress
                  value={progressValue}
                  className="w-full max-w-xs mx-auto"
                />
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
                  className="group relative overflow-hidden"
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Take me back
                  </motion.div>
                </Button>

                <Link href="/">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ y: -1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Home className="w-4 h-4 transition-transform group-hover:scale-110" />
                      Go home
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </CometCard>
      </motion.div>
    </div>
  );
}
