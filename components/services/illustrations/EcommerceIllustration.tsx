/** Axonometric product card stack with cart — E-commerce Specialization */
export default function EcommerceIllustration() {
  return (
    <svg
      width="120"
      height="100"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* Stack of product cards in isometric view */}

      {/* Card 3 (back / bottom) */}
      <path d="M20 60 L20 42 L65 18 L65 36Z" fill="#1a1c23" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />
      <path d="M65 36 L65 18 L100 36 L100 54Z" fill="#1e2027" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />
      <path d="M20 42 L65 18 L100 36 L55 60Z" fill="#22242d" stroke="rgba(138,148,166,0.15)" strokeWidth="0.75" />

      {/* Card 2 (middle) */}
      <path d="M15 52 L15 36 L60 12 L60 28Z" fill="#22242d" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M60 28 L60 12 L95 30 L95 46Z" fill="#2a2c35" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />
      <path d="M15 36 L60 12 L95 30 L50 54Z" fill="#1e2027" stroke="rgba(138,148,166,0.2)" strokeWidth="0.75" />

      {/* Product image placeholder on top card */}
      <rect x="28" y="22" width="22" height="16" rx="1" fill="rgba(255,87,34,0.1)" stroke="#FF5722" strokeWidth="0.5"
        transform="skewX(-27) skewY(17) translate(4 -2) scale(0.85)" />

      {/* Card 1 (front / top) — signal orange accent */}
      <path d="M10 44 L10 28 L55 4 L55 20Z" fill="#2a2c35" stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />
      <path d="M55 20 L55 4 L90 22 L90 38Z" fill="#32343e" stroke="rgba(138,148,166,0.25)" strokeWidth="0.75" />
      <path d="M10 28 L55 4 L90 22 L45 46Z" fill="#3a3c46" stroke="#FF5722" strokeWidth="0.75" />

      {/* "Buy" CTA on front card */}
      <rect x="40" y="26" width="18" height="6" rx="1" fill="#FF5722" opacity="0.85"
        transform="skewX(-27) skewY(17) translate(-10 -8) scale(0.85)" />
      <text x="42" y="31" fontFamily="monospace" fontSize="4" fill="white" opacity="0.9"
        transform="skewX(-27) skewY(17) translate(-10 -8) scale(0.85)">BUY</text>

      {/* Cart icon top-right */}
      <path d="M95 8 L98 8 L101 18 L108 18" stroke="#FF5722" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="103" cy="21" r="1.5" fill="#FF5722" />
      <circle cx="107" cy="21" r="1.5" fill="#FF5722" />
      <path d="M98 10 L110 10 L108 18 L101 18Z" fill="rgba(255,87,34,0.1)" stroke="#FF5722" strokeWidth="0.75" />

      {/* Animated notification dot */}
      <circle cx="110" cy="8" r="2.5" fill="#FF5722">
        <animate attributeName="r" values="2.5;3.5;2.5" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Coord label */}
      <text x="8" y="100" fontFamily="monospace" fontSize="6" fill="rgba(138,148,166,0.5)" letterSpacing="0.5">
        X:005 // ECO
      </text>
    </svg>
  );
}
