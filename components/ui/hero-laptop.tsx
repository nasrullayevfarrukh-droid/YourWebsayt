"use client";

import dynamic from "next/dynamic";
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
import { heroTrustIndicators, navigation, siteConfig } from "@/data/site";
import { services } from "@/data/services";

const HeroCubeCanvas = dynamic(
  () => import("@/components/ui/hero-cube-canvas").then((mod) => mod.HeroCubeCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-[28px] bg-[radial-gradient(circle,rgba(0,230,118,0.18),rgba(11,31,24,0.08)_44%,transparent_74%)]" />
    )
  }
);

const previewNavigation = navigation.slice(0, 3);
const previewPills = heroTrustIndicators.slice(0, 3);
const previewServices = services.slice(0, 3);
const featuredProject = portfolioProjects[0];
const featuredTags = featuredProject?.siteStructure.slice(0, 3) ?? ["Home", "Services", "Contact"];
const previewStats = [
  { label: "Focus", value: "Premium positioning" },
  { label: "Flow", value: "Lead-first structure" },
  { label: "Tech", value: "Mobile and SEO ready" }
];

function LaptopScreenPreview() {
  return (
    <div className="relative flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-[rgba(167,243,208,0.08)] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-[12px] border border-[rgba(167,243,208,0.16)] bg-[linear-gradient(180deg,rgba(167,243,208,0.12),rgba(11,31,24,0.92))] font-display text-sm font-semibold tracking-[-0.08em] text-[var(--color-text)] shadow-[0_0_14px_rgba(0,230,118,0.18)]">
            Y<span className="text-[var(--color-accent)]">W</span>
          </div>
          <div>
            <div className="font-display text-[1rem] leading-none tracking-[-0.05em] text-[var(--color-text)]">
              YourWeb<span className="text-[var(--color-accent)]">sayt</span>
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Premium web studio
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {previewNavigation.map((item) => (
            <div
              key={item.href}
              className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.74)] px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid flex-1 gap-5 px-4 py-4 sm:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] sm:px-6 sm:py-6">
        <div className="flex flex-col justify-between">
          <div>
            <div className="inline-flex rounded-full border border-[rgba(167,243,208,0.12)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-highlight)]">
              Custom website systems
            </div>

            <div className="mt-4 max-w-[18rem] space-y-2">
              <div className="text-[1.45rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-text)] sm:text-[1.7rem]">
                YourWebsayt homepage
              </div>
              <div className="text-[1.2rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[rgba(248,250,252,0.86)] sm:text-[1.34rem]">
                rebuilt as a cleaner premium preview
              </div>
            </div>

            <p className="mt-3 max-w-[18rem] text-xs leading-6 text-[rgba(248,250,252,0.68)]">
              Real site structure, refined hierarchy, stronger product presentation, and a cleaner
              premium rhythm.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <div className="rounded-full bg-[var(--color-accent)] px-3.5 py-2 text-[11px] font-semibold text-[var(--color-accent-ink)] shadow-[0_10px_24px_rgba(0,230,118,0.24)]">
              {siteConfig.consultation}
            </div>
            <div className="rounded-full border border-[rgba(167,243,208,0.14)] bg-[rgba(11,31,24,0.72)] px-3.5 py-2 text-[11px] font-medium text-[var(--color-text)]">
              View portfolio
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {previewPills.map((pill) => (
              <div
                key={pill}
                className="rounded-full border border-[rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-muted)]"
              >
                {pill}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-3">
          <div className="pointer-events-none absolute right-[10%] top-[6%] h-32 w-32 rounded-full border border-[rgba(167,243,208,0.12)] bg-[radial-gradient(circle,rgba(0,230,118,0.18),rgba(4,17,13,0.1)_42%,transparent_72%)]" />
          <div className="pointer-events-none absolute right-[17%] top-[13%] h-[4.5rem] w-[4.5rem] rounded-full border border-[rgba(167,243,208,0.22)]" />
          <div className="pointer-events-none absolute right-[13%] top-[9%] h-[6.5rem] w-[6.5rem] rounded-full border border-[rgba(20,184,166,0.14)]" />

          <div className="rounded-[24px] border border-[rgba(167,243,208,0.1)] bg-[linear-gradient(180deg,rgba(11,31,24,0.84),rgba(7,20,16,0.96))] p-4 shadow-[0_24px_56px_rgba(0,0,0,0.24)]">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Homepage preview
              </div>
              <div className="rounded-full bg-[rgba(0,230,118,0.12)] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                Live UI
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[20px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.94)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={featuredProject?.heroImage ?? "/images/projects/northpeak-group.svg"}
                  alt={featuredProject?.title ?? "Featured project"}
                  fill
                  sizes="(min-width: 1024px) 280px, 48vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,13,0.08),rgba(4,17,13,0.12)_40%,rgba(4,17,13,0.78))]" />
                <div className="absolute left-4 top-4 rounded-full border border-[rgba(167,243,208,0.1)] bg-[rgba(4,17,13,0.6)] px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[var(--color-highlight)]">
                  Featured case
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.72)] px-3 py-2.5 backdrop-blur-md">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-highlight)]">
                    Premium portfolio
                  </div>
                  <div className="mt-1 text-[13px] font-semibold text-[var(--color-text)]">
                    {featuredProject?.title ?? "Selected project"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {featuredTags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-[16px] border border-[rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-2.5 text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-3">
            {previewStats.map((metric) => (
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

          <div className="grid gap-2 sm:grid-cols-3">
            {previewServices.map((service) => (
              <div
                key={service.slug}
                className="rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.68)] px-3 py-3"
              >
                <div className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {service.number}
                </div>
                <div className="mt-1.5 text-[11px] font-medium leading-5 text-[var(--color-text)]">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroLaptop() {
  const shouldReduceMotion = useReducedMotion();
  const [canInteract, setCanInteract] = useState(false);
  const [cubeActive, setCubeActive] = useState(false);

  const tiltXBase = useMotionValue(0);
  const tiltYBase = useMotionValue(0);
  const shiftXBase = useMotionValue(0);
  const shiftYBase = useMotionValue(0);

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

  useEffect(() => {
    if (cubeActive) {
      tiltXBase.set(0);
      tiltYBase.set(0);
      shiftXBase.set(0);
      shiftYBase.set(0);
    }
  }, [cubeActive, shiftXBase, shiftYBase, tiltXBase, tiltYBase]);

  const interactiveLaptop = canInteract && !shouldReduceMotion && !cubeActive;

  const tiltX = useSpring(tiltXBase, { stiffness: 110, damping: 18, mass: 0.9 });
  const tiltY = useSpring(tiltYBase, { stiffness: 110, damping: 18, mass: 0.9 });
  const shiftX = useSpring(shiftXBase, { stiffness: 98, damping: 18, mass: 0.94 });
  const shiftY = useSpring(shiftYBase, { stiffness: 98, damping: 18, mass: 0.94 });
  const cubeShiftX = useTransform(shiftX, (value) => value * 1.15);
  const cubeShiftY = useTransform(shiftY, (value) => value * 1.05 - 6);
  const reflectionX = useTransform(shiftX, (value) => value * -1.25);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactiveLaptop) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    tiltXBase.set((0.5 - relativeY) * 8.2);
    tiltYBase.set((relativeX - 0.5) * 10.8);
    shiftXBase.set((relativeX - 0.5) * 14);
    shiftYBase.set((relativeY - 0.5) * 10);
  };

  const resetInteraction = () => {
    tiltXBase.set(0);
    tiltYBase.set(0);
    shiftXBase.set(0);
    shiftYBase.set(0);
  };

  return (
    <div className="relative mx-auto flex w-full max-w-[920px] items-center justify-center px-1 [perspective:2800px] sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
      >
        <motion.div
          animate={shouldReduceMotion ? { y: 0 } : { y: [0, -8, 0] }}
          transition={
            shouldReduceMotion
              ? { duration: 0.2 }
              : {
                  duration: 7.8,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY
                }
          }
          className="relative w-full"
        >
          <div className="absolute inset-x-[10%] top-[14%] h-[58%] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.16),rgba(20,184,166,0.06)_46%,transparent_76%)] blur-[110px]" />
          <div className="absolute right-[12%] top-[10%] h-[7.5rem] w-[7.5rem] rounded-full bg-[rgba(167,243,208,0.12)] blur-3xl" />
          <div className="absolute inset-x-[16%] bottom-[-2.9rem] h-16 rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.56),transparent_72%)] blur-2xl" />

          <motion.div
            onPointerMove={handlePointerMove}
            onPointerLeave={resetInteraction}
            style={
              interactiveLaptop
                ? {
                    rotateX: tiltX,
                    rotateY: tiltY,
                    x: shiftX,
                    y: shiftY,
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
                style={canInteract && !shouldReduceMotion ? { x: cubeShiftX, y: cubeShiftY } : undefined}
                className="absolute right-[-1%] top-[2%] z-30 h-[13rem] w-[11rem] sm:h-[15rem] sm:w-[13rem] lg:h-[18rem] lg:w-[15rem]"
                onPointerEnter={() => setCubeActive(true)}
                onPointerLeave={() => setCubeActive(false)}
                onPointerDown={() => setCubeActive(true)}
                onPointerUp={() => setCubeActive(false)}
              >
                <div className="pointer-events-none absolute inset-x-[12%] bottom-[11%] h-10 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.42),transparent_72%)] blur-2xl" />
                <div className="pointer-events-none absolute inset-x-[24%] bottom-[19%] h-7 rounded-full border border-[rgba(167,243,208,0.14)] bg-[radial-gradient(circle,rgba(20,184,166,0.2),transparent_75%)]" />
                <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(248,250,252,0.02),rgba(4,17,13,0.01))]" />
                <HeroCubeCanvas
                  interactive={canInteract && !shouldReduceMotion}
                  reducedMotion={!!shouldReduceMotion}
                  onInteractionChange={setCubeActive}
                />
              </motion.div>

              <div className="relative z-10 rounded-[38px] border border-[rgba(167,243,208,0.14)] bg-[linear-gradient(180deg,rgba(248,250,252,0.1),rgba(26,38,33,0.96)_14%,rgba(7,14,12,1)_100%)] p-3 shadow-[0_60px_130px_rgba(0,0,0,0.56),0_0_60px_rgba(0,230,118,0.08)]">
                <div className="absolute inset-x-0 top-0 h-20 rounded-t-[38px] bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.03)_58%,transparent)]" />
                <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-[rgba(248,250,252,0.12)]" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] border border-[rgba(167,243,208,0.12)] bg-[#04110D] shadow-[inset_0_1px_0_rgba(248,250,252,0.06)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,230,118,0.16),transparent_28%),radial-gradient(circle_at_84%_10%,rgba(20,184,166,0.12),transparent_22%),linear-gradient(180deg,rgba(4,17,13,0.84),rgba(4,17,13,1))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.025)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

                  <LaptopScreenPreview />

                  <motion.div
                    style={canInteract && !shouldReduceMotion ? { x: reflectionX } : undefined}
                    className="pointer-events-none absolute inset-y-[10%] right-[14%] w-24 skew-x-[-18deg] bg-[linear-gradient(180deg,transparent,rgba(248,250,252,0.13),transparent)] opacity-65 blur-xl"
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
      </motion.div>
    </div>
  );
}
