import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { studioServices } from "@/data/home";
import { navigation, siteConfig } from "@/data/site";

const footerServices = studioServices.slice(0, 5);

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(5,9,19,0.55)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Modern, sürətli və premium görünən saytlarla biznesinizi daha ciddi göstərən personal web studio.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Keçidlər</div>
            <div className="mt-5 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Fokus</div>
            <div className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <p key={service.title} className="text-sm text-[var(--color-text)]">
                  {service.title}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">Əlaqə</div>
            <div className="mt-5 space-y-3 text-sm text-[var(--color-text)]">
              <p>{siteConfig.email}</p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.address}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] transition-colors duration-300 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 YourWebsayt. Bütün hüquqlar qorunur.</div>
          <div>Personal studio yanaşması, premium nəticə.</div>
        </div>
      </Container>
    </footer>
  );
}
