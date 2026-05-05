"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] pt-3 sm:pt-5">
        <Container>
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 sm:px-5",
              isScrolled
                ? "glass-panel border border-white/10 shadow-[0_12px_44px_rgba(0,0,0,0.28)]"
                : "border border-white/6 bg-[rgba(7,12,22,0.26)] backdrop-blur-md"
            )}
          >
            <BrandMark compact className="origin-left scale-[0.92]" />

            <nav className="hidden items-center gap-7 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-line text-sm text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="/contact" size="md" magnetic={false}>
                {siteConfig.consultation}
              </Button>
            </div>

            <button
              type="button"
              aria-label="Menyunu aç"
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-[var(--color-text)] lg:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
