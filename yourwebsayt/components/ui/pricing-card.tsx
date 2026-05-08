import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/lib/types";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  featured?: boolean;
  compact?: boolean;
};

export function PricingCard({ plan, featured = false, compact = false }: PricingCardProps) {
  const includedItems = compact ? plan.included.slice(0, 5) : plan.included;

  return (
    <div
      className={cn(
        "flex h-full flex-col rounded-[32px] border p-7 sm:p-8",
        featured
          ? "border-[var(--color-accent)]/40 bg-[linear-gradient(180deg,rgba(104,168,255,0.12),rgba(255,255,255,0.03))] shadow-[0_20px_90px_rgba(0,0,0,0.25)]"
          : "border-white/10 bg-white/[0.03]"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">
            Paket
          </div>
          <h3 className="mt-3 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">
            {plan.name}
          </h3>
        </div>
        {plan.highlight ? (
          <div className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#04111f]">
            {plan.highlight}
          </div>
        ) : null}
      </div>

      <p className="mt-7 text-4xl font-display tracking-[-0.05em] text-[var(--color-text)]">
        {plan.priceFrom}
      </p>
      <p className="mt-3 text-base leading-7 text-[var(--color-text)]">{plan.subtitle}</p>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{plan.description}</p>

      <div className="mt-6 rounded-[22px] border border-white/10 bg-black/20 p-4">
        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Uyğundur
        </div>
        <p className="mt-2 text-sm leading-7 text-[var(--color-text)]">{plan.suitedFor}</p>
      </div>

      <div className="mt-7 space-y-3 text-sm text-[var(--color-text)]">
        {includedItems.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span className="mt-0.5 rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 p-1 text-[var(--color-accent)]">
              <Check className="size-3" />
            </span>
            <span className="leading-7">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-1">
        <Button href="/contact" variant={featured ? "primary" : "secondary"} size="lg">
          {featured ? "Layihəni müzakirə edək" : plan.cta}
        </Button>
      </div>
    </div>
  );
}
