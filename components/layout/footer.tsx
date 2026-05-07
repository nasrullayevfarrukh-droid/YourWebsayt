import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { brand } from "@/data/brand";
import { navigation, siteConfig } from "@/data/site";

const footerServices = [
  "Korporativ veb saytlar",
  "Landing page həlləri",
  "E-commerce layihələri",
  "Şəxsi brend saytları",
  "Redesign və modernizasiya"
];

export function Footer() {
  return (
    <footer className="border-t border-[color:rgba(167,243,208,0.08)] bg-[rgba(4,17,13,0.72)] py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              Biznes sahibləri üçün ciddi, modern və yüksək dəyər hissi verən premium veb saytlar hazırlayırıq.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Keçidlər
            </div>
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
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Fokus
            </div>
            <div className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <p key={service} className="text-sm text-[var(--color-text)]">
                  {service}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Əlaqə
            </div>
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
                  className="rounded-full border border-[color:var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-muted)] transition-colors duration-300 hover:border-[var(--color-accent-secondary)] hover:text-[var(--color-highlight)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:rgba(167,243,208,0.08)] pt-6 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 {brand.siteName}. Bütün hüquqlar qorunur.</div>
          <div>Strategiya, dizayn və inkişaf bir studiyada.</div>
        </div>
      </Container>
    </footer>
  );
}
