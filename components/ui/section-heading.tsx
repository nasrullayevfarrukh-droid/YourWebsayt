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
    <Container className={cn("mb-10 sm:mb-12", className)}>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <Reveal className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-3 inline-flex rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="max-w-4xl text-balance font-display text-3xl leading-[0.95] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.5rem]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
              {description}
            </p>
          ) : null}
        </Reveal>
        {action ? <Reveal delay={0.08}>{action}</Reveal> : null}
      </div>
    </Container>
  );
}
