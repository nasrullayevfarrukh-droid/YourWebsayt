import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  const content = (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:h-10 sm:w-10 sm:text-[11px] sm:tracking-[0.28em]">
        YW
      </div>
      <div>
        <div className="font-display text-lg leading-none tracking-[-0.05em] text-[var(--color-text)] sm:text-xl sm:tracking-[-0.06em]">
          YourWeb<span className="text-[var(--color-accent)]">sayt</span>
        </div>
        {!compact ? (
          <div className="mt-1 hidden text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)] sm:block">
            Premium personal studio
          </div>
        ) : null}
      </div>
    </div>
  );

  return (
    <Link href="/" aria-label="YourWebsayt ana səhifə" className="inline-flex">
      {content}
    </Link>
  );
}
