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
        "editorial-card group block rounded-[30px] p-3.5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/35 hover:shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-4",
        featured ? "lg:p-5" : ""
      )}
    >
      <div className="relative overflow-hidden rounded-[24px] border border-white/8 bg-black/40">
        <div className={cn("relative", featured ? "aspect-[1.24/1]" : "aspect-[1.28/1]")}>
          <Image
            src={project.imagePath}
            alt={`${project.title} ekran görüntüsü`}
            fill
            sizes={featured ? "(min-width: 1280px) 52vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,13,0.04),rgba(4,17,13,0.18)_45%,rgba(4,17,13,0.88)_100%)]" />
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/12 bg-[rgba(4,17,13,0.55)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-text)] backdrop-blur-xl">
          {project.category}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full border border-[var(--color-accent)]/20 bg-[rgba(4,17,13,0.62)] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)] backdrop-blur-xl">
          Canlı layihə
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-1 pb-1 pt-5 sm:pt-6">
        <div className="min-w-0">
          <div className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
            {project.clientType}
          </div>
          <h3
            className={cn(
              "font-display tracking-[-0.04em] text-[var(--color-text)]",
              featured ? "text-[1.9rem] sm:text-[2.3rem]" : "text-[1.6rem] sm:text-[1.9rem]"
            )}
          >
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
            {featured ? project.excerpt : project.result}
          </p>
        </div>

        <div className="mt-1 hidden items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text)] transition-all duration-500 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-[#04110f] sm:inline-flex">
          <span>Bax</span>
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    </Link>
  );
}
