"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PHASES: {
  range: [number, number, number, number];
  text: string;
  subtext?: string;
  position: string;
  align: string;
  style: string;
}[] = [
  {
    range: [0, 0.1, 0.28, 0.4],
    text: "Something within is asking for care.",
    subtext: "You don’t have to carry it alone.",
    position: "bottom-[20%]",
    align: "text-center",
    style: "font-heading text-2xl md:text-3xl lg:text-4xl text-bark/55 italic",
  },
  {
    range: [0.38, 0.52, 0.65, 0.75],
    text: "Reiki meets you exactly where you are.",
    position: "top-[22%]",
    align: "text-center",
    style: "font-heading text-2xl md:text-3xl lg:text-4xl text-sage-dark/60 italic",
  },
  {
    range: [0.72, 0.83, 0.95, 1.0],
    text: "This is the beginning.",
    position: "bottom-[18%]",
    align: "text-center",
    style: "font-heading text-3xl md:text-4xl lg:text-5xl text-terracotta/70 italic",
  },
];

function PhaseText({
  phase,
  scrollYProgress,
}: {
  phase: typeof PHASES[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const [enter, clearIn, holdEnd, exit] = phase.range;
  const opacity = useTransform(scrollYProgress, [enter, clearIn, holdEnd, exit], [0, 1, 1, 0]);
  const blurVal = useTransform(scrollYProgress, [enter, clearIn, holdEnd, exit], [14, 0, 0, 0]);
  const y = useTransform(scrollYProgress, [enter, clearIn, holdEnd, exit], [18, 0, 0, -18]);
  const filter = useTransform(blurVal, (v) => `blur(${v}px)`);

  return (
    <motion.div
      style={{ opacity, filter, y }}
      className={`absolute left-0 right-0 px-8 ${phase.position} ${phase.align} pointer-events-none`}
    >
      <p className={phase.style}>{phase.text}</p>
      {phase.subtext && (
        <p className={`${phase.style} mt-2 opacity-80`}>{phase.subtext}</p>
      )}
    </motion.div>
  );
}

const NUM_FRAMES = 60;
const CANVAS_RES = 400;
const LUMA_THRESH = 22;
const LUMA_BLEND = 85;

function applyLumaAlpha(data: Uint8ClampedArray) {
  for (let i = 0; i < data.length; i += 4) {
    const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (luma < LUMA_THRESH) {
      data[i + 3] = 0;
    } else if (luma < LUMA_THRESH + LUMA_BLEND) {
      data[i + 3] = Math.round(255 * (luma - LUMA_THRESH) / LUMA_BLEND);
    }
  }
}

export function LotusScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const framesRef = useRef<ImageData[]>([]);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Play video through at 4× speed, capture processed frames via RAF.
  // No seeking during scroll — putImageData is a pure memory copy.
  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    ctxRef.current = ctx;

    const { width, height } = canvas;
    const frames: (ImageData | null)[] = new Array(NUM_FRAMES).fill(null);
    let rafHandle = 0;
    let alive = true;

    function captureCurrentFrame(vw: number, vh: number) {
      const scale = Math.min(width / vw, height / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      const dx = (width - dw) / 2;
      const dy = (height - dh) / 2;
      ctx!.clearRect(0, 0, width, height);
      ctx!.drawImage(video!, dx, dy, dw, dh);
      const imgData = ctx!.getImageData(0, 0, width, height);
      applyLumaAlpha(imgData.data);
      return imgData;
    }

    function loop() {
      if (!alive || !video) return;
      const duration = video.duration;
      if (!duration || video.readyState < 2) {
        rafHandle = requestAnimationFrame(loop);
        return;
      }

      const vw = video.videoWidth || 1920;
      const vh = video.videoHeight || 1080;
      const progress = video.currentTime / duration;
      const idx = Math.min(Math.floor(progress * NUM_FRAMES), NUM_FRAMES - 1);

      if (!frames[idx]) {
        frames[idx] = captureCurrentFrame(vw, vh);
        // Show live as we capture so canvas isn't blank
        ctx!.putImageData(frames[idx]!, 0, 0);
      }

      if (video.ended || video.currentTime >= duration * 0.999) {
        video.pause();
        // Fill any gaps with nearest captured frame
        let last = frames.find((f) => f !== null) ?? null;
        for (let i = 0; i < frames.length; i++) {
          if (frames[i]) { last = frames[i]; }
          else { frames[i] = last; }
        }
        // Reverse pass to fill leading gaps
        let first = frames[frames.length - 1];
        for (let i = frames.length - 1; i >= 0; i--) {
          if (frames[i]) { first = frames[i]; }
          else { frames[i] = first; }
        }
        framesRef.current = frames as ImageData[];
        setReady(true);
        return;
      }

      rafHandle = requestAnimationFrame(loop);
    }

    function startCapture() {
      if (!alive || !video) return;
      video.currentTime = 0;
      video.playbackRate = 4;
      video.muted = true;
      video.play().then(() => {
        rafHandle = requestAnimationFrame(loop);
      }).catch(() => {});
    }

    if (video.readyState >= 1) {
      startCapture();
    } else {
      video.addEventListener("loadedmetadata", startCapture, { once: true });
    }

    return () => {
      alive = false;
      cancelAnimationFrame(rafHandle);
      video.pause();
    };
  }, []);

  // Scroll handler: O(1) — just a memory copy, zero jitter
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const frames = framesRef.current;
      const ctx = ctxRef.current;
      if (!frames.length || !ctx || !ready) return;
      const idx = Math.min(Math.floor(latest * frames.length), frames.length - 1);
      ctx.putImageData(frames[idx], 0, 0);
    });
    return unsubscribe;
  }, [scrollYProgress, ready]);

  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.08, 0.92, 1], [0, 1, 1, 0.6]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-cream flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-sage-muted/15 blur-[80px]" />
        </div>

        {/* Video plays through once at 4× for frame extraction, then pauses */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/video/lotus-bloom.mp4"
          className="hidden"
        />

        <motion.div
          style={{ scale: videoScale, opacity: videoOpacity }}
          className="relative z-10"
        >
          <canvas
            ref={canvasRef}
            width={CANVAS_RES}
            height={CANVAS_RES}
            className="w-[340px] h-[340px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px] select-none"
          />
        </motion.div>

        {PHASES.map((phase, i) => (
          <PhaseText key={i} phase={phase} scrollYProgress={scrollYProgress} />
        ))}

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.08], [1, 0]) }}
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
