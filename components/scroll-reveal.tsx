"use client";

import { type ReactNode, type RefObject, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type Variant = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

type AnimationState = Record<string, number>;

const VARIANTS: Record<Variant, { hidden: AnimationState; visible: AnimationState }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * Organic spring config — gentle, no overshoot. Tuned for a wellness site.
 */
const ORGANIC_SPRING = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
  mass: 0.8,
};

/**
 * Returns a scroll progress value (0-1) for a given ref element.
 * `offset` controls when tracking starts/ends relative to the viewport.
 * Default: starts when the element's top enters the bottom of the viewport,
 * ends when the element's bottom exits the top.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return scrollYProgress;
}

/**
 * Derives a transformed value from scroll progress — useful for parallax,
 * opacity fades, scale shifts, etc.
 */
export function useScrollTransform(
  progress: MotionValue<number>,
  inputRange: number[],
  outputRange: number[],
): MotionValue<number> {
  return useTransform(progress, inputRange, outputRange);
}

type ScrollRevealProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  /** Use spring physics instead of tween */
  spring?: boolean;
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  spring = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });
  const v = VARIANTS[variant];

  const transition = spring
    ? { ...ORGANIC_SPRING, delay }
    : { duration, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: v.hidden, visible: v.visible }}
      transition={transition}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerContainerProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
};

export function StaggerContainer({
  children,
  stagger = 0.1,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={ORGANIC_SPRING}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

type ParallaxProps = {
  children: ReactNode;
  /** Pixel offset for parallax travel distance */
  offset?: number;
  className?: string;
};

export function Parallax({
  children,
  offset = 50,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref);
  const y = useTransform(progress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
