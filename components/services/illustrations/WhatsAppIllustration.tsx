/** Axonometric message bubble stack with flow arrows — WhatsApp Automation */
export default function WhatsAppIllustration() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Axonometric phone body — left face */}
      <path d="M30 20 L30 80 L50 90 L50 30Z" fill="#1a1c23" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      {/* Right face */}
      <path d="M50 30 L50 90 L90 70 L90 10Z" fill="#22242d" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      {/* Top face */}
      <path d="M30 20 L70 0 L90 10 L50 30Z" fill="#2a2c35" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />

      {/* Screen on right face */}
      <rect x="55" y="18" width="28" height="44" rx="1" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.5"
        transform="skewY(-15)" />

      {/* Message bubbles */}
      {/* Incoming */}
      <rect x="57" y="22" width="16" height="6" rx="2" fill="rgba(138,148,166,0.15)" stroke="rgba(138,148,166,0.25)" strokeWidth="0.5"
        transform="skewY(-15)" />
      {/* Outgoing — orange */}
      <rect x="67" y="31" width="14" height="6" rx="2" fill="rgba(255,87,34,0.2)" stroke="#FF5722" strokeWidth="0.5"
        transform="skewY(-15)">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="2.5s" repeatCount="indefinite" />
      </rect>
      {/* Incoming 2 */}
      <rect x="57" y="40" width="18" height="6" rx="2" fill="rgba(138,148,166,0.15)" stroke="rgba(138,148,166,0.25)" strokeWidth="0.5"
        transform="skewY(-15)" />
      {/* Outgoing 2 — orange */}
      <rect x="65" y="49" width="18" height="6" rx="2" fill="rgba(255,87,34,0.15)" stroke="#FF5722" strokeWidth="0.5"
        transform="skewY(-15)" />

      {/* Flow arrow going out right */}
      <path d="M91 40 L108 32 L108 48Z" fill="#FF5722" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </path>
      <line x1="90" y1="40" x2="108" y2="40" stroke="#FF5722" strokeWidth="0.75" opacity="0.4" />

      {/* Signal pulse at top */}
      <circle cx="70" cy="5" r="2.5" fill="#FF5722" opacity="0.7">
        <animate attributeName="r" values="2.5;4.5;2.5" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Coord label */}
      <text x="8" y="100" fontFamily="monospace" fontSize="6" fill="rgba(138,148,166,0.5)" letterSpacing="0.5">
        X:003 // WA
      </text>
    </svg>
  );
}
