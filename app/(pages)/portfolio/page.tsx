import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioFilter } from "@/components/ui/portfolio-filter";
import { portfolioProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

const portfolioSignals = [
  {
    title: "Tamamlanmış işlər ön sırada",
    description:
      "İlk olaraq təhvil verilmiş real biznes layihələri göstərilir ki etibar və nəticə hissi dərhal görünsün."
  },
  {
    title: "Fərqli sahələr üçün nümunələr",
    description:
      "Xəbər, fitness, rent a car və əmlak istiqamətləri üzrə hazırladığım nümunələr ayrıca görünür."
  },
  {
    title: "Canlı baxış imkanı",
    description:
      "Hər kart üzərindən birbaşa sayta baxmaq mümkündür. Məqsəd işləri real vəziyyətdə göstərməkdir."
  }
];

export const metadata: Metadata = createPageMetadata(
  "Portfolio | YourWebsayt",
  "YourWebsayt tərəfindən hazırlanmış real biznes saytları və fərqli sahələr üçün portfolio nümunələri.",
  "/portfolio"
);

export default function PortfolioPage() {
  const leadProject = portfolioProjects[0]!;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Hazırladığım və təqdim etdiyim layihələr"
        description="Real bizneslər və fərqli sahələr üçün hazırlanmış sayt nümunələri."
        aside={
          <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Qısa qeyd
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              İlk iki layihə real tamamlanmış işlərdir. Sonrakı kartlar isə fərqli sahələr üçün
              hazırladığım portfolio nümunələridir.
            </p>
          </div>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <ProjectCard project={leadProject} featured />
            </Reveal>
            <div className="grid gap-5">
              {portfolioSignals.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="editorial-card rounded-[28px] p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Portfolio siqnalı
                    </div>
                    <h2 className="mt-4 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.18}>
                <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Ətraflı baxış
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    İstəsən seçilmiş layihənin daxili case səhifəsinə keçib struktur, yanaşma və
                    təqdimat xəttinə ayrıca baxa bilərsən.
                  </p>
                  <div className="mt-5">
                    <Button href={`/portfolio/${leadProject.slug}`} variant="secondary">
                      Seçilmiş layihəni aç
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
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
