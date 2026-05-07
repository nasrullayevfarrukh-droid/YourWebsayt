import Image from "next/image";
import Link from "next/link";

import { brand } from "@/data/brand";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  const brandLead = brand.siteName.slice(0, -4);
  const brandTail = brand.siteName.slice(-4);

  const content = (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center",
          compact ? "h-9 w-9" : "h-10 w-10"
        )}
      >
        <Image
          src={brand.logoPath}
          alt={brand.siteName}
          width={1371}
          height={1148}
          className={cn("object-contain", compact ? "h-8 w-8" : "h-9 w-9")}
          sizes={compact ? "32px" : "36px"}
        />
      </div>

      <div>
        <div
          className={cn(
            "font-display leading-none tracking-[-0.055em]",
            compact ? "text-[1.06rem] sm:text-[1.2rem]" : "text-xl"
          )}
        >
          <span className="text-[var(--color-text)]">{brandLead}</span>
          <span className="text-[rgba(92,196,132,0.96)]">
            {brandTail}
          </span>
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
