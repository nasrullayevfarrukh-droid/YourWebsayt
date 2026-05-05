import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactJourney } from "@/data/experience";
import { createPageMetadata } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = createPageMetadata(
  "Əlaqə | YourWebsayt",
  "YourWebsayt ilə əlaqə saxlayın, layihənizi və premium veb sayt ehtiyacınızı bizimlə paylaşın.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Əlaqə"
        title="Layihənizi paylaşın, biznesinizə uyğun premium sayt istiqamətini birlikdə quraq."
        description="Formu doldurun və ya birbaşa əlaqə saxlayın. Məqsədimiz ilk danışıqdan etibarən düzgün struktur, real scope və doğru qiymət istiqaməti yaratmaqdır."
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Konsultasiya
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Brend səviyyənizə uyğun sayt formatını, scope-u və ən doğru paket yolunu birlikdə müəyyənləşdirək.
            </p>
          </div>
        }
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            <ContactForm />

            <div className="space-y-6">
              <Reveal>
                <div className="editorial-card rounded-[30px] p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    Birbaşa əlaqə
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-[var(--color-text)]">
                    <p>{siteConfig.email}</p>
                    <p>{siteConfig.phone}</p>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="editorial-card rounded-[30px] p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    İş formatı
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-7 text-[var(--color-text)]">
                    <p>Onlayn konsultasiya və layihə görüşləri</p>
                    <p>Bakı və regionlar üzrə xidmət</p>
                    <p>WhatsApp və email üzərindən sürətli koordinasiya</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="editorial-card rounded-[30px] overflow-hidden">
                  <div className="h-52 bg-[radial-gradient(circle_at_30%_30%,rgba(104,168,255,0.2),transparent_30%),linear-gradient(180deg,#0b0f16,#08101a)] p-6">
                    <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                      Lokasiya hissi
                    </div>
                    <div className="mt-5 grid h-[calc(100%-2rem)] grid-cols-3 gap-3">
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.05]" />
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.03]" />
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.06]" />
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.03]" />
                      <div className="rounded-[18px] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/12" />
                      <div className="rounded-[18px] border border-white/10 bg-white/[0.04]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm leading-7 text-[var(--color-muted)]">
                      Layihələr məsafədən idarə olunur, amma kommunikasiya yaxın və aydın saxlanılır.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 pt-4 sm:pb-32">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="editorial-card rounded-[32px] p-7 sm:p-8">
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Növbəti mərhələ
                </div>
                <h2 className="mt-5 font-display text-4xl tracking-[-0.05em] text-[var(--color-text)]">
                  Sorğu göndərdikdən sonra proses aydın və peşəkar qalır.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  Əgər layihə ciddidirsə, ilk danışıqdan etibarən scope, paket və yaradıcı istiqamət aydınlaşdırılır.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex h-12 items-center rounded-full border border-white/10 px-5 text-sm text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Email yaz
                  </a>
                  <a
                    href="https://wa.me/994505552025"
                    className="inline-flex h-12 items-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    WhatsApp ilə yaz
                  </a>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {contactJourney.map((item, index) => (
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
    </>
  );
}
