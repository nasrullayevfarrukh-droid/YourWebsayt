"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const start = performance.now();
          const duration = 1200;

          const frame = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            setCount(Math.floor(progress * value));

            if (progress < 1) {
              requestAnimationFrame(frame);
            }
          };

          requestAnimationFrame(frame);
          observer.disconnect();
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="editorial-card rounded-[28px] p-6 sm:p-7">
      <div className="font-display text-4xl tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[var(--color-muted)]">{label}</p>
    </div>
  );
}
