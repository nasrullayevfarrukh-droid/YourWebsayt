"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/data/brand";
import { heroTrustIndicators } from "@/data/site";

const heroLines = ["Biznesinizi daha ciddi göstərən", "premium veb saytlar qururuq"];

const techOrbitBadges = [
  {
    label: "AI",
    detail: "agent",
    glyph: "◌",
    x: 0,
    y: -156,
    z: 148,
    accent: "rgba(167,243,208,0.24)",
    text: "rgba(248,250,252,0.96)"
  },
  {
    label: "PY",
    detail: "python",
    glyph: "Py",
    x: -154,
    y: -52,
    z: 122,
    accent: "rgba(20,184,166,0.24)",
    text: "rgba(167,243,208,0.94)"
  },
  {
    label: "JS",
    detail: "script",
    glyph: "{ }",
    x: 156,
    y: -46,
    z: 98,
    accent: "rgba(96,165,250,0.24)",
    text: "rgba(248,250,252,0.94)"
  },
  {
    label: "HTML",
    detail: "css",
    glyph: "</>",
    x: 146,
    y: 100,
    z: 110,
    accent: "rgba(129,140,248,0.22)",
    text: "rgba(167,243,208,0.92)"
  },
  {
    label: "NODE",
    detail: "runtime",
    glyph: "[]",
    x: -148,
    y: 112,
    z: 102,
    accent: "rgba(0,230,118,0.22)",
    text: "rgba(248,250,252,0.92)"
  },
  {
    label: "JAVA",
    detail: "backend",
    glyph: "//",
    x: 0,
    y: 160,
    z: 138,
    accent: "rgba(96,165,250,0.22)",
    text: "rgba(167,243,208,0.92)"
  }
] as const;

const networkLinks = [
  { x1: 16, y1: 20, x2: 31, y2: 34 },
  { x1: 28, y1: 40, x2: 42, y2: 44 },
  { x1: 24, y1: 74, x2: 39, y2: 61 },
  { x1: 48, y1: 16, x2: 50, y2: 32 },
  { x1: 74, y1: 18, x2: 63, y2: 34 },
  { x1: 82, y1: 42, x2: 66, y2: 46 },
  { x1: 72, y1: 76, x2: 62, y2: 61 },
  { x1: 48, y1: 86, x2: 50, y2: 67 },
  { x1: 31, y1: 34, x2: 50, y2: 50 },
  { x1: 39, y1: 61, x2: 50, y2: 50 },
  { x1: 63, y1: 34, x2: 50, y2: 50 },
  { x1: 66, y1: 46, x2: 50, y2: 50 },
  { x1: 62, y1: 61, x2: 50, y2: 50 }
] as const;

const brandMarkLinks = [
  { x1: 28, y1: 18, x2: 78, y2: 47, stroke: "rgba(167,243,208,0.66)", width: 1.7 },
  { x1: 78, y1: 47, x2: 58, y2: 68, stroke: "rgba(96,165,250,0.42)", width: 1.45 },
  { x1: 58, y1: 68, x2: 46, y2: 56, stroke: "rgba(20,184,166,0.5)", width: 1.35 },
  { x1: 46, y1: 56, x2: 34, y2: 79, stroke: "rgba(167,243,208,0.52)", width: 1.45 },
  { x1: 34, y1: 79, x2: 34, y2: 34, stroke: "rgba(20,184,166,0.5)", width: 1.45 },
  { x1: 34, y1: 34, x2: 28, y2: 18, stroke: "rgba(96,165,250,0.36)", width: 1.2 },
  { x1: 34, y1: 34, x2: 50, y2: 21, stroke: "rgba(167,243,208,0.52)", width: 1.3 },
  { x1: 50, y1: 21, x2: 50, y2: 43, stroke: "rgba(20,184,166,0.58)", width: 1.65 },
  { x1: 50, y1: 21, x2: 78, y2: 47, stroke: "rgba(167,243,208,0.54)", width: 1.3 },
  { x1: 16, y1: 35, x2: 34, y2: 56, stroke: "rgba(167,243,208,0.7)", width: 2.1 },
  { x1: 34, y1: 56, x2: 34, y2: 88, stroke: "rgba(20,184,166,0.68)", width: 2.2 },
  { x1: 34, y1: 56, x2: 48, y2: 35, stroke: "rgba(167,243,208,0.66)", width: 1.9 },
  { x1: 48, y1: 35, x2: 48, y2: 75, stroke: "rgba(96,165,250,0.56)", width: 1.85 },
  { x1: 48, y1: 75, x2: 58, y2: 56, stroke: "rgba(20,184,166,0.64)", width: 1.75 },
  { x1: 40, y1: 29, x2: 47, y2: 25, stroke: "rgba(167,243,208,0.58)", width: 1.15 },
  { x1: 40, y1: 36, x2: 47, y2: 32, stroke: "rgba(20,184,166,0.54)", width: 1.15 },
  { x1: 40, y1: 43, x2: 47, y2: 39, stroke: "rgba(96,165,250,0.42)", width: 1.05 },
  { x1: 58, y1: 46, x2: 53, y2: 50, stroke: "rgba(167,243,208,0.56)", width: 1.15 },
  { x1: 53, y1: 50, x2: 58, y2: 54, stroke: "rgba(167,243,208,0.56)", width: 1.15 },
  { x1: 63, y1: 58, x2: 67, y2: 42, stroke: "rgba(96,165,250,0.52)", width: 1.1 },
  { x1: 72, y1: 46, x2: 77, y2: 50, stroke: "rgba(20,184,166,0.54)", width: 1.15 },
  { x1: 77, y1: 50, x2: 72, y2: 54, stroke: "rgba(20,184,166,0.54)", width: 1.15 }
] as const;

const brandMarkNodes = [
  { x: 28, y: 18, size: 1.6, color: "rgba(167,243,208,0.98)", peak: 0.96, delay: 0.15, duration: 4.8 },
  { x: 34, y: 34, size: 1.4, color: "rgba(20,184,166,0.92)", peak: 0.92, delay: 0.45, duration: 5.4 },
  { x: 50, y: 21, size: 1.45, color: "rgba(248,250,252,0.92)", peak: 0.94, delay: 0.7, duration: 4.6 },
  { x: 78, y: 47, size: 1.75, color: "rgba(167,243,208,0.96)", peak: 0.94, delay: 0.2, duration: 5.6 },
  { x: 58, y: 68, size: 1.45, color: "rgba(96,165,250,0.86)", peak: 0.9, delay: 0.9, duration: 5.1 },
  { x: 46, y: 56, size: 1.2, color: "rgba(20,184,166,0.84)", peak: 0.88, delay: 0.6, duration: 5.5 },
  { x: 34, y: 79, size: 1.55, color: "rgba(167,243,208,0.92)", peak: 0.92, delay: 0.8, duration: 5.8 },
  { x: 16, y: 35, size: 1.5, color: "rgba(167,243,208,0.88)", peak: 0.9, delay: 0.25, duration: 5.2 },
  { x: 34, y: 56, size: 1.75, color: "rgba(248,250,252,0.92)", peak: 0.98, delay: 0.3, duration: 4.9 },
  { x: 34, y: 88, size: 1.85, color: "rgba(20,184,166,0.9)", peak: 0.96, delay: 1, duration: 6.1 },
  { x: 48, y: 35, size: 1.45, color: "rgba(167,243,208,0.9)", peak: 0.9, delay: 0.5, duration: 4.7 },
  { x: 48, y: 75, size: 1.45, color: "rgba(96,165,250,0.86)", peak: 0.9, delay: 0.95, duration: 5.9 },
  { x: 58, y: 56, size: 1.3, color: "rgba(20,184,166,0.84)", peak: 0.88, delay: 0.65, duration: 5.3 },
  { x: 40, y: 29, size: 0.95, color: "rgba(167,243,208,0.82)", peak: 0.82, delay: 0.15, duration: 4.4 },
  { x: 40, y: 36, size: 0.9, color: "rgba(20,184,166,0.8)", peak: 0.8, delay: 0.55, duration: 4.8 },
  { x: 40, y: 43, size: 0.85, color: "rgba(96,165,250,0.76)", peak: 0.76, delay: 0.85, duration: 5.1 },
  { x: 58, y: 46, size: 0.9, color: "rgba(167,243,208,0.8)", peak: 0.8, delay: 0.2, duration: 4.5 },
  { x: 53, y: 50, size: 0.8, color: "rgba(248,250,252,0.78)", peak: 0.8, delay: 0.5, duration: 4.9 },
  { x: 58, y: 54, size: 0.9, color: "rgba(167,243,208,0.8)", peak: 0.8, delay: 0.75, duration: 5.4 },
  { x: 67, y: 42, size: 0.82, color: "rgba(96,165,250,0.76)", peak: 0.78, delay: 0.35, duration: 5.1 },
  { x: 63, y: 58, size: 0.82, color: "rgba(96,165,250,0.76)", peak: 0.78, delay: 0.92, duration: 5.6 },
  { x: 72, y: 46, size: 0.9, color: "rgba(20,184,166,0.78)", peak: 0.8, delay: 0.25, duration: 4.6 },
  { x: 77, y: 50, size: 0.92, color: "rgba(248,250,252,0.78)", peak: 0.8, delay: 0.6, duration: 5.2 },
  { x: 72, y: 54, size: 0.9, color: "rgba(20,184,166,0.78)", peak: 0.8, delay: 0.88, duration: 5.8 }
] as const;

const initialRotation = { x: -16, y: 24 };

function BrandConstellation() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-[12%] bottom-[16%] top-[8%]"
      animate={{ y: [0, -4, 0], rotate: [0, 0.8, 0], opacity: [0.9, 1, 0.92] }}
      transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_50%_18%,rgba(248,250,252,0.12),transparent_28%),radial-gradient(circle_at_40%_46%,rgba(20,184,166,0.16),transparent_36%),radial-gradient(circle_at_66%_54%,rgba(96,165,250,0.12),transparent_32%)] blur-xl" />

      <svg
        viewBox="0 0 100 100"
        className="relative h-full w-full overflow-visible [filter:drop-shadow(0_0_16px_rgba(20,184,166,0.24))_drop-shadow(0_0_28px_rgba(96,165,250,0.12))]"
      >
        {brandMarkLinks.map((link) => (
          <line
            key={`${link.x1}-${link.y1}-${link.x2}-${link.y2}`}
            x1={link.x1}
            y1={link.y1}
            x2={link.x2}
            y2={link.y2}
            stroke={link.stroke}
            strokeWidth={link.width}
            strokeLinecap="round"
            opacity="0.96"
          />
        ))}

        {brandMarkNodes.map((node) => (
          <g key={`${node.x}-${node.y}`}>
            <circle cx={node.x} cy={node.y} r={node.size * 2.6} fill={node.color} opacity="0.14" />
            <motion.circle
              cx={node.x}
              cy={node.y}
              fill={node.color}
              initial={{ opacity: 0.5 }}
              animate={{
                opacity: [0.4, node.peak, 0.4],
                r: [node.size * 0.82, node.size, node.size * 0.82]
              }}
              transition={{
                duration: node.duration,
                delay: node.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </g>
        ))}
      </svg>
    </motion.div>
  );
}

function HeroNetworkVisual() {
  const [rotation, setRotation] = useState(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const rotationRef = useRef(initialRotation);
  const velocityRef = useRef({ x: 0, y: 0 });
  const pointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let frameId = 0;

    const animate = () => {
      if (!pointerRef.current) {
        const nextX = rotationRef.current.x + velocityRef.current.x;
        const nextY = rotationRef.current.y + velocityRef.current.y;

        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;

        if (Math.abs(velocityRef.current.x) < 0.002) {
          velocityRef.current.x = 0;
        }

        if (Math.abs(velocityRef.current.y) < 0.002) {
          velocityRef.current.y = 0;
        }

        if (velocityRef.current.x !== 0 || velocityRef.current.y !== 0) {
          rotationRef.current = { x: nextX, y: nextY };
          setRotation(rotationRef.current);
        }
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = { x: event.clientX, y: event.clientY };
    velocityRef.current = { x: 0, y: 0 };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerRef.current) {
      return;
    }

    const deltaX = event.clientX - pointerRef.current.x;
    const deltaY = event.clientY - pointerRef.current.y;

    const nextRotation = {
      x: rotationRef.current.x - deltaY * 0.22,
      y: rotationRef.current.y + deltaX * 0.28
    };

    rotationRef.current = nextRotation;
    velocityRef.current = {
      x: -deltaY * 0.018,
      y: deltaX * 0.022
    };
    pointerRef.current = { x: event.clientX, y: event.clientY };
    setRotation(nextRotation);
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    pointerRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const sceneTransform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
  const badgeCounterTransform = `rotateX(${-rotation.x}deg) rotateY(${-rotation.y}deg)`;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[40rem]"
    >
      <div className="absolute -left-10 top-14 hidden h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.18),transparent_72%)] blur-3xl lg:block" />
      <div className="absolute -right-4 bottom-10 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_72%)] blur-3xl lg:block" />

      <div className="relative overflow-visible px-2 py-4 sm:px-4 sm:py-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-[10%] inset-y-[10%] rounded-[46px] bg-[radial-gradient(circle_at_50%_50%,rgba(11,31,24,0.62),rgba(6,17,16,0.22)_60%,transparent_100%)] blur-2xl" />
          <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.16),transparent_72%)] blur-3xl" />
          <div className="absolute right-[8%] bottom-[14%] h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_72%)] blur-3xl" />
        </div>

        <div
          className="relative overflow-hidden rounded-[44px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 76% 72% at 50% 50%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.96) 58%, rgba(0,0,0,0.7) 76%, rgba(0,0,0,0.26) 90%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 76% 72% at 50% 50%, rgba(0,0,0,1) 42%, rgba(0,0,0,0.96) 58%, rgba(0,0,0,0.7) 76%, rgba(0,0,0,0.26) 90%, transparent 100%)"
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(167,243,208,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.12),transparent_32%),radial-gradient(circle_at_50%_18%,rgba(248,250,252,0.08),transparent_20%),radial-gradient(circle_at_50%_88%,rgba(4,17,13,0.34),transparent_28%)]" />
          <div className="absolute inset-x-[16%] top-[10%] h-px bg-[linear-gradient(90deg,transparent,rgba(167,243,208,0.16),transparent)]" />
          <div className="absolute inset-x-[18%] bottom-[14%] h-px bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.12),transparent)]" />

          <div
            className={`relative aspect-[0.98/1] select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ perspective: "1400px" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={(event) => {
              if (pointerRef.current) {
                handlePointerEnd(event);
              }
            }}
          >
          <div className="absolute inset-0" style={{ transformStyle: "preserve-3d", transform: sceneTransform }}>
            {techOrbitBadges.map((badge) => (
              <div
                key={badge.label}
                className="absolute left-1/2 top-1/2 z-20"
                style={{
                  transform: `translate3d(${badge.x}px, ${badge.y}px, ${badge.z}px)`,
                  transformStyle: "preserve-3d"
                }}
              >
                <div
                  className="pointer-events-none min-w-[4.6rem] rounded-[18px] border border-[rgba(167,243,208,0.14)] bg-[rgba(6,17,16,0.82)] px-3 py-2 shadow-[0_18px_48px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                  style={{
                    transform: badgeCounterTransform,
                    boxShadow: `0 0 24px ${badge.accent}`
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.24em]"
                      style={{ color: badge.text }}
                    >
                      {badge.label}
                    </span>
                    <span className="font-mono text-[11px]" style={{ color: badge.text }}>
                      {badge.glyph}
                    </span>
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {badge.detail}
                  </div>
                </div>
              </div>
            ))}

            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-[10%] z-10 h-[80%] w-[80%] opacity-[0.72]"
              style={{ transform: "translateZ(4px)" }}
            >
              <defs>
                <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(167,243,208,0.55)" />
                  <stop offset="55%" stopColor="rgba(20,184,166,0.38)" />
                  <stop offset="100%" stopColor="rgba(96,165,250,0.25)" />
                </linearGradient>
              </defs>

              {networkLinks.map((link) => (
                <line
                  key={`${link.x1}-${link.y1}-${link.x2}-${link.y2}`}
                  x1={link.x1}
                  y1={link.y1}
                  x2={link.x2}
                  y2={link.y2}
                  stroke="url(#network-line)"
                  strokeWidth="0.45"
                  strokeLinecap="round"
                  opacity="0.74"
                />
              ))}

              <circle
                cx="50"
                cy="50"
                r="18.5"
                fill="none"
                stroke="rgba(167,243,208,0.14)"
                strokeWidth="0.45"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="26"
                ry="11"
                fill="none"
                stroke="rgba(96,165,250,0.14)"
                strokeWidth="0.32"
                transform="rotate(-18 50 50)"
              />
              <ellipse
                cx="50"
                cy="50"
                rx="12"
                ry="28"
                fill="none"
                stroke="rgba(20,184,166,0.14)"
                strokeWidth="0.32"
                transform="rotate(22 50 50)"
              />
            </svg>

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[58%] w-[34%] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(16px)" }}
            >
              <motion.div
                className="h-full w-full rounded-full border border-[color:rgba(167,243,208,0.14)] opacity-60"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[40%] w-[70%] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}
            >
              <motion.div
                className="h-full w-full rounded-full border border-[color:rgba(96,165,250,0.14)] opacity-50"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-[58%] h-[20%] w-[34%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.58),transparent_72%)] blur-2xl"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
            >
              <motion.div
                animate={{ scale: [1, 1.02, 1], rotate: [0, 1.2, 0] }}
                transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <div className="absolute inset-[-14%] rounded-full border border-[color:rgba(167,243,208,0.08)] opacity-80" />
                <div className="absolute inset-[-24%] rounded-full border border-[color:rgba(96,165,250,0.06)] opacity-70" />
                <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.14),transparent_64%)] blur-2xl" />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_32%_22%,rgba(248,250,252,0.26),rgba(167,243,208,0.14)_12%,rgba(18,56,49,0.44)_32%,rgba(4,14,14,0.94)_74%),radial-gradient(circle_at_70%_76%,rgba(96,165,250,0.18),transparent_28%),radial-gradient(circle_at_48%_52%,rgba(20,184,166,0.1),transparent_44%)] shadow-[inset_-18px_-30px_56px_rgba(0,0,0,0.58),inset_10px_14px_26px_rgba(255,255,255,0.05),0_24px_60px_rgba(0,0,0,0.3),0_0_110px_rgba(20,184,166,0.1)]" />
                <div className="absolute inset-[1.5%] rounded-full border border-[color:rgba(248,250,252,0.08)] opacity-70" />
                <div className="absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_34%_24%,rgba(248,250,252,0.1),transparent_18%),linear-gradient(150deg,transparent_36%,rgba(255,255,255,0.03)_48%,transparent_58%)] opacity-90" />

                <div className="absolute inset-[13%] overflow-hidden rounded-full border border-[color:rgba(167,243,208,0.14)] bg-[radial-gradient(circle_at_50%_34%,rgba(167,243,208,0.06),rgba(4,17,13,0.82)_72%)] backdrop-blur-sm shadow-[inset_0_0_32px_rgba(0,0,0,0.24)]">
                  <div className="absolute inset-0 bg-[conic-gradient(from_180deg,rgba(20,184,166,0.1),rgba(0,230,118,0.03),rgba(96,165,250,0.07),rgba(20,184,166,0.1))] opacity-75 blur-[18px]" />
                  <div className="absolute inset-[10%] rounded-full border border-[color:rgba(167,243,208,0.07)]" />
                  <div className="absolute left-[22%] right-[22%] top-[12%] h-[18%] rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.16),transparent_72%)] blur-xl" />
                  <div className="absolute inset-x-[16%] top-[8%] h-[12%] rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.1),transparent_78%)] blur-2xl" />
                  <BrandConstellation />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-32 lg:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(0,230,118,0.16),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(20,184,166,0.18),transparent_22%),linear-gradient(180deg,rgba(4,17,13,0),rgba(4,17,13,0.28))]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(167,243,208,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,243,208,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px"
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-no-repeat opacity-[0.05] sm:opacity-[0.08]"
        style={{
          backgroundImage: `url(${brand.heroBackgroundPath})`,
          backgroundPosition: "right -10rem top -3rem",
          backgroundSize: "min(46rem, 56vw)"
        }}
      />

      <Container className="relative">
        <div className="grid gap-10 lg:gap-12 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-center">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.05)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-highlight)] shadow-[0_0_0_1px_rgba(167,243,208,0.04)]">
              <Sparkles className="size-4 text-[var(--color-accent)]" />
              Premium web studio
            </div>

            <div className="mt-6 space-y-2">
              {heroLines.map((line) => (
                <h1
                  key={line}
                  className="text-balance font-display text-[2.9rem] leading-[0.92] tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl xl:text-[5.35rem]"
                >
                  {line}
                </h1>
              ))}
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              YourWebsayt şirkətlər, restoranlar, klinikalar, daşınmaz əmlak ofisləri, rent a car
              biznesləri və şəxsi brendlər üçün sürətli, modern və satış yönümlü saytlar hazırlayır.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                Portfoliaya baxın
              </Button>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {heroTrustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-4 py-3 text-sm text-[var(--color-muted)] backdrop-blur-xl"
                >
                  <BadgeCheck className="size-4 shrink-0 text-[var(--color-accent)]" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative">
            <HeroNetworkVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
