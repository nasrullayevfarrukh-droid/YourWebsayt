import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className
}: SectionHeadingProps) {
  return (
    <Container className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl min-w-0">
          {eyebrow ? (
            <div className="mb-3.5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-[var(--color-muted)] sm:text-[11px] sm:tracking-[0.32em]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="max-w-4xl text-balance font-display text-[2rem] leading-[0.98] tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.75rem] lg:text-[3.6rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-[38rem] text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
              {description}
            </p>
          ) : null}
        </Reveal>
        {action ? <Reveal delay={0.08} className="self-start">{action}</Reveal> : null}
      </div>
    </Container>
  );
}
