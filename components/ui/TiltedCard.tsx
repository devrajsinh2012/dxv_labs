"use client";

import { useRef, useState, useCallback, useEffect } from "react";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Maximum tilt in degrees — kept subtle */
  maxTilt?: number;
  /** Scale on hover */
  scaleOnHover?: number;
}

export default function TiltedCard({
  children,
  className = "",
  style,
  maxTilt = 6,
  scaleOnHover = 1.02,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", h);

    const pm = window.matchMedia("(pointer: coarse)");
    setIsMobile(pm.matches);
    const ph = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    pm.addEventListener("change", ph);

    return () => {
      mq.removeEventListener("change", h);
      pm.removeEventListener("change", ph);
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || isMobile || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: -dy * maxTilt, y: dx * maxTilt });
    },
    [reducedMotion, isMobile, maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const disableTilt = reducedMotion || isMobile;
  const transform = disableTilt
    ? hovered
      ? `scale(${scaleOnHover})`
      : "none"
    : hovered
    ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${scaleOnHover})`
    : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transform,
        transition: hovered ? "transform 0.1s ease" : "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
        willChange: "transform",
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
