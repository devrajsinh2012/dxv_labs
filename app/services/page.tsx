"use client";

import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotlightCard";
import DecryptedText from "@/components/ui/DecryptedText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProcessStrip from "@/components/home/ProcessStrip";
import ClientsPreview from "@/components/home/ClientsPreview";
import CtaBand from "@/components/home/CtaBand";

// Service card illustrations — inline SVG previews (lightweight for grid)
const illustrations = {
  websites: (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="60" height="44" rx="2" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <rect x="2" y="2" width="60" height="10" rx="2" fill="#2a2c35" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <circle cx="10" cy="7" r="2" fill="#FF5722" opacity="0.8" />
      <circle cx="17" cy="7" r="2" fill="rgba(138,148,166,0.3)" />
      <circle cx="24" cy="7" r="2" fill="rgba(138,148,166,0.3)" />
      <rect x="8" y="18" width="22" height="4" rx="1" fill="#FF5722" opacity="0.3" />
      <rect x="8" y="26" width="48" height="3" rx="0.5" fill="rgba(138,148,166,0.15)" />
      <rect x="8" y="32" width="36" height="3" rx="0.5" fill="rgba(138,148,166,0.1)" />
      <rect x="8" y="38" width="28" height="3" rx="0.5" fill="rgba(138,148,166,0.08)" />
    </svg>
  ),
  ai: (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <circle cx="32" cy="26" r="8" fill="rgba(255,87,34,0.12)" stroke="#FF5722" strokeWidth="1">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="26" r="3" fill="#FF5722" />
      {[0, 60, 120, 180, 240, 300].map((a, i) => {
        const r = 20;
        const x = 32 + Math.cos((a * Math.PI) / 180) * r;
        const y = 26 + Math.sin((a * Math.PI) / 180) * r;
        return (
          <g key={i}>
            <line x1="32" y1="26" x2={x} y2={y} stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />
            <circle cx={x} cy={y} r="3" fill="#1e2027" stroke="rgba(138,148,166,0.4)" strokeWidth="0.75" />
          </g>
        );
      })}
    </svg>
  ),
  whatsapp: (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="36" height="14" rx="7" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <rect x="4" y="22" width="42" height="14" rx="7" fill="rgba(255,87,34,0.1)" stroke="#FF5722" strokeWidth="0.75">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="4" y="38" width="28" height="10" rx="5" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <circle cx="56" cy="10" r="5" fill="#FF5722" opacity="0.8">
        <animate attributeName="r" values="5;7;5" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  ),
  marketing: (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <polyline points="6,44 18,30 28,34 42,16 56,8" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8" />
      <circle cx="56" cy="8" r="3" fill="#FF5722" />
      <line x1="6" y1="44" x2="58" y2="44" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <line x1="6" y1="4" x2="6" y2="44" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
    </svg>
  ),
  ecommerce: (
    <svg width="64" height="52" viewBox="0 0 64 52" fill="none" aria-hidden="true">
      <path d="M4 4 L12 4 L18 32 L52 32" stroke="rgba(138,148,166,0.3)" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="18" y="12" width="34" height="20" rx="1" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <rect x="22" y="18" width="10" height="8" rx="0.5" fill="rgba(255,87,34,0.2)" stroke="#FF5722" strokeWidth="0.5" />
      <rect x="36" y="18" width="10" height="8" rx="0.5" fill="rgba(138,148,166,0.1)" stroke="rgba(138,148,166,0.2)" strokeWidth="0.5" />
      <circle cx="24" cy="38" r="4" fill="#1e2027" stroke="#FF5722" strokeWidth="0.75" />
      <circle cx="42" cy="38" r="4" fill="#1e2027" stroke="#FF5722" strokeWidth="0.75" />
    </svg>
  ),
};

const SERVICES = [
  {
    id: "websites",
    slug: "/services/websites",
    num: "01",
    label: "Website Building",
    tagline: "Sites engineered to convert, not just to look good.",
    tags: ["Custom Design", "Mobile-first", "SEO Foundations"],
    timeline: "8–14 days",
    illustration: illustrations.websites,
  },
  {
    id: "ai",
    slug: "/services/ai-automation",
    num: "02",
    label: "AI Automation & Consulting",
    tagline: "Custom AI workflows that take the busywork off your plate.",
    tags: ["GPT / Claude Integration", "Document Automation", "Ops Automation"],
    timeline: "5–10 days",
    illustration: illustrations.ai,
  },
  {
    id: "whatsapp",
    slug: "/services/whatsapp",
    num: "03",
    label: "WhatsApp Automation",
    tagline: "Orders, support, and follow-ups — answered before you're awake.",
    tags: ["Lead Capture Flows", "Support Bot", "Order Automation"],
    timeline: "3–6 days",
    illustration: illustrations.whatsapp,
  },
  {
    id: "marketing",
    slug: "/services/marketing",
    num: "04",
    label: "Digital Marketing Automation",
    tagline: "Campaigns that run, learn, and adjust on their own.",
    tags: ["Email Sequences", "Ad Automation", "Lead Scoring"],
    timeline: "4–7 days",
    illustration: illustrations.marketing,
  },
  {
    id: "ecommerce",
    slug: "/services/ecommerce",
    num: "05",
    label: "E-commerce Specialization",
    tagline: "Stores built to sell more, with less hands-on work.",
    tags: ["Shopify / WooCommerce", "Inventory Automation", "Post-purchase Flows"],
    timeline: "7–12 days",
    illustration: illustrations.ecommerce,
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh" }}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="section-container"
        style={{ paddingTop: "144px", paddingBottom: "5rem" }}
      >
        <ScrollReveal delay={0}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — SERVICES
          </span>
          <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1rem" }}>
            <DecryptedText text="One studio. Five systems." duration={900} />
          </h1>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", maxWidth: "500px", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Each service is a module. They work standalone, and they work better together.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Service Grid ──────────────────────────────────────── */}
      <section
        className="section-container"
        style={{ paddingBottom: "6rem" }}
        aria-label="Services"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "12px",
          }}
        >
          {SERVICES.map((svc, i) => (
            <ScrollReveal key={svc.id} delay={i * 80}>
              <SpotlightCard
                style={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                    <div style={{ flex: 1 }}>
                      <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.6rem", fontSize: "0.6rem" }}>
                        [{svc.num}] MODULE
                      </span>
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: "var(--color-paper)",
                          letterSpacing: "-0.02em",
                          lineHeight: 1.2,
                        }}
                      >
                        {svc.label}
                      </h2>
                    </div>
                    {/* Illustration */}
                    <div style={{ flexShrink: 0, opacity: 0.9 }}>{svc.illustration}</div>
                  </div>

                  {/* Tagline */}
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-steel)", lineHeight: 1.6 }}>
                    {svc.tagline}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="type-mono"
                        style={{
                          fontSize: "0.55rem",
                          padding: "0.3rem 0.6rem",
                          border: "1px solid rgba(138,148,166,0.2)",
                          color: "var(--color-steel)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid rgba(138,148,166,0.1)" }}>
                    <span
                      className="type-mono"
                      style={{ fontSize: "0.6rem", color: "var(--color-signal)", padding: "0.25rem 0.6rem", border: "1px solid rgba(255,87,34,0.25)" }}
                    >
                      {svc.timeline}
                    </span>
                    <Link
                      href={svc.slug}
                      id={`service-${svc.id}-detail`}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-signal)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "gap 0.2s ease",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "8px")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "5px")}
                    >
                      View Module
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                        <path d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Full-card link overlay — accessible */}
                <Link href={svc.slug} style={{ position: "absolute", inset: 0 }} tabIndex={-1} aria-hidden="true" />
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Our Process ──────────────────────────────────────── */}
      <section
        style={{
          borderTop: "1px solid rgba(138,148,166,0.1)",
          borderBottom: "1px solid rgba(138,148,166,0.1)",
        }}
      >
        <div className="section-container" style={{ paddingTop: "1rem" }}>
          <ScrollReveal delay={0}>
            <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.5rem", paddingTop: "4rem" }}>
              — HOW IT WORKS
            </span>
            <h2 className="type-subheading" style={{ color: "var(--color-paper)", marginBottom: "3rem" }}>
              The six phases every project goes through.
            </h2>
          </ScrollReveal>
        </div>
        <ProcessStrip />
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <ClientsPreview />

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <CtaBand
        heading="Ready to wire in your next system?"
        subtext="Two project slots open this quarter. Tell us what you're building and we'll tell you if we can help."
      />
    </div>
  );
}
