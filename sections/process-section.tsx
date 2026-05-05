import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <Reveal>
            <div className="max-w-xl">
              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Proses
              </div>
              <h2 className="text-balance font-display text-4xl leading-[0.94] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
                Layihə plansız yox, premium və aydın mərhələlərlə irəliləyir.
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                Brief-dən yayına qədər hər addım nə üçün edildiyini göstərən, biznes yönümlü və rahat idarə olunan proseslə qurulur.
              </p>
            </div>
          </Reveal>

          <div className="relative space-y-4 pl-5 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.02))]">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="group relative rounded-[30px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[var(--color-accent)]/35 hover:bg-white/[0.04] md:grid md:grid-cols-[100px_minmax(0,1fr)] md:gap-4">
                  <div className="absolute -left-[1.55rem] top-8 h-3 w-3 rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-accent)]/80 shadow-[0_0_0_8px_rgba(125,180,255,0.08)]" />
                  <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">{step.step}</div>
                  <div className="mt-5 md:mt-0">
                    <h3 className="text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
                      {step.description}
                    </p>
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
