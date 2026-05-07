"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/data/brand";
import { heroTrustIndicators } from "@/data/site";

const heroLines = ["Biznesinizi daha ciddi göstərən", "premium veb saytlar qururuq"];

const networkNodes = [
  {
    x: 16,
    y: 20,
    size: 12,
    delay: 0.2,
    duration: 7.8,
    color: "rgba(167,243,208,0.96)",
    glow: "0 0 30px rgba(167,243,208,0.35)"
  },
  {
    x: 28,
    y: 40,
    size: 8,
    delay: 0.6,
    duration: 6.9,
    color: "rgba(20,184,166,0.92)",
    glow: "0 0 24px rgba(20,184,166,0.34)"
  },
  {
    x: 24,
    y: 74,
    size: 10,
    delay: 0.4,
    duration: 8.2,
    color: "rgba(96,165,250,0.85)",
    glow: "0 0 28px rgba(96,165,250,0.26)"
  },
  {
    x: 48,
    y: 16,
    size: 7,
    delay: 1,
    duration: 6.5,
    color: "rgba(167,243,208,0.72)",
    glow: "0 0 22px rgba(167,243,208,0.24)"
  },
  {
    x: 74,
    y: 18,
    size: 10,
    delay: 0.9,
    duration: 7.5,
    color: "rgba(129,140,248,0.82)",
    glow: "0 0 24px rgba(129,140,248,0.26)"
  },
  {
    x: 82,
    y: 42,
    size: 12,
    delay: 0.3,
    duration: 8.4,
    color: "rgba(20,184,166,0.88)",
    glow: "0 0 28px rgba(20,184,166,0.34)"
  },
  {
    x: 72,
    y: 76,
    size: 8,
    delay: 1.2,
    duration: 7.3,
    color: "rgba(167,243,208,0.82)",
    glow: "0 0 22px rgba(167,243,208,0.24)"
  },
  {
    x: 48,
    y: 86,
    size: 9,
    delay: 0.7,
    duration: 7.9,
    color: "rgba(96,165,250,0.72)",
    glow: "0 0 26px rgba(96,165,250,0.24)"
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
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto w-full max-w-[40rem]"
    >
      <div className="absolute -left-10 top-14 hidden h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.18),transparent_72%)] blur-3xl lg:block" />
      <div className="absolute -right-4 bottom-10 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.14),transparent_72%)] blur-3xl lg:block" />

      <div className="relative aspect-[0.98/1] overflow-hidden rounded-[34px] border border-[color:rgba(167,243,208,0.1)] bg-[linear-gradient(180deg,rgba(11,31,24,0.95),rgba(5,14,13,0.98))] p-4 shadow-[0_38px_120px_rgba(0,0,0,0.4)] sm:rounded-[40px] sm:p-5">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(167,243,208,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.12),transparent_34%),radial-gradient(circle_at_50%_18%,rgba(248,250,252,0.08),transparent_20%)]" />
        <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,transparent,rgba(167,243,208,0.22),transparent)]" />
        <div className="absolute inset-x-8 bottom-8 h-px bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.16),transparent)]" />

        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          className="absolute inset-[8%] h-[84%] w-[84%] opacity-85"
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
              opacity="0.9"
            />
          ))}

          <circle
            cx="50"
            cy="50"
            r="18.5"
            fill="none"
            stroke="rgba(167,243,208,0.16)"
            strokeWidth="0.45"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="26"
            ry="11"
            fill="none"
            stroke="rgba(96,165,250,0.18)"
            strokeWidth="0.35"
            transform="rotate(-18 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="12"
            ry="28"
            fill="none"
            stroke="rgba(20,184,166,0.18)"
            strokeWidth="0.35"
            transform="rotate(22 50 50)"
          />
        </svg>

        {networkNodes.map((node) => (
          <motion.span
            key={`${node.x}-${node.y}`}
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: node.size,
              height: node.size,
              backgroundColor: node.color,
              boxShadow: node.glow
            }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.08, 1]
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[58%] w-[34%] -translate-x-1/2 -translate-y-1/2"
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
        >
          <motion.div
            className="h-full w-full rounded-full border border-[color:rgba(96,165,250,0.14)] opacity-50"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ scale: [1, 1.02, 1], rotate: [0, 1.2, 0] }}
            transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <div className="absolute inset-[-18%] rounded-full border border-[color:rgba(167,243,208,0.1)]" />
            <div className="absolute inset-[-32%] rounded-full border border-[color:rgba(96,165,250,0.08)]" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_34%_28%,rgba(248,250,252,0.18),rgba(20,184,166,0.2)_20%,rgba(6,17,16,0.94)_72%)] shadow-[0_0_40px_rgba(0,230,118,0.14),0_0_100px_rgba(96,165,250,0.12)]" />

            <div className="absolute inset-[14%] overflow-hidden rounded-full border border-[color:rgba(167,243,208,0.16)] bg-[radial-gradient(circle_at_50%_36%,rgba(167,243,208,0.08),rgba(4,17,13,0.84)_72%)] backdrop-blur-sm">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg,rgba(20,184,166,0.12),rgba(0,230,118,0.04),rgba(96,165,250,0.08),rgba(20,184,166,0.12))] opacity-75 blur-[18px]" />
              <div className="absolute inset-[10%] rounded-full border border-[color:rgba(167,243,208,0.08)]" />
              <div className="absolute left-[22%] right-[22%] top-[12%] h-[18%] rounded-full bg-[radial-gradient(circle,rgba(248,250,252,0.14),transparent_72%)] blur-xl" />
              <BrandConstellation />
            </div>
          </motion.div>
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
