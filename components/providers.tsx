"use client";

import type { ReactNode } from "react";

import { CustomCursor } from "@/components/ui/custom-cursor";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
