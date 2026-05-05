"use client";

import Image from "next/image";
import { useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const navItems = ["Ana səhifə", "Xidmətlər", "Portfolio"];
const trustPills = ["Mobil-first", "Premium UI", "Sürətli performans"];
const statCards = [
  { label: "Etibar", value: "Premium imic" },
  { label: "Struktur", value: "CTA axını" },
  { label: "Performans", value: "SEO hazır" }
];

export function HeroLaptop() {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  const rotateXBase = useMotionValue(0);
  const rotateYBase = useMotionValue(-8);
  const shiftXBase = useMotionValue(0);
  const shiftYBase = useMotionValue(0);

  const rotateX = useSpring(rotateXBase, { stiffness: 120, damping: 18, mass: 0.8 });
  const rotateY = useSpring(rotateYBase, { stiffness: 120, damping: 18, mass: 0.8 });
  const shiftX = useSpring(shiftXBase, { stiffness: 110, damping: 18, mass: 0.9 });
  const shiftY = useSpring(shiftYBase, { stiffness: 110, damping: 18, mass: 0.9 });

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    rotateXBase.set((0.5 - relativeY) * 10);
    rotateYBase.set((relativeX - 0.5) * 14);
    shiftXBase.set((relativeX - 0.5) * 12);
    shiftYBase.set((relativeY - 0.5) * 10);
  };

  const resetPointerState = () => {
    setIsActive(false);
    rotateXBase.set(0);
    rotateYBase.set(-8);
    shiftXBase.set(0);
    shiftYBase.set(0);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[780px] items-center justify-center px-2 [perspective:2200px] sm:px-6">
      <motion.div
        animate={
          shouldReduceMotion
            ? { y: 0 }
            : {
                y: [0, -10, 0]
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0.2 }
            : {
                duration: 6.4,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY
              }
        }
        className="relative w-full"
      >
        <div className="absolute inset-x-[8%] top-[12%] h-[68%] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.2),rgba(20,184,166,0.08)_42%,transparent_74%)] blur-3xl" />
        <div className="absolute inset-x-[16%] bottom-[-3.5rem] h-16 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.58),transparent_72%)] blur-2xl" />

        <motion.div
          onPointerEnter={() => setIsActive(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointerState}
          style={shouldReduceMotion ? undefined : { rotateX, rotateY, x: shiftX, y: shiftY, transformStyle: "preserve-3d" }}
          className="relative mx-auto w-full max-w-[720px]"
        >
          <div
            className="relative rounded-[30px] border border-[rgba(167,243,208,0.16)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(11,31,24,0.88)_16%,rgba(7,20,16,0.96)_100%)] p-3 shadow-[0_50px_120px_rgba(0,0,0,0.48),0_0_60px_rgba(0,230,118,0.12)]"
            style={{ transform: "translateZ(48px)" }}
          >
            <div className="absolute inset-x-0 top-0 h-20 rounded-t-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02)_52%,transparent)] opacity-60" />
            <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[rgba(248,250,252,0.16)]" />

            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[rgba(167,243,208,0.14)] bg-[#04110D] shadow-[inset_0_1px_0_rgba(248,250,252,0.08)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,230,118,0.16),transparent_26%),radial-gradient(circle_at_85%_12%,rgba(20,184,166,0.18),transparent_24%),linear-gradient(180deg,rgba(4,17,13,0.86),rgba(4,17,13,1))]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-[rgba(167,243,208,0.08)] px-4 py-3 sm:px-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-8 w-8 shrink-0">
                      <Image
                        src="/images/brand/yourwebsayt-neon-symbol-cutout-v2.png"
                        alt=""
                        fill
                        sizes="32px"
                        className="object-contain drop-shadow-[0_0_10px_rgba(0,230,118,0.28)]"
                      />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        YourWebsayt
                      </div>
                      <div className="text-xs text-[rgba(248,250,252,0.82)]">Premium web studio</div>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.76)] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid flex-1 gap-4 px-4 py-4 sm:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] sm:px-6 sm:py-6">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-flex rounded-full border border-[rgba(167,243,208,0.1)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                        Premium foundation
                      </div>
                      <div className="mt-4 max-w-[20rem] text-xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] sm:text-[1.7rem]">
                        Biznesinizi daha ciddi göstərən premium veb saytlar
                      </div>
                      <p className="mt-3 max-w-[22rem] text-xs leading-6 text-[rgba(248,250,252,0.68)] sm:text-[13px]">
                        Sürətli, mobil-first və satış yönümlü strukturla hazırlanan müasir studio
                        təqdimatı.
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <div className="rounded-full bg-[var(--color-primary)] px-3.5 py-2 text-[11px] font-semibold text-[var(--color-accent-ink)] shadow-[0_10px_25px_rgba(0,230,118,0.24)]">
                        Layihəni müzakirə edək
                      </div>
                      <div className="rounded-full border border-[rgba(167,243,208,0.16)] bg-[rgba(11,31,24,0.76)] px-3.5 py-2 text-[11px] font-medium text-[var(--color-text)]">
                        İşlərə bax
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {trustPills.map((pill) => (
                        <div
                          key={pill}
                          className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                        >
                          {pill}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative flex min-h-[14rem] flex-col rounded-[26px] border border-[rgba(167,243,208,0.12)] bg-[linear-gradient(180deg,rgba(11,31,24,0.82),rgba(6,18,14,0.96))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        Ana səhifə preview
                      </div>
                      <div className="rounded-full bg-[rgba(0,230,118,0.12)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                        Live UI
                      </div>
                    </div>

                    <div className="mt-4 flex-1 rounded-[22px] border border-[rgba(167,243,208,0.1)] bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.12),transparent_40%),rgba(4,17,13,0.94)] p-4">
                      <div className="space-y-2">
                        <div className="h-2.5 w-20 rounded-full bg-[rgba(20,184,166,0.74)]" />
                        <div className="h-3.5 w-[78%] rounded-full bg-[rgba(248,250,252,0.92)]" />
                        <div className="h-3.5 w-[64%] rounded-full bg-[rgba(248,250,252,0.82)]" />
                        <div className="h-2 w-[52%] rounded-full bg-[rgba(167,243,208,0.34)]" />
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.82)] p-3">
                          <div className="h-20 rounded-[14px] bg-[linear-gradient(135deg,rgba(0,230,118,0.3),rgba(20,184,166,0.08)_58%,rgba(11,31,24,0.9))]" />
                          <div className="mt-3 h-2.5 w-16 rounded-full bg-[rgba(248,250,252,0.88)]" />
                          <div className="mt-2 h-2 w-24 rounded-full bg-[rgba(167,243,208,0.28)]" />
                        </div>
                        <div className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.82)] p-3">
                          <div className="flex gap-2">
                            <div className="h-9 flex-1 rounded-[12px] bg-[rgba(0,230,118,0.18)]" />
                            <div className="h-9 w-12 rounded-[12px] bg-[rgba(20,184,166,0.18)]" />
                          </div>
                          <div className="mt-3 h-2.5 w-14 rounded-full bg-[rgba(248,250,252,0.88)]" />
                          <div className="mt-2 h-2 w-20 rounded-full bg-[rgba(167,243,208,0.28)]" />
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-6 top-0 h-24 bg-[linear-gradient(125deg,transparent,rgba(248,250,252,0.12)_48%,transparent_68%)] opacity-60 blur-xl" />
                  </div>
                </div>

                <div className="grid gap-3 border-t border-[rgba(167,243,208,0.08)] px-4 py-4 sm:grid-cols-3 sm:px-6">
                  {statCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.68)] px-4 py-3"
                    >
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        {card.label}
                      </div>
                      <div className="mt-2 text-sm font-medium text-[var(--color-text)]">{card.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,transparent_16%,rgba(248,250,252,0.08)_34%,transparent_46%,transparent_72%,rgba(167,243,208,0.06)_86%,transparent)] opacity-80" />
            </div>
          </div>

          <div
            className="mx-auto mt-[-2px] h-4 w-[14%] rounded-b-[18px] bg-[linear-gradient(180deg,rgba(248,250,252,0.24),rgba(107,123,118,0.28)_48%,rgba(13,22,18,0.94)_100%)]"
            style={{ transform: "translateZ(24px)" }}
          />
          <div
            className="relative mx-auto mt-[-1px] h-5 w-[112%] -translate-x-[6%] rounded-[999px] border border-[rgba(167,243,208,0.12)] bg-[linear-gradient(180deg,rgba(248,250,252,0.12),rgba(26,38,33,0.88)_38%,rgba(8,14,12,1)_100%)] shadow-[0_22px_60px_rgba(0,0,0,0.34)]"
            style={{ transform: "translateZ(10px)" }}
          >
            <div className="absolute left-1/2 top-1/2 h-[5px] w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(248,250,252,0.04),rgba(167,243,208,0.3),rgba(248,250,252,0.04))]" />
          </div>

          <div
            className={`pointer-events-none absolute inset-x-[12%] top-[20%] h-[60%] rounded-[32px] border border-[rgba(167,243,208,0.08)] bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.12),transparent_56%)] blur-2xl transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-70"
            }`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
