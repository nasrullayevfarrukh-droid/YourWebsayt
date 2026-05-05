import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectPreview } from "@/components/ui/project-preview";
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
      <div className="relative overflow-hidden rounded-[26px] border border-white/8 bg-black/40">
        <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-text)] backdrop-blur-xl">
          {project.category}
        </div>
        <div className="absolute bottom-4 left-4 z-10 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] backdrop-blur-xl">
          {project.previewLabel}
        </div>
        <ProjectPreview
          tone={project.previewTone}
          label={project.clientType}
          accent={project.previewAccent}
          featured={featured}
        />
      </div>

      <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-6">
        <div>
          <div className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Placeholder {project.number}
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
        <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text)] transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[#04111f]">
          <span>Ətraflı bax</span>
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
