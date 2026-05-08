import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";

const ctaPoints = [
  "Strategiya, dizayn və inkişaf bir komandada",
  "Biznesinizə uyğun fərdiləşdirilmiş həll",
  "Premium görünüş və aydın proses"
];

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-6 sm:pb-24 sm:pt-8">
      <DecorativeCubeField variant="left" className="opacity-72" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-[var(--color-accent-secondary)]/28 bg-[linear-gradient(140deg,rgba(0,230,118,0.08),rgba(20,184,166,0.12)_44%,rgba(11,31,24,0.94))] px-6 py-8 sm:px-9 sm:py-12">
            <div className="absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle,rgba(0,230,118,0.18),transparent_72%)] blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Son addım
              </div>
              <h2 className="mt-5 text-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
                Hazırkı saytınız səviyyənizi göstərmirsə, indi daha doğru rəqəmsal təqdimata keçin.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                Layihənizi bizimlə planlaşdırın. Strategiya, dizayn və inkişaf bir yerdə, bir studiya standartında idarə olunsun.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg">
                  Layihənizi bizimlə planlaşdırın
                </Button>
                <div className="text-sm text-[var(--color-muted)]">
                  İlk ideyanı paylaşın, qalanını peşəkar şəkildə quraq.
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {ctaPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-[22px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.62)] px-4 py-4 text-sm leading-7 text-[var(--color-text)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
