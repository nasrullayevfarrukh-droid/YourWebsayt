"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { heroTrustIndicators } from "@/data/site";

const heroHeadline = ["Biznesinizi daha ciddi göstərən", "premium veb saytlar qururuq"];
const heroDescription =
  "YourWebsayt şirkətlər, restoranlar, klinikalar, daşınmaz əmlak ofisləri, rent a car biznesləri və şəxsi brendlər üçün sürətli, modern və satış yönümlü saytlar hazırlayır.";

const techOrbitBadges = [
  {
    label: "AI",
    x: 0,
    y: -172,
    z: 112,
    accent: "rgba(167,243,208,0.16)",
    text: "rgba(248,250,252,0.94)"
  },
  {
    label: "Python",
    x: -152,
    y: -34,
    z: 78,
    accent: "rgba(20,184,166,0.14)",
    text: "rgba(167,243,208,0.92)"
  },
  {
    label: "JavaScript",
    x: 156,
    y: -24,
    z: 76,
    accent: "rgba(96,165,250,0.14)",
    text: "rgba(248,250,252,0.92)"
  },
  {
    label: "Node",
    x: -138,
    y: 132,
    z: 66,
    accent: "rgba(0,230,118,0.14)",
    text: "rgba(248,250,252,0.9)"
  },
  {
    label: "HTML/CSS",
    x: 134,
    y: 122,
    z: 70,
    accent: "rgba(129,140,248,0.13)",
    text: "rgba(167,243,208,0.9)"
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
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[44rem] xl:max-w-[46rem]"
    >
      <div className="absolute -left-8 top-16 hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.08),transparent_72%)] blur-3xl lg:block" />
      <div className="absolute right-0 top-10 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.08),transparent_72%)] blur-3xl lg:block" />

      <div className="relative overflow-visible px-1 py-4 sm:px-3 sm:py-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-[10%] inset-y-[8%] rounded-[46px] bg-[radial-gradient(circle_at_50%_50%,rgba(11,31,24,0.34),rgba(6,17,16,0.1)_62%,transparent_100%)] blur-3xl" />
        </div>

        <div
          className="relative overflow-hidden rounded-[44px]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 74% at 50% 50%, rgba(0,0,0,1) 44%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.14) 90%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 78% 74% at 50% 50%, rgba(0,0,0,1) 44%, rgba(0,0,0,0.94) 60%, rgba(0,0,0,0.6) 78%, rgba(0,0,0,0.14) 90%, transparent 100%)"
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(167,243,208,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px"
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.06),transparent_34%),radial-gradient(circle_at_50%_18%,rgba(248,250,252,0.05),transparent_18%),radial-gradient(circle_at_50%_88%,rgba(4,17,13,0.26),transparent_28%)]" />

          <div
            className={`relative aspect-square select-none touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
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
                    className="pointer-events-none rounded-full border border-[rgba(167,243,208,0.1)] bg-[linear-gradient(180deg,rgba(8,20,17,0.42),rgba(8,20,17,0.22))] px-2.5 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.14)] backdrop-blur-md"
                    style={{
                      transform: badgeCounterTransform,
                      boxShadow: `0 0 14px ${badge.accent}`
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        className="inline-flex h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: badge.text,
                          boxShadow: `0 0 10px ${badge.accent}`
                        }}
                      />
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em]" style={{ color: badge.text }}>
                        {badge.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.1),rgba(20,184,166,0.03)_56%,transparent_74%)] blur-3xl"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(-8px)" }}
              />

              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="absolute inset-[13%] z-10 h-[74%] w-[74%] opacity-[0.28]"
                style={{ transform: "translateZ(-2px)" }}
              >
                <defs>
                  <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(167,243,208,0.48)" />
                    <stop offset="55%" stopColor="rgba(20,184,166,0.32)" />
                    <stop offset="100%" stopColor="rgba(96,165,250,0.22)" />
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
                    strokeWidth="0.4"
                    strokeLinecap="round"
                    opacity="0.46"
                  />
                ))}
              </svg>

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(16px)" }}
              >
                <motion.div
                  className="h-full w-full rounded-full border border-[color:rgba(167,243,208,0.12)] opacity-54"
                  style={{ transform: "rotateX(74deg)" }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}
              >
                <motion.div
                  className="h-full w-full rounded-full border border-[color:rgba(96,165,250,0.11)] opacity-42"
                  style={{ transform: "rotateY(72deg)" }}
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
              >
                <motion.div
                  className="h-full w-full rounded-full border border-[color:rgba(167,243,208,0.08)] opacity-32"
                  style={{ transform: "rotateX(32deg) rotateY(52deg)" }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-[64%] h-[18%] w-[32%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.46),transparent_72%)] blur-2xl"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              />

              <div
                className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2"
                style={{ transformStyle: "preserve-3d", transform: "translateZ(54px)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.02, 1], rotate: [0, 1.2, 0] }}
                  transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08),rgba(20,184,166,0.02)_54%,transparent_72%)] blur-2xl" />
                  <div className="absolute inset-[-6%] rounded-full border border-[color:rgba(167,243,208,0.08)] opacity-72" />
                  <div className="absolute inset-[-10%] rounded-full border border-[color:rgba(96,165,250,0.05)] opacity-46" />
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_22%,rgba(248,250,252,0.42),rgba(248,250,252,0.16)_10%,rgba(167,243,208,0.1)_18%,rgba(16,49,44,0.44)_34%,rgba(4,14,14,0.98)_76%),radial-gradient(circle_at_74%_72%,rgba(96,165,250,0.18),transparent_24%),radial-gradient(circle_at_56%_56%,rgba(20,184,166,0.1),transparent_40%),linear-gradient(145deg,rgba(11,31,24,0.32),rgba(2,8,8,0.9))] shadow-[inset_-32px_-44px_82px_rgba(0,0,0,0.78),inset_16px_18px_30px_rgba(255,255,255,0.06),0_30px_78px_rgba(0,0,0,0.4),0_0_78px_rgba(20,184,166,0.06)]" />
                  <div className="absolute inset-[0.8%] rounded-full border border-[color:rgba(248,250,252,0.1)] opacity-78" />
                  <div className="absolute inset-[3.4%] rounded-full bg-[radial-gradient(circle_at_34%_20%,rgba(248,250,252,0.14),transparent_18%),radial-gradient(circle_at_74%_78%,rgba(96,165,250,0.08),transparent_20%),linear-gradient(150deg,transparent_36%,rgba(255,255,255,0.03)_48%,transparent_58%)] opacity-90" />
                  <div className="absolute inset-[6%] rounded-full border border-[color:rgba(167,243,208,0.04)] opacity-72" />

                  <div className="absolute inset-[11.5%] overflow-hidden rounded-full border border-[color:rgba(167,243,208,0.14)] bg-[radial-gradient(circle_at_50%_30%,rgba(167,243,208,0.06),rgba(4,17,13,0.9)_74%)] backdrop-blur-sm shadow-[inset_0_0_42px_rgba(0,0,0,0.28)]">
                    <div className="absolute inset-0 bg-[conic-gradient(from_180deg,rgba(20,184,166,0.08),rgba(0,230,118,0.03),rgba(96,165,250,0.06),rgba(20,184,166,0.08))] opacity-70 blur-[18px]" />
                    <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-[8%] h-[84%] w-[84%] opacity-[0.28]">
                      <ellipse cx="50" cy="50" rx="32" ry="10.5" fill="none" stroke="rgba(167,243,208,0.22)" strokeWidth="0.7" />
                      <ellipse cx="50" cy="50" rx="27" ry="18.5" fill="none" stroke="rgba(96,165,250,0.18)" strokeWidth="0.55" transform="rotate(-18 50 50)" />
                      <ellipse cx="50" cy="50" rx="16" ry="31" fill="none" stroke="rgba(20,184,166,0.18)" strokeWidth="0.55" transform="rotate(20 50 50)" />
                      <ellipse cx="50" cy="50" rx="9" ry="34" fill="none" stroke="rgba(167,243,208,0.12)" strokeWidth="0.45" transform="rotate(-8 50 50)" />
                    </svg>
                    <div className="absolute inset-[8%] rounded-full border border-[color:rgba(167,243,208,0.06)]" />
                    <div className="absolute left-[22%] right-[22%] top-[11%] h-[16%] rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.18),transparent_72%)] blur-xl" />
                    <div className="absolute bottom-[10%] left-[16%] right-[16%] h-[20%] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.26),transparent_68%)] blur-xl" />
                    <BrandConstellation />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(0,0,0,0.38),transparent_50%),radial-gradient(circle_at_18%_18%,rgba(248,250,252,0.06),transparent_22%)]" />
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
    <section className="relative overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32 xl:pt-[8.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(0,230,118,0.1),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(20,184,166,0.1),transparent_20%),linear-gradient(180deg,rgba(4,17,13,0),rgba(4,17,13,0.22))]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(167,243,208,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(167,243,208,0.08) 1px, transparent 1px)",
          backgroundSize: "78px 78px"
        }}
      />

      <Container className="relative">
        <div className="grid gap-12 lg:gap-14 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-center">
          <Reveal className="max-w-[39rem] xl:pr-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.05)] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-highlight)] shadow-[0_0_0_1px_rgba(167,243,208,0.04)]">
              <Sparkles className="size-4 text-[var(--color-accent)]" />
              Premium web studio
            </div>

            <h1 className="mt-6 max-w-[11.5ch] font-display text-[2.85rem] leading-[0.94] tracking-[-0.055em] text-[var(--color-text)] sm:text-[4rem] lg:text-[4.35rem] xl:text-[4.7rem] 2xl:text-[4.95rem]">
              <span className="block">{heroHeadline[0]}</span>
              <span className="mt-1 block text-[rgba(167,243,208,0.96)]">{heroHeadline[1]}</span>
            </h1>

            <p className="mt-5 max-w-[35rem] text-[15px] leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              {heroDescription}
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                Portfoliaya baxın
              </Button>
            </div>

            <div className="mt-6 grid max-w-[42rem] gap-3 sm:grid-cols-2 2xl:grid-cols-4">
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

          <Reveal delay={0.08} className="relative xl:-mr-3">
            <HeroNetworkVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
