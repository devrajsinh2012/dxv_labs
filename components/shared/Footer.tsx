"use client";

import Link from "next/link";
import ASCIIText from "../ui/ASCIIText";

const NAV_COLS = [
  {
    label: "Services",
    links: [
      { href: "/services/websites",      label: "Website Building" },
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/whatsapp",      label: "WhatsApp Automation" },
      { href: "/services/marketing",     label: "Marketing Auto." },
      { href: "/services/ecommerce",     label: "E-commerce" },
    ],
  },
  {
    label: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/process", label: "Process" },
      { href: "/clients", label: "Clients" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "#000000",
        borderTop: "1px solid rgba(138,148,166,0.1)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Site footer"
    >
      {/* Top section */}
      <div
        className="section-container"
        style={{ paddingTop: "4rem", paddingBottom: "3rem" }}
      >
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="DxV Labs home"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "var(--color-paper)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                marginBottom: "1rem",
              }}
            >
              <span style={{ color: "var(--color-signal)" }}>D</span>
              <span style={{ color: "var(--color-paper)" }}>×</span>
              <span style={{ color: "var(--color-paper)" }}>V</span>
              <span style={{ color: "var(--color-steel)", fontWeight: 400, marginLeft: "0.25rem" }}>LABS</span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.875rem",
                color: "var(--color-steel)",
                lineHeight: 1.6,
                maxWidth: "280px",
                marginBottom: "1.5rem",
              }}
            >
              Digital systems agency. We design, build, and automate — so your business runs without someone pushing buttons all day.
            </p>
            {/* Status line */}
            <p className="type-mono" style={{ color: "var(--color-signal)", opacity: 0.8 }}>
              AVAILABILITY: 2 SLOTS OPEN
            </p>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.label}>
              <p className="type-mono" style={{ color: "var(--color-steel)", marginBottom: "1rem" }}>
                {col.label}
              </p>
              <nav aria-label={`${col.label} links`}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "0.875rem",
                          color: "var(--color-steel)",
                          textDecoration: "none",
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-paper)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-steel)")}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(138,148,166,0.1)", margin: "3rem 0 2rem" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p className="type-mono" style={{ color: "var(--color-steel)", opacity: 0.5 }}>
            © {new Date().getFullYear()} DxV Labs. All systems operational.
          </p>
          <p className="type-mono" style={{ color: "var(--color-steel)", opacity: 0.4 }}>
            X:099 Y:099 // EOF
          </p>
        </div>
      </div>

      {/* Large outline wordmark */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(120px, 16vw, 250px)",
          overflow: "hidden",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {/* Crosshair watermark */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          color: "rgba(138,148,166,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          lineHeight: 1,
        }}>
          ×
        </div>
        <ASCIIText
          text="DxV"
          asciiFontSize={7}
          planeBaseHeight={14}
          textColor="#ffffff"
          enableWaves={true}
                    waveSpeed={8.0}      // Try lower values for slower, more relaxed waves
          waveFrequency={2.0}  // Try higher values for tighter ripples
          waveAmplitude={0.4}  // Try lower values for subtle 
        />
      </div>
    </footer>
  );
}
