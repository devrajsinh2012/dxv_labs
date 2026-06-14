"use client";

import { useEffect, useRef, useState } from "react";

type ModuleConfig = {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  offsetY: number;
  offsetX: number;
  zIndex: number;
};

const MODULES: ModuleConfig[] = [
  { id: "websites",   label: "Websites",        shortLabel: "WEB",  color: "#FF5722", offsetY: 0,    offsetX: 0,   zIndex: 5 },
  { id: "ai",         label: "AI Automation",   shortLabel: "AI",   color: "#8A94A6", offsetY: -52,  offsetX: 28,  zIndex: 4 },
  { id: "whatsapp",   label: "WhatsApp",        shortLabel: "WA",   color: "#4CAF50", offsetY: -104, offsetX: 56,  zIndex: 3 },
  { id: "marketing",  label: "Marketing Auto.", shortLabel: "MKT",  color: "#2196F3", offsetY: -156, offsetX: 84,  zIndex: 2 },
  { id: "ecommerce",  label: "E-commerce",      shortLabel: "ECOM", color: "#9C27B0", offsetY: -208, offsetX: 112, zIndex: 1 },
];

const W = 160;
const H = 48;
const D = 36; // depth

export default function AxonometricStack() {
  const groupRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  // Scroll-linked rotation
  useEffect(() => {
    const onScroll = () => {
      if (!groupRef.current) return;
      const progress = Math.min(window.scrollY / 600, 1);
      const rotY = -35 + progress * 8;
      groupRef.current.style.transform = `rotateX(25deg) rotateY(${rotY}deg)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const faceStyle = (face: string, color: string): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "absolute",
      backfaceVisibility: "hidden",
    };
    switch (face) {
      case "front":
        return { ...base, width: W, height: H, background: color === "#FF5722" ? "#2a1810" : "#1e2027", borderTop: `2px solid ${color}30`, left: 0, top: 0 };
      case "top":
        return { ...base, width: W, height: D, background: color === "#FF5722" ? "#3a2010" : "#2a2c35", transformOrigin: "top center", transform: `rotateX(-90deg) translateZ(0px)`, left: 0, top: 0 };
      case "right":
        return { ...base, width: D, height: H, background: color === "#FF5722" ? "#1a0e08" : "#1a1c23", transformOrigin: "left center", transform: `rotateY(90deg)`, left: W, top: 0 };
      default:
        return base;
    }
  };

  return (
    <div
      className="axon-scene"
      style={{
        width: "100%",
        height: "420px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      role="img"
      aria-label="Axonometric stack of DxV Labs services: Websites, AI Automation, WhatsApp, Marketing, E-commerce"
    >
      <div
        ref={groupRef}
        className="axon-group"
        style={{
          position: "relative",
          width: W + D + 112,
          height: 260,
          transformStyle: "preserve-3d",
          transform: "rotateX(25deg) rotateY(-35deg)",
          marginTop: "80px",
        }}
      >
        {MODULES.map((mod, i) => (
          <div
            key={mod.id}
            className="axon-module"
            onMouseEnter={() => setHoveredId(mod.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              position: "absolute",
              width: W + D,
              height: H + D,
              transformStyle: "preserve-3d",
              left: mod.offsetX,
              top: -mod.offsetY + 200,
              zIndex: mod.zIndex,
              transform: hoveredId === mod.id
                ? "translateZ(14px)"
                : "translateZ(0px)",
              transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
              cursor: "pointer",
              opacity: loaded ? 1 : 0,
              transitionDelay: loaded ? "0ms" : `${i * 120}ms`,
            }}
          >
            {/* Front face */}
            <div style={faceStyle("front", mod.color)}>
              <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                gap: "10px",
              }}>
                {/* Signal dot */}
                <div style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: mod.color,
                  boxShadow: hoveredId === mod.id ? `0 0 8px ${mod.color}` : "none",
                  flexShrink: 0,
                  transition: "box-shadow 0.3s ease",
                }} />
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: hoveredId === mod.id ? "#fff" : "rgba(255,255,255,0.6)",
                  transition: "color 0.3s ease",
                }}>
                  [{String(i + 1).padStart(2, "0")}] {mod.label}
                </span>
              </div>
              {/* Conduit line at right edge */}
              {i < MODULES.length - 1 && (
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  width: 2,
                  height: hoveredId === mod.id ? "200%" : "150%",
                  background: `linear-gradient(to bottom, ${mod.color}80, transparent)`,
                  transform: "translateY(-30%)",
                  transition: "height 0.4s ease",
                }} />
              )}
            </div>

            {/* Top face */}
            <div style={{
              position: "absolute",
              width: W,
              height: D,
              background: mod.color === "#FF5722" ? "#3a2010" : "#2a2c35",
              transformOrigin: "top center",
              transform: `rotateX(-90deg)`,
              left: 0,
              top: 0,
              backfaceVisibility: "hidden",
              borderLeft: `1px solid ${mod.color}20`,
              borderRight: `1px solid ${mod.color}10`,
            }} />

            {/* Right face */}
            <div style={{
              position: "absolute",
              width: D,
              height: H,
              background: mod.color === "#FF5722" ? "#1a0e08" : "#1a1c23",
              transformOrigin: "left center",
              transform: `rotateY(90deg)`,
              left: W,
              top: 0,
              backfaceVisibility: "hidden",
            }}>
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.5rem",
                color: `${mod.color}80`,
                position: "absolute",
                bottom: 4,
                left: 4,
                letterSpacing: "0.05em",
              }}>
                {mod.shortLabel}
              </span>
            </div>
          </div>
        ))}

        {/* SVG conduit overlay */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
          }}
          aria-hidden="true"
        >
          {MODULES.slice(0, -1).map((mod, i) => (
            <line
              key={`conduit-${i}`}
              className="conduit-path"
              x1={mod.offsetX + W}
              y1={-mod.offsetY + 200 + H / 2}
              x2={MODULES[i + 1].offsetX + W}
              y2={-MODULES[i + 1].offsetY + 200 + H / 2}
              style={{ animationDelay: `${0.8 + i * 0.15}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Hovered module tooltip */}
      {hoveredId && (
        <div style={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--color-signal)",
          textTransform: "uppercase",
          opacity: 0.8,
        }}>
          {MODULES.find(m => m.id === hoveredId)?.label}
        </div>
      )}
    </div>
  );
}
