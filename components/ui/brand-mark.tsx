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
      <div className={cn("relative shrink-0", compact ? "h-9 w-9" : "h-10 w-10")}>
        <Image
          src="/images/brand/yourwebsayt-neon-symbol-clean.png"
          alt=""
          fill
          sizes={compact ? "36px" : "40px"}
          className="object-contain object-center mix-blend-screen brightness-[1.06] saturate-[1.14] drop-shadow-[0_0_18px_rgba(0,230,118,0.34)]"
          priority
        />
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
