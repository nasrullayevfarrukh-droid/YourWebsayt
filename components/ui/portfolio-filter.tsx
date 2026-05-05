"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/lib/types";

type PortfolioFilterProps = {
  projects: Project[];
};

export function PortfolioFilter({ projects }: PortfolioFilterProps) {
  const filters = useMemo(
    () => ["Hamısı", ...new Set(projects.map((project) => project.category))],
    [projects]
  );
  const [active, setActive] = useState<(typeof filters)[number]>("Hamısı");

  const filteredProjects =
    active === "Hamısı"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
              active === filter
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-black"
                : "border-white/10 bg-white/[0.03] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
