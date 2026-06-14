"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const HeroParticles = dynamic(() => import("./HeroParticles"), { ssr: false });

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: "var(--color-ink)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Layer 0: Particle canvas (full hero) ─────────────────── */}
      <HeroParticles />

      {/* ── Layer 1: Centered top spotlight glow ─────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "70%",
          background:
            "radial-gradient(ellipse 60% 50% at center, rgba(255,87,34,0.09) 0%, rgba(255,87,34,0.03) 45%, transparent 75%)",
          pointerEvents: "none",
          zIndex: 2,
          animation: "aurora-pulse 8s ease-in-out infinite",
        }}
      />

      {/* Secondary cooler glow (depth) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "50%",
          height: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(33,150,243,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
          animation: "aurora-pulse 12s ease-in-out 2s infinite reverse",
        }}
      />

      {/* ── Layer 2: Faint engineering grid ──────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(138,148,166,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138,148,166,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Layer 3: Scan-line shimmer (top → bottom sweep) ──────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.007) 3px, rgba(255,255,255,0.007) 4px)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Layer 4: Content ─────────────────────────────────────── */}
      <div className="section-container" style={{ width: "100%", position: "relative", zIndex: 3 }}>
        <div className="hero-center-layout">
          {/* Headline */}
          <h1
            className="type-display"
            style={{
              color: "var(--color-paper)",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              textAlign: "center",
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards",
            }}
          >
            Built once. <br />
            <span style={{ color: "var(--color-signal)" }}>Wired to run itself.</span>
          </h1>

          {/* Support copy */}
          <p
            className="type-body"
            style={{
              color: "var(--color-steel)",
              marginBottom: "2.5rem",
              lineHeight: 1.75,
              margin: "0 auto 2.5rem",
              textAlign: "center",
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards",
            }}
          >
            We design the storefront, then we install the wiring behind it —
            AI automation, WhatsApp, marketing & e-commerce — so the business
            keeps running without someone pushing buttons all day.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards",
            }}
          >
            <Link
              href="/contact"
              className="btn-signal"
              id="hero-start-project"
              style={{ position: "relative", overflow: "hidden" }}
            >
              Start a Project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {/* Shimmer sweep on button */}
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                  animation: "btn-shimmer 3s linear infinite",
                }}
              />
            </Link>
            <Link href="/work" className="btn-outline" id="hero-view-work">
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* ── Layer 5: Bottom "scroll" hint ────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontFamily: "var(--font-mono)",
          fontSize: "0.62rem",
          color: "var(--color-steel)",
          opacity: 0.35,
          letterSpacing: "0.14em",
          zIndex: 3,
          animation: "scroll-hint 3s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <span>×</span>
        <span style={{ width: "36px", height: "1px", background: "currentColor" }} />
        <span>SCROLL TO EXPLORE</span>
        <span style={{ width: "36px", height: "1px", background: "currentColor" }} />
        <span>×</span>
      </div>

      {/* ── Keyframes injected inline ─────────────────────────────── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes aurora-pulse {
          0%, 100% { transform: scale(1) translate(-50%, 0); opacity: 1; }
          33%       { transform: scale(1.06) translate(-49%, -1%); opacity: 0.85; }
          66%       { transform: scale(0.96) translate(-51%, 1%); opacity: 0.9; }
        }

        @keyframes btn-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes scroll-hint {
          0%, 100% { opacity: 0.35; transform: translateX(-50%) translateY(0); }
          50%       { opacity: 0.55; transform: translateX(-50%) translateY(4px); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes aurora-pulse { 0%, 100% { transform: translate(-50%, 0); opacity: 1; } }
          @keyframes btn-shimmer  { 0%, 100% { background-position: 0 0; } }
          @keyframes scroll-hint  { 0%, 100% { opacity: 0.35; transform: translateX(-50%); } }
          @keyframes fade-in-up   { to { opacity: 1; transform: translateY(0); } }
        }
      `}} />
    </section>
  );
}
