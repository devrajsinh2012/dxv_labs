"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import GooeyNav from "@/components/ui/GooeyNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/clients", label: "Clients" },
  { href: "/services", label: "Services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 3rem)",
          maxWidth: "960px",
          transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div
          className="nav-pill"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem 1.5rem",
            opacity: scrolled ? 0.98 : 0.92,
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="DxV Labs home"
            className="nav-logo"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.825rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span style={{ color: "var(--color-signal)" }}>D</span>
            <span style={{ color: "var(--color-ink)" }}>×</span>
            <span style={{ color: "var(--color-ink)" }}>V</span>
            <span
              style={{
                marginLeft: "0.25rem",
                color: "#5A6476",
                fontWeight: 500,
              }}
            >
              LABS
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="desktop-nav">
            <GooeyNav items={navLinks} />
          </div>

          {/* CTA */}
          <Link href="/contact" className="btn-signal nav-desktop-cta" style={{ fontSize: "0.65rem", padding: "0.55rem 1.1rem" }}>
            Start a Project
          </Link>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "var(--color-paper)",
              cursor: "pointer",
              padding: "0.25rem",
            }}
            className="mobile-menu-btn"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(20, 21, 26, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            animation: "fade-in 0.3s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        >
          {/* Header: Logo + Close Button */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "3.5rem" }}>
            {/* Logo */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="nav-logo"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <span style={{ color: "var(--color-signal)" }}>D</span>
              <span style={{ color: "var(--color-ink)" }}>×</span>
              <span style={{ color: "var(--color-ink)" }}>V</span>
              <span style={{ marginLeft: "0.25rem", color: "#5A6476", fontWeight: 500 }}>LABS</span>
            </Link>

            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(138, 148, 166, 0.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                color: "var(--color-paper)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 4.5L13.5 13.5M13.5 4.5L4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--color-paper)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid rgba(138,148,166,0.15)",
                  animation: `slide-in-link 0.4s cubic-bezier(0.22,1,0.36,1) ${idx * 60}ms forwards`,
                  opacity: 0,
                  transform: "translateX(20px)",
                }}
              >
                <span style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-signal)", opacity: 0.8 }}>
                    0{idx + 1}
                  </span>
                  {link.label}
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
                  <path d="M3.5 8h9M9 4.5L12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Bottom Section: CTA */}
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-signal"
              style={{
                padding: "1rem",
                justifyContent: "center",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
              }}
            >
              Start a Project
            </Link>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem" }}>
              <span className="type-mono" style={{ fontSize: "0.6rem", color: "var(--color-steel)", opacity: 0.6 }}>
                STATUS: 2 SLOTS OPEN
              </span>
              <span className="type-mono" style={{ fontSize: "0.6rem", color: "var(--color-steel)", opacity: 0.6 }}>
                X:001 Y:999 // MENU
              </span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-logo {
          background-color: #FFFFFF;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.2s ease;
        }
        .nav-logo:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 87, 34, 0.15);
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .nav-desktop-cta { display: none !important; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slide-in-link {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
