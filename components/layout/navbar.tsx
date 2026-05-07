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
              "relative flex items-center justify-between gap-4 overflow-hidden rounded-[24px] px-4 py-3 transition-all duration-500 sm:px-6 sm:py-3.5 lg:rounded-full lg:px-7",
              isScrolled
                ? "border border-[rgba(167,243,208,0.14)] bg-[rgba(5,17,14,0.8)] shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
                : "border border-[rgba(167,243,208,0.1)] bg-[rgba(5,17,14,0.64)] shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            )}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,34,27,0.94),rgba(7,18,15,0.82))]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(0,230,118,0.16),transparent_24%),radial-gradient(circle_at_84%_50%,rgba(20,184,166,0.12),transparent_28%)]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-[18%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(167,243,208,0.26),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-8 top-[-2.25rem] h-20 w-28 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.12),transparent_72%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute right-10 bottom-[-2.5rem] h-24 w-32 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.12),transparent_72%)] blur-2xl"
            />

            <BrandMark compact className="relative z-10 origin-left scale-[0.94]" />

            <nav className="relative z-10 hidden items-center gap-8 lg:flex">
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

            <div className="relative z-10 hidden lg:block">
              <Button href="/contact" size="md">
                {siteConfig.consultation}
              </Button>
            </div>

            <button
              type="button"
              aria-label="Menyunu aç"
              className="relative z-10 rounded-full border border-[rgba(167,243,208,0.14)] bg-[rgba(167,243,208,0.05)] p-3 text-[var(--color-text)] shadow-[0_8px_22px_rgba(0,0,0,0.2)] lg:hidden"
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
