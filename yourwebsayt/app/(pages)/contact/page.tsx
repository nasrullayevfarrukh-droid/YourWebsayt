import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactJourney } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/utils";

export const metadata: Metadata = createPageMetadata(
  "Əlaqə | YourWebsayt",
  "Layihənizi paylaşın və sizin biznesinizə uyğun premium sayt istiqamətini birlikdə quraq.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Əlaqə"
        title="Layihənizi paylaşın"
        description="Qısa məlumat yazın, uyğun sayt formatını və növbəti addımı birlikdə müəyyən edək."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Qısa konsultasiya
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Scope, format və ilkin büdcə istiqamətini tez bir şəkildə dəqiqləşdirək.
            </p>
          </div>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1.12fr_0.88fr]">
            <ContactForm />

            <div className="space-y-5">
              <Reveal>
                <div className="editorial-card rounded-[28px] p-5 sm:p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Birbaşa əlaqə
                  </div>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                    <p>{siteConfig.email}</p>
                    <p>{siteConfig.phone}</p>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="editorial-card rounded-[28px] p-5 sm:p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Ən rahat kanal
                  </div>
                  <div className="mt-5 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                    <p>WhatsApp: sürətli ilkin əlaqə üçün</p>
                    <p>Email: daha detallı müraciətlər üçün</p>
                    <p>Onlayn koordinasiya: Bakı və regionlar üzrə</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-2 sm:pb-32">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-6 sm:p-7">
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Növbəti mərhələ
                </div>
                <h2 className="mt-4 font-display text-[2rem] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3rem]">
                  Müraciətdən sonra proses aydın qalır
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  İlk danışıqda scope, uyğun format və ilkin istiqamət qısa şəkildə dəqiqləşdirilir.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Email yaz
                  </a>
                  <a
                    href={siteConfig.whatsappHref}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    WhatsApp ilə yaz
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {contactJourney.map((item, index) => (
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
    </>
  );
}
