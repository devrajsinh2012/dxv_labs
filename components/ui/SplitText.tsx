"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  /** "chars" | "words" */
  splitBy?: "chars" | "words";
  /** Delay between each element in ms */
  delay?: number;
  /** Initial delay before first element in ms */
  baseDelay?: number;
  /** Duration of each element animation in seconds */
  duration?: number;
  /** Direction the text slides in from */
  direction?: "up" | "down";
}

export default function SplitText({
  text,
  className = "",
  splitBy = "chars",
  delay = 30,
  baseDelay = 0,
  duration = 0.5,
  direction = "up",
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const elements = splitBy === "chars" ? text.split("") : text.split(" ");
  const yFrom = direction === "up" ? 20 : -20;

  if (reducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      ref={ref}
      className={className}
      aria-label={text}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: el === " " ? "pre" : "normal" }}
          initial={{ opacity: 0, y: yFrom, filter: "blur(4px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration,
            delay: (baseDelay + i * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </span>
  );
}
