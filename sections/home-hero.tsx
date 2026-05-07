"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brand } from "@/data/brand";
import { heroHighlights } from "@/data/home";
import { portfolioProjects } from "@/data/portfolio";
import { heroTrustIndicators } from "@/data/site";
import { luxuryEase } from "@/lib/motion";

const heroLines = ["Biznesinizi daha ciddi göstərən", "premium veb saytlar qururuq"];

const heroPreviewSignals = [
  "Real portfolio preview",
  "Mobil-first axın",
  "Satış yönümlü CTA strukturu"
] as const;

const heroProject = portfolioProjects[0]!;

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
              YourWebsayt şirkətlər, restoranlar, klinikalar, daşınmaz əmlak ofisləri,
              rent a car biznesləri və şəxsi brendlər üçün sürətli, modern və satış yönümlü
              saytlar hazırlayır.
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
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-[40rem]"
            >
              <div className="absolute -left-8 top-14 hidden h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.22),transparent_72%)] blur-3xl lg:block" />
              <div className="absolute -right-6 bottom-10 hidden h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_72%)] blur-3xl lg:block" />

              <div className="relative overflow-hidden rounded-[34px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.96),rgba(11,31,24,0.86))] p-3 shadow-[0_38px_120px_rgba(0,0,0,0.38)] sm:rounded-[40px] sm:p-5">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.16]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(167,243,208,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,184,166,0.12) 1px, transparent 1px)",
                    backgroundSize: "42px 42px"
                  }}
                />

                <div className="relative rounded-[24px] border border-[color:rgba(167,243,208,0.1)] bg-[rgba(4,17,13,0.76)] p-3.5 sm:rounded-[30px] sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[color:rgba(167,243,208,0.08)] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(248,250,252,0.28)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(20,184,166,0.44)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,230,118,0.7)]" />
                      </div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        YourWebsayt preview
                      </div>
                    </div>

                    <div className="rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[var(--color-accent)]">
                      Real project flow
                    </div>
                  </div>

                  <div className="relative mt-5 overflow-hidden rounded-[22px] border border-[color:rgba(167,243,208,0.1)] bg-[rgba(6,23,18,0.76)] sm:rounded-[26px]">
                    <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(4,17,13,0),rgba(4,17,13,0.48))]" />
                    <Image
                      src={heroProject.heroImage}
                      alt={heroProject.title}
                      width={1280}
                      height={920}
                      className="w-full object-cover"
                      priority
                    />

                    <motion.div
                      className="absolute left-4 top-4 z-10 rounded-full border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.78)] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[var(--color-text)] backdrop-blur-xl"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 5.5, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {heroProject.clientType}
                    </motion.div>

                    <motion.div
                      className="absolute bottom-3 left-3 z-10 max-w-[13rem] rounded-[20px] border border-[color:rgba(167,243,208,0.12)] bg-[rgba(6,23,18,0.78)] p-3 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:max-w-[16rem] sm:rounded-[24px] sm:p-4"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 6.6, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="text-[9px] uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-[10px] sm:tracking-[0.28em]">
                        Satış yönümlü axın
                      </div>
                      <p className="mt-2 text-xs leading-5 text-[var(--color-text)] sm:mt-3 sm:text-sm sm:leading-6">
                        Xidmət təqdimatı, etibar bloku və əlaqə CTA-sı eyni axında işləyir.
                      </p>
                    </motion.div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {heroPreviewSignals.map((signal, index) => (
                      <motion.div
                        key={signal}
                        className="rounded-[20px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.74)] p-3.5 sm:rounded-[22px] sm:p-4"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.18 + index * 0.08,
                          ease: luxuryEase
                        }}
                      >
                        <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                          0{index + 1}
                        </div>
                        <div className="mt-3 text-sm leading-6 text-[var(--color-text)]">{signal}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute -right-2 top-18 hidden w-44 rounded-[24px] border border-[color:rgba(167,243,208,0.12)] bg-[rgba(6,23,18,0.84)] p-4 shadow-[0_20px_56px_rgba(0,0,0,0.26)] backdrop-blur-xl md:block"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 7.2, delay: 1.1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                    Studio proof
                  </div>
                  <div className="mt-3 space-y-2">
                    {heroHighlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                        <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_16px_rgba(0,230,118,0.62)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -left-2 bottom-12 hidden w-48 rounded-[24px] border border-[color:rgba(167,243,208,0.12)] bg-[rgba(11,31,24,0.84)] p-4 shadow-[0_20px_56px_rgba(0,0,0,0.26)] backdrop-blur-xl md:block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6.8, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      CTA yerləşimi
                    </div>
                    <ArrowUpRight className="size-4 text-[var(--color-accent)]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text)]">
                    İlk baxışdan etibar yaradan və müraciətə aparan premium struktur.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
