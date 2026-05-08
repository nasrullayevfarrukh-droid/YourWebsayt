import { cn } from "@/lib/utils";

type AmbientTechBackdropProps = {
  variant?: "bridge" | "showcase";
  className?: string;
};

function WireCube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={cn("h-40 w-40", className)}>
      <path d="M90 18 142 48 142 108 90 138 38 108 38 48 90 18Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M90 18V78M142 48 90 78 38 48M90 78V138" stroke="currentColor" strokeWidth="1.2" opacity="0.78" />
      <path d="M90 18 38 48V108M90 18 142 48V108" stroke="currentColor" strokeWidth="1.2" opacity="0.38" />
      <circle cx="90" cy="18" r="2.2" fill="currentColor" />
      <circle cx="142" cy="48" r="1.8" fill="currentColor" opacity="0.85" />
      <circle cx="38" cy="48" r="1.8" fill="currentColor" opacity="0.65" />
      <circle cx="90" cy="138" r="2.1" fill="currentColor" opacity="0.72" />
    </svg>
  );
}

function LayeredCardGhost({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[11rem] w-[14rem]", className)}>
      <div className="absolute inset-0 rounded-[30px] border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(167,243,208,0.02),rgba(11,31,24,0.04))] [transform:rotate(-12deg)_translate3d(0,0,0)]" />
      <div className="absolute inset-[0.85rem] rounded-[28px] border border-[rgba(20,184,166,0.12)] bg-[linear-gradient(180deg,rgba(20,184,166,0.03),rgba(11,31,24,0.02))] [transform:rotate(-5deg)_translate3d(0,0,0)]" />
      <div className="absolute inset-[1.45rem] overflow-hidden rounded-[24px] border border-[rgba(167,243,208,0.14)] bg-[linear-gradient(180deg,rgba(11,31,24,0.2),rgba(11,31,24,0.04))] shadow-[0_0_28px_rgba(20,184,166,0.06)]">
        <div className="absolute inset-x-4 top-4 h-3 rounded-full bg-[rgba(167,243,208,0.12)]" />
        <div className="absolute left-4 right-8 top-10 h-px bg-[linear-gradient(90deg,rgba(167,243,208,0.24),rgba(20,184,166,0.04))]" />
        <div className="absolute left-4 right-12 top-16 h-px bg-[linear-gradient(90deg,rgba(167,243,208,0.18),rgba(20,184,166,0.03))]" />
        <div className="absolute inset-x-4 bottom-4 top-[4.8rem] rounded-[18px] border border-[rgba(167,243,208,0.08)] bg-[linear-gradient(180deg,rgba(167,243,208,0.03),rgba(20,184,166,0.015))]" />
      </div>
    </div>
  );
}

export function AmbientTechBackdrop({
  variant = "bridge",
  className
}: AmbientTechBackdropProps) {
  const isShowcase = variant === "showcase";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden lg:block", className)}
    >
      <div
        className={cn(
          "ambient-drift-soft absolute rounded-full blur-3xl",
          isShowcase
            ? "left-[18%] top-[18%] h-52 w-52 bg-[radial-gradient(circle,rgba(20,184,166,0.08),transparent_72%)]"
            : "left-[12%] top-[12%] h-44 w-44 bg-[radial-gradient(circle,rgba(0,230,118,0.06),transparent_72%)]"
        )}
      />
      <div
        className={cn(
          "ambient-drift-reverse absolute rounded-full blur-[90px]",
          isShowcase
            ? "right-[8%] top-[8%] h-60 w-60 bg-[radial-gradient(circle,rgba(96,165,250,0.05),transparent_74%)]"
            : "right-[10%] bottom-[10%] h-52 w-52 bg-[radial-gradient(circle,rgba(20,184,166,0.05),transparent_74%)]"
        )}
      />

      <div
        className={cn(
          "ambient-float-slow absolute text-[rgba(167,243,208,0.2)]",
          isShowcase ? "left-[2%] top-[16%]" : "left-[4%] top-[8%]"
        )}
      >
        <WireCube />
      </div>

      <div
        className={cn(
          "ambient-float-reverse absolute text-[rgba(20,184,166,0.18)]",
          isShowcase ? "right-[6%] top-[48%] scale-[0.82]" : "right-[14%] bottom-[18%] scale-[0.72]"
        )}
      >
        <WireCube />
      </div>

      <div
        className={cn(
          "ambient-drift-soft absolute",
          isShowcase ? "right-[12%] top-[16%]" : "right-[6%] bottom-[6%]"
        )}
      >
        <LayeredCardGhost />
      </div>

      <div
        className={cn(
          "ambient-float-slow absolute",
          isShowcase ? "left-[6%] bottom-[8%] scale-[0.92]" : "left-[18%] bottom-[10%] scale-[0.78]"
        )}
      >
        <LayeredCardGhost />
      </div>

      <svg
        viewBox="0 0 1200 700"
        fill="none"
        className={cn(
          "ambient-line-pulse absolute inset-0 h-full w-full opacity-70",
          isShowcase ? "scale-[1.02]" : ""
        )}
        preserveAspectRatio="none"
      >
        <path
          d={
            isShowcase
              ? "M136 528C280 456 354 392 446 320C548 240 692 198 864 228C980 248 1060 286 1130 330"
              : "M118 152C256 194 352 240 466 324C602 422 766 470 1002 454"
          }
          stroke="url(#ambient-line-gradient)"
          strokeWidth="1.2"
          strokeDasharray="10 14"
          opacity="0.26"
        />
        <path
          d={
            isShowcase
              ? "M194 180C318 236 422 286 572 370C722 452 876 500 1034 502"
              : "M220 520C342 462 434 404 566 318C730 210 866 178 1066 196"
          }
          stroke="url(#ambient-line-gradient-alt)"
          strokeWidth="1"
          strokeDasharray="8 16"
          opacity="0.18"
        />
        <defs>
          <linearGradient id="ambient-line-gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(167,243,208,0)" />
            <stop offset="0.28" stopColor="rgba(167,243,208,0.34)" />
            <stop offset="0.74" stopColor="rgba(20,184,166,0.3)" />
            <stop offset="1" stopColor="rgba(167,243,208,0)" />
          </linearGradient>
          <linearGradient id="ambient-line-gradient-alt" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(96,165,250,0)" />
            <stop offset="0.36" stopColor="rgba(96,165,250,0.24)" />
            <stop offset="0.7" stopColor="rgba(20,184,166,0.22)" />
            <stop offset="1" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
