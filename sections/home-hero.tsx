"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroTrustIndicators } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const heroLines = [
  "Biznesinizi daha ciddi göstərən",
  "premium, tam fərdiləşdirilmiş",
  "veb saytlar qururuq"
];

const strategyPoints = [
  "Mesaj axını və qərar strukturu",
  "Etibar blokları və CTA prioriteti",
  "Mobil, sürət və SEO təməli"
];

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const getFloatingMotion = (offset: number, duration: number, delay = 0) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.35 }
        }
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: [0, offset, 0] },
          transition: {
            opacity: { duration: 0.8, delay },
            y: {
              duration,
              delay,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror" as const,
              ease: "easeInOut"
            }
          }
        };

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,230,118,0.16),transparent_30%),radial-gradient(circle_at_82%_10%,rgba(20,184,166,0.12),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]"
            >
              <Sparkles className="size-3.5 text-[var(--color-accent)]" />
              Premium veb sayt studiyası
            </motion.div>

            <div className="space-y-2">
              {heroLines.map((line) => (
                <motion.h1
                  key={line}
                  variants={fadeUp}
                  className="text-balance font-display text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl xl:text-[5.6rem]"
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg"
            >
              YourWebsayt şirkətlər, klinikalar, restoranlar, xidmət biznesləri, daşınmaz əmlak
              ofisləri və şəxsi brendlər üçün etibar yaradan, müraciət axınını gücləndirən və
              markanı daha premium göstərən veb təcrübələr hazırlayır.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                Portfolioya baxın
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]"
            >
              {heroTrustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-4 py-2"
                >
                  <BadgeCheck className="size-4 text-[var(--color-accent)]" />
                  {indicator}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 border-t border-[color:rgba(167,243,208,0.08)] pt-6">
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Etibar
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    İlk baxışdan ciddi və yüksək səviyyəli görünən brend hissi.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Struktur
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    Mesaj, CTA və xidmət təqdimatı ilə daha aydın qərar axını.
                  </p>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Performans
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    Sürətli, mobil uyğun və SEO üçün sağlam texniki baza.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative min-h-[38rem] lg:min-h-[42rem]">
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.18),transparent_54%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_64%)] blur-3xl" />
            <div className="absolute inset-0 rounded-[42px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.8),rgba(11,31,24,0.48))]" />

            <motion.div
              {...getFloatingMotion(-14, 8.2)}
              className="absolute left-0 top-10 w-[30%] rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.82)] p-5 backdrop-blur-xl"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Strategiya paneli
              </div>
              <div className="mt-6 space-y-4">
                {strategyPoints.map((point) => (
                  <div key={point} className="rounded-[20px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] p-4">
                    <div className="mb-3 h-1.5 w-12 rounded-full bg-[var(--color-accent-secondary)]/75" />
                    <p className="text-sm leading-7 text-[var(--color-text)]">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...getFloatingMotion(12, 9.4, 0.08)}
              className="absolute right-0 top-0 w-[72%] rounded-[32px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Əsas nümunə
                </div>
                <div className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-ink)]">
                  Korporativ istiqamət
                </div>
              </div>
              <Image
                src="/images/projects/northpeak-group.svg"
                alt="Premium korporativ veb sayt nümunəsi"
                width={1200}
                height={820}
                className="w-full rounded-[24px] border border-[color:rgba(167,243,208,0.12)]"
              />
            </motion.div>

            <motion.div
              {...getFloatingMotion(-10, 8.8, 0.12)}
              className="absolute bottom-8 right-[8%] w-[42%] rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] p-4 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Mobil baxış
                </div>
                <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
              </div>
              <Image
                src="/images/projects/nova-clinic-mobile.svg"
                alt="Mobil sayt görünüşü"
                width={640}
                height={900}
                className="w-full rounded-[22px] border border-[color:rgba(167,243,208,0.12)]"
              />
            </motion.div>

            <motion.div
              {...getFloatingMotion(10, 9.1, 0.16)}
              className="absolute bottom-0 left-[18%] right-[10%] rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.78)] px-5 py-4 backdrop-blur-xl"
            >
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Fokus
                  </div>
                  <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                    Etibar və premium imic
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Konversiya
                  </div>
                  <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                    Daha aydın CTA axını
                  </div>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Texniki baza
                  </div>
                  <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                    Mobil, sürətli, SEO hazır
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
