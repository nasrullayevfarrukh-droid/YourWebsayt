"use client";

import Image from "next/image";
import { useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";

const navigationItems = ["Ana səhifə", "Xidmətlər", "Portfolio"];
const trustPills = ["Mobil-first", "Premium UI", "Sürətli performans"];
const metricCards = [
  { label: "Etibar", value: "Ciddi imic" },
  { label: "CTA", value: "Satış axını" },
  { label: "Texniki baza", value: "SEO hazır" }
];

export function HeroLaptop() {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  const tiltXBase = useMotionValue(0);
  const tiltYBase = useMotionValue(0);
  const driftXBase = useMotionValue(0);
  const driftYBase = useMotionValue(0);

  const tiltX = useSpring(tiltXBase, { stiffness: 120, damping: 18, mass: 0.82 });
  const tiltY = useSpring(tiltYBase, { stiffness: 120, damping: 18, mass: 0.82 });
  const driftX = useSpring(driftXBase, { stiffness: 110, damping: 18, mass: 0.88 });
  const driftY = useSpring(driftYBase, { stiffness: 110, damping: 18, mass: 0.88 });

  const logoOffsetX = useTransform(driftX, (value) => value * 1.5);
  const logoOffsetY = useTransform(driftY, (value) => value * 1.35 - 10);
  const logoRotateX = useTransform(tiltX, (value) => value * 0.82);
  const logoRotateY = useTransform(tiltY, (value) => value * 0.9);
  const reflectionShift = useTransform(driftX, (value) => value * -1.8);
  const reflectionTilt = useTransform(tiltY, (value) => value * -0.7);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) {
      return;
    }

    setIsActive(true);

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    tiltXBase.set((0.5 - relativeY) * 12);
    tiltYBase.set((relativeX - 0.5) * 14);
    driftXBase.set((relativeX - 0.5) * 18);
    driftYBase.set((relativeY - 0.5) * 12);
  };

  const resetInteraction = () => {
    setIsActive(false);
    tiltXBase.set(0);
    tiltYBase.set(0);
    driftXBase.set(0);
    driftYBase.set(0);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[840px] items-center justify-center px-2 [perspective:2400px] sm:px-6">
      <motion.div
        animate={shouldReduceMotion ? { y: 0 } : { y: [0, -12, 0] }}
        transition={
          shouldReduceMotion
            ? { duration: 0.25 }
            : {
                duration: 6.8,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY
              }
        }
        className="relative w-full"
      >
        <div className="absolute inset-x-[10%] top-[14%] h-[56%] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.22),rgba(20,184,166,0.08)_44%,transparent_76%)] blur-3xl" />
        <div className="absolute inset-x-[14%] bottom-[-2.8rem] h-16 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.6),transparent_74%)] blur-2xl" />

        <motion.div
          onPointerEnter={() => setIsActive(true)}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetInteraction}
          style={
            shouldReduceMotion
              ? { transformStyle: "preserve-3d" }
              : { rotateX: tiltX, rotateY: tiltY, x: driftX, y: driftY, transformStyle: "preserve-3d" }
          }
          className="relative mx-auto w-full max-w-[780px]"
        >
          <div className="relative mx-auto w-full [transform-style:preserve-3d] [transform:rotateY(-10deg)_rotateX(9deg)_rotateZ(-5deg)] sm:[transform:rotateY(-12deg)_rotateX(10deg)_rotateZ(-6deg)] lg:[transform:rotateY(-18deg)_rotateX(13deg)_rotateZ(-8deg)]">
            <div className="absolute inset-x-[12%] top-[8%] h-[60%] rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.14),transparent_62%)] blur-3xl" />

            <div
              className="relative z-10 rounded-[30px] border border-[rgba(167,243,208,0.18)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(17,29,24,0.96)_14%,rgba(7,14,12,1)_100%)] p-3 shadow-[0_55px_120px_rgba(0,0,0,0.54),0_0_70px_rgba(0,230,118,0.14)]"
              style={{ transform: "translateZ(44px)" }}
            >
              <div className="absolute inset-x-0 top-0 h-20 rounded-t-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02)_56%,transparent)] opacity-60" />
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[rgba(248,250,252,0.14)]" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] border border-[rgba(167,243,208,0.14)] bg-[#04110D] shadow-[inset_0_1px_0_rgba(248,250,252,0.08)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,230,118,0.18),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(20,184,166,0.14),transparent_22%),linear-gradient(180deg,rgba(4,17,13,0.86),rgba(4,17,13,1))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-[rgba(167,243,208,0.08)] px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-8 w-8 shrink-0">
                        <Image
                          src="/images/brand/yourwebsayt-neon-symbol-cutout-v2.png"
                          alt=""
                          fill
                          sizes="32px"
                          className="object-contain drop-shadow-[0_0_12px_rgba(0,230,118,0.34)]"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                          YourWebsayt
                        </div>
                        <div className="text-xs text-[rgba(248,250,252,0.82)]">Premium web studio</div>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                      {navigationItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.8)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid flex-1 gap-4 px-4 py-4 sm:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] sm:px-6 sm:py-6">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-[rgba(167,243,208,0.1)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                          Premium veb sayt studiyası
                        </div>
                        <div className="mt-4 max-w-[18rem] text-lg font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] sm:text-[1.55rem]">
                          Biznesinizi daha ciddi göstərən premium saytlar
                        </div>
                        <p className="mt-3 max-w-[19rem] text-xs leading-6 text-[rgba(248,250,252,0.68)]">
                          Sürətli, mobil-first və satış yönümlü strukturla qurulan müasir studio
                          təcrübəsi.
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <div className="rounded-full bg-[var(--color-primary)] px-3.5 py-2 text-[11px] font-semibold text-[var(--color-accent-ink)] shadow-[0_10px_24px_rgba(0,230,118,0.24)]">
                          Layihəni müzakirə edək
                        </div>
                        <div className="rounded-full border border-[rgba(167,243,208,0.14)] bg-[rgba(11,31,24,0.76)] px-3.5 py-2 text-[11px] font-medium text-[var(--color-text)]">
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

                    <div className="relative rounded-[26px] border border-[rgba(167,243,208,0.12)] bg-[linear-gradient(180deg,rgba(11,31,24,0.82),rgba(6,18,14,0.96))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)]">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                          Ana səhifə UI
                        </div>
                        <div className="rounded-full bg-[rgba(0,230,118,0.12)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                          Live view
                        </div>
                      </div>

                      <div className="mt-4 rounded-[22px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.94)] p-4">
                        <div className="space-y-2">
                          <div className="h-2.5 w-20 rounded-full bg-[rgba(20,184,166,0.74)]" />
                          <div className="h-3.5 w-[80%] rounded-full bg-[rgba(248,250,252,0.92)]" />
                          <div className="h-3.5 w-[68%] rounded-full bg-[rgba(248,250,252,0.82)]" />
                          <div className="h-2 w-[54%] rounded-full bg-[rgba(167,243,208,0.36)]" />
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.82)] p-3">
                            <div className="h-20 rounded-[14px] bg-[linear-gradient(135deg,rgba(0,230,118,0.26),rgba(20,184,166,0.08)_58%,rgba(11,31,24,0.92))]" />
                            <div className="mt-3 h-2.5 w-16 rounded-full bg-[rgba(248,250,252,0.88)]" />
                            <div className="mt-2 h-2 w-24 rounded-full bg-[rgba(167,243,208,0.28)]" />
                          </div>
                          <div className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.82)] p-3">
                            <div className="flex gap-2">
                              <div className="h-9 flex-1 rounded-[12px] bg-[rgba(0,230,118,0.16)]" />
                              <div className="h-9 w-12 rounded-[12px] bg-[rgba(20,184,166,0.18)]" />
                            </div>
                            <div className="mt-3 h-2.5 w-14 rounded-full bg-[rgba(248,250,252,0.88)]" />
                            <div className="mt-2 h-2 w-20 rounded-full bg-[rgba(167,243,208,0.28)]" />
                          </div>
                        </div>

                        <div className="mt-4 grid gap-2 sm:grid-cols-3">
                          {metricCards.map((card) => (
                            <div
                              key={card.label}
                              className="rounded-[16px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.72)] px-3 py-2.5"
                            >
                              <div className="text-[9px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                                {card.label}
                              </div>
                              <div className="mt-1.5 text-[11px] font-medium text-[var(--color-text)]">
                                {card.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.div
                        style={shouldReduceMotion ? undefined : { x: reflectionShift, rotateZ: reflectionTilt }}
                        className="pointer-events-none absolute inset-y-[10%] right-[18%] w-20 skew-x-[-14deg] bg-[linear-gradient(180deg,transparent,rgba(248,250,252,0.12),transparent)] opacity-60 blur-xl"
                      />
                    </div>
                  </div>
                </div>

                <motion.div
                  style={
                    shouldReduceMotion
                      ? { transformStyle: "preserve-3d" }
                      : {
                          x: logoOffsetX,
                          y: logoOffsetY,
                          rotateX: logoRotateX,
                          rotateY: logoRotateY,
                          transformStyle: "preserve-3d"
                        }
                  }
                  className="pointer-events-none absolute right-[2%] top-[9%] z-30 w-[48%] sm:w-[50%] lg:w-[54%]"
                >
                  <div className="absolute inset-x-[12%] bottom-[8%] h-20 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.34),transparent_70%)] blur-2xl" />
                  <div className="absolute inset-x-[18%] bottom-[2%] h-10 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.48),transparent_72%)] blur-xl" />
                  <div
                    className={`relative [transform:translateZ(92px)] transition-transform duration-500 ${
                      isActive ? "scale-[1.02]" : "scale-100"
                    }`}
                  >
                    <Image
                      src="/images/brand/yourwebsayt-neon-logo-cutout-v2.png"
                      alt="YourWebsayt logo"
                      width={900}
                      height={640}
                      priority
                      className="h-auto w-full object-contain drop-shadow-[0_22px_32px_rgba(0,0,0,0.42)]"
                    />
                    <div className="absolute inset-[10%] rounded-[32px] border border-[rgba(167,243,208,0.08)] bg-[radial-gradient(circle_at_top,rgba(248,250,252,0.08),transparent_48%)] opacity-70 blur-xl" />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="relative z-20 mx-auto mt-[-0.35rem] w-[90%] [transform-style:preserve-3d]">
              <div className="mx-auto h-3.5 w-[14%] rounded-b-[18px] bg-[linear-gradient(180deg,rgba(248,250,252,0.2),rgba(124,139,133,0.24)_48%,rgba(13,22,18,0.94)_100%)]" />
              <div className="relative mt-[-1px] h-[7.75rem] rounded-[26px] border border-[rgba(167,243,208,0.14)] bg-[linear-gradient(180deg,rgba(248,250,252,0.12),rgba(29,40,35,0.92)_18%,rgba(10,17,14,1)_82%)] px-6 pt-3 shadow-[0_26px_80px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-x-[4%] top-3 h-4 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)] blur-lg" />
                <div className="mx-auto grid h-full max-w-[92%] grid-cols-10 gap-1.5 pb-7 pt-4">
                  {Array.from({ length: 30 }).map((_, index) => (
                    <div
                      key={`key-${index}`}
                      className="rounded-[8px] border border-[rgba(167,243,208,0.06)] bg-[linear-gradient(180deg,rgba(35,49,42,0.94),rgba(13,21,18,0.98))] shadow-[inset_0_1px_0_rgba(248,250,252,0.05)]"
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-1/2 h-8 w-[28%] -translate-x-1/2 rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(14,24,20,0.92))] shadow-[inset_0_1px_0_rgba(248,250,252,0.05)]" />
                <div className="absolute inset-x-[12%] bottom-0 h-4 rounded-t-full bg-[radial-gradient(circle,rgba(0,230,118,0.12),transparent_72%)] blur-xl" />
              </div>
            </div>

            <div className="mx-auto mt-[-0.6rem] h-5 w-[98%] rounded-[999px] border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(15,24,20,1)_44%,rgba(7,12,10,1)_100%)] shadow-[0_18px_48px_rgba(0,0,0,0.32)]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
