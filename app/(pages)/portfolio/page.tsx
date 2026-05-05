import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { PortfolioFilter } from "@/components/ui/portfolio-filter";
import { Reveal } from "@/components/ui/reveal";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = createPageMetadata(
  "Portfolio foundation | YourWebsayt",
  "YourWebsayt üçün placeholder case study foundation-u. Real layihələr sonradan bu struktur üzərinə əlavə olunacaq.",
  "/portfolio"
);

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio foundation"
        title="Buradakı işlər hazırda placeholder case study formatındadır, amma real layihələr üçün artıq premium showcase strukturu qurulub."
        description="Bu mərhələdə məqsəd tam dolu portfolio göstərmək deyil. Məqsəd ciddi, modern və gələcək real layihələr üçün hazır bir təqdimat sistemi qurmaqdır."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Status
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Placeholder kartlar, hazır detail səhifələr və sonradan rahat dəyişən data strukturu.
            </p>
          </div>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            <Reveal>
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Nə hazırdır
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                  Kart strukturu, hover davranışı, detail page skeleti və gələcək screenshot dəyişikliyi üçün uyğun data modeli.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Nə sonra gələcək
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                  Real layihə adları, canlı nəticələr, həqiqi ekran görüntüləri və tamamlanmış case study mətni.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Niyə belədir
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                  Gözləmədən premium studio hissi yaratmaq və real portfolio əlavə edilənə qədər saytı boş saxlamamaq üçün.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <PortfolioFilter projects={portfolioProjects} />
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
