import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/site";

export function WhyYourWebsaytSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <DecorativeCubeField variant="split" className="opacity-78" />
      <SectionHeading
        eyebrow="Niyə YourWebsayt"
        title="Qısa, aydın və biznesə uyğun yanaşma"
        description="Məqsəd sadəcə gözəl sayt yox, daha ciddi təqdimat və daha rahat müraciət axını qurmaqdır."
      />

      <Container className="relative">
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-7">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Studio yanaşması
              </div>
              <h3 className="mt-5 font-display text-[1.9rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.4rem]">
                Birbaşa kommunikasiya və daha təmiz qərarlar
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                Layihə boyunca copy, dizayn və inkişaf istiqaməti daha fokuslu şəkildə idarə olunur.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.03] p-5 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.04] sm:p-6">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[1.4rem] font-display tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.65rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
