import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PricingCard } from "@/components/ui/pricing-card";
import { Reveal } from "@/components/ui/reveal";
import { pricingFactors } from "@/data/experience";
import { pricingExtras, pricingPlans } from "@/data/pricing";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

export const metadata: Metadata = createPageMetadata(
  "Qiymətlər | YourWebsayt",
  "Start, Business və Premium paketləri ilə YourWebsayt qiymət və xidmət çərçivəsi.",
  "/pricing"
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Qiymətlər"
        title="Paketlərimiz seçim etməyi asanlaşdırır, amma ciddi layihələr üçün təklif fərdiləşdirilir."
        description="Qiymət yanaşmamız ucuz görünmək üçün deyil. Məqsəd biznesin ehtiyacına, səviyyəsinə və böyümə planına uyğun həll seçməkdir."
        aside={
          <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Qeyd
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Hər ciddi biznes üçün page count, məzmun dərinliyi və funksiya tələbinə görə ayrıca estimate lazım ola bilər.
            </p>
          </div>
        }
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.05}>
                <PricingCard plan={plan} featured={plan.name === "Business"} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 sm:py-16">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {pricingFactors.map((factor, index) => (
              <Reveal key={factor.title} delay={index * 0.04}>
                <div className="editorial-card h-full rounded-[28px] p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Price factor
                  </div>
                  <h2 className="mt-4 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                    {factor.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {factor.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Custom quote
                </div>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
                  Hazır çərçivədən kənar layihə?
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  Böyük korporativ struktur, çoxdilli sayt, xüsusi rezervasiya axını və ya geniş e-commerce həlli üçün ayrıca təklif hazırlayırıq.
                </p>
                <div className="mt-7">
                  <Button href="/contact" size="lg">
                    Fərdi təklif al
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="editorial-card rounded-[30px] p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Əlavə opsiyalar
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {pricingExtras.map((extra) => (
                    <div key={extra} className="rounded-[22px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.82)] px-4 py-4 text-sm text-[var(--color-text)]">
                      {extra}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
