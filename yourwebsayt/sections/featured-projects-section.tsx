import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/portfolio";

const heroProject = portfolioProjects[0]!;
const secondaryProjects = portfolioProjects.slice(1);

export function FeaturedProjectsSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <DecorativeCubeField variant="showcase" className="opacity-88" />
      <SectionHeading
        eyebrow="Portfolio"
        title="Seçilmiş işlər"
        description="Fərqli sahələr üçün hazırladığım real sayt nümunələri."
        action={
          <Button href="/portfolio" variant="secondary">
            Bütün layihələr
          </Button>
        }
      />

      <Container className="relative">
        <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr] xl:items-start">
          <Reveal>
            <ProjectCard project={heroProject} featured />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-1">
            {secondaryProjects.slice(0, 2).map((project, index) => (
              <Reveal key={project.slug} delay={0.06 + index * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secondaryProjects.slice(2).map((project, index) => (
            <Reveal key={project.slug} delay={0.12 + index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
