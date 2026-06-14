const STRIP_ITEMS = [
  "[01] WEBSITES",
  "[02] AI AUTOMATION",
  "[03] WHATSAPP AUTOMATION",
  "[04] DIGITAL MARKETING",
  "[05] E-COMMERCE",
];

const content = Array(4).fill(STRIP_ITEMS).flat();

export default function SpecStrip() {
  return (
    <div
      className="spec-strip"
      style={{ padding: "0.85rem 0" }}
      aria-label="DxV Labs services: Websites, AI Automation, WhatsApp Automation, Digital Marketing, E-commerce"
    >
      <div className="spec-strip-inner" aria-hidden="true">
        {content.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0",
              padding: "0 2.5rem",
            }}
          >
            {item}
            <span style={{ marginLeft: "2.5rem", color: "var(--color-signal)", opacity: 0.5 }}>
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
