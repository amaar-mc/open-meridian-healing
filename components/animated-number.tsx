"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedNumberProps = {
  /** The target number to count up to */
  value: number;
  /** Duration in seconds */
  duration?: number;
  /** Prefix string (e.g. "$") */
  prefix?: string;
  /** Suffix string (e.g. "%", "+") */
  suffix?: string;
  /** Number of decimal places */
  decimals?: number;
  className?: string;
};

/**
 * Counts up a number from 0 to `value` when it scrolls into view.
 * Uses framer-motion's `animate` for buttery smooth interpolation.
 */
export function AnimatedNumber({
  value,
  duration = 1.2,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        setDisplay(`${prefix}${latest.toFixed(decimals)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
