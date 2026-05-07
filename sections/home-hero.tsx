"use client";

import { BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { heroTrustIndicators } from "@/data/site";

const heroLines = [
  "Biznesinizi daha ciddi gosteren",
  "premium, tam ferdilesdirilmis",
  "veb saytlar qururuq"
];

const heroSignals = [
  {
    label: "Struktur",
    value: "Service, portfolio, process ve contact axini sade qurulur."
  },
  {
    label: "Performans",
    value: "Mobil-first, yungul ve suretli frontend ile daha rahat istifade."
  },
  {
    label: "Mesaj",
    value: "Markanizi daha ciddi gosteren, CTA-lari aydin olan premium teqdimat."
  }
];

const coreFlow = ["Hero mesaji", "Service showcase", "Portfolio proof", "Contact CTA"];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,230,118,0.14),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(20,184,166,0.1),transparent_22%)]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Premium web studio
            </div>

            <div className="space-y-2">
              {heroLines.map((line) => (
                <h1
                  key={line}
                  className="text-balance font-display text-5xl leading-[0.92] tracking-[-0.06em] text-[var(--color-text)] sm:text-6xl xl:text-[5.6rem]"
                >
                  {line}
                </h1>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              YourWebsayt sirketler, klinikalar, restoranlar, xidmet biznesleri, dasinmaz emlak
              ofisleri ve sexsi brendler ucun etibar yaradan, muraciet axinini guclendiren ve
              markani daha premium gosteren veb tecrubeler hazirlayir.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Layiheni muzakire edek
              </Button>
              <Button href="/portfolio" size="lg" variant="secondary">
                Portfolioya baxin
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-muted)]">
              {heroTrustIndicators.slice(0, 3).map((indicator) => (
                <div
                  key={indicator}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-4 py-2"
                >
                  <BadgeCheck className="size-4 text-[var(--color-accent)]" />
                  {indicator}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:pl-4">
            <div className="rounded-[36px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.96),rgba(11,31,24,0.84))] p-5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="rounded-[28px] border border-[color:rgba(167,243,208,0.1)] bg-[rgba(4,17,13,0.72)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Premium web system
                </div>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
                  Daha temiz, daha suretli, daha ciddi teqdimat
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Sayt yalniz dekorativ gorunus yox, etibar, mesaj ve muraciet axini ucun
                  qurulmalidir.
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] p-4"
                  >
                    <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                      {signal.label}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-text)]">{signal.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.72)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Core flow
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {coreFlow.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.62)] px-4 py-3 text-sm text-[var(--color-text)]"
                    >
                      <span>{item}</span>
                      <span className="text-[var(--color-highlight)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
