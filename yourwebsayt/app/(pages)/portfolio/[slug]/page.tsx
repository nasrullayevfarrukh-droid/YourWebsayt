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
      "Axtardığınız layihə tapılmadı.",
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

  const relatedProjects = portfolioProjects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${project.number} / ${project.category}`}
        title={project.title}
        description={project.excerpt}
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Canlı baxış
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Layihənin real ekran görüntüsü və qısa case study xülasəsi.
            </p>
            <div className="mt-5">
              <Button href={project.websiteUrl} target="_blank" rel="noreferrer" variant="secondary">
                Saytı aç
              </Button>
            </div>
          </div>
        }
      />

      <section className="py-10 sm:py-14">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-3 sm:rounded-[34px] sm:p-4">
              <div className="relative aspect-[1.42/1] overflow-hidden rounded-[24px] border border-white/8 bg-black/30 sm:rounded-[28px]">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} sayt görüntüsü`}
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 sm:py-18">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Problem</div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.challenge}</p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Yanaşma</div>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{project.approach}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">Nəticə</div>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                  {project.outcome.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-18">
        <Container>
          <div className="grid gap-6 xl:grid-cols-2">
            <Reveal>
              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Əsas bloklar</div>
                <div className="mt-5 space-y-4">
                  {project.deliverables.map((item) => (
                    <div key={item} className="rounded-[20px] border border-white/10 bg-black/20 px-4 py-4 text-sm text-[var(--color-text)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Seçilən həllər</div>
                <div className="mt-5 space-y-4">
                  {project.futureReady.map((item) => (
                    <div key={item} className="border-b border-white/8 pb-4 text-sm leading-7 text-[var(--color-text)] last:border-b-0 last:pb-0">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-18">
        <Container>
          <div className="mb-7">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Qeydlər</div>
            <h2 className="mt-4 font-display text-[2rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3rem]">
              Bu layihədən çıxan əsas məqamlar
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {project.insights.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="rounded-[26px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    Qeyd {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(140deg,rgba(20,184,166,0.12),rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.02))] p-6 sm:p-8">
            <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-center">
              <div>
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Növbəti addım
                </div>
                <h2 className="mt-4 font-display text-[2.1rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.2rem]">
                  Biznesiniz üçün oxşar premium sayt quraq
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  Struktur, copy və vizual dil biznesinizə uyğun şəkildə qurula bilər.
                </p>
              </div>
              <Button href="/contact" size="lg">
                Layihəni müzakirə et
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="mb-7">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Digər layihələr</div>
            <h2 className="mt-4 font-display text-[2rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3rem]">
              Oxşar işlər
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
