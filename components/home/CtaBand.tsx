"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import StarBorder from "@/components/ui/StarBorder";

interface CtaBandProps {
  /** Override the default heading. Default: "Ready to switch it on?" */
  heading?: string;
  /** Override the default subtext. */
  subtext?: string;
  /** Override the CTA button label. Default: "Start a Project" */
  ctaLabel?: string;
}

export default function CtaBand({
  heading = "Ready to switch it on?",
  subtext = "Two project slots open this quarter. Tell us what you're building and we'll tell you if we can help.",
  ctaLabel = "Start a Project",
}: CtaBandProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta-band"
      className="section-pad"
      style={{
        background: "var(--color-ink)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `linear-gradient(rgba(138,148,166,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(138,148,166,0.04) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        pointerEvents: "none",
      }} aria-hidden="true" />

      {/* Crosshairs */}
      <span style={{ position: "absolute", top: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.3 }} aria-hidden="true">×</span>
      <span style={{ position: "absolute", top: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.3 }} aria-hidden="true">×</span>
      <span style={{ position: "absolute", bottom: 16, left: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.3 }} aria-hidden="true">×</span>
      <span style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.3 }} aria-hidden="true">×</span>

      {/* Signal glow blob */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "200px",
        background: "radial-gradient(ellipse, rgba(255,87,34,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} aria-hidden="true" />

      <div className="section-container" style={{ position: "relative" }}>
        {/* Mini stack decoration */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "center" }}>
            {["#FF5722", "#8A94A6", "#4CAF50", "#2196F3", "#9C27B0"].map((color, i) => (
              <div key={i} style={{
                width: `${80 - i * 8}px`,
                height: "6px",
                background: color,
                opacity: 1 - i * 0.15,
                boxShadow: i === 0 ? `0 0 12px ${color}60` : "none",
              }} />
            ))}
          </div>
        </div>

        <span className="type-mono reveal reveal-delay-1" style={{ color: "var(--color-signal)", display: "block", marginBottom: "1rem" }}>
          — STATUS: AVAILABLE
        </span>

        <h2
          className="type-heading reveal reveal-delay-2"
          style={{
            color: "var(--color-paper)",
            marginBottom: "1.25rem",
            maxWidth: "600px",
            margin: "0 auto 1.25rem",
          }}
        >
          {heading}
        </h2>

        <p
          className="type-body reveal reveal-delay-3"
          style={{
            color: "var(--color-steel)",
            margin: "0 auto 2.5rem",
            maxWidth: "480px",
            textAlign: "center",
          }}
        >
          {subtext}
        </p>

        <div className="reveal reveal-delay-4">
          <StarBorder as={Link} href="/contact" className="btn-signal" id="cta-band-start-project" style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}>
            {ctaLabel}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5M11.5 2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </StarBorder>
        </div>

        {/* Mono status line */}
        <p className="type-mono reveal reveal-delay-5" style={{ color: "var(--color-steel)", marginTop: "2.5rem", opacity: 0.5 }}>
          AVAILABILITY: 2 SLOTS OPEN THIS QUARTER
        </p>
      </div>
    </section>
  );
}
