import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { trustPoints, whyChooseUs } from "@/data/site";

const transformationHighlights = [
  "Şablon hissindən çıxan daha premium görüntü",
  "Müştərinin qərarını asanlaşdıran daha aydın struktur",
  "Təhvildən sonra da inkişaf edə bilən daha sağlam baza"
] as const;

export function BusinessImpactSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_18%_0%,rgba(0,230,118,0.12),transparent_58%)]" />

      <SectionHeading
        eyebrow="Niyə YourWebsayt"
        title="Premium sayt yalnız gözəl görünmək üçün deyil, qərarı sürətləndirmək üçün qurulur."
        description="CodeGent-dəki kimi bir-birinə bağlı flow hissi yaratmaq üçün vizual dil, section ritmi, CTA yerləşimi və mobil-first struktur eyni sistemdə işləməlidir."
      />

      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-accent-secondary)]/24 bg-[linear-gradient(180deg,rgba(0,230,118,0.08),rgba(20,184,166,0.09),rgba(11,31,24,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7">
              <div className="absolute right-0 top-0 h-44 w-44 bg-[radial-gradient(circle,rgba(0,230,118,0.18),transparent_70%)] blur-3xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.42)] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[var(--color-highlight)]">
                  <Sparkles className="size-4 text-[var(--color-accent)]" />
                  Strategiya + dizayn + frontend
                </div>

                <h3 className="mt-6 text-4xl font-display tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.2rem]">
                  Markanı daha ciddi göstərən və sorğunu daha yaxınlaşdıran sistem.
                </h3>
                <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                  YourWebsayt yalnız layout hazırlamır. Məqsəd, istifadəçini yormadan
                  markanı dəyərli göstərən, xidməti anlaşılan edən və əlaqə qərarını
                  asanlaşdıran premium rəqəmsal vitrin qurmaqdır.
                </p>

                <div className="mt-6 space-y-3">
                  {transformationHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--color-text)]">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[var(--color-accent)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Button href="/contact" size="lg">
                    Layihəni müzakirə edək
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className={index === whyChooseUs.length - 1 ? "md:col-span-2" : ""}
              >
                <div className="group h-full rounded-[30px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.84)] p-6 transition-all duration-500 hover:border-[var(--color-accent-secondary)]/34 hover:bg-[rgba(20,184,166,0.06)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                      0{index + 1}
                    </div>
                    <ArrowUpRight className="size-4 text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="mt-5 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {trustPoints.map((point, index) => (
            <Reveal key={point.label} delay={index * 0.04}>
              <div className="rounded-[26px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.72)] p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  {point.label}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
