"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroLaptop } from "@/components/ui/hero-laptop";
import { heroTrustIndicators } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const heroLines = [
  "Biznesinizi daha ciddi göstərən",
  "premium, tam fərdiləşdirilmiş",
  "veb saytlar qururuq"
];

export function HomeHero() {
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

            <motion.div
              variants={fadeUp}
              className="mt-12 border-t border-[color:rgba(167,243,208,0.08)] pt-6"
            >
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

          <div className="relative min-h-[26rem] sm:min-h-[32rem] lg:min-h-[42rem]">
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(0,230,118,0.16),transparent_52%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.14),transparent_60%)] blur-3xl" />
            <HeroLaptop />
          </div>
        </div>
      </Container>
    </section>
  );
}
