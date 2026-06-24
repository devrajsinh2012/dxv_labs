"use client";

import { useState } from "react";
import Link from "next/link";
import ClickSpark from "@/components/ui/ClickSpark";
import DecryptedText from "@/components/ui/DecryptedText";

const BUSINESS_TYPES = ["Restaurant / Hospitality", "SaaS / Tech", "E-commerce", "Service Business", "Portfolio / Freelancer", "Other"];
const BUDGET_RANGES = ["< ₹50,000", "₹50k – ₹1L", "₹1L – ₹3L", "₹3L – ₹5L", "₹5L+", "Let's discuss"];
const NEEDS = ["Website", "AI Automation", "WhatsApp Automation", "Marketing Automation", "E-commerce", "Full System (all of the above)"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    need: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "480px", padding: "2rem" }}>
          <div style={{
            width: "48px",
            height: "48px",
            border: "1px solid var(--color-signal)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 2rem",
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10.5L7.5 14L16 6" stroke="var(--color-signal)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "1rem" }}>
            TRANSMISSION RECEIVED
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            We&apos;ll be in touch within 24 hours.
          </h1>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Check your inbox. We review every submission personally and come back with a clear next step.
          </p>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="section-container section-pad" style={{ paddingTop: "2rem" }}>
        <div className="contact-grid">
          {/* Left: Info */}
          <div>
            <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
              — START A PROJECT
            </span>
            <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1.5rem" }}>
              <DecryptedText text="Tell us what you're building." duration={900} />
            </h1>
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", lineHeight: 1.7, marginBottom: "3rem" }}>
              We review every submission personally. No automated sales sequences — just a real conversation about whether we&apos;re the right fit.
            </p>

            {/* Info spec sheet */}
            <div style={{ border: "1px solid rgba(138,148,166,0.2)", padding: "1.75rem", position: "relative" }}>
              <span style={{ position: "absolute", top: 8, left: 8, fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-steel)", opacity: 0.4 }} aria-hidden="true">×</span>
              <span className="type-mono" style={{ color: "var(--color-steel)", display: "block", marginBottom: "1.25rem" }}>
                CONTACT INFO
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "EMAIL", value: "hello@dxvlabs.com" },
                  { label: "RESPONSE TIME", value: "within 24 hours" },
                  { label: "AVAILABILITY", value: "2 slots this quarter" },
                  { label: "TIMEZONE", value: "IST — India" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(138,148,166,0.1)", paddingBottom: "0.75rem" }}>
                    <span className="type-mono" style={{ color: "var(--color-steel)", opacity: 0.6, fontSize: "0.6rem" }}>{item.label}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--color-paper)" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            noValidate
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                YOUR NAME *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-paper)",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                  borderRadius: 0,
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-signal)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(138,148,166,0.25)")}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                EMAIL ADDRESS *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-paper)",
                  outline: "none",
                  transition: "border-color 0.2s ease",
                  borderRadius: 0,
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-signal)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(138,148,166,0.25)")}
              />
            </div>

            {/* Business type */}
            <div>
              <label
                htmlFor="contact-business"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                BUSINESS TYPE
              </label>
              <select
                id="contact-business"
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: form.businessType ? "var(--color-paper)" : "var(--color-steel)",
                  outline: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                }}
              >
                <option value="">Select type</option>
                {BUSINESS_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* What you need */}
            <div>
              <label
                htmlFor="contact-need"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                WHAT YOU NEED
              </label>
              <select
                id="contact-need"
                value={form.need}
                onChange={(e) => setForm({ ...form, need: e.target.value })}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: form.need ? "var(--color-paper)" : "var(--color-steel)",
                  outline: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                }}
              >
                <option value="">Select service</option>
                {NEEDS.map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="contact-budget"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                BUDGET RANGE
              </label>
              <select
                id="contact-budget"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: form.budget ? "var(--color-paper)" : "var(--color-steel)",
                  outline: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                }}
              >
                <option value="">Select range</option>
                {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="type-mono"
                style={{ color: "var(--color-steel)", display: "block", marginBottom: "0.5rem", fontSize: "0.6rem" }}
              >
                ANYTHING ELSE?
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                placeholder="Tell us about your project, timeline, or any specific requirements..."
                style={{
                  width: "100%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(138,148,166,0.25)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  color: "var(--color-paper)",
                  outline: "none",
                  resize: "vertical",
                  transition: "border-color 0.2s ease",
                  borderRadius: 0,
                  minHeight: "100px",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--color-signal)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(138,148,166,0.25)")}
              />
            </div>

            <ClickSpark>
            <button
              type="submit"
              className="btn-signal"
              id="contact-submit"
              style={{ fontSize: "0.75rem", padding: "0.9rem 2rem", alignSelf: "flex-start" }}
            >
              Send Transmission
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            </ClickSpark>

            <p className="type-mono" style={{ color: "var(--color-steel)", opacity: 0.5, fontSize: "0.6rem" }}>
              No spam. No automated follow-ups. Just a real reply.
            </p>
          </form>
        </div>
      </div>

      <style>{`
        select option { background: #14151A; color: #ECEEF0; }
        input::placeholder, textarea::placeholder { color: rgba(138,148,166,0.5); }
      `}</style>
    </div>
  );
}
