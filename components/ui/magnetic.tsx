"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 18
}: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      onMouseMove={(event) => {
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        target.animate(
          { transform: `translate(${x / strength}px, ${y / strength}px)` },
          { duration: 220, fill: "forwards", easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }}
      onMouseLeave={(event) => {
        event.currentTarget.animate(
          { transform: "translate(0px, 0px)" },
          { duration: 320, fill: "forwards", easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }}
    >
      {children}
    </motion.div>
  );
}
