"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/data/site";
import { luxuryEase } from "@/lib/motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[75] bg-[rgba(4,17,13,0.96)] backdrop-blur-2xl lg:hidden"
        >
          <div className="grid-shell relative flex h-full flex-col py-5">
            <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(0,230,118,0.18),transparent_45%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_58%)]" />
            <div className="relative flex items-center justify-between">
              <BrandMark compact />
              <button
                type="button"
                aria-label="Menyunu bağla"
                onClick={onClose}
                className="rounded-full border border-[color:var(--color-border)] bg-[rgba(167,243,208,0.04)] p-3 text-[var(--color-text)]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="relative mt-14 flex flex-1 flex-col justify-between gap-10">
              <nav className="space-y-5">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ delay: index * 0.06, ease: luxuryEase }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between border-b border-[color:rgba(167,243,208,0.08)] py-4 font-display text-3xl tracking-[-0.04em] text-[var(--color-text)]"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="size-5" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-5 rounded-[28px] border border-[color:var(--color-border)] bg-[linear-gradient(180deg,rgba(0,230,118,0.08),rgba(20,184,166,0.08),rgba(11,31,24,0.94))] p-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Əlaqə
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-[var(--color-text)]">
                    <p>{siteConfig.email}</p>
                    <p>{siteConfig.phone}</p>
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
                <Button href="/contact" size="lg" className="w-full justify-between">
                  {siteConfig.consultation}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
