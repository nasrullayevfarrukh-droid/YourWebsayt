import {
  BadgeCheck,
  Building2,
  CarFront,
  Globe2,
  Newspaper,
  Paintbrush2,
  ShieldCheck,
  ShoppingBag,
  Store,
  UserSquare2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { studioServices } from "@/data/home";

const serviceIcons = [
  Building2,
  Globe2,
  CarFront,
  Store,
  BadgeCheck,
  Newspaper,
  ShoppingBag,
  UserSquare2,
  Paintbrush2,
  ShieldCheck
];

export function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.12),transparent_68%)]" />
      <DecorativeCubeField variant="left" className="opacity-85" />

      <SectionHeading
        eyebrow="Xidmətlər / həllər"
        title="Hazır şablon yox, sahəyə və satış modelinə uyğun premium veb sistemlər qururuq."
        description="CodeGent tipli flow-dan ilham alan, amma tam YourWebsayt tonunda xidmət kartları: hər istiqamət üçün düzgün struktur, düzgün vizual hiss və düzgün CTA axını."
        action={
          <Button href="/services" variant="secondary">
            Bütün xidmətlər
          </Button>
        }
      />

      <Container className="relative">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {studioServices.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length]!;
            const isFeatured = index === 0 || index === 6;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <div
                  className={[
                    "group relative overflow-hidden rounded-[32px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(11,31,24,0.94),rgba(11,31,24,0.78))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent-secondary)]/35 hover:shadow-[0_34px_100px_rgba(0,0,0,0.28)]",
                    isFeatured ? "xl:col-span-1" : ""
                  ].join(" ")}
                >
                  <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] text-[var(--color-accent)]">
                        <Icon className="size-5" />
                      </div>
                      <div className="rounded-full border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.8)] px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-[var(--color-muted)]">
                        {service.number}
                      </div>
                    </div>

                    <h3 className="mt-6 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)] sm:text-[1.9rem]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                      {service.description}
                    </p>

                    <div className="mt-5 rounded-[20px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(167,243,208,0.04)] px-3.5 py-3">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        Kimin üçün
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-highlight)]">
                        {service.audience}
                      </p>
                    </div>

                    <div className="mt-5 rounded-[24px] border border-[color:rgba(167,243,208,0.08)] bg-[rgba(6,23,18,0.72)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                        Biznesə təsir
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-5 rounded-[32px] border border-[var(--color-accent-secondary)]/24 bg-[linear-gradient(180deg,rgba(0,230,118,0.06),rgba(20,184,166,0.08),rgba(11,31,24,0.9))] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                YourWebsayt service system
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                Hər xidmət eyni məqsədə işləyir: markanı daha ciddi göstərmək, qərarı
                asanlaşdırmaq və istifadəçini düzgün CTA nöqtəsinə çatdırmaq.
              </p>
            </div>
            <Button href="/contact" size="lg">
              Layihəni müzakirə edək
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
