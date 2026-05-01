import { type ReactNode } from "react";

type FloatingElementsProps = {
  children: ReactNode;
  /** Additional wrapper classes */
  className?: string;
  /** Color scheme */
  variant?: "sage" | "warm" | "neutral";
};

/**
 * Adds subtle floating decorative shapes behind section content.
 * Uses CSS transforms only (no JS) for GPU-accelerated performance.
 * Wrap around a section's content — the shapes render behind via z-index.
 */
export function FloatingElements({
  children,
  className = "",
  variant = "sage",
}: FloatingElementsProps) {
  const colors = {
    sage: {
      a: "bg-sage/8",
      b: "bg-sage-light/6",
      c: "bg-terracotta/5",
    },
    warm: {
      a: "bg-terracotta/8",
      b: "bg-honey/6",
      c: "bg-sage/5",
    },
    neutral: {
      a: "bg-sand/30",
      b: "bg-blush/20",
      c: "bg-sage/6",
    },
  }[variant];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Floating shape A — large circle, slow drift */}
      <div
        className={`absolute -top-20 -right-16 w-80 h-80 rounded-full ${colors.a} blur-3xl animate-float-slow pointer-events-none`}
        aria-hidden="true"
      />

      {/* Floating shape B — organic blob, offset timing */}
      <div
        className={`absolute top-1/2 -left-24 w-64 h-64 rounded-[40%_60%_55%_45%/55%_40%_60%_45%] ${colors.b} blur-2xl animate-float-drift pointer-events-none`}
        aria-hidden="true"
      />

      {/* Floating shape C — small circle, gentle pulse */}
      <div
        className={`absolute bottom-16 right-1/4 w-40 h-40 rounded-full ${colors.c} blur-2xl animate-float-gentle pointer-events-none`}
        aria-hidden="true"
      />

      {/* Content renders above shapes */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
