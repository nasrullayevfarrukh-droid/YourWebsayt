"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { heroHighlights } from "@/data/home";
import { portfolioProjects } from "@/data/portfolio";
import { heroTrustIndicators } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

const previewProject = portfolioProjects[0]!;

const heroFacts = [
  {
    title: "Brend görünüşü",
    text: "Sayt ilk baxışdan daha peşəkar görünməlidir."
  },
  {
    title: "Satış axını",
    text: "Müştərini CTA-ya qədər yormayan struktur qurulur."
  },
  {
    title: "Texniki baza",
    text: "Sürətli və mobil uyğun frontend hazırlanır."
  }
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-30 xl:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.16),transparent_30%),radial-gradient(circle_at_90%_14%,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-18" />

      <Container className="relative">
        <div className="grid gap-10 lg:gap-12 xl:grid-cols-[1fr_0.98fr] xl:items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)] sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]"
            >
              <Sparkles className="size-3.5 text-[var(--color-accent)]" />
              Premium web studio
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-[11ch] text-balance font-display text-[2.75rem] leading-[0.92] tracking-[-0.065em] text-[var(--color-text)] min-[390px]:text-[2.95rem] sm:max-w-none sm:text-[4.15rem] lg:text-[4.55rem] xl:text-[5.1rem]"
            >
              <span className="block">Biznesinizi daha</span>
              <span className="block">ciddi göstərən</span>
              <span className="block">premium veb saytlar</span>
              <span className="block">qururuq</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:mt-6 sm:text-base sm:leading-7 lg:text-lg"
            >
              YourWebsayt şirkətlər, restoranlar, klinikalar, daşınmaz əmlak ofisləri, rent a car
              biznesləri və şəxsi brendlər üçün sürətli, modern və satış yönümlü saytlar
              hazırlayır.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/contact" size="lg" className="w-full justify-center sm:w-auto">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary" className="w-full justify-center sm:w-auto">
                Portfoliaya baxın
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2.5 text-sm text-[var(--color-muted)]">
              {heroTrustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-center min-[390px]:w-auto"
                >
                  <BadgeCheck className="size-4 text-[var(--color-accent)]" />
                  {indicator}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[26px] sm:p-5">
                  <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[11px] sm:tracking-[0.3em]">
                    {fact.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text)] sm:mt-4 sm:leading-7">
                    {fact.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative mx-auto hidden min-h-[21rem] w-full max-w-[28rem] md:min-h-[29rem] md:max-w-[34rem] lg:block lg:min-h-[34rem] xl:mx-0 xl:max-w-none xl:self-stretch">
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.14),transparent_62%)] blur-3xl" />

            <div className="absolute inset-x-1 top-2 bottom-10 rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] p-3 sm:inset-x-3 sm:top-3 sm:bottom-12 sm:rounded-[40px] sm:p-4">
              <div
                className="relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-black/30 bg-cover bg-top"
                style={{ backgroundImage: `url(${previewProject.imagePath})` }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,13,0.08),rgba(4,17,13,0.12)_42%,rgba(4,17,13,0.84)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-[rgba(4,17,13,0.56)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-text)] backdrop-blur-xl">
                  {previewProject.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/10 bg-[rgba(4,17,13,0.58)] px-4 py-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                        Seçilmiş layihə
                      </div>
                      <div className="mt-2 text-base font-medium text-[var(--color-text)] sm:text-lg">
                        {previewProject.title}
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-16 hidden w-[34%] rounded-[24px] border border-white/10 bg-[rgba(8,13,24,0.84)] p-4 backdrop-blur-xl md:block">
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Fokus
              </div>
              <div className="mt-4 space-y-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-[var(--color-text)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-[8%] hidden w-[44%] rounded-[26px] border border-white/10 bg-[rgba(7,11,20,0.88)] p-5 backdrop-blur-xl md:block">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Nəticə
                </div>
                <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                <div>Daha ciddi brend görünüşü</div>
                <div>Daha rahat mobil istifadə</div>
                <div>Daha güclü müraciət axını</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
