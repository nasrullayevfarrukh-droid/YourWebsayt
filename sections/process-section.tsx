import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

const processProof = [
  "Brief və məqsəd dəqiqləşir",
  "Struktur əvvəlcədən görünür",
  "Dizayn qərarları məqsədə xidmət edir",
  "Təhvildən sonra da sistem dayanmir"
] as const;

export function ProcessSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_20%_0%,rgba(0,230,118,0.12),transparent_55%)]" />
      <DecorativeCubeField variant="right" className="-top-8 bottom-4 opacity-80" />

      <Container className="relative">
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <Reveal>
            <div className="rounded-[36px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.94),rgba(11,31,24,0.82))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7 xl:sticky xl:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                <Sparkles className="size-4 text-[var(--color-accent)]" />
                Proses
              </div>

              <h2 className="mt-6 text-balance font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.8rem]">
                Layihəni kontrolsuz yox, görünən mərhələlərlə idarə edirik.
              </h2>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                CodeGent tərzində axıcı hiss üçün hər addım əvvəlki addıma bağlanır:
                məqsəd, struktur, dizayn, frontend və yayım bir-birini dəstəkləyir.
              </p>

              <div className="mt-6 rounded-[28px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.72)] p-5">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Nəticə hissi
                </div>
                <div className="mt-4 space-y-3">
                  {processProof.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[var(--color-text)]">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_18px_rgba(0,230,118,0.62)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <Button href="/contact" variant="secondary">
                  Layihəni planlayaq
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-[30px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] p-6 transition-all duration-500 hover:border-[var(--color-accent-secondary)]/34 hover:bg-[rgba(20,184,166,0.06)] sm:p-7">
                  <div className="absolute inset-y-0 left-0 w-px bg-[linear-gradient(180deg,rgba(0,230,118,0),rgba(0,230,118,0.55),rgba(0,230,118,0))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="grid gap-5 md:grid-cols-[88px_minmax(0,1fr)_auto] md:items-start">
                    <div className="rounded-[20px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-4 text-center text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      {step.step}
                    </div>

                    <div>
                      <h3 className="text-2xl font-display tracking-[-0.04em] text-[var(--color-text)] sm:text-[2rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                        {step.description}
                      </p>
                    </div>

                    <div className="hidden rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] p-3 text-[var(--color-accent-secondary)] md:block">
                      <ArrowRight className="size-4" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
