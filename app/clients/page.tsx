"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import StarBorder from "@/components/ui/StarBorder";
import DecryptedText from "@/components/ui/DecryptedText";

const TESTIMONIALS = [
  { quote: "DxV didn't just build us a website — they wired an entire system. Our orders are tracked automatically, follow-ups go out the same day, and we haven't touched a button in months.", name: "Priya Sharma", role: "Founder", company: "Bloom Kitchen Co.", result: "RESULT: +68% ONLINE ORDERS", coord: "X:021 Y:001" },
  { quote: "They took our WhatsApp chaos and turned it into a machine. Every lead gets a response, every order gets confirmed. Six hours a week back — every week.", name: "Arjun Mehta", role: "CEO", company: "MechanicsOnDemand", result: "RESULT: 6 HR/WEEK SAVED", coord: "X:022 Y:001" },
  { quote: "I expected a nice website. I got a whole operating system for my business. The e-commerce automation alone paid for the project in the first month.", name: "Nadia Kowalski", role: "Director", company: "Vessel Collective", result: "RESULT: ROI IN 30 DAYS", coord: "X:023 Y:001" },
  { quote: "Our marketing used to take a full day per week. Now the campaigns write themselves, post themselves, and report back. We just review the numbers.", name: "Tobi Adeniran", role: "Growth Lead", company: "Stackwise Labs", result: "RESULT: 8 HR/WEEK SAVED", coord: "X:024 Y:001" },
];

const STATUS_BOARD = [
  { label: "Restaurant & Hospitality", count: "04 LIVE", color: "#FF5722" },
  { label: "SaaS Products",            count: "03 LIVE", color: "#2196F3" },
  { label: "E-commerce Stores",        count: "05 LIVE", color: "#4CAF50" },
  { label: "Service Businesses",       count: "06 LIVE", color: "#FF9800" },
  { label: "Portfolios",               count: "02 LIVE", color: "#9C27B0" },
];

export default function ClientsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="section-container section-pad" style={{ paddingTop: "2rem" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: "4rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — CLIENT RESULTS
          </span>
          <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1rem" }}>
            <DecryptedText text="Brands that switched it on." duration={900} />
          </h1>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", maxWidth: "480px", lineHeight: 1.7 }}>
            Real results from real businesses. Numbers in, buttons saved per week.
          </p>
        </div>

        {/* Status board */}
        <div className="reveal reveal-delay-2" style={{ marginBottom: "5rem", border: "1px solid rgba(138,148,166,0.15)", padding: "2rem" }}>
          <p className="type-mono" style={{ color: "var(--color-steel)", marginBottom: "1.5rem" }}>
            SYSTEMS CURRENTLY LIVE
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {STATUS_BOARD.map((item) => (
              <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(138,148,166,0.1)", paddingBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem", color: "var(--color-steel)" }}>{item.label}</span>
                <span className="type-mono" style={{ color: item.color, fontSize: "0.65rem" }}>{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", marginBottom: "5rem" }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "var(--color-surface-dark)",
                border: "1px solid rgba(138,148,166,0.2)",
                padding: "2rem",
                position: "relative",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <span style={{ position: "absolute", top: 8, left: 8, fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-steel)", opacity: 0.4 }} aria-hidden="true">×</span>
              <span style={{ position: "absolute", bottom: 8, right: 8, fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-steel)", opacity: 0.4 }} aria-hidden="true">×</span>

              <span className="coord-label" style={{ display: "block", marginBottom: "1.25rem" }}>{t.coord}</span>

              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "0.95rem", fontStyle: "italic", color: "var(--color-paper)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <p className="type-mono-lg" style={{ color: "var(--color-paper)", fontWeight: 500 }}>{t.name}</p>
              <p className="type-mono" style={{ color: "var(--color-steel)", marginTop: "2px", marginBottom: "1rem" }}>{t.role}, {t.company}</p>

              <span style={{
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

        {/* Add your name CTA */}
        <div className="reveal" style={{ textAlign: "center", padding: "3rem", border: "1px solid rgba(138,148,166,0.15)" }}>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", marginBottom: "1.5rem" }}>
            Add your name to this list.
          </p>
          <StarBorder as={Link} href="/contact" className="btn-signal" id="clients-start-project">
            Start a Project
          </StarBorder>
        </div>
      </div>
    </div>
  );
}
