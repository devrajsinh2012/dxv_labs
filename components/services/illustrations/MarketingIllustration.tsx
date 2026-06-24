/** Axonometric analytics chart / funnel — Digital Marketing Automation */
export default function MarketingIllustration() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Axonometric base */}
      <path d="M10 75 L60 50 L110 75 L60 100Z" fill="#1a1c23" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />

      {/* Funnel stages — isometric columns */}
      {/* Stage 1: Wide — top of funnel */}
      <path d="M22 65 L22 45 L38 37 L38 57Z" fill="#22242d" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M38 57 L38 37 L54 45 L54 65Z" fill="#2a2c35" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M22 45 L38 37 L54 45 L38 53Z" fill="rgba(138,148,166,0.08)" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />

      {/* Stage 2: Mid */}
      <path d="M42 60 L42 44 L55 37 L55 53Z" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M55 53 L55 37 L68 44 L68 60Z" fill="#22242d" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M42 44 L55 37 L68 44 L55 51Z" fill="rgba(138,148,166,0.06)" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />

      {/* Stage 3: Narrow — conversion */}
      <path d="M60 58 L60 40 L70 33 L70 51Z" fill="rgba(255,87,34,0.12)" stroke="#FF5722" strokeWidth="0.75" opacity="0.8" />
      <path d="M70 51 L70 33 L80 40 L80 58Z" fill="rgba(255,87,34,0.18)" stroke="#FF5722" strokeWidth="0.75" opacity="0.8" />
      <path d="M60 40 L70 33 L80 40 L70 47Z" fill="rgba(255,87,34,0.3)" stroke="#FF5722" strokeWidth="0.75" />

      {/* Conversion sparkle */}
      <circle cx="70" cy="33" r="3" fill="#FF5722">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Rising chart line from base */}
      <polyline
        points="90,72 96,62 100,55 104,45 108,30"
        stroke="#FF5722"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
        fill="none"
      >
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="2s" fill="freeze" />
      </polyline>
      <circle cx="108" cy="30" r="2.5" fill="#FF5722" opacity="0.8" />

      {/* Coord label */}
      <text x="8" y="100" fontFamily="monospace" fontSize="6" fill="rgba(138,148,166,0.5)" letterSpacing="0.5">
        X:004 // MKT
      </text>
    </svg>
  );
}
