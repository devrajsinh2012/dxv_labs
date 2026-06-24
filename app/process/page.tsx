"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DecryptedText from "@/components/ui/DecryptedText";
import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
  { num: "01", label: "Discover & Audit",          time: "~1–2 days", desc: "We map your current setup, competitors, and goals. You get a clear scope document before anything is built." },
  { num: "02", label: "Blueprint",                  time: "~2–3 days", desc: "Sitemap, wireframes, automation map. You approve the plan before we touch code." },
  { num: "03", label: "Design",                     time: "~2–4 days", desc: "High-fidelity mockups built around your brand. One round of revisions included." },
  { num: "04", label: "Build",                      time: "~4–7 days", desc: "Development with daily progress updates. Built on modern stack for speed and scalability." },
  { num: "05", label: "Automate & Integrate",       time: "~2–4 days", desc: "AI workflows, WhatsApp flows, marketing automations, and e-commerce logic wired in." },
  { num: "06", label: "Launch & Handover",          time: "~1 day",    desc: "Go live, domain setup, team walkthrough, and full documentation handed over." },
];

const ALWAYS_ON = { label: "Support & Iterate", desc: "Monthly check-ins, performance reports, and system updates. Always on — not a final step." };

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(-1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(i);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      const pct = activeStep < 0 ? 0 : ((activeStep + 1) / STEPS.length) * 100;
      lineRef.current.style.height = `${pct}%`;
    }
  }, [activeStep]);

  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="section-container section-pad" style={{ paddingTop: "2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — HOW WE WORK
          </span>
          <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1rem" }}>
            <DecryptedText text="From blueprint to launch." duration={900} />
          </h1>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", maxWidth: "520px", lineHeight: 1.7 }}>
            Six phases. Predictable timelines. Nothing shipped until you&apos;ve approved it at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "60px" }}>
          {/* Vertical line track */}
          <div style={{
            position: "absolute",
            left: "20px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(138,148,166,0.2)",
          }} aria-hidden="true" />

          {/* Charged progress line */}
          <div
            ref={lineRef}
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              width: "1px",
              height: "0%",
              background: "var(--color-signal)",
              transition: "height 0.6s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: "0 0 8px rgba(255,87,34,0.6)",
            }}
            aria-hidden="true"
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 80} direction="left">
              <div
                ref={el => { stepRefs.current[i] = el; }}
                style={{
                  position: "relative",
                  opacity: activeStep >= i ? 1 : 0.4,
                  transition: "opacity 0.4s ease",
                }}
              >
                {/* Node */}
                <div style={{
                  position: "absolute",
                  left: "-49px",
                  top: "2px",
                  width: "18px",
                  height: "18px",
                  border: `1px solid ${activeStep >= i ? "var(--color-signal)" : "rgba(138,148,166,0.3)"}`,
                  background: activeStep >= i ? "rgba(255,87,34,0.15)" : "var(--color-ink)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.4s ease",
                  borderRadius: "1px",
                }} aria-hidden="true">
                  {activeStep >= i && (
                    <div style={{ width: 6, height: 6, background: "var(--color-signal)", borderRadius: "1px" }} />
                  )}
                </div>

                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.5rem", fontSize: "0.65rem" }}>
                      {step.num}
                    </span>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "0.75rem", letterSpacing: "-0.01em" }}>
                      {step.label}
                    </h2>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-steel)", lineHeight: 1.65 }}>
                      {step.desc}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <span className="type-mono" style={{
                      color: "var(--color-signal)",
                      fontSize: "0.65rem",
                      padding: "0.3rem 0.75rem",
                      border: "1px solid rgba(255,87,34,0.3)",
                    }}>
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Always-on step */}
        <div style={{
          marginTop: "4rem",
          padding: "2rem",
          border: "1px solid rgba(138,148,166,0.15)",
          borderLeft: "3px solid var(--color-signal)",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
          background: "rgba(255,87,34,0.03)",
        }}>
          <div>
            <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.5rem" }}>
              ALWAYS ON
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "0.5rem" }}>
              {ALWAYS_ON.label}
            </h2>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-steel)", lineHeight: 1.6 }}>
              {ALWAYS_ON.desc}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "5rem", textAlign: "center" }}>
          <Link href="/contact" className="btn-signal" id="process-start-project" style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}>
            Start the Process
          </Link>
        </div>
      </div>
    </div>
  );
}
