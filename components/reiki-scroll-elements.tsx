"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Lotus flower that blooms open as you scroll through it.
 * Petals rotate outward from center, staggered.
 */
export function LotusBloom({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const petalColors = [
    "var(--color-sage)",
    "var(--color-sage-light)",
    "var(--color-terracotta-light)",
    "var(--color-sage-muted)",
    "var(--color-honey)",
    "var(--color-sage)",
    "var(--color-terracotta)",
    "var(--color-sage-light)",
  ];

  const rotation = useTransform(scrollYProgress, [0.1, 0.9], [0, 360]);
  const centerScale = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <div ref={ref} className={`relative py-20 overflow-hidden ${className}`}>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {petalColors.map((color, i) => {
            const angle = (360 / petalColors.length) * i;
            return (
              <LotusPetal
                key={i}
                scrollProgress={scrollYProgress}
                baseAngle={angle}
                color={color}
                index={i}
                total={petalColors.length}
              />
            );
          })}
          {/* Center circle */}
          <motion.div
            style={{ scale: centerScale, opacity: centerOpacity }}
            className="absolute inset-0 m-auto w-8 h-8 md:w-10 md:h-10 rounded-full bg-honey/60"
          />
          {/* Outer rotation ring */}
          <motion.div
            style={{ rotate: rotation }}
            className="absolute inset-0 m-auto w-52 h-52 md:w-72 md:h-72 rounded-full border border-dashed border-sage/15"
          />
        </div>
      </div>
    </div>
  );
}

function LotusPetal({
  scrollProgress,
  baseAngle,
  color,
  index,
  total,
}: {
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  baseAngle: number;
  color: string;
  index: number;
  total: number;
}) {
  const delay = index / total;
  const start = 0.15 + delay * 0.25;
  const end = start + 0.35;

  const petalScale = useTransform(scrollProgress, [start, end], [0, 1]);
  const petalRotate = useTransform(
    scrollProgress,
    [start, end],
    [baseAngle, baseAngle + 15]
  );
  const petalOpacity = useTransform(scrollProgress, [start, end - 0.1], [0, 0.7]);
  const petalY = useTransform(scrollProgress, [start, end], [10, -20]);

  return (
    <motion.div
      style={{
        rotate: petalRotate,
        scale: petalScale,
        opacity: petalOpacity,
        y: petalY,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <svg width="40" height="70" viewBox="0 0 40 70" className="md:w-[50px] md:h-[85px]">
        <path
          d="M20 70 C20 70, 0 40, 0 25 C0 11, 9 0, 20 0 C31 0, 40 11, 40 25 C40 40, 20 70, 20 70Z"
          fill={color}
          opacity="0.6"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Seven chakra points that glow and rotate as you scroll.
 * Arranged vertically like energy centers along the spine.
 */
export function ChakraSpine({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const chakras = [
    { color: "#E74C3C", name: "Root" },
    { color: "#E67E22", name: "Sacral" },
    { color: "#F1C40F", name: "Solar" },
    { color: "#8BA888", name: "Heart" },
    { color: "#5DADE2", name: "Throat" },
    { color: "#8E44AD", name: "Third Eye" },
    { color: "#D5A6E6", name: "Crown" },
  ];

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);
  const containerRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div ref={ref} className={`relative py-24 overflow-hidden ${className}`}>
      <div className="flex items-center justify-center">
        <motion.div
          style={{ rotate: containerRotate }}
          className="relative flex flex-col items-center gap-4 md:gap-5"
        >
          {/* Connecting energy line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-sage/10">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-terracotta/40 via-sage/40 to-sage-light/40"
            />
          </div>

          {chakras.map((chakra, i) => (
            <ChakraPoint
              key={chakra.name}
              color={chakra.color}
              index={i}
              total={chakras.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ChakraPoint({
  color,
  index,
  total,
  scrollProgress,
}: {
  color: string;
  index: number;
  total: number;
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const delay = index / total;
  const start = 0.1 + delay * 0.5;

  const scale = useTransform(scrollProgress, [start, start + 0.15], [0.3, 1]);
  const opacity = useTransform(scrollProgress, [start, start + 0.12], [0.2, 0.8]);
  const glow = useTransform(scrollProgress, [start, start + 0.15], [0, 12]);
  const innerRotate = useTransform(scrollProgress, [0, 1], [0, 360 + index * 45]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        boxShadow: useTransform(glow, (v) => `0 0 ${v}px ${v / 2}px ${color}40`),
      }}
      className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: `${color}25` }}
      />
      <motion.div
        style={{ rotate: innerRotate, borderColor: color }}
        className="w-4 h-4 md:w-5 md:h-5 rounded-full border-2"
      />
    </motion.div>
  );
}

/**
 * Flowing energy wave — a sine-wave SVG path that draws itself as you scroll.
 * Represents Ki/energy flowing through meridians.
 */
export function EnergyFlow({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);
  const pathOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.8, 0.95], [0, 1, 1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [0, 0.6, 0]);
  const dotProgress = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <div ref={ref} className={`relative py-12 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        className="w-full h-auto max-h-32"
        preserveAspectRatio="none"
      >
        {/* Glow behind path */}
        <motion.path
          d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,80 1200,60"
          fill="none"
          stroke="var(--color-sage-muted)"
          strokeWidth="8"
          strokeLinecap="round"
          style={{ pathLength, opacity: glowOpacity }}
          filter="url(#glow)"
        />
        {/* Main path */}
        <motion.path
          d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,60 C1050,20 1200,80 1200,60"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength, opacity: pathOpacity }}
        />
        {/* Second parallel path */}
        <motion.path
          d="M0,65 C150,25 300,105 450,65 C600,25 750,105 900,65 C1050,25 1200,85 1200,65"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="8 12"
          style={{ pathLength, opacity: pathOpacity }}
        />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Traveling energy dot */}
      <motion.div
        style={{
          left: useTransform(dotProgress, [0, 1], ["0%", "100%"]),
          opacity: useTransform(dotProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
        }}
        className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sage shadow-lg shadow-sage/40"
      />
    </div>
  );
}

/**
 * Sacred geometry — flower of life pattern that rotates and builds with scroll.
 */
export function SacredGeometry({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.6, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.95], [0, 0.5, 0.5, 0]);

  const circles = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI * 2 * i) / 6;
    const cx = 100 + Math.cos(angle) * 35;
    const cy = 100 + Math.sin(angle) * 35;
    return { cx, cy };
  });

  return (
    <div ref={ref} className={`relative py-16 flex items-center justify-center ${className}`}>
      <motion.div style={{ rotate, scale, opacity }}>
        <svg width="200" height="200" viewBox="0 0 200 200" className="w-32 h-32 md:w-48 md:h-48">
          {/* Center circle */}
          <circle
            cx="100"
            cy="100"
            r="35"
            fill="none"
            stroke="var(--color-sage)"
            strokeWidth="0.8"
            opacity="0.4"
          />
          {/* Outer circles forming flower of life */}
          {circles.map((c, i) => (
            <circle
              key={i}
              cx={c.cx}
              cy={c.cy}
              r="35"
              fill="none"
              stroke={i % 2 === 0 ? "var(--color-sage)" : "var(--color-terracotta)"}
              strokeWidth="0.8"
              opacity="0.3"
            />
          ))}
          {/* Outer boundary */}
          <circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="var(--color-sand)"
            strokeWidth="0.5"
            opacity="0.3"
          />
        </svg>
      </motion.div>
    </div>
  );
}

/**
 * Hands with energy — two hand silhouettes with energy orb between them.
 * The orb pulses and glows based on scroll.
 */
export function HealingHands({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const handSpread = useTransform(scrollYProgress, [0.1, 0.5], [0, 30]);
  const handSpreadNeg = useTransform(scrollYProgress, [0.1, 0.5], [0, -30]);
  const orbScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1.2, 0.8]);
  const orbGlow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 20, 8]);
  const orbOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const rotate1 = useTransform(scrollYProgress, [0.1, 0.5], [10, -5]);
  const rotate2 = useTransform(scrollYProgress, [0.1, 0.5], [-10, 5]);

  return (
    <div ref={ref} className={`relative py-20 flex items-center justify-center ${className}`}>
      <div className="relative w-56 h-40 md:w-72 md:h-52">
        {/* Left hand */}
        <motion.div
          style={{ x: handSpreadNeg, rotate: rotate1 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-5xl md:text-6xl opacity-40 select-none"
        >
          <svg width="60" height="80" viewBox="0 0 60 80" className="md:w-[75px] md:h-[100px]">
            <path
              d="M45,80 L45,35 C45,30 42,25 38,25 L38,15 C38,10 35,8 32,8 C29,8 26,10 26,15 L26,25 C22,25 19,28 19,32 L19,25 C19,20 16,17 13,17 C10,17 7,20 7,25 L7,55 C7,68 15,80 30,80 Z"
              fill="var(--color-bark)"
              opacity="0.15"
            />
          </svg>
        </motion.div>

        {/* Right hand (mirrored) */}
        <motion.div
          style={{ x: handSpread, rotate: rotate2 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl md:text-6xl opacity-40 select-none scale-x-[-1]"
        >
          <svg width="60" height="80" viewBox="0 0 60 80" className="md:w-[75px] md:h-[100px]">
            <path
              d="M45,80 L45,35 C45,30 42,25 38,25 L38,15 C38,10 35,8 32,8 C29,8 26,10 26,15 L26,25 C22,25 19,28 19,32 L19,25 C19,20 16,17 13,17 C10,17 7,20 7,25 L7,55 C7,68 15,80 30,80 Z"
              fill="var(--color-bark)"
              opacity="0.15"
            />
          </svg>
        </motion.div>

        {/* Energy orb */}
        <motion.div
          style={{
            scale: orbScale,
            opacity: orbOpacity,
            boxShadow: useTransform(
              orbGlow,
              (v) => `0 0 ${v}px ${v / 2}px rgba(139, 168, 136, 0.4)`
            ),
          }}
          className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-sage-light/50 via-sage/30 to-honey/30"
        />

        {/* Inner orb detail */}
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.25, 0.55], [0, 1]),
            opacity: useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 0.8, 0]),
          }}
          className="absolute inset-0 m-auto w-6 h-6 md:w-8 md:h-8 rounded-full bg-warm-white/60"
        />
      </div>
    </div>
  );
}
