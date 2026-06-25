"use client";

import { useRef, useEffect, useState, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface DecryptedTextProps {
  text: string;
  className?: string;
  /** Duration of the full scramble-to-resolve in ms */
  duration?: number;
  /** Delay before the animation starts (after entering viewport) in ms */
  startDelay?: number;
  /** Play immediately on mount (no IntersectionObserver) */
  playOnMount?: boolean;
}

export default function DecryptedText({
  text,
  className = "",
  duration = 900,
  startDelay = 0,
  playOnMount = false,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [reducedMotion, setReducedMotion] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const runDecrypt = useCallback(() => {
    if (reducedMotion) {
      setDisplayText(text);
      return;
    }
    const start = performance.now();
    const chars = text.split("");

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * chars.length);

      setDisplayText(
        chars
          .map((c, i) => {
            if (c === " ") return " ";
            if (i < resolvedCount) return c;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(text);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [text, duration, reducedMotion]);

  // IntersectionObserver
  useEffect(() => {
    if (playOnMount) {
      const timer = setTimeout(() => {
        runDecrypt();
      }, startDelay);
      return () => clearTimeout(timer);
    }

    if (!ref.current) return;

    let observer: IntersectionObserver | null = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(runDecrypt, startDelay);
          if (observer) {
            observer.disconnect();
            observer = null;
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [playOnMount, runDecrypt, startDelay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}
