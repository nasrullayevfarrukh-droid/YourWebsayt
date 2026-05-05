import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={cn(
        "editorial-card group block rounded-[32px] p-4 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
        featured ? "lg:p-5" : ""
      )}
    >
      <div className="relative overflow-hidden rounded-[26px] border border-[color:rgba(167,243,208,0.1)] bg-[rgba(6,23,18,0.8)]">
        <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.38))]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.16),transparent_54%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.14),transparent_64%)] opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.72)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-text)] backdrop-blur-xl">
          {project.category}
        </div>
        <div className="absolute bottom-4 left-4 z-10 rounded-full border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.72)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] backdrop-blur-xl">
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

      <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-6">
        <div>
          <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Layihə {project.number}
          </div>
          <h3
            className={cn(
              "font-display tracking-[-0.04em] text-[var(--color-text)]",
              featured ? "text-3xl sm:text-4xl" : "text-2xl"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
            {project.result}
          </p>
        </div>
        <div className="mt-1 rounded-full border border-[color:var(--color-border)] p-3 text-[var(--color-text)] transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-accent-ink)]">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
