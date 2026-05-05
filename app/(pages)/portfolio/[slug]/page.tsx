import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { getProjectBySlug, portfolioProjects } from "@/data/portfolio";
import { createPageMetadata } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createPageMetadata(
      "Layihə tapılmadı | YourWebsayt",
      "Axtardığınız portfolio layihəsi tapılmadı.",
      `/portfolio/${slug}`
    );
  }

  return createPageMetadata(
    `${project.title} | YourWebsayt`,
    project.excerpt,
    `/portfolio/${project.slug}`
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const previousProject =
    portfolioProjects[(projectIndex - 1 + portfolioProjects.length) % portfolioProjects.length];
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];
  const relatedProjects = portfolioProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${project.number} / ${project.category}`}
        title={project.title}
        description={project.excerpt}
        aside={
          <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Müştəri tipi
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.clientType}</p>
            <div className="mt-5 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Nəticə
            </div>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{project.result}</p>
          </div>
        }
      />

      <section className="py-12 sm:py-16">
        <Container>
          <Reveal>
            <div className="editorial-card overflow-hidden rounded-[34px] border border-[color:var(--color-border)] p-4 sm:p-5">
              <Image
                src={project.heroImage}
                alt={project.title}
                width={1600}
                height={1000}
                className="w-full rounded-[28px] border border-[color:rgba(167,243,208,0.12)]"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-6 sm:py-10">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <Reveal>
              <div className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Client type
                </div>
                <div className="mt-3 text-lg text-[var(--color-text)]">{project.clientType}</div>
              </div>
            </Reveal>
            <Reveal delay={0.04}>
              <div className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Category
                </div>
                <div className="mt-3 text-lg text-[var(--color-text)]">{project.category}</div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Site scope
                </div>
                <div className="mt-3 text-lg text-[var(--color-text)]">
                  {project.siteStructure.length} əsas bölmə
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] p-5">
                <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Core focus
                </div>
                <div className="mt-3 text-lg text-[var(--color-text)]">{project.outcome[0]}</div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            <Reveal>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Problem
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Həll
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.solution}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Outcome
                </div>
                <div className="mt-4 space-y-3 text-sm text-[var(--color-text)]">
                  {project.outcome.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Sayt strukturu
                </div>
                <div className="mt-5 space-y-4">
                  {project.siteStructure.map((item, index) => (
                    <div key={item} className="flex items-center gap-4 text-sm text-[var(--color-text)]">
                      <span className="text-[var(--color-accent)]">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-6">
              <Reveal delay={0.08}>
                <div className="editorial-card rounded-[30px] p-7">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Dizayn istiqaməti
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                    {project.designDirection}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="editorial-card rounded-[30px] p-7">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Xüsusiyyətlər
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-[20px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.82)] px-4 py-4 text-sm text-[var(--color-text)]"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-3">
            <Reveal>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Mobil uyğunluq
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.mobileNote}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Performans
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
                  {project.performanceNote}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="editorial-card rounded-[28px] p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  SEO qeydləri
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.seoNote}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-20">
        <Container>
          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">
              Qalereya
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
              Layihənin vizual təqdimatı
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {project.gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="editorial-card rounded-[30px] p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="w-full rounded-[24px] border border-[color:rgba(167,243,208,0.12)]"
                  />
                  <div className="px-1 pb-1 pt-5">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      {item.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{item.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="editorial-card rounded-[34px] p-7 sm:p-9">
            <div className="grid gap-8 xl:grid-cols-[1fr_auto] xl:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Layihəyə başlayaq
                </div>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                  Brendiniz üçün buna bənzər premium sayt istəyirsiniz?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  Biznes məqsədinizi paylaşın, doğru struktur və vizual istiqaməti birlikdə quraq.
                </p>
              </div>
              <Button href="/contact" size="lg">
                Layihə sorğusu göndər
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="mb-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Previous project
                </div>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">
                  {previousProject.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {previousProject.excerpt}
                </p>
                <div className="mt-5">
                  <Button href={`/portfolio/${previousProject.slug}`} variant="secondary">
                    Öncəki case
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="editorial-card rounded-[30px] p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Next project
                </div>
                <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">
                  {nextProject.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {nextProject.excerpt}
                </p>
                <div className="mt-5">
                  <Button href={`/portfolio/${nextProject.slug}`} variant="secondary">
                    Növbəti case
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mb-8">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">
              Oxşar layihələr
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
              Digər seçilmiş işlər
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {relatedProjects.map((item) => (
              <Reveal key={item.slug}>
                <ProjectCard project={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
