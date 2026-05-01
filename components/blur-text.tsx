"use client";

import { useRef } from "react";
import { Fragment } from "react";
import { motion, useInView } from "framer-motion";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/** Character-by-character blur reveal — words never break mid-character */
export function BlurText({
  text,
  className = "",
  delay = 0,
  charDelay = 0.025,
  once = true,
  as: Tag = "span",
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>, { once, margin: "-60px" });

  const words = text.split(" ");

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, wordIdx) => {
        const charsBefore = words.slice(0, wordIdx).join("").length + wordIdx;
        return (
          <Fragment key={wordIdx}>
            {wordIdx > 0 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: delay + charsBefore * charDelay }}
                style={{ whiteSpace: "pre" }}
                className="inline-block"
              >
                {" "}
              </motion.span>
            )}
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                  transition={{
                    duration: 0.55,
                    delay: delay + (charsBefore + charIdx) * charDelay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </Fragment>
        );
      })}
    </Tag>
  );
}

type BlurWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "div";
};

/** Word-by-word blur + rise reveal — for body text and subtitles */
export function BlurWords({
  text,
  className = "",
  delay = 0,
  wordDelay = 0.08,
  once = true,
  as: Tag = "div",
}: BlurWordsProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<HTMLElement>, { once, margin: "-60px" });

  const words = text.split(" ");

  return (
    // @ts-expect-error polymorphic ref
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(14px)", y: 10 }}
          animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
          transition={{
            duration: 0.65,
            delay: delay + i * wordDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

type BlurLineProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

/** Single-element blur reveal — wraps arbitrary JSX */
export function BlurReveal({ children, className = "", delay = 0, once = true }: BlurLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(16px)", y: 12 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
