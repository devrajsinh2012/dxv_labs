"use client";

import Link from "next/link";

const SERVICES = [
  {
    id: "websites",
    num: "01",
    label: "Website Building",
    tagline: "Sites engineered to convert, not just to look good.",
    includes: ["Custom design (no templates)", "Mobile-first responsive build", "SEO foundations & meta setup", "Speed optimization (LCP < 2s target)", "CMS integration (if needed)", "1 round of revisions"],
    timeline: "8–14 days",
    accentColor: "#FF5722",
  },
  {
    id: "ai",
    num: "02",
    label: "AI Automation & Consulting",
    tagline: "Custom AI workflows that take the busywork off your plate.",
    includes: ["AI workflow audit & mapping", "Custom GPT/Claude integration", "Document processing automation", "Customer support AI setup", "Internal ops automation", "Training & handover docs"],
    timeline: "5–10 days",
    accentColor: "#8A94A6",
  },
  {
    id: "whatsapp",
    num: "03",
    label: "WhatsApp Automation",
    tagline: "Orders, support, and follow-ups — answered before you're awake.",
    includes: ["WhatsApp Business API setup", "Lead capture flows", "Order confirmation automation", "Support bot with handoff", "Follow-up sequences", "Analytics dashboard"],
    timeline: "3–6 days",
    accentColor: "#4CAF50",
  },
  {
    id: "marketing",
    num: "04",
    label: "Digital Marketing Automation",
    tagline: "Campaigns that run, learn, and adjust on their own.",
    includes: ["Email marketing setup & sequences", "Social posting automation", "Ad campaign automation", "Lead scoring & nurturing", "Weekly performance reports", "Monthly strategy review"],
    timeline: "4–7 days",
    accentColor: "#2196F3",
  },
  {
    id: "ecommerce",
    num: "05",
    label: "E-commerce Specialization",
    tagline: "Stores built to sell more, with less hands-on work.",
    includes: ["Shopify / WooCommerce setup", "Product import & configuration", "Payment gateway integration", "Inventory automation", "Post-purchase email flows", "Upsell & cross-sell systems"],
    timeline: "7–12 days",
    accentColor: "#9C27B0",
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--color-ink)", minHeight: "100vh", paddingTop: "120px" }}>
      <div className="section-container section-pad" style={{ paddingTop: "2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="type-mono" style={{ color: "var(--color-signal)", display: "block", marginBottom: "0.75rem" }}>
            — SERVICES
          </span>
          <h1 className="type-heading" style={{ color: "var(--color-paper)", marginBottom: "1rem" }}>
            One studio. Five systems.
          </h1>
          <p style={{ fontFamily: "var(--font-display)", color: "var(--color-steel)", maxWidth: "500px", lineHeight: 1.7 }}>
            Each service is a module. They work standalone, and they work better together.
          </p>
        </div>

        {/* Service panels */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {SERVICES.map((svc) => (
            <div
              key={svc.id}
              id={svc.id}
              style={{
                border: "1px solid rgba(138,148,166,0.15)",
                padding: "3rem clamp(1.5rem, 4vw, 3rem)",
                position: "relative",
                background: "var(--color-surface-dark)",
                borderLeft: `3px solid ${svc.accentColor}60`,
                transition: "border-left-color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = svc.accentColor)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = `${svc.accentColor}60`)}
            >
              <div className="services-panel-grid">
                <div>
                  <span className="type-mono" style={{ color: svc.accentColor, display: "block", marginBottom: "0.75rem", fontSize: "0.65rem" }}>
                    [{svc.num}] MODULE
                  </span>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, color: "var(--color-paper)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
                    {svc.label}
                  </h2>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-steel)", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "520px" }}>
                    {svc.tagline}
                  </p>

                  {/* Includes */}
                  <div>
                    <p className="type-mono" style={{ color: "var(--color-steel)", marginBottom: "1rem", opacity: 0.7 }}>
                      INCLUDES
                    </p>
                    <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.6rem", listStyle: "none" }}>
                      {svc.includes.map((item) => (
                        <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <span style={{ color: svc.accentColor, flexShrink: 0, marginTop: "2px" }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                              <path d="M1.5 5.5L3.5 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ fontFamily: "var(--font-display)", fontSize: "0.85rem", color: "var(--color-steel)", lineHeight: 1.4 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline */}
                <div className="services-timeline-wrapper">
                  <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.6rem", display: "block", marginBottom: "0.4rem" }}>
                    TYPICAL TIMELINE
                  </span>
                  <span style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: svc.accentColor,
                    padding: "0.4rem 1rem",
                    border: `1px solid ${svc.accentColor}40`,
                    display: "inline-block",
                  }}>
                    {svc.timeline}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <Link href="/contact" className="btn-signal" id="services-start-project" style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}>
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
