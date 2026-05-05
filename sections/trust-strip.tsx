import { Container } from "@/components/ui/container";
import { aboutStats, trustPoints } from "@/data/site";

const homeStats = aboutStats.slice(0, 3);

export function TrustStrip() {
  return (
    <section className="border-y border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.52)] py-7 sm:py-8">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Etibar qatını gücləndirən baza
            </div>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text)]">
              Biznes sahibi üçün sayt sadəcə dizayn deyil. O, ilk təəssürat, xidmət təqdimatı və
              müraciət qərarının mərkəzidir.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]"
                >
                  {point.label}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {homeStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] px-5 py-5"
              >
                <div className="font-display text-3xl tracking-[-0.05em] text-[var(--color-text)]">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
