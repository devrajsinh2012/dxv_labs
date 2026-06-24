"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Glow color — defaults to signal orange */
  spotlightColor?: string;
  /** 0–1, how strong the glow is */
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className = "",
  style,
  spotlightColor = "#FF5722",
  spotlightSize = 300,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    const pointerMq = window.matchMedia("(pointer: coarse)");
    setIsMobile(pointerMq.matches);
    const pointerHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    pointerMq.addEventListener("change", pointerHandler);

    return () => {
      mq.removeEventListener("change", handler);
      pointerMq.removeEventListener("change", pointerHandler);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || isMobile || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    },
    [reducedMotion, isMobile]
  );

  const disableGlow = reducedMotion || isMobile;
  const alpha = isHovered && !disableGlow ? "0.22" : "0";

  // Convert hex color to rgb for radial gradient
  const hex = spotlightColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--color-surface-dark)",
        border: "1px solid rgba(138,148,166,0.18)",
        transition: "border-color 0.25s ease",
        borderColor: isHovered && !disableGlow
          ? `rgba(${r},${g},${b},0.45)`
          : "rgba(138,148,166,0.18)",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPos({ x: -9999, y: -9999 });
      }}
    >
      {/* Spotlight glow overlay */}
      {!disableGlow && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `radial-gradient(${spotlightSize}px circle at ${pos.x}px ${pos.y}px, rgba(${r},${g},${b},${alpha}), transparent 70%)`,
            transition: "opacity 0.15s ease",
            zIndex: 0,
          }}
        />
      )}
      {/* Content above the glow */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
