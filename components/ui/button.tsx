"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-[var(--color-accent)] text-[var(--color-accent-ink)] shadow-[0_16px_38px_rgba(0,230,118,0.18)] hover:shadow-[0_0_0_1px_rgba(4,17,13,0.06),0_22px_52px_rgba(0,230,118,0.28)]",
  secondary:
    "border border-[color:var(--color-border-strong)] bg-[rgba(11,31,24,0.72)] text-[var(--color-text)] hover:border-[var(--color-accent-secondary)] hover:bg-[rgba(20,184,166,0.1)]",
  ghost: "text-[var(--color-text)] hover:bg-[rgba(167,243,208,0.08)]"
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
  ...props
}: ButtonProps) {
  const content = href ? (
    <Link
      href={href}
      className="inline-flex"
      data-cursor="interactive"
      data-cursor-burst="strong"
    >
      <ButtonInner className={className} size={size} variant={variant}>
        {children}
      </ButtonInner>
    </Link>
  ) : (
    <button
      className="inline-flex bg-transparent"
      data-cursor="interactive"
      data-cursor-burst="strong"
      {...props}
    >
      <ButtonInner className={className} size={size} variant={variant}>
        {children}
      </ButtonInner>
    </button>
  );

  return content;
}
