import { cn } from "@/lib/utils";

type DecorativeCubeFieldProps = {
  variant?: "left" | "right" | "split" | "showcase";
  className?: string;
};

function SegmentedCubeCluster({
  id,
  className,
  tone = "emerald"
}: {
  id: string;
  className?: string;
  tone?: "emerald" | "frost";
}) {
  const isFrost = tone === "frost";

  return (
    <svg viewBox="0 0 320 280" fill="none" className={cn("h-56 w-56", className)}>
      <defs>
        <linearGradient id={`${id}-top`} x1="136" y1="24" x2="232" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor={isFrost ? "rgba(248,255,255,0.28)" : "rgba(130,255,210,0.2)"} />
          <stop offset="1" stopColor={isFrost ? "rgba(198,250,255,0.1)" : "rgba(14,92,60,0.16)"} />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="104" y1="84" x2="196" y2="216" gradientUnits="userSpaceOnUse">
          <stop stopColor={isFrost ? "rgba(236,255,252,0.22)" : "rgba(23,196,126,0.2)"} />
          <stop offset="1" stopColor={isFrost ? "rgba(186,255,237,0.08)" : "rgba(4,31,22,0.18)"} />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="196" y1="82" x2="258" y2="204" gradientUnits="userSpaceOnUse">
          <stop stopColor={isFrost ? "rgba(210,255,245,0.18)" : "rgba(18,134,102,0.2)"} />
          <stop offset="1" stopColor={isFrost ? "rgba(172,235,255,0.06)" : "rgba(2,18,14,0.16)"} />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="126" y1="112" x2="188" y2="182" gradientUnits="userSpaceOnUse">
          <stop stopColor={isFrost ? "rgba(252,255,255,0.18)" : "rgba(173,255,231,0.18)"} />
          <stop offset="1" stopColor={isFrost ? "rgba(208,252,255,0.04)" : "rgba(18,196,136,0.03)"} />
        </linearGradient>
        <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <path
        d="M54 84 126 44 198 84 126 124 54 84Z"
        fill={`url(#${id}-top)`}
        stroke={isFrost ? "rgba(220,255,246,0.34)" : "rgba(150,255,220,0.24)"}
        strokeWidth="1.2"
      />
      <path
        d="M54 84V178L126 218V124L54 84Z"
        fill={`url(#${id}-front)`}
        stroke={isFrost ? "rgba(220,255,246,0.32)" : "rgba(150,255,220,0.22)"}
        strokeWidth="1.2"
      />
      <path
        d="M126 124V218L198 178V84L126 124Z"
        fill={`url(#${id}-side)`}
        stroke={isFrost ? "rgba(210,255,248,0.26)" : "rgba(118,255,209,0.2)"}
        strokeWidth="1.2"
      />

      <path d="M78 98 126 72 174 98 126 124 78 98Z" fill={`url(#${id}-accent)`} opacity="0.84" />
      <path d="M78 126 126 100 174 126 126 152 78 126Z" fill={`url(#${id}-accent)`} opacity="0.62" />
      <path d="M78 154 126 128 174 154 126 180 78 154Z" fill={`url(#${id}-accent)`} opacity="0.42" />

      <path
        d="M94 116H142C149.18 116 155 121.82 155 129C155 136.18 149.18 142 142 142H94C86.82 142 81 136.18 81 129C81 121.82 86.82 116 94 116Z"
        fill={isFrost ? "rgba(248,255,255,0.14)" : "rgba(169,255,228,0.12)"}
        stroke={isFrost ? "rgba(236,255,250,0.22)" : "rgba(169,255,228,0.18)"}
      />
      <path
        d="M100 154H156C163.18 154 169 159.82 169 167C169 174.18 163.18 180 156 180H100C92.82 180 87 174.18 87 167C87 159.82 92.82 154 100 154Z"
        fill={isFrost ? "rgba(228,255,249,0.1)" : "rgba(28,210,149,0.08)"}
        stroke={isFrost ? "rgba(228,255,249,0.18)" : "rgba(169,255,228,0.14)"}
      />

      <path d="M224 108 266 132 266 184 224 208 182 184 182 132 224 108Z" fill="rgba(26,210,145,0.08)" stroke="rgba(154,255,223,0.18)" />
      <path d="M224 132 248 146 248 174 224 188 200 174 200 146 224 132Z" fill="rgba(227,255,246,0.1)" stroke="rgba(220,255,247,0.16)" />
      <path d="M28 134 60 152 60 192 28 210 -4 192 -4 152 28 134Z" fill="rgba(236,255,250,0.06)" stroke="rgba(210,255,244,0.14)" />

      <path d="M126 20 164 40 126 60 88 40 126 20Z" fill={isFrost ? "rgba(246,255,255,0.12)" : "rgba(68,255,183,0.12)"} filter={`url(#${id}-glow)`} />
      <circle cx="126" cy="44" r="2.8" fill="rgba(247,255,252,0.78)" />
      <circle cx="126" cy="124" r="2.5" fill="rgba(190,255,233,0.58)" />
      <circle cx="126" cy="218" r="2.7" fill="rgba(22,208,143,0.48)" />
      <circle cx="224" cy="108" r="2.2" fill="rgba(236,255,247,0.56)" />
    </svg>
  );
}

function FrostedCubeStack({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 260 260" fill="none" className={cn("h-44 w-44", className)}>
      <defs>
        <linearGradient id={`${id}-top`} x1="130" y1="38" x2="196" y2="92" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(250,255,255,0.28)" />
          <stop offset="1" stopColor="rgba(186,248,255,0.09)" />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="84" y1="88" x2="158" y2="204" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(240,255,252,0.22)" />
          <stop offset="1" stopColor="rgba(182,255,239,0.08)" />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="160" y1="84" x2="216" y2="198" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(210,255,248,0.16)" />
          <stop offset="1" stopColor="rgba(185,220,255,0.06)" />
        </linearGradient>
      </defs>

      <path d="M80 82 130 54 180 82 130 110 80 82Z" fill={`url(#${id}-top)`} stroke="rgba(228,255,249,0.3)" strokeWidth="1.15" />
      <path d="M80 82V164L130 192V110L80 82Z" fill={`url(#${id}-front)`} stroke="rgba(228,255,249,0.3)" strokeWidth="1.15" />
      <path d="M130 110V192L180 164V82L130 110Z" fill={`url(#${id}-side)`} stroke="rgba(204,255,246,0.24)" strokeWidth="1.15" />

      <path d="M94 98 130 78 166 98 130 118 94 98Z" fill="rgba(255,255,255,0.11)" stroke="rgba(236,255,252,0.14)" />
      <path d="M96 124H150C157.18 124 163 129.82 163 137C163 144.18 157.18 150 150 150H96C88.82 150 83 144.18 83 137C83 129.82 88.82 124 96 124Z" fill="rgba(248,255,255,0.12)" stroke="rgba(236,255,252,0.16)" />
      <path d="M100 156H144C150.627 156 156 161.373 156 168C156 174.627 150.627 180 144 180H100C93.3726 180 88 174.627 88 168C88 161.373 93.3726 156 100 156Z" fill="rgba(195,255,239,0.08)" stroke="rgba(222,255,248,0.14)" />

      <path d="M178 104 204 118 204 152 178 166 152 152 152 118 178 104Z" fill="rgba(106,248,213,0.08)" stroke="rgba(180,255,236,0.14)" />
      <path d="M58 118 78 130 78 158 58 170 38 158 38 130 58 118Z" fill="rgba(255,255,255,0.06)" stroke="rgba(228,255,249,0.12)" />
      <circle cx="130" cy="54" r="2.4" fill="rgba(255,255,255,0.76)" />
      <circle cx="180" cy="82" r="2" fill="rgba(204,255,246,0.48)" />
    </svg>
  );
}

function EmeraldRubikMass({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 280 260" fill="none" className={cn("h-48 w-48", className)}>
      <defs>
        <linearGradient id={`${id}-top`} x1="118" y1="34" x2="208" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(107,255,194,0.2)" />
          <stop offset="1" stopColor="rgba(8,74,52,0.12)" />
        </linearGradient>
        <linearGradient id={`${id}-front`} x1="84" y1="92" x2="168" y2="212" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(32,190,122,0.18)" />
          <stop offset="1" stopColor="rgba(4,24,18,0.18)" />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="168" y1="88" x2="232" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(18,132,102,0.18)" />
          <stop offset="1" stopColor="rgba(3,18,15,0.16)" />
        </linearGradient>
      </defs>

      <path d="M84 86 146 50 208 86 146 122 84 86Z" fill={`url(#${id}-top)`} stroke="rgba(147,255,217,0.24)" strokeWidth="1.2" />
      <path d="M84 86V178L146 214V122L84 86Z" fill={`url(#${id}-front)`} stroke="rgba(147,255,217,0.22)" strokeWidth="1.2" />
      <path d="M146 122V214L208 178V86L146 122Z" fill={`url(#${id}-side)`} stroke="rgba(117,255,204,0.2)" strokeWidth="1.2" />

      <path d="M98 100 130 118 130 154 98 172 66 154 66 118 98 100Z" fill="rgba(18,214,144,0.1)" stroke="rgba(171,255,227,0.16)" />
      <path d="M130 118 162 100 194 118 194 154 162 172 130 154V118Z" fill="rgba(233,255,248,0.1)" stroke="rgba(223,255,245,0.14)" />
      <path d="M98 172 130 154 162 172 162 208 130 226 98 208 98 172Z" fill="rgba(14,130,93,0.1)" stroke="rgba(154,255,218,0.14)" />
      <path d="M162 172 194 154 226 172 226 208 194 226 162 208V172Z" fill="rgba(20,194,138,0.08)" stroke="rgba(154,255,218,0.12)" />

      <path d="M110 128H170C176.627 128 182 133.373 182 140C182 146.627 176.627 152 170 152H110C103.373 152 98 146.627 98 140C98 133.373 103.373 128 110 128Z" fill="rgba(230,255,247,0.1)" stroke="rgba(223,255,245,0.14)" />
      <path d="M122 184H184C190.627 184 196 189.373 196 196C196 202.627 190.627 208 184 208H122C115.373 208 110 202.627 110 196C110 189.373 115.373 184 122 184Z" fill="rgba(21,215,150,0.08)" stroke="rgba(171,255,227,0.12)" />

      <circle cx="146" cy="50" r="2.6" fill="rgba(244,255,251,0.74)" />
      <circle cx="146" cy="122" r="2.4" fill="rgba(183,255,230,0.52)" />
      <circle cx="194" cy="226" r="2.4" fill="rgba(22,215,148,0.48)" />
    </svg>
  );
}

function CapsuleGhost({
  className,
  vertical = false,
  frosted = false
}: {
  className?: string;
  vertical?: boolean;
  frosted?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border shadow-[0_0_32px_rgba(21,183,116,0.06)] backdrop-blur-sm",
        vertical ? "h-28 w-11" : "h-11 w-28",
        frosted
          ? "border-[rgba(222,255,247,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(168,245,255,0.04))]"
          : "border-[rgba(158,255,226,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(18,87,60,0.05))]",
        className
      )}
    >
      <div className={cn("absolute rounded-full bg-[rgba(245,255,251,0.22)]", vertical ? "left-[0.65rem] top-3 h-9 w-1.5" : "left-3 top-[0.65rem] h-1.5 w-9")} />
      <div className={cn("absolute rounded-full border border-white/10", vertical ? "bottom-3 left-[0.55rem] h-8 w-5" : "right-3 top-[0.55rem] h-5 w-8")} />
      <div className={cn("absolute rounded-full blur-md", vertical ? "bottom-5 left-1 h-8 w-8" : "left-6 top-1 h-8 w-8", frosted ? "bg-[rgba(214,255,247,0.14)]" : "bg-[rgba(104,255,205,0.16)]")} />
    </div>
  );
}

function VaporPlume({
  className,
  tone = "frost",
  size = "md"
}: {
  className?: string;
  tone?: "frost" | "emerald";
  size?: "sm" | "md";
}) {
  const isFrost = tone === "frost";
  const plumes =
    size === "sm"
      ? [
          "left-0 top-10 h-10 w-18",
          "left-8 top-2 h-12 w-16",
          "left-14 top-12 h-9 w-14",
          "left-5 top-16 h-8 w-12"
        ]
      : [
          "left-0 top-12 h-12 w-24",
          "left-10 top-3 h-14 w-20",
          "left-20 top-10 h-12 w-18",
          "left-8 top-20 h-10 w-16",
          "left-24 top-22 h-9 w-14"
        ];

  const gradient = isFrost
    ? "radial-gradient(circle, rgba(246,252,255,0.34) 0%, rgba(214,240,255,0.18) 42%, rgba(214,240,255,0.02) 76%)"
    : "radial-gradient(circle, rgba(132,255,216,0.24) 0%, rgba(48,165,118,0.16) 40%, rgba(8,36,26,0.02) 78%)";

  return (
    <div className={cn("absolute h-32 w-36", size === "sm" ? "h-24 w-28" : "h-32 w-36", className)}>
      {plumes.map((plume, index) => (
        <span
          key={`${tone}-${plume}`}
          className={cn(
            "absolute rounded-full opacity-0 blur-[26px]",
            index % 2 === 0 ? "cube-vapor" : "cube-vapor-alt",
            plume
          )}
          style={{
            animationDelay: `${index * 1.1}s`,
            background: gradient
          }}
        />
      ))}
    </div>
  );
}

function FrostTraceField({
  className,
  tone = "frost"
}: {
  className?: string;
  tone?: "frost" | "emerald";
}) {
  const traces = [
    { className: "left-2 top-3 h-[2px] w-4 rotate-[18deg]" },
    { className: "left-10 top-0 h-[2px] w-3 rotate-[-22deg]" },
    { className: "left-16 top-7 h-[2px] w-5 rotate-[12deg]" }
  ];

  const gradient =
    tone === "frost"
      ? "linear-gradient(90deg, rgba(255,255,255,0), rgba(240,251,255,0.85), rgba(255,255,255,0))"
      : "linear-gradient(90deg, rgba(167,255,222,0), rgba(167,255,222,0.7), rgba(167,255,222,0))";

  return (
    <div className={cn("absolute h-10 w-24", className)}>
      {traces.map((trace, index) => (
        <span
          key={`${tone}-${trace.className}`}
          className={cn("cube-frost-trace absolute rounded-full opacity-0 blur-[1.4px]", trace.className)}
          style={{
            animationDelay: `${index * 1.4}s`,
            background: gradient
          }}
        />
      ))}
    </div>
  );
}

export function DecorativeCubeField({
  variant = "split",
  className
}: DecorativeCubeFieldProps) {
  const showLeft = variant === "left" || variant === "split" || variant === "showcase";
  const showRight = variant === "right" || variant === "split" || variant === "showcase";

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden lg:block", className)}
    >
      {showLeft ? (
        <div className="absolute -left-4 top-10">
          <div className="cube-mist absolute left-0 top-4 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(18,191,118,0.16),transparent_72%)] blur-3xl" />
          <div className="cube-mist-alt absolute left-10 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(236,255,248,0.14),transparent_74%)] blur-[60px]" />
          <div className="cube-float-slow relative">
            <SegmentedCubeCluster id="side-left-main" className="drop-shadow-[0_0_34px_rgba(21,196,126,0.08)]" />
            <VaporPlume className="-left-10 top-10" tone="emerald" />
            <FrostTraceField className="left-14 top-14" tone="emerald" />
          </div>
          <div className="cube-float-alt absolute left-24 top-32 scale-[0.92]">
            <CapsuleGhost />
          </div>
          <div className="cube-float-slow absolute left-24 top-44 scale-[0.9]">
            <FrostedCubeStack id="side-left-frost" />
            <VaporPlume className="-left-6 top-6" tone="frost" size="sm" />
            <FrostTraceField className="left-8 top-1" tone="frost" />
          </div>
        </div>
      ) : null}

      {showRight ? (
        <div className={cn("absolute right-0", variant === "showcase" ? "top-24" : "bottom-8")}>
          <div className="cube-mist absolute right-0 top-6 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(9,120,86,0.18),transparent_72%)] blur-3xl" />
          <div className="cube-mist-alt absolute right-8 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(190,255,237,0.14),transparent_74%)] blur-[56px]" />
          <div className="cube-float-alt relative translate-x-4">
            <EmeraldRubikMass id="side-right-rubik" className="drop-shadow-[0_0_32px_rgba(18,184,113,0.08)]" />
            <VaporPlume className="-left-8 top-8" tone="emerald" />
            <FrostTraceField className="left-16 top-8" tone="emerald" />
          </div>
          <div className="cube-float-slow absolute right-28 top-10">
            <CapsuleGhost vertical frosted />
          </div>
          <div className="cube-float-alt absolute right-14 top-[7.5rem] scale-[0.92]">
            <SegmentedCubeCluster id="side-right-frost-main" tone="frost" className="h-44 w-44" />
            <VaporPlume className="-left-4 top-5" tone="frost" size="sm" />
            <FrostTraceField className="left-10 top-1" tone="frost" />
          </div>
        </div>
      ) : null}

      {variant === "showcase" ? (
        <div className="absolute left-8 bottom-8">
          <div className="cube-mist absolute left-2 top-4 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(20,171,113,0.12),transparent_72%)] blur-3xl" />
          <div className="cube-float-slow relative">
            <div className="rounded-[28px] border border-[rgba(178,255,232,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(11,31,24,0.04))] p-3 backdrop-blur-sm">
              <FrostedCubeStack id="showcase-cube-mini" className="h-36 w-36" />
            </div>
            <VaporPlume className="-left-4 top-6" tone="frost" size="sm" />
            <FrostTraceField className="left-10 top-0" tone="frost" />
          </div>
          <div className="cube-float-alt absolute -right-3 -top-3">
            <CapsuleGhost className="scale-[0.82]" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
