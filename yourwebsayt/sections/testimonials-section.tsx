import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

const [featuredTestimonial, ...supportingTestimonials] = testimonials.slice(0, 3);
const socialProofPoints = ["Hüquq", "Klinika", "Restoran", "Korporativ xidmət"];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Sosial sübut"
        title="Rəylərdə ən çox vurğulanan mövzu premium görünüşlə yanaşı, aydın və rahat prosesdir."
        description="Yaxşı əməkdaşlıq yalnız nəticə ilə yox, bütün proses boyu yaratdığı rahatlıqla yadda qalır."
      />
      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
          <Reveal>
            <div className="rounded-[36px] border border-[var(--color-accent)]/20 bg-[linear-gradient(180deg,rgba(104,168,255,0.1),rgba(255,255,255,0.03))] p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                  Seçilmiş rəy
                </div>
                {socialProofPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[var(--color-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-2xl leading-10 text-[var(--color-text)] sm:text-[2rem] sm:leading-[2.8rem]">
                “{featuredTestimonial.quote}”
              </p>
              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="text-lg font-medium text-[var(--color-text)]">
                  {featuredTestimonial.name}
                </div>
                <div className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {featuredTestimonial.role}, {featuredTestimonial.company}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {supportingTestimonials.map((item, index) => (
              <Reveal key={item.name + item.company} delay={index * 0.05}>
                <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 transition-colors duration-300 hover:border-[var(--color-accent)]/25">
                  <p className="text-lg leading-8 text-[var(--color-text)]">“{item.quote}”</p>
                  <div className="mt-7 border-t border-white/8 pt-5">
                    <div className="font-medium text-[var(--color-text)]">{item.name}</div>
                    <div className="mt-1 text-sm text-[var(--color-muted)]">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
