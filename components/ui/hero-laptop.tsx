"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";

import { portfolioProjects } from "@/data/portfolio";
import { heroTrustIndicators, navigation, siteConfig, trustPoints } from "@/data/site";
import { services } from "@/data/services";

const previewHeroLines = ["Biznesinizi daha ciddi göstərən", "premium veb təcrübələri"];
const previewNavigation = navigation.slice(0, 3);
const previewTrustPills = heroTrustIndicators.slice(0, 3);
const previewMetrics = [
  { label: "Etibar", value: trustPoints[0]?.label ?? "Premium təəssürat" },
  { label: "Fokus", value: services[0]?.title ?? "Korporativ veb saytlar" },
  { label: "Axın", value: "Satış yönümlü CTA" }
];
const showcaseProject = portfolioProjects[0];
const showcaseTags = showcaseProject?.siteStructure.slice(0, 3) ?? ["Ana səhifə", "Xidmətlər", "Əlaqə"];

export function HeroLaptop() {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const [canInteract, setCanInteract] = useState(false);

  const tiltXBase = useMotionValue(0);
  const tiltYBase = useMotionValue(0);
  const driftXBase = useMotionValue(0);
  const driftYBase = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia("(pointer: fine)");
    const updateCanInteract = () => setCanInteract(media.matches);

    updateCanInteract();
    media.addEventListener("change", updateCanInteract);

    return () => media.removeEventListener("change", updateCanInteract);
  }, []);

  const interactive = canInteract && !shouldReduceMotion;

  const tiltX = useSpring(tiltXBase, { stiffness: 112, damping: 18, mass: 0.88 });
  const tiltY = useSpring(tiltYBase, { stiffness: 112, damping: 18, mass: 0.88 });
  const driftX = useSpring(driftXBase, { stiffness: 102, damping: 20, mass: 0.94 });
  const driftY = useSpring(driftYBase, { stiffness: 102, damping: 20, mass: 0.94 });

  const logoOffsetX = useTransform(driftX, (value) => value * 2.1);
  const logoOffsetY = useTransform(driftY, (value) => value * 1.7 - 10);
  const logoRotateX = useTransform(tiltX, (value) => value * 0.92);
  const logoRotateY = useTransform(tiltY, (value) => value * 1.1);
  const logoScale = useTransform(driftY, [-14, 0, 14], [1.02, 1, 0.985]);
  const reflectionX = useTransform(driftX, (value) => value * -1.35);
  const reflectionRotate = useTransform(tiltY, (value) => value * -0.4);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive) {
      return;
    }

    setIsActive(true);

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    tiltXBase.set((0.5 - relativeY) * 8.4);
    tiltYBase.set((relativeX - 0.5) * 10.4);
    driftXBase.set((relativeX - 0.5) * 16);
    driftYBase.set((relativeY - 0.5) * 11);
  };

  const resetInteraction = () => {
    setIsActive(false);
    tiltXBase.set(0);
    tiltYBase.set(0);
    driftXBase.set(0);
    driftYBase.set(0);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[920px] items-center justify-center px-1 [perspective:2800px] sm:px-4">
      <motion.div
        animate={shouldReduceMotion ? { y: 0 } : { y: [0, -10, 0] }}
        transition={
          shouldReduceMotion
            ? { duration: 0.25 }
            : {
                duration: 7.2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY
              }
        }
        className="relative w-full"
      >
        <div className="absolute inset-x-[10%] top-[16%] h-[56%] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.16),rgba(20,184,166,0.05)_46%,transparent_76%)] blur-[112px]" />
        <div className="absolute right-[14%] top-[10%] h-28 w-28 rounded-full bg-[rgba(167,243,208,0.12)] blur-3xl" />
        <div className="absolute inset-x-[14%] bottom-[-2.75rem] h-16 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.58),transparent_72%)] blur-2xl" />

        <motion.div
          onPointerEnter={() => {
            if (interactive) {
              setIsActive(true);
            }
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetInteraction}
          style={
            interactive
              ? {
                  rotateX: tiltX,
                  rotateY: tiltY,
                  x: driftX,
                  y: driftY,
                  transformStyle: "preserve-3d"
                }
              : {
                  transformStyle: "preserve-3d"
                }
          }
          className="relative mx-auto w-full max-w-[820px]"
        >
          <div className="relative mx-auto w-full [transform-style:preserve-3d] [transform:rotateY(-14deg)_rotateX(11deg)_rotateZ(-5deg)] sm:[transform:rotateY(-18deg)_rotateX(13deg)_rotateZ(-6deg)] lg:[transform:rotateY(-24deg)_rotateX(16deg)_rotateZ(-9deg)]">
            <motion.div
              style={
                interactive
                  ? {
                      x: logoOffsetX,
                      y: logoOffsetY,
                      rotateX: logoRotateX,
                      rotateY: logoRotateY,
                      scale: logoScale,
                      transformStyle: "preserve-3d"
                    }
                  : {
                      transformStyle: "preserve-3d"
                    }
              }
              className="pointer-events-none absolute right-[-4%] top-[7%] z-30 w-[56%] max-w-[18rem] sm:w-[48%] sm:max-w-[20rem] lg:max-w-[22rem]"
            >
              <div className="absolute inset-x-[12%] bottom-[8%] h-14 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.38),transparent_72%)] blur-2xl" />
              <div className="absolute inset-x-[18%] bottom-[4%] h-8 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.46),transparent_76%)] blur-xl" />

              <div
                className={`relative overflow-hidden rounded-[28px] border border-[rgba(167,243,208,0.12)] bg-[linear-gradient(180deg,rgba(248,250,252,0.1),rgba(10,27,20,0.22)_24%,rgba(10,27,20,0.04)_74%)] px-4 py-3 shadow-[0_24px_54px_rgba(0,0,0,0.34)] backdrop-blur-[12px] transition-all duration-500 sm:px-5 sm:py-4 ${
                  isActive ? "shadow-[0_28px_60px_rgba(0,0,0,0.38),0_0_42px_rgba(0,230,118,0.16)]" : ""
                }`}
                style={{ transform: "translateZ(146px)" }}
              >
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(140deg,rgba(248,250,252,0.08),transparent_42%,rgba(0,230,118,0.08)_82%,transparent)]" />
                <div className="absolute inset-x-[10%] top-0 h-8 rounded-b-full bg-[linear-gradient(180deg,rgba(248,250,252,0.12),transparent)] blur-md" />
                <Image
                  src="/images/brand/yourwebsayt-neon-logo-clean.png"
                  alt="YourWebsayt logo"
                  width={900}
                  height={640}
                  priority
                  className="relative h-auto w-full object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.42)]"
                />
              </div>
            </motion.div>

            <div className="relative z-10 rounded-[38px] border border-[rgba(167,243,208,0.14)] bg-[linear-gradient(180deg,rgba(248,250,252,0.1),rgba(26,38,33,0.96)_14%,rgba(7,14,12,1)_100%)] p-3 shadow-[0_60px_130px_rgba(0,0,0,0.56),0_0_60px_rgba(0,230,118,0.08)]">
              <div className="absolute inset-x-0 top-0 h-20 rounded-t-[38px] bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03)_58%,transparent)]" />
              <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[rgba(248,250,252,0.12)]" />
              <div className="absolute inset-x-[8%] top-[8%] h-[56%] rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.12),transparent_64%)] blur-3xl" />

              <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-[rgba(167,243,208,0.12)] bg-[#04110D] shadow-[inset_0_1px_0_rgba(248,250,252,0.06)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,230,118,0.16),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(20,184,166,0.12),transparent_22%),linear-gradient(180deg,rgba(4,17,13,0.84),rgba(4,17,13,1))]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.025)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-[rgba(167,243,208,0.08)] px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="relative h-7 w-7 shrink-0">
                        <Image
                          src="/images/brand/yourwebsayt-neon-symbol-clean.png"
                          alt=""
                          fill
                          sizes="28px"
                          className="object-contain drop-shadow-[0_0_10px_rgba(0,230,118,0.32)]"
                        />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
                          YourWebsayt
                        </div>
                        <div className="text-[11px] text-[rgba(248,250,252,0.76)]">Premium web studio</div>
                      </div>
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                      {previewNavigation.map((item) => (
                        <div
                          key={item.href}
                          className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.72)] px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                        >
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid flex-1 gap-5 px-4 py-4 sm:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] sm:px-6 sm:py-6">
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="inline-flex rounded-full border border-[rgba(167,243,208,0.1)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                          Premium veb sayt studiyası
                        </div>

                        <div className="mt-4 max-w-[18rem] space-y-2">
                          {previewHeroLines.map((line) => (
                            <div
                              key={line}
                              className="text-[1.36rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] sm:text-[1.6rem]"
                            >
                              {line}
                            </div>
                          ))}
                        </div>

                        <p className="mt-3 max-w-[19rem] text-xs leading-6 text-[rgba(248,250,252,0.68)]">
                          Premium, sürətli və mobil-first strukturla qurulan real YourWebsayt ana səhifə
                          təcrübəsi.
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <div className="rounded-full bg-[var(--color-accent)] px-3.5 py-2 text-[11px] font-semibold text-[var(--color-accent-ink)] shadow-[0_10px_24px_rgba(0,230,118,0.24)]">
                          {siteConfig.consultation}
                        </div>
                        <div className="rounded-full border border-[rgba(167,243,208,0.14)] bg-[rgba(11,31,24,0.72)] px-3.5 py-2 text-[11px] font-medium text-[var(--color-text)]">
                          Portfolioya baxın
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {previewTrustPills.map((pill) => (
                          <div
                            key={pill}
                            className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]"
                          >
                            {pill}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="rounded-[24px] border border-[rgba(167,243,208,0.1)] bg-[linear-gradient(180deg,rgba(11,31,24,0.84),rgba(7,20,16,0.96))] p-4 shadow-[0_22px_48px_rgba(0,0,0,0.24)]">
                        <div className="flex items-center justify-between">
                          <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                            Ana səhifə preview
                          </div>
                          <div className="rounded-full bg-[rgba(0,230,118,0.12)] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                            Live UI
                          </div>
                        </div>

                        <div className="mt-4 overflow-hidden rounded-[20px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.92)]">
                          <div className="relative aspect-[16/10]">
                            <Image
                              src={showcaseProject?.heroImage ?? "/images/projects/northpeak-group.svg"}
                              alt={showcaseProject?.title ?? "YourWebsayt showcase preview"}
                              fill
                              sizes="(min-width: 1024px) 280px, 48vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,13,0.08),rgba(4,17,13,0.14)_44%,rgba(4,17,13,0.76))]" />
                            <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.72)] px-3 py-2.5 backdrop-blur-md">
                              <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-highlight)]">
                                Seçilmiş layihə
                              </div>
                              <div className="mt-1 text-[13px] font-semibold text-[var(--color-text)]">
                                {showcaseProject?.title ?? "Premium showcase"}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {showcaseTags.map((tag) => (
                            <div
                              key={tag}
                              className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--color-muted)]"
                            >
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-2 sm:grid-cols-3">
                        {previewMetrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.68)] px-3 py-3"
                          >
                            <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                              {metric.label}
                            </div>
                            <div className="mt-1.5 text-[11px] font-medium text-[var(--color-text)]">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  style={interactive ? { x: reflectionX, rotateZ: reflectionRotate } : undefined}
                  className="pointer-events-none absolute inset-y-[7%] right-[12%] w-28 skew-x-[-20deg] bg-[linear-gradient(180deg,transparent,rgba(248,250,252,0.13),transparent)] opacity-65 blur-xl"
                />
              </div>
            </div>

            <div className="relative z-20 mx-auto mt-[-0.28rem] w-[92%] [transform-style:preserve-3d]">
              <div className="mx-auto h-3 w-[13%] rounded-b-[18px] bg-[linear-gradient(180deg,rgba(248,250,252,0.2),rgba(130,145,138,0.22)_48%,rgba(13,22,18,0.94)_100%)]" />

              <div className="relative mt-[-1px] h-[6.9rem] rounded-[24px] border border-[rgba(167,243,208,0.12)] bg-[linear-gradient(180deg,rgba(248,250,252,0.1),rgba(30,40,36,0.92)_18%,rgba(10,16,14,1)_100%)] px-5 pt-3 shadow-[0_26px_70px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-x-[6%] top-3 h-3 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)] blur-lg" />

                <div className="grid grid-cols-10 gap-1.5 px-2 pt-2 sm:grid-cols-12">
                  {Array.from({ length: 24 }).map((_, index) => (
                    <div
                      key={`key-${index}`}
                      className="h-3.5 rounded-[7px] border border-[rgba(167,243,208,0.04)] bg-[linear-gradient(180deg,rgba(38,49,44,0.92),rgba(14,22,19,0.98))] shadow-[inset_0_1px_0_rgba(248,250,252,0.04)]"
                    />
                  ))}
                </div>

                <div className="absolute bottom-3 left-1/2 h-7 w-[30%] -translate-x-1/2 rounded-[16px] border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(13,22,18,0.94))]" />
                <div className="absolute inset-x-[14%] bottom-0 h-3 rounded-t-full bg-[radial-gradient(circle,rgba(0,230,118,0.1),transparent_72%)] blur-lg" />
              </div>
            </div>

            <div className="mx-auto mt-[-0.56rem] h-4 w-[98%] rounded-[999px] border border-[rgba(167,243,208,0.06)] bg-[linear-gradient(180deg,rgba(248,250,252,0.08),rgba(14,24,20,1)_48%,rgba(7,12,10,1)_100%)] shadow-[0_18px_48px_rgba(0,0,0,0.28)]" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
