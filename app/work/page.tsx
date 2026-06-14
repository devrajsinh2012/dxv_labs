"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CATEGORIES = ["ALL", "RESTAURANT", "E-COMMERCE", "SAAS", "PORTFOLIO", "SERVICES"];

const TEMPLATES = [
  { id: "resto-1", label: "Bloom Kitchen", category: "RESTAURANT", stack: "Next.js + Tailwind", time: "~5 days", coord: "X:011 Y:001", accentColor: "#FF5722", desc: "Full reservation system, seasonal menu, gallery, and Google Maps integration.", bg: "linear-gradient(135deg, #1a0f0a 0%, #2d1810 100%)" },
  { id: "saas-1",  label: "LaunchKit SaaS", category: "SAAS",       stack: "Next.js + shadcn", time: "~4 days", coord: "X:012 Y:001", accentColor: "#2196F3", desc: "Feature showcase, pricing table, waitlist form, and analytics dashboard.", bg: "linear-gradient(135deg, #0a0f1a 0%, #101828 100%)" },
  { id: "port-1",  label: "Axis Portfolio", category: "PORTFOLIO",   stack: "Next.js + CSS",   time: "~3 days", coord: "X:013 Y:001", accentColor: "#9C27B0", desc: "Case study grid, project lightbox, contact form, and PDF download.", bg: "linear-gradient(135deg, #0f0a1a 0%, #1a1028 100%)" },
  { id: "eco-1",   label: "Vessel Store",   category: "E-COMMERCE",  stack: "Next.js + Shopify",time: "~6 days", coord: "X:014 Y:001", accentColor: "#4CAF50", desc: "Product pages, cart, checkout, and automated post-purchase flows.", bg: "linear-gradient(135deg, #0a1a0f 0%, #101f14 100%)" },
  { id: "svc-1",   label: "Meridian Agency",category: "SERVICES",    stack: "Next.js + Tailwind",time: "~4 days",coord: "X:015 Y:001", accentColor: "#FF9800", desc: "Service cards, team section, case studies, and integrated booking.", bg: "linear-gradient(135deg, #1a110a 0%, #2a1c10 100%)" },
  { id: "resto-2", label: "Forge Bar",      category: "RESTAURANT",  stack: "Next.js + CSS",   time: "~4 days", coord: "X:016 Y:001", accentColor: "#F44336", desc: "Dark ambient menu, events calendar, private dining enquiry form.", bg: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)" },
];

import SystemsSchematic from "@/components/hero/SystemsSchematic";

export default function WorkPage() {
  const [active, setActive] = useState("ALL");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = TEMPLATES.filter(t => active === "ALL" || t.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="section-container section-pad" style={{ paddingTop: "2rem" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — WORK & TEMPLATES
          </span>
          <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1rem" }}>
            Every site starts here.
          </h1>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-steel)", maxWidth: "500px" }}>
            Production-ready templates — pick one as a starting point, or tell us what you need and we&apos;ll build from scratch.
          </p>
        </div>

        {/* Systems Schematic Capabilities */}
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.5rem", fontSize: "0.65rem" }}>
              CAPABILITIES // INTEGRATION LAYER
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "0.5rem" }}>
              Automated Operations Architecture
            </h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.875rem", color: "var(--color-steel)", maxWidth: "600px", lineHeight: 1.6 }}>
              We don&apos;t just build landing pages. We connect your storefront directly to lead channels, custom database synced queues, and AI-powered workflows. Click or hover any node below to trace data packets in real-time.
            </p>
          </div>
          <SystemsSchematic />
        </div>

        {/* Filter chips */}
        <div className="reveal reveal-delay-1" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "2.5rem" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              className={`filter-chip ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {filtered.map((tpl, i) => (
            <article
              key={tpl.id}
              className="reveal"
              style={{
                background: tpl.bg,
                border: `1px solid ${tpl.accentColor}25`,
                position: "relative",
                cursor: "pointer",
                transition: "border-color 0.2s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: `${i * 60}ms`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tpl.accentColor}60`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tpl.accentColor}25`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Preview */}
              <div style={{ height: "180px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{
                  width: "80%",
                  height: "130px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "3px",
                  overflow: "hidden",
                }}>
                  <div style={{ height: "20px", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", padding: "0 8px", gap: "5px" }}>
                    {[tpl.accentColor, "#8A94A6", "#8A94A6"].map((c, j) => (
                      <div key={j} style={{ width: 5, height: 5, borderRadius: "50%", background: c, opacity: j === 0 ? 0.8 : 0.3 }} />
                    ))}
                  </div>
                  <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
                    <div style={{ height: "7px", width: "55%", background: tpl.accentColor, opacity: 0.25, borderRadius: 2 }} />
                    <div style={{ height: "4px", width: "75%", background: "#8A94A6", opacity: 0.15, borderRadius: 2 }} />
                    <div style={{ height: "4px", width: "60%", background: "#8A94A6", opacity: 0.15, borderRadius: 2 }} />
                  </div>
                </div>
                <span className="coord-label" style={{ position: "absolute", top: 8, left: 10, color: "rgba(138,148,166,0.4)" }}>
                  {tpl.coord}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: "1.25rem" }}>
                <span className="type-mono" style={{ color: tpl.accentColor, fontSize: "0.6rem", display: "block", marginBottom: "0.4rem" }}>
                  {tpl.category}
                </span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "0.5rem" }}>
                  {tpl.label}
                </h2>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.8rem", color: "var(--color-steel)", lineHeight: 1.5, marginBottom: "1rem" }}>
                  {tpl.desc}
                </p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.6rem" }}>{tpl.stack}</span>
                  <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.6rem", opacity: 0.5 }}>{tpl.time}</span>
                </div>
              </div>
              <Link href="/contact" style={{ position: "absolute", inset: 0 }} aria-label={`Use ${tpl.label} template`} />
            </article>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="reveal" style={{ marginTop: "4rem", padding: "2rem", border: "1px solid rgba(138,148,166,0.15)", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", marginBottom: "1rem" }}>
            Don&apos;t see your style? We build from scratch.
          </p>
          <Link href="/contact" className="btn-signal" id="work-custom-build">
            Start a Custom Project
          </Link>
        </div>
      </div>
    </section>
  );
}
