"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const LiquidEther = dynamic(() => import("../ui/LiquidEther"), { ssr: false });
const DotField = dynamic(() => import("../ui/DotField"), { ssr: false });
import BlurText from "../ui/BlurText";
import DecryptedText from "../ui/DecryptedText";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        /* Base: near-black per reactbits.dev reference */
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/*
       * ── BACKGROUND LAYERS (bottom → top) ─────────────────────────
       * Layer 1 (z:1): LiquidEther — flowing organic fluid simulation
       * Layer 2 (z:2): DotField — subtle interactive dot grid
       * Layer 3 (z:3): Hero content
       * Props match liquidether.md reference.
       */}

      {/* ── Layer 1: LiquidEther — flowing fluid atmosphere ───── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <LiquidEther
          colors={['#0a0a0a', '#8a2b05', '#ec490a']}
          mouseForce={20}
          cursorSize={80}
          isViscous={false}
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.25}
          BFECC={false}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.75}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* ── Layer 2: DotField — interactive dot grid ─────────────── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <DotField
          dotRadius={3}
          dotSpacing={25}
          cursorRadius={500}
          cursorForce={0.10}
          bulgeOnly={true}
          bulgeStrength={67}
          glowRadius={2}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(236, 73, 10, 0.3)"
          gradientTo="rgba(236, 73, 10, 0.1)"
          glowColor="#ec490a"
        />
      </div>

      {/* ── Layer 3: Content (headline + CTAs) ──────────────────── */}
      <div className="section-container" style={{ width: "100%", position: "relative", zIndex: 10 }}>
        <div className="hero-center-layout">
          {/* Headline */}
          <h1
            className="type-display"
            style={{
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BlurText
              text="Built once."
              delay={150}
              baseDelay={100}
              animateBy="words"
              direction="bottom"
              className="text-paper"
            />
            <DecryptedText
              text="Wired to run itself."
              className="text-signal"
              duration={1200}
              startDelay={800}
              playOnMount={true}
            />

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
              animation: "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards",
            }}
          >
            We design the storefront, then wire in the systems behind it: AI
            automation, WhatsApp, marketing, and e-commerce. The business keeps
            running without anyone pushing buttons all day.
          </p>

          {/* CTAs */}
          <div
            className="hero-ctas"
            style={{
              opacity: 0,
              transform: "translateY(24px)",
              animation: "fade-in-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.0s forwards",
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

      {/* ── Scroll hint ────────────────────────────────────────────── */}
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
          zIndex: 10,
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

      {/* ── Keyframes ─────────────────────────────────────────────── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes btn-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        @keyframes scroll-hint {
          0%, 100% { opacity: 0.35; transform: translateX(-50%) translateY(0); }
          50%       { opacity: 0.55; transform: translateX(-50%) translateY(4px); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes btn-shimmer  { 0%, 100% { background-position: 0 0; } }
          @keyframes scroll-hint  { 0%, 100% { opacity: 0.35; transform: translateX(-50%); } }
          @keyframes fade-in-up   { to { opacity: 1; transform: translateY(0); } }
        }
      `}} />
    </section>
  );
}
