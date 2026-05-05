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
    <section className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.14),transparent_58%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <Reveal>
            <div className="mb-5 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
              {eyebrow}
            </div>
            <h1 className="max-w-4xl text-balance font-display text-4xl leading-[0.94] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              {description}
            </p>
          </Reveal>
          {aside ? <Reveal delay={0.08}>{aside}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
