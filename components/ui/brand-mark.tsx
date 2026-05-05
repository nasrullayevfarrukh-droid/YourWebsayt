import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  const content = (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-[16px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.78)] shadow-[0_16px_34px_rgba(0,0,0,0.22)]",
          compact ? "h-11 w-11" : "h-12 w-12"
        )}
      >
        <Image
          src="/images/brand/yourwebsayt-neon-mark.png"
          alt=""
          fill
          sizes={compact ? "44px" : "48px"}
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_42%,rgba(4,17,13,0.18)_100%)]" />
      </div>

      <div>
        <div className="font-display text-xl leading-none tracking-[-0.06em] text-[var(--color-text)]">
          YourWeb<span className="text-[var(--color-accent)]">sayt</span>
        </div>
        {!compact ? (
          <div className="mt-1 text-[10px] uppercase tracking-[0.34em] text-[var(--color-muted)]">
            Premium veb studio
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
