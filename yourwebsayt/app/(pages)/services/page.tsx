import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ServiceIcon } from "@/components/ui/service-icon";
import { serviceModel } from "@/data/experience";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

export const metadata: Metadata = createPageMetadata(
  "Xidmətlər | YourWebsayt",
  "Korporativ sayt, landing page, e-commerce, redesign və ongoing support daxil olmaqla əsas xidmətlər.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Xidmətlər"
        title="Hər xidmət konkret biznes məqsədinə işləyir"
        description="Korporativ təqdimatdan lead toplama və redesign-ə qədər fərqli ehtiyaclar üçün uyğun sayt həlləri qurulur."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Fokus
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Daha premium görünüş, daha aydın təqdimat və daha rahat müraciət axını.
            </p>
          </div>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.03}>
                <div className="editorial-card rounded-[30px] p-5 sm:p-7">
                  <div className="grid gap-7 xl:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-3 text-[var(--color-accent)]">
                          <ServiceIcon icon={service.icon} className="size-5" />
                        </div>
                        <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                          {service.number}
                        </div>
                      </div>
                      <h2 className="mt-6 font-display text-[2rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[2.6rem]">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">{service.benefit}</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
                        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          Kimlər üçündür
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{service.audience}</p>
                      </div>

                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-5">
                        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          Biznes faydası
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                          {service.businessImpact}
                        </p>
                      </div>

                      <div className="rounded-[22px] border border-white/10 bg-black/20 p-5 md:col-span-2">
                        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          Daxildir
                        </div>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {service.includes.map((item) => (
                            <li key={item} className="text-sm leading-7 text-[var(--color-text)]">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-2">
                        <Button href="/contact" size="lg">
                          {service.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  İş modeli
                </div>
                <h2 className="mt-4 font-display text-[2rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3rem]">
                  Xidmət yox, idarə olunan istehsal prosesi
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  Audit, mesaj arxitekturası, dizayn və launch bir sistem kimi idarə olunur.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceModel.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.05}>
                  <div className="editorial-card h-full rounded-[26px] p-5 sm:p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-[1.45rem] font-display tracking-[-0.04em] text-[var(--color-text)]">
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

      <FinalCtaSection />
    </>
  );
}
