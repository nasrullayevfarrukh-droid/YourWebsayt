import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { PortfolioFilter } from "@/components/ui/portfolio-filter";
import { portfolioCuration } from "@/data/experience";
import { portfolioProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

export const metadata: Metadata = createPageMetadata(
  "Portfolio | YourWebsayt",
  "YourWebsayt tərəfindən müxtəlif sahələr üçün hazırlanmış premium korporativ, landing page, e-commerce və şəxsi brend layihələri.",
  "/portfolio"
);

export default function PortfolioPage() {
  const leadProject = portfolioProjects[0]!;

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Seçilmiş işlərimiz hər sahə üçün fərqli düşünülmüş premium həlləri göstərir."
        description="Burada məqsəd sadəcə gözəl layout deyil. Hər layihə konkret biznesin etibarını, təqdimatını və müraciət axınını gücləndirmək üçün qurulub."
        aside={
          <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Kurasiya
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Korporativ, e-commerce, landing page, şəxsi brend və xidmət biznesi layihələri.
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
              {portfolioCuration.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="editorial-card rounded-[28px] p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Curation principle
                    </div>
                    <h2 className="mt-4 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.18}>
                <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Case reading
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                    Filtrlə, case aç, problem və həll məntiqini oxu. Məqsəd yalnız ekran göstərmək deyil, agency düşüncəsini görünən etməkdir.
                  </p>
                  <div className="mt-5">
                    <Button href={`/portfolio/${leadProject.slug}`} variant="secondary">
                      Seçilmiş case-i aç
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
