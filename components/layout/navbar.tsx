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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[60] border-b transition-all duration-500",
          isScrolled
            ? "border-[rgba(167,243,208,0.12)] bg-[rgba(4,17,13,0.88)] shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
            : "border-[rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.74)] backdrop-blur-xl"
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,21,0.96),rgba(5,14,12,0.88))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,230,118,0.12),transparent_22%),radial-gradient(circle_at_84%_18%,rgba(20,184,166,0.08),transparent_24%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(167,243,208,0.16),transparent)]"
        />

        <Container className="relative">
          <div className="grid h-[74px] grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-[82px] lg:gap-8">
            <BrandMark compact className="relative z-10" />

            <nav className="relative z-10 hidden items-center justify-self-center lg:flex lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-line text-[13px] font-medium tracking-[0.02em] text-[rgba(248,250,252,0.72)] transition-colors duration-300 hover:text-[var(--color-text)]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="relative z-10 hidden justify-self-end lg:block">
              <Button
                href="/contact"
                size="md"
                className="rounded-[16px] px-5 shadow-[0_14px_34px_rgba(0,230,118,0.16)] hover:shadow-[0_0_0_1px_rgba(167,243,208,0.08),0_20px_44px_rgba(0,230,118,0.22)]"
              >
                {siteConfig.consultation}
              </Button>
            </div>

            <button
              type="button"
              aria-label="Menyunu aç"
              className="relative z-10 justify-self-end rounded-[14px] border border-[rgba(167,243,208,0.12)] bg-[rgba(167,243,208,0.04)] p-3 text-[var(--color-text)] shadow-[0_8px_20px_rgba(0,0,0,0.16)] lg:hidden"
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
