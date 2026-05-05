"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectPreview } from "@/components/ui/project-preview";
import { heroHighlights } from "@/data/home";
import { portfolioProjects } from "@/data/portfolio";
import { heroTrustIndicators } from "@/data/site";
import { fadeUp, luxuryEase, staggerContainer } from "@/lib/motion";

const previewProject = portfolioProjects[5]!;

const heroFacts = [
  {
    title: "Brend görünüşü",
    text: "Sayt ilk saniyədən daha peşəkar və daha bahalı hiss etdirməlidir."
  },
  {
    title: "Satış axını",
    text: "Başlıqdan CTA-ya qədər hər blok sorğu və əlaqə üçün işləməlidir."
  },
  {
    title: "Texniki baza",
    text: "Sürətli, mobil-first və rahat inkişaf edilən frontend qurulur."
  }
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(125,180,255,0.18),transparent_30%),radial-gradient(circle_at_90%_18%,rgba(255,255,255,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <Container className="relative">
        <div className="grid gap-14 xl:grid-cols-[1fr_0.98fr] xl:items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]"
            >
              <Sparkles className="size-3.5 text-[var(--color-accent)]" />
              Personal web studio
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                variants={fadeUp}
                className="text-balance font-display text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--color-text)] sm:text-6xl xl:text-[5.7rem]"
              >
                Biznesinizi ciddi göstərən
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                className="text-balance font-display text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--color-text)] sm:text-6xl xl:text-[5.7rem]"
              >
                premium və sürətli
              </motion.h1>
              <motion.h1
                variants={fadeUp}
                className="text-balance font-display text-5xl leading-[0.9] tracking-[-0.07em] text-[var(--color-text)] sm:text-6xl xl:text-[5.7rem]"
              >
                veb saytlar qururam
              </motion.h1>
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg"
            >
              YourWebsayt biznesini daha peşəkar göstərmək və daha çox satış əldə etmək istəyənlər üçün
              modern, sürətli və mobil-first saytlar hazırlayır.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layihəni müzakirə edək
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                İşlərə bax
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              {heroTrustIndicators.map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >
                  <BadgeCheck className="size-4 text-[var(--color-accent)]" />
                  {indicator}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 grid gap-4 sm:grid-cols-3">
              {heroFacts.map((fact) => (
                <div key={fact.title} className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {fact.title}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{fact.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: luxuryEase, delay: 0.18 }}
            className="relative min-h-[34rem] sm:min-h-[40rem]"
          >
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(125,180,255,0.18),transparent_62%)] blur-3xl" />
            <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))]" />

            <div className="absolute inset-x-4 top-4 sm:inset-x-6 sm:top-6">
              <ProjectPreview
                tone={previewProject.previewTone}
                label="Studio preview"
                accent={previewProject.previewAccent}
                featured
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: luxuryEase, delay: 0.45 }}
              className="absolute left-0 top-16 w-[34%] rounded-[26px] border border-white/10 bg-[rgba(8,13,24,0.84)] p-4 backdrop-blur-xl"
            >
              <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Fokus
              </div>
              <div className="mt-4 space-y-3">
                {heroHighlights.map((item) => (
                  <div key={item} className="rounded-[18px] border border-white/10 bg-white/[0.04] px-3 py-3 text-sm text-[var(--color-text)]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: luxuryEase, delay: 0.6 }}
              className="absolute bottom-0 right-[8%] w-[44%] rounded-[28px] border border-white/10 bg-[rgba(7,11,20,0.88)] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Premium nəticə
                </div>
                <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                <div>Daha ciddi brend görünüşü</div>
                <div>Daha rahat mobil istifadə</div>
                <div>Daha güclü sorğu axını</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
