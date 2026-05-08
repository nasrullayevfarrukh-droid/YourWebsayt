import Link from "next/link";

import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

export function HomeContactSection() {
  const instagram = siteConfig.socialLinks.find((item) => item.label === "Instagram");

  return (
    <section className="pb-20 pt-4 sm:pb-28">
      <SectionHeading
        eyebrow="Əlaqə"
        title="Layihənizi qısa yazın"
        description="Forma yazın və ya birbaşa WhatsApp-dan əlaqə saxlayın."
      />

      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Birbaşa əlaqə
                </div>
                <div className="mt-5 space-y-3">
                  <Link
                    href={siteConfig.whatsappHref}
                    className="block rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)]/45 hover:bg-white/[0.05]"
                  >
                    WhatsApp: {siteConfig.phone}
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="block rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)]/45 hover:bg-white/[0.05]"
                  >
                    {siteConfig.email}
                  </Link>
                  {instagram ? (
                    <Link
                      href={instagram.href}
                      className="block rounded-[20px] border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-[var(--color-text)] transition-all duration-300 hover:border-[var(--color-accent)]/45 hover:bg-white/[0.05]"
                    >
                      {instagram.label}
                    </Link>
                  ) : null}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Nə üçün yazmaq olar
                </div>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                  <p>Yeni sayt sifarişi</p>
                  <p>Mövcud saytın redesign olunması</p>
                  <p>Mobil uyğun və satış yönümlü struktur</p>
                  <p>Aylıq dəstək və idarəetmə</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
