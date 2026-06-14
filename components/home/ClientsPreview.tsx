"use client";

import { useEffect, useRef } from "react";

const TESTIMONIALS = [
  {
    quote:
      "DxV didn't just build us a website — they wired an entire system. Our orders are tracked automatically, follow-ups go out the same day, and we haven't touched a button in months.",
    name: "Priya Sharma",
    role: "Founder",
    company: "Bloom Kitchen Co.",
    result: "RESULT: +68% ONLINE ORDERS",
    coord: "X:021 Y:005",
  },
  {
    quote:
      "They took our WhatsApp chaos and turned it into a machine. Every lead gets a response, every order gets confirmed. Six hours a week back — every week.",
    name: "Arjun Mehta",
    role: "CEO",
    company: "MechanicsOnDemand",
    result: "RESULT: 6 HR/WEEK SAVED",
    coord: "X:022 Y:005",
  },
];

export default function ClientsPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="clients-preview"
      className="section-pad"
      style={{ background: "var(--color-paper)" }}
    >
      <div className="section-container">
        <div className="reveal" style={{ marginBottom: "3rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — CLIENT RESULTS
          </span>
          <h2 className="type-heading" style={{ color: "var(--color-ink)" }}>
            Brands that switched it on.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`spec-sheet reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--color-surface-dark)",
                border: "1px solid rgba(138,148,166,0.2)",
                padding: "2rem",
                position: "relative",
              }}
            >
              {/* Coord label */}
              <span className="coord-label" style={{ display: "block", marginBottom: "1.25rem" }}>
                {t.coord}
              </span>

              {/* Crosshair corner marks */}
              <span style={{ position: "absolute", top: 8, left: 8, fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-steel)", opacity: 0.4 }} aria-hidden="true">×</span>
              <span style={{ position: "absolute", bottom: 8, right: 8, fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-steel)", opacity: 0.4 }} aria-hidden="true">×</span>

              {/* Quote */}
              <blockquote style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                color: "var(--color-paper)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metadata */}
              <div style={{ marginBottom: "1rem" }}>
                <p className="type-mono-lg" style={{ color: "var(--color-paper)", fontWeight: 500 }}>
                  {t.name}
                </p>
                <p className="type-mono" style={{ color: "var(--color-steel)", marginTop: "2px" }}>
                  {t.role}, {t.company}
                </p>
              </div>

              {/* Result metric */}
              <span className="result-metric" style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "var(--color-signal)",
                textTransform: "uppercase",
                padding: "0.35rem 0.75rem",
                border: "1px solid rgba(255,87,34,0.3)",
                display: "inline-block",
              }}>
                {t.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
