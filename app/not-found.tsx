import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <Container className="text-center">
        <div className="mx-auto max-w-2xl rounded-[34px] border border-[color:var(--color-border)] bg-[rgba(11,31,24,0.88)] px-6 py-12 sm:px-10">
          <div className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">404</div>
          <h1 className="mt-5 font-display text-5xl tracking-[-0.05em] text-[var(--color-text)] sm:text-7xl">
            Axtardığınız səhifə tapılmadı
          </h1>
          <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">
            Ola bilər keçid dəyişib və ya səhifə artıq mövcud deyil. Ana səhifədən davam edə bilərsiniz.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/">Ana səhifəyə qayıt</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
