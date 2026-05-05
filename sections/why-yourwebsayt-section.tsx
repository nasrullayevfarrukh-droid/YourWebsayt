import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyChooseUs } from "@/data/site";

export function WhyYourWebsaytSection() {
  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Niyə mən"
        title="YourWebsayt generic agentlik kimi yox, biznesə fokuslanan şəxsi studio kimi işləyir."
        description="Burada məqsəd sadəcə gözəl sayt düzəltmək deyil. Məqsəd biznesinizi daha ciddi göstərən, mobil ekranda rahat işləyən və əlaqə toplamağa real təsir edən sistem qurmaqdır."
      />

      <Container>
        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-7 sm:p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Personal studio yanaşması
              </div>
              <h3 className="mt-6 font-display text-3xl tracking-[-0.05em] text-[var(--color-text)] sm:text-4xl">
                Birbaşa kommunikasiya, daha təmiz qərarlar və daha az şablon hissi.
              </h3>
              <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">
                Layihə boyunca araya əlavə qatlar girmir. Bu həm copy, həm dizayn, həm də inkişaf istiqamətində daha fokuslu və daha premium nəticə yaradır.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:bg-white/[0.04]">
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
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
