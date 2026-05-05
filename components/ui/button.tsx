"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { Magnetic } from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  rel?: string;
  target?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  magnetic?: boolean;
  children: ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-accent)] text-[#04111f] shadow-[0_12px_34px_rgba(125,180,255,0.18)] hover:shadow-[0_0_0_1px_rgba(4,17,31,0.05),0_20px_46px_rgba(125,180,255,0.28)]",
  secondary:
    "border border-white/14 bg-white/[0.04] text-[var(--color-text)] hover:border-[var(--color-accent)]/50 hover:bg-white/[0.08]",
  ghost: "text-[var(--color-text)] hover:bg-white/[0.06]"
} as const;

const sizes = {
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-sm sm:px-7"
} as const;

function ButtonInner({
  children,
  className,
  size = "md",
  variant = "primary"
}: Pick<ButtonProps, "children" | "className" | "size" | "variant">) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.02em] transition-all duration-300 hover:-translate-y-0.5",
        sizes[size],
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="size-4" />
    </span>
  );
}

export function Button({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  magnetic = true,
  rel,
  target,
  ...props
}: ButtonProps) {
  const content = href ? (
    <Link href={href} target={target} rel={rel} className="inline-flex">
      <ButtonInner className={className} size={size} variant={variant}>
        {children}
      </ButtonInner>
    </Link>
  ) : (
    <button className="inline-flex bg-transparent" {...props}>
      <ButtonInner className={className} size={size} variant={variant}>
        {children}
      </ButtonInner>
    </button>
  );

  if (!magnetic) {
    return content;
  }

  return <Magnetic className="inline-flex">{content}</Magnetic>;
}
