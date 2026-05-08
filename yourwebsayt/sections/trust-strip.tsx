import { DecorativeCubeField } from "@/components/ui/decorative-cube-field";
import { Container } from "@/components/ui/container";
import { trustStripItems } from "@/data/home";

export function TrustStrip() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/8 bg-[rgba(6,10,18,0.66)] py-6 sm:py-7">
      <DecorativeCubeField variant="split" className="opacity-70" />
      <Container className="relative">
        <div className="grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-3 xl:grid-cols-6">
          {trustStripItems.map((item, index) => (
            <div
              key={item}
              className="min-w-0 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4"
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
