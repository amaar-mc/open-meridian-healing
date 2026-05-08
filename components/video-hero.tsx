"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // Auto-mute when section leaves viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          const video = videoRef.current;
          if (video && !video.muted) {
            video.muted = true;
            setMuted(true);
          }
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function toggleAudio() {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    if (!next) video.play().catch(() => {});
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-cream">
      {/* Warm gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-linen to-blush" />

      {/* Ambient orbs */}
      <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-sage-muted/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-terracotta/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full py-16 lg:py-0">

          {/* Text side */}
          <div className="lg:col-span-7 order-1 text-center lg:text-left">

            {/* Brand mark — logo + name (Cinzel gold), business-card style */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center lg:items-start gap-2 mb-8"
            >
              <Image
                src="/images/logo.png"
                alt="Open Meridian Healing logo"
                width={84}
                height={84}
                priority
              />
              <span className="font-brand text-xl sm:text-2xl text-honey tracking-wide leading-none">
                Open Meridian Healing
              </span>
            </motion.div>

            {/* Main heading — char-by-char blur */}
            <h1 className="font-heading text-[2.2rem] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[5rem] xl:text-[5.5rem] font-light text-bark leading-[1.08] tracking-[-0.02em]">
              {"Ease into inner".split("").map((char, i) => (
                <motion.span
                  key={`line1-${i}`}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.022, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block"
                  style={{ whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char}
                </motion.span>
              ))}
              <br />
              <span className="whitespace-nowrap">
                {"balance".split("").map((char, i) => (
                  <motion.span
                    key={`balance-${i}`}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, delay: 0.95 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-terracotta italic font-normal"
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="inline-block text-bark font-light px-[0.22em]"
                >{"&"}</motion.span>
                {"wholeness".split("").map((char, i) => (
                  <motion.span
                    key={`wholeness-${i}`}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.55, delay: 1.25 + i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-sage-dark italic font-normal"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Subtext — word blur */}
            <div className="mt-8 text-bark-light/70 text-lg leading-relaxed max-w-xl">
              {"Reiki and intuitive energy healing offered in a warm, grounded, and supportive space—inviting calm, heart-centered presence, and a gentle return to wholeness."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-3"
            >
              <Button href="/book#discovery" variant="primary">
                Book your Discovery Call
              </Button>
            </motion.div>

            {/* Location line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.0 }}
              className="mt-6 text-bark-light/35 text-sm tracking-wide"
            >
              In-person · Gilroy, CA &nbsp;·&nbsp; Distance Reiki · Anywhere
            </motion.p>
          </div>

          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-terracotta/10 via-sand/30 to-sage-muted/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-bark/8 w-[220px] sm:w-[280px] lg:w-[360px] aspect-[9/16]">
                <video
                  ref={videoRef}
                  src="/video/reiki-session.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-bark/[0.05] rounded-[2.5rem]" />

                {/* Audio toggle */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0, duration: 0.4 }}
                  onClick={toggleAudio}
                  aria-label={muted ? "Enable audio" : "Mute audio"}
                  className="absolute bottom-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white/80 hover:bg-black/50 hover:text-white transition-all duration-200"
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </motion.button>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 w-3 h-3 rounded-full bg-terracotta/30"
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-4 -left-6 w-2 h-2 rounded-full bg-sage/30"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-bark/15 to-transparent"
        />
      </motion.div>
    </section>
  );
}
