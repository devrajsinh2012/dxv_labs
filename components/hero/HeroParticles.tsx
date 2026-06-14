"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  opacityDelta: number;
}

const PARTICLE_COUNT = 80;
const CONNECTION_DISTANCE = 120;
const SIGNAL_COLOR = "255, 87, 34";   // #FF5722 in RGB
const STEEL_COLOR  = "138, 148, 166"; // #8A94A6 in RGB

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef  = useRef({ x: -999, y: -999 });
  const frameRef  = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Init particles
    const makeParticle = (): Particle => ({
      x:            Math.random() * canvas.width,
      y:            Math.random() * canvas.height,
      vx:           (Math.random() - 0.5) * 0.35,
      vy:           (Math.random() - 0.5) * 0.35,
      radius:       Math.random() * 1.5 + 0.5,
      opacity:      Math.random() * 0.5 + 0.1,
      opacityDelta: (Math.random() - 0.5) * 0.003,
    });
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, makeParticle);

    // Mouse tracking
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => { mouseRef.current = { x: -999, y: -999 }; };
    canvas.addEventListener("mousemove", onMove, { passive: true });
    canvas.addEventListener("mouseleave", onLeave, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ps = particlesRef.current;
      const mouse = mouseRef.current;

      // Update + draw particles
      for (let i = 0; i < ps.length; i++) {
        const p = ps[i];

        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80 && dist > 0) {
          const force = (80 - dist) / 80 * 0.6;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        // Velocity dampen
        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0)             p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0)             p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulse opacity
        p.opacity += p.opacityDelta;
        if (p.opacity > 0.6 || p.opacity < 0.05) p.opacityDelta *= -1;

        // Draw dot — signal-tinted for first 15%, steel for rest
        const isSignal = i < PARTICLE_COUNT * 0.15;
        const color = isSignal ? SIGNAL_COLOR : STEEL_COLOR;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      }

      // Draw connection lines
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
            // Signal-tinted line if either endpoint is signal particle
            const isSignalLine = i < PARTICLE_COUNT * 0.15 || j < PARTICLE_COUNT * 0.15;
            const lineColor = isSignalLine ? SIGNAL_COLOR : STEEL_COLOR;

            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Mouse proximity highlight: draw a large faint Signal circle
      if (mouse.x > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 100
        );
        gradient.addColorStop(0,   `rgba(${SIGNAL_COLOR}, 0.04)`);
        gradient.addColorStop(1,   `rgba(${SIGNAL_COLOR}, 0)`);
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
