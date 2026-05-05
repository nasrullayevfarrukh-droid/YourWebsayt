import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function FinalCtaSection() {
  return (
    <section className="pb-24 pt-10 sm:pb-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-[var(--color-accent)]/20 bg-[linear-gradient(140deg,rgba(125,180,255,0.14),rgba(255,255,255,0.03)_44%,rgba(255,255,255,0.02))] px-6 py-10 sm:px-10 sm:py-14">
            <div className="absolute right-0 top-0 h-56 w-56 bg-[radial-gradient(circle,rgba(125,180,255,0.22),transparent_72%)] blur-3xl" />

            <div className="relative max-w-3xl">
              <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
                Son CTA
              </div>
              <h2 className="mt-5 text-balance font-display text-4xl leading-[0.96] tracking-[-0.05em] text-[var(--color-text)] sm:text-6xl">
                Biznesiniz üçün ciddi görünən sayt quraq
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                Saytınız həm görünüş, həm etibar, həm də sorğu toplama baxımından daha yüksək səviyyədə işləməlidir.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="https://wa.me/994505552025" size="lg">
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
