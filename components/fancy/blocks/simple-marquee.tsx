"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  wrap,
  PanInfo,
} from "framer-motion";

interface SimpleMarqueeProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity?: number;
  repeat?: number;
  draggable?: boolean;
  scrollSpringConfig?: { damping: number; stiffness: number };
  slowDownFactor?: number;
  slowdownOnHover?: boolean;
  slowDownSpringConfig?: { damping: number; stiffness: number };
  scrollAwareDirection?: boolean;
  scrollContainer?: React.RefObject<HTMLElement | null>;
  useScrollVelocity?: boolean;
  direction?: "left" | "right";
}

export default function SimpleMarquee({
  children,
  className = "",
  baseVelocity = 2,
  repeat = 4,
  draggable = true,
  scrollSpringConfig = { damping: 60, stiffness: 300 },
  slowDownFactor = 0,
  slowdownOnHover = true,
  slowDownSpringConfig = { damping: 50, stiffness: 200 },
  scrollAwareDirection = true,
  scrollContainer,
  useScrollVelocity = true,
  direction = "left",
}: SimpleMarqueeProps) {
  const baseX = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPanning = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  // Track the scroll relative to scrollContainer if provided, otherwise window
  const { scrollY } = useScroll(
    scrollContainer ? { container: scrollContainer } : {}
  );
  
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, scrollSpringConfig);
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3], {
    clamp: false,
  });

  const hoverFactor = useSpring(1, slowDownSpringConfig);

  // Wrap the translation percentage within [-(100 / repeat), 0]
  const x = useTransform(baseX, (v: number) => `${wrap(-100 / repeat, 0, v)}%`);

  const directionFactor = useRef<number>(direction === "left" ? -1 : 1);

  useAnimationFrame((time, delta) => {
    // If the user is actively dragging/panning the track, do not run the auto-scroll animation
    if (isPanning.current) return;

    // delta is in ms (usually ~16ms per frame)
    // We adjust movement based on delta to maintain same speed across different framerates
    const dt = Math.min(delta / 1000, 0.1); // clamp delta to prevent jumps during tab switching
    let speed = baseVelocity * dt;

    if (useScrollVelocity) {
      const scrollFactor = velocityFactor.get();
      if (scrollAwareDirection) {
        const currentScrollVelocity = scrollVelocity.get();
        if (currentScrollVelocity !== 0) {
          directionFactor.current = currentScrollVelocity > 0 ? 1 : -1;
        }
      }
      
      const currentScrollFactor = Math.abs(scrollFactor);
      // Boost speed relative to scroll speed, capped to avoid overly fast spins
      speed += Math.min(currentScrollFactor * speed, speed * 1.5);
    }

    // Apply direction
    let moveBy = directionFactor.current * speed;

    // Apply hover multiplier (deceleration)
    moveBy *= hoverFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden flex flex-nowrap w-full ${className}`}>
      <motion.div
        ref={trackRef}
        className="flex flex-nowrap whitespace-nowrap min-w-max select-none"
        style={{
          x,
          cursor: draggable ? (isDragging ? "grabbing" : "grab") : "auto",
          touchAction: "pan-y", // Allow native vertical page scrolling on touch devices
        } as any}
        onMouseEnter={() => {
          if (slowdownOnHover) hoverFactor.set(slowDownFactor);
        }}
        onMouseLeave={() => {
          if (slowdownOnHover) {
            hoverFactor.set(1);
          }
        }}
        // Panning/Dragging event handlers
        onPanStart={() => {
          if (!draggable) return;
          isPanning.current = true;
          setIsDragging(true);
        }}
        onPan={(event, info: PanInfo) => {
          if (!draggable || !trackRef.current) return;
          const width = trackRef.current.offsetWidth;
          if (width > 0) {
            // Convert delta (pixels) to percentage of the track width and adjust position
            const percentageDelta = (info.delta.x / width) * 100;
            baseX.set(baseX.get() + percentageDelta);
          }
        }}
        onPanEnd={() => {
          isPanning.current = false;
          setIsDragging(false);
          // Set direction based on default direction when drag ends
          directionFactor.current = direction === "left" ? -1 : 1;
        }}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="flex flex-row items-center flex-nowrap">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
