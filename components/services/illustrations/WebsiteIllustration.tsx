/** Axonometric browser window illustration — Website Building service */
export default function WebsiteIllustration() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Axonometric base platform */}
      <path d="M60 85 L20 65 L20 25 L60 45 L60 85Z" fill="#1a1c23" stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />
      <path d="M60 45 L100 25 L100 65 L60 85Z" fill="#22242d" stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />
      <path d="M20 25 L60 5 L100 25 L60 45Z" fill="#2a2c35" stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />

      {/* Browser frame on top face */}
      <rect x="28" y="10" width="44" height="32" rx="1" fill="#1e2027" stroke="rgba(138,148,166,0.3)" strokeWidth="0.75"
        transform="skewX(-20) translate(12 -3)" />

      {/* Browser chrome bar */}
      <rect x="28" y="10" width="44" height="6" rx="1" fill="#2a2c35"
        transform="skewX(-20) translate(12 -3)" />

      {/* Traffic light dots */}
      <circle cx="40" cy="14" r="1.2" fill="#FF5722" transform="skewX(-20) translate(12 -3)" />
      <circle cx="44" cy="14" r="1.2" fill="rgba(138,148,166,0.4)" transform="skewX(-20) translate(12 -3)" />
      <circle cx="48" cy="14" r="1.2" fill="rgba(138,148,166,0.4)" transform="skewX(-20) translate(12 -3)" />

      {/* Content lines in browser */}
      <rect x="32" y="19" width="20" height="3" rx="0.5" fill="#FF5722" opacity="0.35"
        transform="skewX(-20) translate(12 -3)" />
      <rect x="32" y="24" width="35" height="2" rx="0.5" fill="rgba(138,148,166,0.25)"
        transform="skewX(-20) translate(12 -3)" />
      <rect x="32" y="28" width="28" height="2" rx="0.5" fill="rgba(138,148,166,0.15)"
        transform="skewX(-20) translate(12 -3)" />

      {/* Signal pulse dot */}
      <circle cx="96" cy="28" r="3" fill="#FF5722" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Vertical conduit on left face */}
      <line x1="20" y1="45" x2="20" y2="65" stroke="#FF5722" strokeWidth="0.75" opacity="0.4" strokeDasharray="3 3" />
      <line x1="40" y1="55" x2="40" y2="75" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" strokeDasharray="3 3" />

      {/* Coord label */}
      <text x="8" y="95" fontFamily="monospace" fontSize="6" fill="rgba(138,148,166,0.5)" letterSpacing="0.5">
        X:001 // WEB
      </text>
    </svg>
  );
}
