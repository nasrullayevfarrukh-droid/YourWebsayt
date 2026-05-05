import { Container } from "@/components/ui/container";
import { trustStripItems } from "@/data/home";

export function TrustStrip() {
  return (
    <section className="border-y border-white/8 bg-[rgba(6,10,18,0.66)] py-7 sm:py-8">
      <Container>
        <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          {trustStripItems.map((item, index) => (
            <div
              key={item}
              className="rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-4"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 text-sm leading-6 text-[var(--color-text)]">{item}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
