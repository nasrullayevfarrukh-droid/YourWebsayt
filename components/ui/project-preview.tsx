import type { ProjectPreviewTone } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProjectPreviewProps = {
  tone: ProjectPreviewTone;
  label: string;
  accent: string;
  featured?: boolean;
};

const toneMap: Record<ProjectPreviewTone, string> = {
  steel:
    "bg-[radial-gradient(circle_at_top_left,rgba(162,197,255,0.28),transparent_36%),linear-gradient(145deg,#0d1421_8%,#101a2d_48%,#0a111d_100%)]",
  azure:
    "bg-[radial-gradient(circle_at_top_left,rgba(77,205,255,0.24),transparent_36%),linear-gradient(145deg,#091824_8%,#0b2337_48%,#09131f_100%)]",
  amber:
    "bg-[radial-gradient(circle_at_top_left,rgba(255,194,92,0.24),transparent_36%),linear-gradient(145deg,#16110b_8%,#23170f_48%,#0e0a08_100%)]",
  emerald:
    "bg-[radial-gradient(circle_at_top_left,rgba(95,255,209,0.2),transparent_36%),linear-gradient(145deg,#0b1616_8%,#102321_48%,#09110f_100%)]",
  violet:
    "bg-[radial-gradient(circle_at_top_left,rgba(173,159,255,0.22),transparent_36%),linear-gradient(145deg,#111121_8%,#18172d_48%,#0b0b16_100%)]",
  rose:
    "bg-[radial-gradient(circle_at_top_left,rgba(255,167,195,0.22),transparent_36%),linear-gradient(145deg,#180f18_8%,#251322_48%,#0d0910_100%)]"
};

export function ProjectPreview({
  tone,
  label,
  accent,
  featured = false
}: ProjectPreviewProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-white/10",
        featured ? "aspect-[1.18/1]" : "aspect-[1.12/1]"
      )}
    >
      <div className={cn("absolute inset-0", toneMap[tone])} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%,rgba(255,255,255,0.04)_100%)]" />
      <div className="absolute -right-12 top-6 h-40 w-40 rounded-full border border-white/10 bg-white/[0.04] blur-2xl" />

      <div className="absolute left-5 right-5 top-5 flex h-10 items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 backdrop-blur-xl">
        <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="ml-auto text-[10px] uppercase tracking-[0.28em] text-white/75">{label}</span>
      </div>

      <div className="absolute left-5 right-5 top-20 grid grid-cols-[1.2fr_0.8fr] gap-4">
        <div className="rounded-[22px] border border-white/10 bg-black/22 p-4 backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="h-2 w-[4.5rem] rounded-full bg-white/45" />
              <div className="h-2 w-[6.5rem] rounded-full bg-white/15" />
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/65">
              {accent}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-white/[0.04] p-4">
              <div className="h-2 w-20 rounded-full bg-white/45" />
              <div className="mt-4 h-16 rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
            </div>
            <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
              <div className="h-2 w-16 rounded-full bg-white/30" />
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-5/6 rounded-full bg-white/20" />
                <div className="h-2 w-3/5 rounded-full bg-white/20" />
              </div>
            </div>
          </div>

          <div className="mt-4 h-[4.5rem] rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-2 rounded-full bg-white/20" />
              <div className="h-2 rounded-full bg-white/12" />
              <div className="h-2 rounded-full bg-white/12" />
            </div>
            <div className="mt-4 h-10 rounded-[12px] bg-[linear-gradient(90deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))]" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[20px] border border-white/10 bg-black/18 p-4 backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-1">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/60">Mobil blok</div>
            <div className="mt-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-3">
              <div className="mx-auto h-1.5 w-10 rounded-full bg-white/30" />
              <div className="mt-3 h-20 rounded-[14px] bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03))]" />
            </div>
          </div>
          <div className="rounded-[20px] border border-white/10 bg-black/18 p-4 backdrop-blur-xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/60">Performans</div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-[14px] bg-white/[0.05]" />
              <div className="h-12 rounded-[14px] bg-white/[0.05]" />
              <div className="h-12 rounded-[14px] bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
        {["Hero", "CTA", "Lead"].map((item) => (
          <div
            key={item}
            className="rounded-[18px] border border-white/10 bg-black/22 px-3 py-3 text-center text-[10px] uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
