import Image from "next/image";
import Link from "next/link";

import { brand } from "@/data/brand";
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
          "flex shrink-0 items-center justify-center rounded-2xl border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(0,230,118,0.16),rgba(11,31,24,0.96))] text-[var(--color-text)] shadow-[0_0_0_1px_rgba(167,243,208,0.04),0_18px_40px_rgba(0,230,118,0.12)]",
          compact ? "h-9 w-9 text-[11px]" : "h-10 w-10 text-xs"
        )}
      >
        <Image
          src={brand.logoPath}
          alt={brand.siteName}
          width={1371}
          height={1148}
          className={cn("object-contain", compact ? "h-7 w-7" : "h-8 w-8")}
          sizes={compact ? "28px" : "32px"}
        />
      </div>

      <div>
        <div className="font-display text-xl leading-none tracking-[-0.06em] text-[var(--color-text)]">
          {brand.siteName}
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
    <Link href="/" aria-label={`${brand.siteName} ana sehife`} className="inline-flex">
      {content}
    </Link>
  );
}
