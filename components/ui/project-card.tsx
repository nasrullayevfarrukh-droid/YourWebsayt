import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

const statusStyles = {
  "Hazır və təhvil verilib":
    "border-[rgba(0,230,118,0.22)] bg-[rgba(0,230,118,0.14)] text-[var(--color-highlight)]",
  "Portfolio nümunəsi":
    "border-[rgba(20,184,166,0.22)] bg-[rgba(20,184,166,0.12)] text-[var(--color-text)]"
} as const;

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "editorial-card group rounded-[32px] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
        featured ? "lg:p-5" : ""
      )}
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        <div className="relative overflow-hidden rounded-[26px] border border-[color:rgba(167,243,208,0.1)] bg-[rgba(6,23,18,0.8)]">
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.38))]" />
          <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.16),transparent_54%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.14),transparent_64%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.78)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-text)] backdrop-blur-xl">
            {project.category}
          </div>

          <div
            className={cn(
              "absolute right-4 top-4 z-10 inline-flex rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.24em] backdrop-blur-xl",
              statusStyles[project.status]
            )}
          >
            {project.status}
          </div>

          <div className="absolute bottom-4 left-4 z-10 rounded-full border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.78)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)] backdrop-blur-xl">
            {project.clientType}
          </div>

          <Image
            src={project.heroImage}
            alt={project.title}
            width={1200}
            height={900}
            className={cn(
              "w-full transition-transform duration-700 group-hover:scale-[1.045]",
              featured ? "aspect-[1.26/1] object-cover" : "aspect-[1.18/1] object-cover"
            )}
          />
        </div>
      </Link>

      <div className="px-1 pb-1 pt-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
          <span>Layihə {project.number}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-accent-secondary)]" />
          <span>{project.status}</span>
        </div>

        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <h3
            className={cn(
              "font-display tracking-[-0.04em] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-highlight)]",
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            )}
          >
            {project.title}
          </h3>
        </Link>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">{project.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-[var(--color-accent-ink)] shadow-[0_16px_38px_rgba(0,230,118,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(4,17,13,0.06),0_22px_52px_rgba(0,230,118,0.28)]"
          >
            <span>Sayta bax</span>
            <ArrowUpRight className="size-4" />
          </a>

          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-highlight)] transition-colors duration-300 hover:text-[var(--color-accent)]"
          >
            <span>Ətraflı bax</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
