"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

import { useHasMounted } from "@/hooks/use-has-mounted";

export function CustomCursor() {
  const hasMounted = useHasMounted();
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.55 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.55 });

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduceMotion, x, y]);

  if (!hasMounted || shouldReduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-6 w-6 rounded-full border border-[var(--color-accent)]/70 bg-[var(--color-accent)]/8 mix-blend-screen lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
