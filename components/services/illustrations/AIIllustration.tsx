/** Axonometric neural-network node graph — AI Automation service */
export default function AIIllustration() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Axonometric grid plane */}
      <path d="M10 70 L60 45 L110 70 L60 95Z" fill="#1a1c23" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />

      {/* Grid lines on the plane */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`h${i}`}
          x1={10 + i * 25}
          y1={70 - i * 12.5}
          x2={60 + i * 25}
          y2={95 - i * 12.5}
          stroke="rgba(138,148,166,0.1)"
          strokeWidth="0.5"
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`v${i}`}
          x1={10 + i * 25}
          y1={70 - i * 12.5}
          x2={110 - i * 0}
          y2={70 - i * 0}
          stroke="rgba(138,148,166,0.1)"
          strokeWidth="0.5"
        />
      ))}

      {/* Node connections */}
      <line x1="35" y1="58" x2="60" y2="45" stroke="rgba(138,148,166,0.3)" strokeWidth="0.75" />
      <line x1="60" y1="45" x2="85" y2="58" stroke="rgba(138,148,166,0.3)" strokeWidth="0.75" />
      <line x1="35" y1="58" x2="60" y2="70" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <line x1="85" y1="58" x2="60" y2="70" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <line x1="60" y1="70" x2="60" y2="83" stroke="#FF5722" strokeWidth="0.75" opacity="0.5" />
      {/* Rising conduit */}
      <line x1="60" y1="45" x2="60" y2="12" stroke="#FF5722" strokeWidth="1" opacity="0.6" strokeDasharray="4 3">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.2s" repeatCount="indefinite" />
      </line>

      {/* Network nodes */}
      <circle cx="35" cy="58" r="4" fill="#1e2027" stroke="rgba(138,148,166,0.4)" strokeWidth="0.75" />
      <circle cx="85" cy="58" r="4" fill="#1e2027" stroke="rgba(138,148,166,0.4)" strokeWidth="0.75" />
      <circle cx="60" cy="70" r="4" fill="#1e2027" stroke="rgba(138,148,166,0.4)" strokeWidth="0.75" />
      <circle cx="60" cy="83" r="3" fill="#1e2027" stroke="rgba(138,148,166,0.3)" strokeWidth="0.75" />

      {/* Central node — signal orange, pulsing */}
      <circle cx="60" cy="45" r="6" fill="rgba(255,87,34,0.15)" stroke="#FF5722" strokeWidth="1">
        <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="45" r="3" fill="#FF5722" />

      {/* Top output node */}
      <circle cx="60" cy="12" r="4" fill="#1e2027" stroke="#FF5722" strokeWidth="0.75" opacity="0.7" />
      <circle cx="60" cy="12" r="1.5" fill="#FF5722" opacity="0.7" />

      {/* Coord label */}
      <text x="8" y="100" fontFamily="monospace" fontSize="6" fill="rgba(138,148,166,0.5)" letterSpacing="0.5">
        X:002 // AI
      </text>
    </svg>
  );
}
