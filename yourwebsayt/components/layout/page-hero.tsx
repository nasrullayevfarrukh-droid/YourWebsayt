import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-32">
      <div className="absolute inset-x-0 top-0 h-[24rem] bg-[radial-gradient(circle_at_top,rgba(104,168,255,0.16),transparent_56%)] sm:h-[34rem]" />
      <Container className="relative">
        <div className="grid gap-7 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <Reveal>
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)] sm:mb-5 sm:text-[11px] sm:tracking-[0.32em]">
              {eyebrow}
            </div>
            <h1 className="max-w-4xl text-balance font-display text-[2.4rem] leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.7rem] lg:text-7xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:mt-6 sm:text-lg sm:leading-8">
              {description}
            </p>
          </Reveal>
          {aside ? <Reveal delay={0.08}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
