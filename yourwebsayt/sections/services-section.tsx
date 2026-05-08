import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { studioServices } from "@/data/home";
import { cn } from "@/lib/utils";

function getCardSpan(index: number) {
  if (index === 0) return "md:col-span-2 xl:col-span-7";
  if (index === 1) return "xl:col-span-5";
  if (index === 4 || index === 8) return "md:col-span-2 xl:col-span-6";
  return "xl:col-span-4";
}

export function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <DecorativeCubeField variant="left" className="opacity-85" />
      <SectionHeading
        eyebrow="Xidmətlər"
        title="Biznes tipinizə uyğun sayt formatları"
        description="Hər format fərqli satış və təqdimat ehtiyacına uyğun qurulur."
        action={
          <Button href="/services" variant="secondary">
            Bütün xidmətlər
          </Button>
        }
      />

      <Container className="relative">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-12">
          {studioServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.03} className={cn(getCardSpan(index))}>
              <div className="group h-full rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {service.number}
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {service.audience}
                  </div>
                </div>

                <h3 className="mt-6 max-w-xl font-display text-[1.7rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[2rem]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
                  {service.description}
                </p>

                <div className="mt-6 border-t border-white/8 pt-4">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Fokus
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-text)] sm:leading-7">
                    {service.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
