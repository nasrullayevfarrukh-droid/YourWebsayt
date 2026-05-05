import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/portfolio";

const heroProject = portfolioProjects[0]!;
const secondaryProjects = portfolioProjects.slice(1);

const foundationNotes = [
  "Kartlar placeholder kimi qurulub və sonradan real screenshot ilə asan dəyişəcək.",
  "Slug və detail page strukturu hazırdır, real case study-lər bu skelet üzərinə yerləşdiriləcək.",
  "Bu mərhələdə məqsəd bitmiş portfolio yox, ciddi premium təqdimat foundation-u qurmaqdır."
];

export function FeaturedProjectsSection() {
  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Seçilmiş işlər"
        title="Portfolio foundation-u artıq hazırdır. İndi burada premium placeholder showcase var, sonra real layihələr əlavə olunacaq."
        description="Aşağıdakı kartlar sonradan real işlər, nəticələr və ekran görüntüləri ilə əvəzlənmək üçün qurulub. Bu mərhələdə əsas məqsəd ciddi studio hissini yaratmaqdır."
        action={
          <Button href="/portfolio" variant="secondary">
            Portfolio bölməsi
          </Button>
        }
      />

      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <Reveal>
            <ProjectCard project={heroProject} featured />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Foundation qeydi
                </div>
                <div className="mt-6 space-y-4">
                  {foundationNotes.map((note) => (
                    <div
                      key={note}
                      className="border-b border-white/8 pb-4 text-sm leading-7 text-[var(--color-text)] last:border-b-0 last:pb-0"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {secondaryProjects.slice(0, 2).map((project, index) => (
              <Reveal key={project.slug} delay={0.08 + index * 0.06}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secondaryProjects.slice(2).map((project, index) => (
            <Reveal key={project.slug} delay={0.12 + index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
