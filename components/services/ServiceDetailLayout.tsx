"use client";

import Link from "next/link";
import DecryptedText from "@/components/ui/DecryptedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CtaBand from "@/components/home/CtaBand";

interface ServiceDetailLayoutProps {
  num: string;
  label: string;
  tagline: string;
  includes: string[];
  timeline: string;
  accentColor?: string;
  illustration: React.ReactNode;
  /** The URL slug for the coordinate label (e.g. "websites") */
  slug: string;
}

export default function ServiceDetailLayout({
  num,
  label,
  tagline,
  includes,
  timeline,
  accentColor = "#FF5722",
  illustration,
  slug,
}: ServiceDetailLayoutProps) {
  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="section-container section-pad" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        {/* Back link */}
        <ScrollReveal delay={0}>
          <Link
            href="/services"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-steel)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "3rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-paper)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-steel)")}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M8.5 1.5L1.5 8.5M1.5 8.5H6.5M1.5 8.5V3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            All Services
          </Link>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "flex-start" }}>
          <ScrollReveal delay={50}>
            <div>
              <span
                className="type-mono"
                style={{ color: accentColor, display: "block", marginBottom: "0.75rem", fontSize: "0.65rem" }}
              >
                [{num}] MODULE // X:{num.padStart(3, "0")} Y:001 // {slug.toUpperCase()}
              </span>

              <h1
                className="type-heading"
                style={{ color: "var(--color-paper)", marginBottom: "1.25rem" }}
              >
                <DecryptedText text={label} duration={800} startDelay={200} />
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--color-steel)",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                }}
              >
                {tagline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} style={{ flexShrink: 0 }}>
            <div
              style={{
                width: "140px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {illustration}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Includes ──────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--color-surface-dark)", borderTop: "1px solid rgba(138,148,166,0.1)" }}
      >
        <div className="section-container">
          <ScrollReveal delay={0}>
            <span className="type-mono" style={{ color: accentColor, display: "block", marginBottom: "0.75rem" }}>
              — WHAT&apos;S INCLUDED
            </span>
            <h2 className="type-subheading" style={{ color: "var(--color-paper)", marginBottom: "2.5rem" }}>
              Everything in this module.
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {includes.map((item, i) => (
              <ScrollReveal key={item} delay={i * 60}>
                <div
                  style={{
                    padding: "1.25rem 1.5rem",
                    border: "1px solid rgba(138,148,166,0.15)",
                    borderLeft: `3px solid ${accentColor}40`,
                    background: "var(--color-ink)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    transition: "border-left-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = accentColor)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = `${accentColor}40`)}
                >
                  {/* Check mark */}
                  <span style={{ color: accentColor, flexShrink: 0, marginTop: "2px" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.9rem",
                      color: "var(--color-paper)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="section-pad" style={{ background: "var(--color-ink)" }}>
        <div className="section-container">
          <ScrollReveal delay={0}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <span className="type-mono" style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", opacity: 0.6, fontSize: "0.6rem" }}>
                  TYPICAL TIMELINE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: accentColor,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {timeline}
                </span>
              </div>

              <div
                style={{
                  padding: "0.75rem 1.5rem",
                  border: `1px solid ${accentColor}30`,
                  background: `${accentColor}08`,
                }}
              >
                <span className="type-mono" style={{ color: accentColor, fontSize: "0.65rem" }}>
                  START TO LAUNCH
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────────── */}
      <CtaBand
        heading="Ready to wire in this system?"
        subtext="We review every submission personally. No automated sequences — just a real conversation about fit."
      />
    </div>
  );
}
