import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { PortfolioFilter } from "@/components/ui/portfolio-filter";
import { Reveal } from "@/components/ui/reveal";
import { portfolioProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

export const metadata: Metadata = createPageMetadata(
  "Portfolio | YourWebsayt",
  "Əmlak, rent a car, media və digər sahələr üçün hazırladığım real sayt nümunələri.",
  "/portfolio"
);

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Seçilmiş işlər"
        description="Real layihələrdən qısa və aydın nümunələr."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Qısa baxış
            </div>
            <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
              <p>{portfolioProjects.length} real layihə nümunəsi</p>
              <p>Əmlak, rent a car, media və xidmət sahələri</p>
            </div>
          </div>
        }
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Real screenshot-lar",
              "Qısa case study strukturu",
              "Mobil uyğun kart düzümü"
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[26px] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-[var(--color-text)]">
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <PortfolioFilter projects={portfolioProjects} />
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
