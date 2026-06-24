"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  angle: number;
  color: string;
}

interface ClickSparkProps {
  children: React.ReactNode;
  /** Spark color — defaults to signal orange */
  sparkColor?: string;
  /** Number of sparks per click */
  sparkCount?: number;
  /** Spark travel distance in px */
  sparkSize?: number;
}

export default function ClickSpark({
  children,
  sparkColor = "#FF5722",
  sparkCount = 8,
  sparkSize = 32,
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const idRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (reducedMotion || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
        id: ++idRef.current,
        x,
        y,
        angle: (360 / sparkCount) * i,
        color: sparkColor,
      }));

      setSparks((prev) => [...prev, ...newSparks]);
      // Clean up after animation
      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => !newSparks.some((n) => n.id === s.id)));
      }, 600);
    },
    [reducedMotion, sparkCount, sparkColor]
  );

  return (
    <span ref={containerRef} style={{ position: "relative", display: "inline-block" }} onClick={handleClick}>
      {children}

      {/* Sparks rendered via SVG */}
      {sparks.length > 0 && (
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
        >
          {sparks.map((spark) => {
            const rad = (spark.angle * Math.PI) / 180;
            const tx = Math.cos(rad) * sparkSize;
            const ty = Math.sin(rad) * sparkSize;

            return (
              <g key={spark.id}>
                <line
                  x1={spark.x}
                  y1={spark.y}
                  x2={spark.x}
                  y2={spark.y}
                  stroke={spark.color}
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <animate
                    attributeName="x2"
                    from={spark.x}
                    to={spark.x + tx}
                    dur="0.35s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="y2"
                    from={spark.y}
                    to={spark.y + ty}
                    dur="0.35s"
                    fill="freeze"
                  />
                  <animate
                    attributeName="opacity"
                    values="1;1;0"
                    dur="0.5s"
                    fill="freeze"
                  />
                </line>
              </g>
            );
          })}
        </svg>
      )}
    </span>
  );
}
