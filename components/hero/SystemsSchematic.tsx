"use client";

import { useEffect, useState } from "react";

interface NodeItem {
  id: string;
  label: string;
  detail: string;
  coord: string;
}

const INPUT_NODES: NodeItem[] = [
  { id: "web", label: "Web Inbound", detail: "Form conversions & page events", coord: "IN_01" },
  { id: "wa_in", label: "WhatsApp Chat", detail: "Customer queries & triggers", coord: "IN_02" },
  { id: "hook", label: "Store Webhook", detail: "Cart checkout & payment updates", coord: "IN_03" },
];

const CORE_NODES: NodeItem[] = [
  { id: "router", label: "DxV Router", detail: "Dynamic pipeline dispatcher", coord: "SYS_01" },
  { id: "ai_core", label: "AI Agent Module", detail: "Custom LLM & logic worker", coord: "SYS_02" },
  { id: "db_sync", label: "Database Sync", detail: "Postgres persistent storage", coord: "SYS_03" },
];

const OUTPUT_NODES: NodeItem[] = [
  { id: "wa_out", label: "WhatsApp Send", detail: "Auto order notifications", coord: "OUT_01" },
  { id: "email", label: "Campaign Sync", detail: "Targeted nurture sequences", coord: "OUT_02" },
  { id: "ops", label: "CRM / Ops Sync", detail: "Direct inventory update", coord: "OUT_03" },
];

export default function SystemsSchematic() {
  const [hoveredNode, setHoveredNode] = useState<NodeItem | null>(null);
  const [sysTime, setSysTime] = useState("");
  const [packetCount, setPacketCount] = useState(298450);

  // Live clock and ticking packet count
  useEffect(() => {
    const timer = setInterval(() => {
      const d = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const ms = String(d.getMilliseconds()).padStart(3, "0").slice(0, 2);
      setSysTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${ms}`);
    }, 100);

    const packetTimer = setInterval(() => {
      setPacketCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 1200);

    return () => {
      clearInterval(timer);
      clearInterval(packetTimer);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        background: "rgba(30, 32, 39, 0.3)",
        border: "1px solid rgba(138, 148, 166, 0.15)",
        padding: "1.5rem",
        position: "relative",
        borderRadius: "4px",
      }}
      className="crosshair-frame"
    >
      {/* Blueprint grid lines on the console */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(138, 148, 166, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 148, 166, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Grid structure */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Column 1: Inputs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "30%" }}>
          <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.55rem", opacity: 0.6, marginBottom: "4px" }}>
            [01] INCOMING_EVENTS
          </span>
          {INPUT_NODES.map((node) => (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                background: hoveredNode?.id === node.id ? "rgba(255, 87, 34, 0.05)" : "rgba(20, 21, 26, 0.6)",
                border: `1px solid ${hoveredNode?.id === node.id ? "var(--color-signal)" : "rgba(138, 148, 166, 0.2)"}`,
                padding: "0.75rem",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-paper)", fontWeight: 500 }}>
                  {node.label}
                </span>
                <span className="type-mono" style={{ fontSize: "0.5rem", color: "var(--color-steel)", opacity: 0.7 }}>
                  {node.coord}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "var(--color-steel)", lineHeight: 1.3 }}>
                {node.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Conduit SVG 1 */}
        <div style={{ width: "5%", height: "200px", display: "flex", alignItems: "center" }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 40 200" fill="none">
            {/* Rows mapping: inputs to cores */}
            <path d="M0,40 L20,40 L20,100 L40,100" stroke={hoveredNode?.id === "web" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            <path d="M0,100 L40,100" stroke={hoveredNode?.id === "wa_in" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            <path d="M0,160 L20,160 L20,100 L40,100" stroke={hoveredNode?.id === "hook" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            
            {/* Primary active flow mapping */}
            <path d="M0,40 L40,40" stroke={hoveredNode?.id === "web" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.1)"} strokeWidth="1" />
            <path d="M0,160 L40,160" stroke={hoveredNode?.id === "hook" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.1)"} strokeWidth="1" />
          </svg>
        </div>

        {/* Column 2: Systems Core */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "30%" }}>
          <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.55rem", opacity: 0.6, marginBottom: "4px" }}>
            [02] PROCESSING_CORES
          </span>
          {CORE_NODES.map((node) => (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                background: hoveredNode?.id === node.id ? "rgba(255, 87, 34, 0.05)" : "rgba(20, 21, 26, 0.6)",
                border: `1px solid ${hoveredNode?.id === node.id ? "var(--color-signal)" : "rgba(138, 148, 166, 0.2)"}`,
                padding: "0.75rem",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-paper)", fontWeight: 500 }}>
                  {node.label}
                </span>
                <span className="type-mono" style={{ fontSize: "0.5rem", color: "var(--color-steel)", opacity: 0.7 }}>
                  {node.coord}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "var(--color-steel)", lineHeight: 1.3 }}>
                {node.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Conduit SVG 2 */}
        <div style={{ width: "5%", height: "200px", display: "flex", alignItems: "center" }} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 40 200" fill="none">
            <path d="M0,40 L40,40" stroke={hoveredNode?.id === "router" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            <path d="M0,100 L20,100 L20,40 L40,40" stroke={hoveredNode?.id === "ai_core" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            <path d="M0,100 L20,100 L20,160 L40,160" stroke={hoveredNode?.id === "ai_core" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
            <path d="M0,160 L40,160" stroke={hoveredNode?.id === "db_sync" ? "var(--color-signal)" : "rgba(138, 148, 166, 0.15)"} strokeWidth="1" strokeDasharray="4, 4" className="conduit-anim" />
          </svg>
        </div>

        {/* Column 3: Outputs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "30%" }}>
          <span className="type-mono" style={{ color: "var(--color-steel)", fontSize: "0.55rem", opacity: 0.6, marginBottom: "4px" }}>
            [03] EXTERNAL_SYNC
          </span>
          {OUTPUT_NODES.map((node) => (
            <div
              key={node.id}
              onMouseEnter={() => setHoveredNode(node)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{
                background: hoveredNode?.id === node.id ? "rgba(255, 87, 34, 0.05)" : "rgba(20, 21, 26, 0.6)",
                border: `1px solid ${hoveredNode?.id === node.id ? "var(--color-signal)" : "rgba(138, 148, 166, 0.2)"}`,
                padding: "0.75rem",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-paper)", fontWeight: 500 }}>
                  {node.label}
                </span>
                <span className="type-mono" style={{ fontSize: "0.5rem", color: "var(--color-steel)", opacity: 0.7 }}>
                  {node.coord}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: "var(--color-steel)", lineHeight: 1.3 }}>
                {node.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Console Status Monitor Panel */}
      <div
        style={{
          marginTop: "1.25rem",
          background: "#14151A",
          border: "1px solid rgba(138, 148, 166, 0.15)",
          padding: "0.65rem 0.85rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--color-steel)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <span>SYS_CLOCK: <span style={{ color: "var(--color-paper)" }}>{sysTime || "00:00:00.00"}</span></span>
          <span className="desktop-only-stat">ROUTER_PING: <span style={{ color: "#4CAF50" }}>14ms</span></span>
          <span>SYNCED_FLOWS: <span style={{ color: "var(--color-signal)" }}>{packetCount.toLocaleString()}</span></span>
        </div>
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "45%" }}>
          {hoveredNode ? (
            <span style={{ color: "var(--color-signal)", animation: "blink 0.5s step-end infinite" }}>
              HOVER_NODE: {hoveredNode.id.toUpperCase()} // STATUS: ACTIVE // LOAD: {Math.floor(Math.random() * 20) + 5}%
            </span>
          ) : (
            <span>CONSOLE: ACTIVE // SYSTEM_STATUS: IDLE_WAIT</span>
          )}
        </div>
      </div>

      {/* Styled animation block */}
      <style dangerouslySetInnerHTML={{ __html: `
        .conduit-anim {
          animation: dash-flow 1.5s linear infinite;
        }
        @keyframes dash-flow {
          to {
            stroke-dashoffset: -20;
          }
        }
        @media (max-width: 640px) {
          .desktop-only-stat {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
