import React, { useEffect, useRef } from "react";
import "./ScrambledText.css";

interface ScrambledTextProps {
  radius?: number;
  duration?: number;
  speed?: number;
  scrambleChars?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const ScrambledText = ({
  radius = 100,
  duration = 1.2,
  speed = 0.5,
  scrambleChars = ".:",
  className = "",
  style = {},
  children,
}: ScrambledTextProps) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const el = rootRef.current;
    const chars = Array.from(el.querySelectorAll(".char")) as HTMLElement[];

    const handleMove = (e: PointerEvent) => {
      chars.forEach((c: any) => {
        const originalChar = c.getAttribute("data-content") || "";
        // Don't scramble spaces or linebreaks to preserve layout structure
        if (originalChar.trim() === "") return;

        const rect = c.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < radius) {
          // Clear existing timers (overwrite behavior)
          if (c.scrambleInterval) clearInterval(c.scrambleInterval);
          if (c.scrambleTimeout) clearTimeout(c.scrambleTimeout);

          // Calculate speed of scramble (higher speed = shorter interval)
          const intervalDelay = 40 / speed;

          // Start character cycling
          c.scrambleInterval = setInterval(() => {
            const randChar =
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
            c.innerText = randChar;
          }, intervalDelay);

          // Calculate scramble duration based on proximity
          const targetDuration = duration * (1 - dist / radius) * 1000;

          // Restore original char after duration
          c.scrambleTimeout = setTimeout(() => {
            clearInterval(c.scrambleInterval);
            c.innerText = originalChar;
            c.scrambleInterval = null;
            c.scrambleTimeout = null;
          }, targetDuration);
        }
      });
    };

    el.addEventListener("pointermove", handleMove);

    return () => {
      el.removeEventListener("pointermove", handleMove);
      // Clean up all active timers to avoid leaks
      chars.forEach((c: any) => {
        if (c.scrambleInterval) clearInterval(c.scrambleInterval);
        if (c.scrambleTimeout) clearTimeout(c.scrambleTimeout);
      });
    };
  }, [radius, duration, speed, scrambleChars]);

  const text = typeof children === "string" ? children : "";
  const characters = text.split("");

  return (
    <div ref={rootRef} className={`text-block ${className}`} style={style}>
      <p style={{ margin: 0, padding: 0 }}>
        {characters.map((char, index) => (
          <span
            key={index}
            className="char"
            data-content={char}
            style={{ display: "inline-block" }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrambledText;
