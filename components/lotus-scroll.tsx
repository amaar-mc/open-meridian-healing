"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Phase ranges support 4 keyframes: [enter, clearIn, holdEnd, exit]
// or 3 keyframes: [enter, peak, exit]
const PHASES = [
  {
    range: [0, 0.1, 0.28, 0.4] as [number, number, number, number],
    text: "Something within is asking for care.",
    position: "bottom-[30%]",
    align: "text-center",
    style: "font-heading text-2xl md:text-3xl lg:text-4xl text-bark/55 italic",
  },
  {
    range: [0.38, 0.52, 0.65, 0.75] as [number, number, number, number],
    text: "Reiki meets you exactly where you are.",
    position: "top-[22%]",
    align: "text-center",
    style: "font-heading text-2xl md:text-3xl lg:text-4xl text-sage-dark/60 italic",
  },
  {
    range: [0.72, 0.83, 0.95, 1.0] as [number, number, number, number],
    text: "This is the beginning.",
    position: "bottom-[18%]",
    align: "text-center",
    style: "font-heading text-3xl md:text-4xl lg:text-5xl text-terracotta/70 italic",
  },
] as const;

function PhaseText({
  phase,
  scrollYProgress,
}: {
  phase: (typeof PHASES)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [enter, clearIn, holdEnd, exit] = phase.range;
  const opacity = useTransform(
    scrollYProgress,
    [enter, clearIn, holdEnd, exit],
    [0, 1, 1, 0]
  );
  const blurVal = useTransform(
    scrollYProgress,
    [enter, clearIn, holdEnd, exit],
    [14, 0, 0, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [enter, clearIn, holdEnd, exit],
    [18, 0, 0, -18]
  );
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{ opacity, filter, y }}
      className={`absolute left-0 right-0 px-8 ${phase.position} ${phase.align} pointer-events-none`}
    >
      <p className={phase.style}>{phase.text}</p>
    </motion.div>
  );
}

// Luminance threshold for black removal: below THRESH → fully transparent
// between THRESH and THRESH+BLEND → soft fade
const LUMA_THRESH = 22;
const LUMA_BLEND = 85;

export function LotusScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rafId = useRef<number>(0);
  const pendingTime = useRef<number>(-1);

  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;

    if (!ctxRef.current) {
      ctxRef.current = canvas.getContext("2d", { willReadFrequently: true });
    }
    const ctx = ctxRef.current;
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Draw video centred, maintaining aspect ratio
    const vw = video.videoWidth || 1920;
    const vh = video.videoHeight || 1080;
    const scale = Math.min(width / vw, height / vh);
    const dw = vw * scale;
    const dh = vh * scale;
    const dx = (width - dw) / 2;
    const dy = (height - dh) / 2;
    ctx.drawImage(video, dx, dy, dw, dh);

    // Per-pixel black removal using luminance as alpha
    const imgData = ctx.getImageData(0, 0, width, height);
    const d = imgData.data;
    for (let i = 0; i < d.length; i += 4) {
      const luma = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      if (luma < LUMA_THRESH) {
        d[i + 3] = 0;
      } else if (luma < LUMA_THRESH + LUMA_BLEND) {
        d[i + 3] = Math.round(255 * (luma - LUMA_THRESH) / LUMA_BLEND);
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }, []);

  const flushSeek = useCallback(() => {
    rafId.current = 0;
    const video = videoRef.current;
    if (!video || !video.duration || pendingTime.current < 0) return;
    video.currentTime = pendingTime.current;
    pendingTime.current = -1;
  }, []);

  // Seek on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const video = videoRef.current;
      if (!video || !video.duration) return;
      pendingTime.current = Math.min(latest * video.duration, video.duration - 0.01);
      if (!rafId.current) {
        rafId.current = requestAnimationFrame(flushSeek);
      }
    });
    return () => {
      unsubscribe();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [scrollYProgress, flushSeek]);

  // Redraw canvas on every seeked event
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener("seeked", drawFrame);
    video.addEventListener("loadeddata", drawFrame);
    return () => {
      video.removeEventListener("seeked", drawFrame);
      video.removeEventListener("loadeddata", drawFrame);
    };
  }, [drawFrame]);

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1]);
  const videoOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.92, 1],
    [0, 1, 1, 0.6]
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-cream flex items-center justify-center">
        {/* Ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-sage-muted/15 blur-[80px]" />
        </div>

        {/* Hidden video — used only for seeking */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/video/lotus-bloom.mp4"
          className="hidden"
        />

        {/* Canvas — draws each frame with black pixels removed */}
        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="relative z-10"
        >
          <canvas
            ref={canvasRef}
            width={540}
            height={540}
            className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px] select-none"
          />
        </motion.div>

        {/* Scroll-phased text overlays */}
        {PHASES.map((phase, i) => (
          <PhaseText key={i} phase={phase} scrollYProgress={scrollYProgress} />
        ))}

        {/* Scroll hint */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]),
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-xs text-bark/30 tracking-[0.2em] uppercase">Scroll</p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-bark/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}
