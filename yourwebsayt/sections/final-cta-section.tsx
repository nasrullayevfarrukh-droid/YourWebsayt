import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-8 sm:pb-28">
      <DecorativeCubeField variant="left" className="opacity-72" />
      <Container className="relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-accent)]/20 bg-[linear-gradient(140deg,rgba(20,184,166,0.12),rgba(255,255,255,0.03)_44%,rgba(255,255,255,0.02))] px-6 py-9 sm:px-10 sm:py-12">
            <div className="absolute right-0 top-0 h-52 w-52 bg-[radial-gradient(circle,rgba(20,184,166,0.18),transparent_72%)] blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Son CTA
              </div>
              <h2 className="mt-4 text-balance font-display text-[2.2rem] leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-[3.8rem]">
                Biznesiniz üçün daha ciddi sayt quraq
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Premium görünüş, aydın struktur və daha rahat müraciət axını birlikdə qurulur.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button href={siteConfig.whatsappHref} size="lg">
                  WhatsApp-da yaz
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Layihəni müzakirə et
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
