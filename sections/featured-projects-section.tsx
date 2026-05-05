import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/portfolio";

const featuredProjects = portfolioProjects.slice(0, 3);
const heroProject = featuredProjects[0]!;
const secondaryProjects = featuredProjects.slice(1);
const proofNotes = [
  "Hazır təhvil verilmiş biznes layihələri",
  "Fərqli sahələr üçün portfolio nümunələri",
  "Canlı linklərlə baxıla bilən real işlər"
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Portfolio"
        title="Hazırladığım və təqdim etdiyim layihələr"
        description="Real bizneslər və fərqli sahələr üçün hazırlanmış sayt nümunələri."
      />

      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <Reveal>
            <ProjectCard project={heroProject} featured />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-[32px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Portfolio qeydi
                </div>
                <div className="mt-6 space-y-4">
                  {proofNotes.map((note) => (
                    <div
                      key={note}
                      className="border-b border-[color:rgba(167,243,208,0.08)] pb-4 text-sm leading-7 text-[var(--color-text)] last:border-b-0 last:pb-0"
                    >
                      {note}
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-[color:rgba(167,243,208,0.08)] pt-5">
                  <div className="text-sm leading-7 text-[var(--color-muted)]">
                    Yuxarıda canlı tamamlanmış işlər, aşağı hissədə isə fərqli sektorlar üçün
                    hazırlanmış portfolio nümunələri göstərilir.
                  </div>
                </div>
              </div>
            </Reveal>

            {secondaryProjects.map((project, index) => (
              <Reveal key={project.slug} delay={0.08 + index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[color:rgba(167,243,208,0.08)] pt-6">
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Tamamlanmış işlər və portfolio nümunələri eyni sistemdə göstərilir ki həm real
              təhvil verilmiş saytlar, həm də fərqli istiqamətlər üzrə hazırladığım yanaşma
              aydın görünsün.
            </p>
            <Button href="/portfolio" variant="secondary">
              Bütün layihələrə bax
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
