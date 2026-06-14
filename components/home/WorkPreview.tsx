"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

const TEMPLATES = [
  {
    id: "resto-1",
    label: "Bloom Kitchen",
    category: "RESTAURANT",
    stack: "Next.js + Tailwind",
    time: "~5 days",
    coord: "X:011 Y:001",
    accentColor: "#FF5722",
    desc: "Full reservation system, seasonal menu, gallery, and Google Maps integration.",
    bg: "linear-gradient(135deg, #1a0f0a 0%, #2d1810 100%)",
  },
  {
    id: "saas-1",
    label: "LaunchKit SaaS",
    category: "SAAS",
    stack: "Next.js + shadcn",
    time: "~4 days",
    coord: "X:012 Y:001",
    accentColor: "#2196F3",
    desc: "Feature showcase, pricing table, waitlist form, and analytics dashboard.",
    bg: "linear-gradient(135deg, #0a0f1a 0%, #101828 100%)",
  },
  {
    id: "port-1",
    label: "Axis Portfolio",
    category: "PORTFOLIO",
    stack: "Next.js + CSS",
    time: "~3 days",
    coord: "X:013 Y:001",
    accentColor: "#9C27B0",
    desc: "Case study grid, project lightbox, contact form, and PDF download.",
    bg: "linear-gradient(135deg, #0f0a1a 0%, #1a1028 100%)",
  },
  {
    id: "eco-1",
    label: "Vessel Store",
    category: "E-COMMERCE",
    stack: "Next.js + Shopify",
    time: "~6 days",
    coord: "X:014 Y:001",
    accentColor: "#4CAF50",
    desc: "Product pages, cart, checkout, and automated post-purchase flows.",
    bg: "linear-gradient(135deg, #0a1a0f 0%, #101f14 100%)",
  },
  {
    id: "svc-1",
    label: "Meridian Agency",
    category: "SERVICES",
    stack: "Next.js + Tailwind",
    time: "~4 days",
    coord: "X:015 Y:001",
    accentColor: "#FF9800",
    desc: "Service cards, team section, case studies, and integrated booking.",
    bg: "linear-gradient(135deg, #1a110a 0%, #2a1c10 100%)",
  },
  {
    id: "resto-2",
    label: "Forge Bar",
    category: "RESTAURANT",
    stack: "Next.js + CSS",
    time: "~4 days",
    coord: "X:016 Y:001",
    accentColor: "#F44336",
    desc: "Dark ambient menu, events calendar, private dining enquiry form.",
    bg: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 100%)",
  },
];

export default function WorkPreview() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work-preview"
      className="section-pad"
      style={{
        background: "var(--color-paper)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="section-container" style={{ marginBottom: "3rem" }}>
        {/* Header row */}
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span
              className="type-mono"
              style={{
                color: "var(--color-signal)",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              — SELECTED WORK
            </span>
            <h2 className="type-heading" style={{ color: "var(--color-ink)" }}>
              Templates that deploy.
            </h2>
          </div>
          <Link
            href="/work"
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
              transition: "color 0.2s ease, gap 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
              (e.currentTarget as HTMLElement).style.gap = "10px";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--color-steel)";
              (e.currentTarget as HTMLElement).style.gap = "6px";
            }}
          >
            View all templates
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Marquee Row (Edge-to-Edge Layout) */}
      <div
        className="reveal reveal-delay-1"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <SimpleMarquee
          baseVelocity={1.2}
          direction="left"
          repeat={4}
          slowdownOnHover={true}
          slowDownFactor={0} // Stop completely on hover
          useScrollVelocity={true}
          scrollAwareDirection={false} // Maintain left scroll, scroll only boosts
          draggable={true}
        >
          {TEMPLATES.map((tpl) => (
            <div
              key={tpl.id}
              style={{
                width: "clamp(290px, 80vw, 370px)",
                margin: "0 12px",
                background: tpl.bg,
                border: `1px solid ${tpl.accentColor}30`,
                position: "relative",
                overflow: "hidden",
                flexShrink: 0,
                cursor: "pointer",
                transition:
                  "border-color 0.2s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tpl.accentColor}80`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tpl.accentColor}30`;
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              {/* Preview area */}
              <div
                style={{
                  height: "180px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: tpl.bg,
                }}
              >
                {/* Simulated browser chrome */}
                <div
                  style={{
                    width: "85%",
                    height: "120px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "4px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "22px",
                      background: "rgba(255,255,255,0.06)",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 8px",
                      gap: "5px",
                    }}
                  >
                    {[tpl.accentColor, "#8A94A6", "#8A94A6"].map((c, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: c,
                          opacity: idx === 0 ? 0.8 : 0.3,
                        }}
                      />
                    ))}
                  </div>
                  {/* Fake page content lines */}
                  <div
                    style={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        height: "7px",
                        width: "60%",
                        background: tpl.accentColor,
                        opacity: 0.3,
                        borderRadius: 2,
                      }}
                    />
                    <div
                      style={{
                        height: "4px",
                        width: "80%",
                        background: "#8A94A6",
                        opacity: 0.2,
                        borderRadius: 2,
                      }}
                    />
                    <div
                      style={{
                        height: "4px",
                        width: "70%",
                        background: "#8A94A6",
                        opacity: 0.2,
                        borderRadius: 2,
                      }}
                    />
                    <div
                      style={{
                        height: "4px",
                        width: "50%",
                        background: "#8A94A6",
                        opacity: 0.2,
                        borderRadius: 2,
                        marginTop: "3px",
                      }}
                    />
                  </div>
                </div>

                {/* Coord label overlay */}
                <span
                  className="coord-label"
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    color: "rgba(138,148,166,0.5)",
                  }}
                >
                  {tpl.coord}
                </span>
              </div>

              {/* Card info */}
              <div style={{ padding: "1.25rem" }}>
                <span
                  className="type-mono"
                  style={{
                    color: tpl.accentColor,
                    fontSize: "0.6rem",
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  {tpl.category}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-paper)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {tpl.label}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.8rem",
                    color: "var(--color-steel)",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                    minHeight: "2.4rem",
                  }}
                >
                  {tpl.desc}
                </p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span
                    className="type-mono"
                    style={{ color: "var(--color-steel)", fontSize: "0.6rem" }}
                  >
                    {tpl.stack}
                  </span>
                  <span
                    className="type-mono"
                    style={{
                      color: "var(--color-steel)",
                      fontSize: "0.6rem",
                      opacity: 0.6,
                    }}
                  >
                    {tpl.time}
                  </span>
                </div>
              </div>

              <Link
                href="/work"
                style={{ position: "absolute", inset: 0 }}
                aria-label={`View ${tpl.label} template`}
              />
            </div>
          ))}
        </SimpleMarquee>
      </div>
    </section>
  );
}
