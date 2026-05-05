import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const strategicReasons = [
  {
    title: "Tam fərdiləşdirilmiş yanaşma",
    description: "Hazır tema yox, biznesinizin tonuna, auditoriyasına və satış modelinə uyğun qurulmuş sayt."
  },
  {
    title: "Etibar yaradan vizual dil",
    description: "Tipografiya, boşluq, rəng və kompozisiya vasitəsilə markanız daha premium görünür."
  },
  {
    title: "Müraciətə yönələn struktur",
    description: "Mesaj və CTA axını istifadəçini yormadan qərara yaxınlaşdırır."
  }
];

const decisionSignals = [
  "Saytınız xidmət səviyyənizi aşağı göstərirsə",
  "Müştəri nə etdiyinizi tez anlaya bilmirsə",
  "Əlaqə və müraciət axını zəif işləyirsə"
];

const transformationBefore = [
  "Şablon hissi yaradan eyni görünüş",
  "Etibar yaratmayan zəif vizual dil",
  "CTA və müraciət axını olmayan struktur"
];

const transformationAfter = [
  "Brendə uyğun premium vizual ritm",
  "Daha aydın mesaj və güclü CTA sistemi",
  "Mobil, sürətli və inandırıcı təqdimat"
];

export function BusinessImpactSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[0.84fr_1.16fr] xl:items-start">
          <Reveal>
            <div className="max-w-xl">
              <div className="mb-5 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Niyə YourWebsayt
              </div>
              <h2 className="text-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
                Premium sayt biznes sahibinə sadəcə görünüş yox, qərar üstünlüyü verir.
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                Sizin üçün əsas məsələ “saytın olması” deyil. O, markanı daha ciddi göstərməli,
                xidməti aydınlaşdırmalı və müştərinin tərəddüdünü azaltmalıdır.
              </p>

              <div className="mt-8 rounded-[30px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(0,230,118,0.06),rgba(20,184,166,0.08),rgba(11,31,24,0.92))] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Bu niyə vacibdir
                </div>
                <div className="mt-5 space-y-4">
                  {decisionSignals.map((signal) => (
                    <div
                      key={signal}
                      className="border-b border-[color:rgba(167,243,208,0.08)] pb-4 text-sm leading-7 text-[var(--color-text)] last:border-b-0 last:pb-0"
                    >
                      {signal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Layihəni müzakirə edək
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            {strategicReasons.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="grid gap-5 border-t border-[color:rgba(167,243,208,0.08)] py-6 first:border-t-0 first:pt-0 md:grid-cols-[84px_minmax(0,1fr)_auto] md:items-start">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden rounded-full border border-[color:var(--color-border)] p-3 text-[var(--color-accent-secondary)] md:block">
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="rounded-[38px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Transformasiya
              </div>
              <h3 className="mt-6 text-3xl font-display tracking-[-0.04em] text-[var(--color-text)] sm:text-4xl">
                Şablon təəssüratından çıxıb daha ciddi və daha inandırıcı təqdimata keçid.
              </h3>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[28px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.82)] p-5">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Əvvəl
                  </div>
                  <div className="mt-4 space-y-4">
                    {transformationBefore.map((item) => (
                      <p key={item} className="text-sm leading-7 text-[var(--color-muted)]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-[var(--color-accent-secondary)]/30 bg-[linear-gradient(180deg,rgba(0,230,118,0.08),rgba(20,184,166,0.12),rgba(11,31,24,0.92))] p-5">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Sonra
                  </div>
                  <div className="mt-4 space-y-4">
                    {transformationAfter.map((item) => (
                      <p key={item} className="text-sm leading-7 text-[var(--color-text)]">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative min-h-[40rem] overflow-hidden rounded-[42px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.86),rgba(11,31,24,0.52))] p-4 sm:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(167,243,208,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.02)_1px,transparent_1px)] bg-[size:46px_46px] opacity-30" />
              <div className="absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle,rgba(0,230,118,0.2),transparent_70%)] blur-3xl" />

              <div className="relative h-full">
                <div className="absolute left-0 top-6 w-[28%] rounded-[26px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.82)] p-4">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Əvvəl
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="h-14 rounded-[18px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)]" />
                    <div className="h-20 rounded-[18px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)]" />
                    <div className="h-28 rounded-[18px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)]" />
                  </div>
                </div>

                <div className="absolute right-0 top-0 w-[74%] rounded-[30px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Sonra
                    </div>
                    <div className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-ink)]">
                      Premium nəticə
                    </div>
                  </div>
                  <Image
                    src="/images/projects/lexora-law.svg"
                    alt="Premium veb sayt transformasiya nümunəsi"
                    width={1200}
                    height={820}
                    className="w-full rounded-[24px] border border-[color:rgba(167,243,208,0.12)]"
                  />
                </div>

                <div className="absolute bottom-6 left-[16%] right-[5%] rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.8)] px-5 py-4 backdrop-blur-xl">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        İlk təəssürat
                      </div>
                      <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                        Daha premium ilk baxış
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        Struktur
                      </div>
                      <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                        Daha aydın xidmət təqdimatı
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                        Etibar
                      </div>
                      <div className="mt-2 text-base font-medium text-[var(--color-text)]">
                        Daha güclü əlaqə qərarı
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
