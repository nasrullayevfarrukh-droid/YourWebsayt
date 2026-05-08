import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioProjects } from "@/data/portfolio";

const selectedProjects = portfolioProjects.slice(0, 6);

export function FeaturedProjectsSection() {
  return (
    <section className="relative isolate py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_78%_0%,rgba(20,184,166,0.12),transparent_58%)]" />
      <DecorativeCubeField variant="showcase" className="-top-6 -bottom-10 opacity-90" />

      <SectionHeading
        className="relative"
        eyebrow="Seçilmiş işlər"
        title="Real layihələr və demo işlər eyni premium standartda təqdim olunur."
        description="Tubel İnşaat, Rentacarss.az və digər real işlərdən tutmuş sahə yönümlü demo saytlarına qədər bütün portfoliomuz daha ciddi, daha texnoloji və daha inandırıcı təqdimat üzərində qurulub."
        action={
          <Button href="/portfolio" variant="secondary">
            Bütün layihələr
          </Button>
        }
      />

      <Container className="relative">
        <Reveal>
          <div className="mb-8 rounded-[32px] border border-[var(--color-accent-secondary)]/24 bg-[linear-gradient(180deg,rgba(0,230,118,0.06),rgba(20,184,166,0.08),rgba(11,31,24,0.9))] px-6 py-6 sm:px-7">
            <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Portfolio system
                </div>
                <h3 className="mt-3 text-3xl font-display tracking-[-0.04em] text-[var(--color-text)] sm:text-[2.4rem]">
                  Hər kart bir layihənin vizual tonunu, sahəsini və nəticə hissini göstərir.
                </h3>
              </div>
              <p className="text-sm leading-7 text-[var(--color-muted)]">
                Homepage-də bütün əsas real layihələri saxlayırıq ki istifadəçi həm texniki keyfiyyəti,
                həm də müxtəlif biznes modellərinə necə uyğunlaşdığımızı ilk scroll-larda görsün.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selectedProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.04}
              className={index === 0 ? "md:col-span-2 xl:col-span-2" : ""}
            >
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-4 rounded-[28px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(11,31,24,0.76)] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
              Bu işlərin hər biri fərqli sahəyə xidmət edir, amma hamısında eyni prinsip qalır:
              premium görünüş, axıcı struktur və qərarı asanlaşdıran CTA yerləşimi.
            </p>
            <Button href="/contact" size="lg">
              Mənim layihəmi də quraq
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
