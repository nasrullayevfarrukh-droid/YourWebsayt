import { Building2, CheckCircle2, Globe2, Sparkles } from "lucide-react";

import { AmbientTechBackdrop } from "@/components/ui/ambient-tech-backdrop";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { trustStripItems } from "@/data/home";

const sectorTags = [
  "Şirkətlər",
  "Restoranlar",
  "Klinikalar",
  "Əmlak ofisləri",
  "Rent a car",
  "Şəxsi brendlər"
] as const;

const stripIcons = [Sparkles, Building2, Globe2, CheckCircle2];

export function TrustStrip() {
  return (
    <section className="relative isolate pb-20 sm:pb-24">
      <AmbientTechBackdrop className="-top-10 bottom-2 opacity-90" />

      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.92),rgba(11,31,24,0.82))] px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-6 sm:py-6">
            <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.16),transparent_70%)]" />
            <div className="absolute inset-y-0 right-0 w-56 bg-[radial-gradient(circle,rgba(20,184,166,0.12),transparent_65%)] blur-3xl" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 border-b border-[color:rgba(167,243,208,0.08)] pb-4">
                <div className="rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.05)] px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Fokuslandığımız sahələr
                </div>
                {sectorTags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]"
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {trustStripItems.map((item, index) => {
                  const Icon = stripIcons[index % stripIcons.length]!;

                  return (
                    <div
                      key={item}
                      className="rounded-[24px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.76)] p-4 transition-colors duration-300 hover:border-[var(--color-accent-secondary)]/35"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.05)] text-[var(--color-accent)]">
                          <Icon className="size-4" />
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          0{index + 1}
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
