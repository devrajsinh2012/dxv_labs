"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const SERVICES = [
  {
    id: "websites",
    label: "[01] Website Building",
    headline: "Sites engineered to convert, not just to look good.",
    description:
      "From architecture to pixel — we design and build high-performance websites that turn visitors into customers. Every site is structured for speed, search, and growth.",
    cta: { label: "See Templates", href: "/work" },
    isPrimary: true,
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="40" height="28" rx="2" stroke="#FF5722" strokeWidth="1.5" />
        <line x1="4" y1="16" x2="44" y2="16" stroke="#FF5722" strokeWidth="1.5" opacity="0.4" />
        <rect x="10" y="22" width="12" height="8" rx="1" fill="#FF5722" fillOpacity="0.15" stroke="#FF5722" strokeWidth="1" />
        <rect x="26" y="22" width="12" height="3" rx="1" fill="#8A94A6" fillOpacity="0.4" />
        <rect x="26" y="27" width="8" height="3" rx="1" fill="#8A94A6" fillOpacity="0.4" />
        <line x1="16" y1="40" x2="32" y2="40" stroke="#8A94A6" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="8" cy="12" r="1.5" fill="#FF5722" />
        <circle cx="12" cy="12" r="1.5" fill="#8A94A6" opacity="0.6" />
        <circle cx="16" cy="12" r="1.5" fill="#8A94A6" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "ai",
    label: "[02] AI Automation",
    headline: "Custom AI workflows that take the busywork off your plate.",
    description: "We build AI-powered systems tailored to your ops — so repetitive tasks run automatically.",
    cta: { label: "Learn More", href: "/services#ai" },
    isPrimary: false,
    hoverAnim: "node-pulse",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="5" stroke="#8A94A6" strokeWidth="1.5" />
        <circle cx="8" cy="12" r="3" stroke="#8A94A6" strokeWidth="1.5" />
        <circle cx="32" cy="12" r="3" stroke="#8A94A6" strokeWidth="1.5" />
        <circle cx="8" cy="28" r="3" stroke="#8A94A6" strokeWidth="1.5" />
        <circle cx="32" cy="28" r="3" stroke="#8A94A6" strokeWidth="1.5" />
        <line x1="11" y1="13.5" x2="17" y2="17.5" stroke="#8A94A6" strokeWidth="1" opacity="0.5" />
        <line x1="29" y1="13.5" x2="23" y2="17.5" stroke="#8A94A6" strokeWidth="1" opacity="0.5" />
        <line x1="11" y1="26.5" x2="17" y2="22.5" stroke="#8A94A6" strokeWidth="1" opacity="0.5" />
        <line x1="29" y1="26.5" x2="23" y2="22.5" stroke="#8A94A6" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "[03] WhatsApp Automation",
    headline: "Orders, support, and follow-ups — answered before you're awake.",
    description: "Automate your WhatsApp conversations end-to-end, from lead capture to order confirmation.",
    cta: { label: "Learn More", href: "/services#whatsapp" },
    isPrimary: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 34L8.8 25.6C7 22.8 6 19.5 6 16 6 8.3 12.3 2 20 2s14 6.3 14 14-6.3 14-14 14c-3.2 0-6.2-1.1-8.5-3L6 34z" stroke="#4CAF50" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15 17c0.7 1.4 1.8 2.7 3 3.5" stroke="#4CAF50" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="14" r="1" fill="#4CAF50" />
        <circle cx="24" cy="14" r="1" fill="#4CAF50" />
        <circle cx="16" cy="14" r="1" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    id: "marketing",
    label: "[04] Marketing Automation",
    headline: "Campaigns that run, learn, and adjust on their own.",
    description: "Set up once, run forever. Automated email, social, and ad campaigns that optimize continuously.",
    cta: { label: "Learn More", href: "/services#marketing" },
    isPrimary: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <polyline points="6,28 14,18 20,23 28,12 34,16" stroke="#2196F3" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="34" cy="16" r="2" fill="#2196F3" />
        <line x1="6" y1="32" x2="34" y2="32" stroke="#8A94A6" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "ecommerce",
    label: "[05] E-commerce",
    headline: "Stores built to sell more, with less hands-on work.",
    description: "Full-stack e-commerce with automation baked in — inventory, orders, follow-ups, upsells.",
    cta: { label: "Learn More", href: "/services#ecommerce" },
    isPrimary: false,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 8h4l4 18h16l4-12H12" stroke="#9C27B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="30" r="2" fill="#9C27B0" />
        <circle cx="28" cy="30" r="2" fill="#9C27B0" />
      </svg>
    ),
  },
];

export default function ServicesBento() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const [primary, ...rest] = SERVICES;

  return (
    <section
      ref={sectionRef}
      id="services"
      className="dot-grid section-pad"
      style={{ position: "relative" }}
    >
      {/* Crosshair corners */}
      <span style={{ position: "absolute", top: 12, left: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.5 }} aria-hidden="true">×</span>
      <span style={{ position: "absolute", top: 12, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.5 }} aria-hidden="true">×</span>

      <div className="section-container">
        {/* Section header */}
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — SERVICES
          </span>
          <h2 className="type-heading" style={{ color: "var(--color-ink)" }}>
            One studio. Five systems.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">
          {/* Primary: Websites */}
          <div
            className="bento-primary reveal"
            style={{
              background: "var(--color-surface)",
              border: "1px solid rgba(138,148,166,0.2)",
              padding: "clamp(1.5rem, 3vw, 2.5rem)",
              position: "relative",
              overflow: "hidden",
              minHeight: "280px",
            }}
          >
            {/* Coord label */}
            <span className="coord-label" style={{ display: "block", marginBottom: "1.25rem" }}>
              X:001 Y:002 // PRIMARY SERVICE
            </span>

            <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
                  {primary.label}
                </span>
                <h3 className="type-subheading" style={{ color: "var(--color-ink)", marginBottom: "1rem" }}>
                  {primary.headline}
                </h3>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", color: "var(--color-steel)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                  {primary.description}
                </p>
                <Link
                  href={primary.cta.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-signal)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    borderBottom: "1px solid var(--color-signal)",
                    paddingBottom: "2px",
                    transition: "gap 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.gap = "10px")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.gap = "6px")}
                >
                  {primary.cta.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
              {/* Module illustration */}
              <div style={{
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                {primary.icon}
              </div>
            </div>

            {/* Decorative corner element */}
            <div style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "120px",
              height: "120px",
              background: "linear-gradient(135deg, transparent 60%, rgba(255,87,34,0.04) 100%)",
            }} aria-hidden="true" />
          </div>

          {/* Secondary 2×2 grid */}
          <div className="bento-sm bento-subgrid reveal reveal-delay-1">
            {rest.map((svc, i) => (
              <div
                key={svc.id}
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid rgba(138,148,166,0.2)",
                  padding: "1.25rem",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,148,166,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(138,148,166,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <span className="coord-label" style={{ display: "block", marginBottom: "0.75rem" }}>
                  X:{String(i + 2).padStart(3, "0")}
                </span>
                <div style={{ marginBottom: "0.75rem" }}>{svc.icon}</div>
                <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.6rem", display: "block", marginBottom: "0.4rem" }}>
                  {svc.label}
                </span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "0.78rem", color: "var(--color-ink)", lineHeight: 1.5 }}>
                  {svc.headline}
                </p>
                <Link
                  href={svc.cta.href}
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                  aria-label={svc.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom crosshair */}
      <span style={{ position: "absolute", bottom: 12, right: 16, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-steel)", opacity: 0.5 }} aria-hidden="true">×</span>
    </section>
  );
}
