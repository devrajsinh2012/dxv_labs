"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const STEPS = [
  { num: "01", label: "Discover", desc: "We audit your current setup, map the gaps, and define scope." },
  { num: "02", label: "Build",    desc: "Design + development with weekly check-ins. No surprises." },
  { num: "03", label: "Automate", desc: "We wire in AI, WhatsApp, and marketing systems on top of your site." },
];

export default function ProcessStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
            // Charge the connecting line
            if (lineRef.current) {
              setTimeout(() => {
                if (lineRef.current) lineRef.current.classList.add("charged");
              }, 400);
            }
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
      id="process-preview"
      className="dot-grid section-pad"
    >
      <div className="section-container">
        {/* Header */}
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
              — HOW IT WORKS
            </span>
            <h2 className="type-heading" style={{ color: "var(--color-ink)" }}>
              Three phases. One outcome.
            </h2>
          </div>
          <Link
            href="/process"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-steel)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-steel)")}
          >
            Full process
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line background */}
          <div
            className="process-connector-line"
            style={{
              position: "absolute",
              top: "36px",
              left: "calc(16.66% + 18px)",
              right: "calc(16.66% + 18px)",
              height: "1px",
              background: "rgba(138,148,166,0.25)",
            }}
            aria-hidden="true"
          />

          {/* Animated Signal line */}
          <div
            ref={lineRef}
            className="signal-line process-connector-line"
            style={{
              position: "absolute",
              top: "36px",
              left: "calc(16.66% + 18px)",
              right: "calc(16.66% + 18px)",
              height: "1px",
            }}
            aria-hidden="true"
          />

          {/* Vertical connecting line (mobile only) */}
          <div
            className="process-vertical-line"
            style={{
              position: "absolute",
              top: "18px",
              bottom: "18px",
              left: "50%",
              width: "1px",
              background: "rgba(138,148,166,0.25)",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          <div className="process-steps-grid">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1}`}
                style={{ textAlign: "center", position: "relative" }}
              >
                {/* Step node */}
                <div style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(138,148,166,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  position: "relative",
                  background: "var(--color-paper)",
                  zIndex: 2,
                }}>
                  <span className="type-mono" style={{ color: "var(--color-signal)", fontSize: "0.65rem" }}>
                    {step.num}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "var(--color-ink)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em",
                }}>
                  {step.label}
                </h3>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.875rem",
                  color: "var(--color-steel)",
                  lineHeight: 1.6,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
