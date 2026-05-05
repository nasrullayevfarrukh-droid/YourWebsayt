"use client";

import type { ReactNode } from "react";

import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
