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
  "Korporativ sayt, landing page, e-commerce, redesign, SEO və ongoing support daxil olmaqla bütün YourWebsayt xidmətləri.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Xidmətlər"
        title="Hər xidmət bir biznes məqsədini həll etmək üçün hazırlanır."
        description="Korporativ təqdimatdan lead toplama, e-commerce satışından premium şəxsi brend mövqelənməsinə qədər fərqli ehtiyaclar üçün xüsusi sayt həlləri qururuq."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Nəticə fokus
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Daha çox etibar, daha premium görünüş, daha aydın xidmət təqdimatı və daha yaxşı müraciət axını.
            </p>
          </div>
        }
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.03}>
                <div className="editorial-card rounded-[32px] p-6 sm:p-8">
                  <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-3 text-[var(--color-accent)]">
                          <ServiceIcon icon={service.icon} className="size-5" />
                        </div>
                        <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                          {service.number}
                        </div>
                      </div>
                      <h2 className="mt-8 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{service.description}</p>
                      <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{service.benefit}</p>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          Kimlər üçündür
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{service.audience}</p>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                        <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                          Biznes faydası
                        </div>
                        <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                          {service.businessImpact}
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-black/20 p-5 md:col-span-2">
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

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="editorial-card rounded-[32px] p-7 sm:p-8">
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Engagement model
                </div>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
                  Xidmət satmırıq, idarə olunan premium istehsal prosesi təqdim edirik.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  Müştərinin görmədiyi hissə də vacibdir: audit, hierarchy, UI discipline və launch sonrası refinement.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceModel.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.05}>
                  <div className="editorial-card h-full rounded-[28px] p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      {item.step}
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

      <FinalCtaSection />
    </>
  );
}
