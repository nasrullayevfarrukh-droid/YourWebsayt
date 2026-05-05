import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { industryFocus, manifestoBlocks } from "@/data/experience";
import { aboutStats } from "@/data/site";
import { aboutIntro, brandPhilosophy, milestones, team } from "@/data/team";
import { createPageMetadata } from "@/lib/utils";
import { FinalCtaSection } from "@/sections/final-cta-section";

export const metadata: Metadata = createPageMetadata(
  "Haqqımızda | YourWebsayt",
  "YourWebsayt studiyasının yanaşması, missiyası və niyə custom premium saytlar üzərində fokuslandığı ilə tanış olun.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Haqqımızda"
        title={aboutIntro.title}
        description={aboutIntro.description}
        aside={
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Missiya
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--color-text)]">
              Hazır şablon hissi verməyən, biznesi real həyatda olduğundan daha zəif göstərməyən saytlar hazırlamaq.
            </p>
          </div>
        }
      />

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <div className="editorial-card h-full rounded-[34px] p-7 sm:p-8">
                <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                  Manifesto
                </div>
                <h2 className="mt-5 max-w-xl font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-5xl">
                  Biznesin səviyyəsi saytda da eyni gücdə hiss olunmalıdır.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--color-muted)]">
                  YourWebsayt üçün premium sayt sadəcə vizual estetik deyil. Bu, brendin real dəyərini online mühitdə düzgün təqdim etmək üçün strateji bir vitrin və satış səhnəsidir.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6">
              {manifestoBlocks.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <div className="editorial-card rounded-[28px] p-6">
                    <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                      Studio view
                    </div>
                    <h3 className="mt-4 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
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

      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow={aboutIntro.eyebrow}
          title="Niyə custom sayt üzərində fokuslanırıq?"
          description="Çünki generic template biznesi orta göstərir. Premium custom həll isə dəyəri, etibarı və fərqliliyi görünən edir."
        />
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {brandPhilosophy.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="editorial-card h-full rounded-[30px] p-7">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    Prinsip
                  </div>
                  <h2 className="mt-5 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Şablon və fərdi həll"
          title="Şablon saytla premium custom build arasındakı fərq ilk baxışdan hiss olunur."
          description="Birində bloklar düzülür, digərində brendin səviyyəsinə uyğun rəqəmsal mövqelənmə qurulur."
        />
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="editorial-card rounded-[30px] p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[#ffb4a0]">Şablon</div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-muted)]">
                  <li>Eyni hiss yaradan təkrarlanan bloklar</li>
                  <li>Brend səviyyəsinə uyğun olmayan vizual qərarlar</li>
                  <li>Satış və etibar axınının zəif planlanması</li>
                  <li>Uzunmüddətli inkişaf üçün məhdud çeviklik</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="editorial-card rounded-[30px] border-[var(--color-accent)]/30 bg-[linear-gradient(180deg,rgba(104,168,255,0.12),rgba(255,255,255,0.03))] p-7">
                <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Fərdi həll</div>
                <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text)]">
                  <li>Brend üçün sıfırdan qurulan fərqli vizual dil</li>
                  <li>Biznes məqsədinə uyğun CTA və struktur</li>
                  <li>Daha yüksək dəyər və etibar qavrayışı</li>
                  <li>Genişlənə bilən təmiz və performans fokuslu arxitektura</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Mərhələlər"
          title="Studiyanın inkişafı daha seçilmiş, daha premium istiqamətdə formalaşıb."
          description="Hər mərhələdə niş sektorlar və conversion-first yanaşma daha da dərinləşdirilib."
        />
        <Container>
          <div className="grid gap-5 lg:grid-cols-4">
            {milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.05}>
                <div className="editorial-card h-full rounded-[28px] p-6">
                  <div className="text-sm font-semibold text-[var(--color-accent)]">{item.year}</div>
                  <h3 className="mt-5 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Studio mentality"
          title="Komanda kimi baxışımız sadədir: ciddi biznes üçün ciddi rəqəmsal görünüş."
          description="Kiçik, fokuslu və keyfiyyətə həssas studiya modeli ilə işləyirik."
          action={<Button href="/contact" variant="secondary">Komandamızla danış</Button>}
        />
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.05}>
                <div className="editorial-card rounded-[28px] p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
                    {member.role}
                  </div>
                  <div className="mt-5 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]">
                    {member.name}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{member.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Kimlərlə işləyirik"
          title="Fərqli sektorlar üçün eyni şablon yox, fərqli səviyyə dili qururuq."
          description="Hədəf auditoriya dəyişdikcə dizayn ritmi, trust blokları və conversion məntiqi də dəyişir."
        />
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industryFocus.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="editorial-card h-full rounded-[28px] p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-accent)]">
                    {item.fit}
                  </div>
                  <h3 className="mt-5 text-2xl font-display tracking-[-0.04em] text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCtaSection />
    </>
  );
}
