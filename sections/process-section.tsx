import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/data/site";

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
          <Reveal>
            <div className="max-w-xl">
              <div className="mb-5 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
                Proses
              </div>
              <h2 className="text-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
                Layihəni plansız yox, aydın mərhələlərlə idarə edirik.
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
                Brief-dən təhvilə qədər hər addım görünən və idarə olunan olur. Bu həm işin keyfiyyətini, həm də sizin rahatlığınızı gücləndirir.
              </p>
              <div className="mt-7">
                <Button href="/contact" variant="secondary">
                  Prosesi müzakirə et
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="group grid gap-4 rounded-[30px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] p-6 transition-colors duration-300 hover:border-[var(--color-accent-secondary)]/35 hover:bg-[rgba(20,184,166,0.08)] md:grid-cols-[100px_minmax(0,1fr)] md:items-start">
                  <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                    {step.step}
                  </div>
                  <div>
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
