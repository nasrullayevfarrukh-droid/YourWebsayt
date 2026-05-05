import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const primaryServices = [
  {
    number: "01",
    title: "Korporativ veb saytlar",
    description:
      "Şirkətinizin səviyyəsini daha ciddi göstərən, xidmətləri aydın təqdim edən və etibarı gücləndirən premium korporativ saytlar.",
    benefit: "Brend imicini gücləndirir, xidmət təqdimatını aydınlaşdırır və müraciət keyfiyyətini artırır."
  },
  {
    number: "02",
    title: "Landing page həlləri",
    description:
      "Reklam trafiki, kampaniya və yeni təkliflər üçün fokuslanmış, daha inandırıcı CTA axını quran landing page-lər.",
    benefit: "Diqqəti yayındırmadan müraciət, sifariş və əlaqə toplamaq üçün ideal satış formatıdır."
  },
  {
    number: "03",
    title: "E-commerce layihələri",
    description:
      "Məhsulu daha yüksək dəyərdə göstərən, alış prosesini sadələşdirən və premium satış təcrübəsi yaradan e-commerce saytlar.",
    benefit: "Daha peşəkar vitrin, daha rahat alış və daha güclü məhsul təqdimatı qurur."
  }
];

const secondaryServices = [
  "Portfolio və şəxsi brend saytları",
  "Rezervasiya / xidmət əsaslı saytlar",
  "Redesign və modernizasiya",
  "SEO və performans optimizasiyası",
  "Texniki dəstək və inkişaf"
];

export function ServicesSection() {
  const [leadService, ...sideServices] = primaryServices;

  return (
    <section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="Xidmətlər"
        title="Əsas veb həlləri önə çıxarırıq, qalan xidmətləri isə strateji ağırlıqla təqdim edirik."
        description="Hər biznes eyni struktura ehtiyac duymur. Ana səhifədə ən çox dəyər yaradan xidmətləri dominant göstərir, qalan həlləri isə düzgün səviyyədə yerləşdiririk."
        action={
          <Button href="/services" variant="secondary">
            Bütün xidmətlər
          </Button>
        }
      />

      <Container>
        <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
          <Reveal>
            <div
              data-cursor="card"
              data-touch-surface="card"
              className="relative overflow-hidden rounded-[38px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(0,230,118,0.08),rgba(20,184,166,0.08),rgba(11,31,24,0.94))] p-7 sm:p-9"
            >
              <div className="absolute right-0 top-0 h-48 w-48 bg-[radial-gradient(circle,rgba(0,230,118,0.16),transparent_70%)] blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                  Əsas istiqamət {leadService.number}
                </div>
                <h3 className="mt-8 max-w-xl text-balance font-display text-4xl tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                  {leadService.title}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                  {leadService.description}
                </p>

                <div className="mt-10 grid gap-5 border-t border-[color:rgba(167,243,208,0.08)] pt-7 md:grid-cols-[1fr_0.9fr]">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-accent)]">
                      Biznesə təsiri
                    </div>
                    <p className="mt-3 text-base leading-7 text-[var(--color-text)]">
                      {leadService.benefit}
                    </p>
                    <div className="mt-7">
                      <Button href="/contact" size="lg">
                        Layihəni müzakirə edək
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[color:var(--color-border)] bg-[rgba(6,23,18,0.82)] p-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Daxildir
                    </div>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-text)]">
                      <div>Xidmət arxitekturası və mesaj axını</div>
                      <div>Premium UI sistemi və vizual ritm</div>
                      <div>CTA prioriteti və etibar blokları</div>
                      <div>Mobil uyğun və sürətli frontend</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {sideServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06}>
                <div
                  data-cursor="card"
                  data-touch-surface="card"
                  className="group rounded-[32px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.86)] p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      İstiqamət {service.number}
                    </div>
                    <ArrowUpRight className="size-4 text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>

                  <h3 className="mt-8 text-3xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    {service.description}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-[var(--color-text)]">{service.benefit}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 border-t border-[color:rgba(167,243,208,0.08)] pt-8 md:grid-cols-2 xl:grid-cols-5">
          {secondaryServices.map((service, index) => (
            <Reveal key={service} delay={index * 0.03}>
              <div className="border-b border-[color:rgba(167,243,208,0.08)] pb-4 text-sm leading-7 text-[var(--color-muted)]">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
