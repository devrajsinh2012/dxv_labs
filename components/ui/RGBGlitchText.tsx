"use client";

import React, { useEffect, useState } from "react";

interface RGBGlitchTextProps {
  text: string;
  className?: string;
}

export default function RGBGlitchText({ text, className = "" }: RGBGlitchTextProps) {
  const [jitter, setJitter] = useState({ x1: -1.5, y1: 0, x2: 1.5, y2: 0, opacity: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      // 12% chance of glitch on any given tick
      if (Math.random() > 0.88) {
        setJitter({
          x1: (Math.random() - 0.5) * 12,
          y1: (Math.random() - 0.5) * 6,
          x2: (Math.random() - 0.5) * 12,
          y2: (Math.random() - 0.5) * 6,
          opacity: Math.random() > 0.95 ? 0.75 : 1,
        });
      } else {
        // Subtle constant chromatic shift
        setJitter({
          x1: -2,
          y1: 0,
          x2: 2,
          y2: 0,
          opacity: 1,
        });
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative select-none overflow-visible ${className}`}
      style={{
        display: "block",
        width: "100%",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(5rem, 14vw, 14rem)",
        fontWeight: 700,
        letterSpacing: "-0.04em",
        lineHeight: 0.85,
        textAlign: "center",
      }}
    >
      {/* Background/Shadow Red Layer */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          color: "#ff003c",
          transform: `translate(${jitter.x1}px, ${jitter.y1}px)`,
          zIndex: 1,
          mixBlendMode: "screen",
          opacity: jitter.opacity * 0.95,
        }}
      >
        {text}
      </span>

      {/* Background/Shadow Cyan Layer */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          color: "#00f0ff",
          transform: `translate(${jitter.x2}px, ${jitter.y2}px)`,
          zIndex: 2,
          mixBlendMode: "screen",
          opacity: jitter.opacity * 0.95,
        }}
      >
        {text}
      </span>

      {/* Foreground Text Layer with repeating RGB subpixel pattern */}
      <span
        className="relative block"
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          zIndex: 3,
          background: "repeating-linear-gradient(90deg, #ff003c 0px, #ff003c 2px, #00f0ff 2px, #00f0ff 4px, #00ff66 4px, #00ff66 6px)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 0 12px rgba(255, 255, 255, 0.25)",
        }}
      >
        {text}
      </span>

      {/* Scanline pattern overlay (gives the authentic CRT rasterized grid feel) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background: "linear-gradient(rgba(10, 10, 10, 0) 50%, rgba(10, 10, 10, 0.4) 50%)",
          backgroundSize: "100% 4px",
        }}
      />
    </div>
  );
}
