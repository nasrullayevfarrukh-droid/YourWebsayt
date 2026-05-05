import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
        YW
      </div>
      <div>
        <div className="font-display text-xl leading-none tracking-[-0.06em] text-[var(--color-text)]">
          YourWeb<span className="text-[var(--color-accent)]">sayt</span>
        </div>
        {!compact ? (
          <div className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
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
