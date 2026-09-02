import {
  COMPANY_CONTACT,
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/data/company";
import { footerNavigation, footerProjectLinks } from "@/data/navigation";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import Link from "next/link";

/**
 * Corporate footer — readable type, clear logo, calm spacing.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/10 bg-ink text-surface">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent"
        aria-hidden
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo height={52} href="/" />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-white/65">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-red-soft sm:text-xs">
              Projekti
            </p>
            <ul className="mt-5 space-y-3">
              {footerProjectLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw text-[0.95rem] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-red-soft sm:text-xs">
              Poslovanje
            </p>
            <ul className="mt-5 space-y-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-draw text-[0.95rem] text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-red-soft sm:text-xs">
              Kontakt
            </p>
            <ul className="mt-5 space-y-3 text-[0.95rem] text-white/70">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-base text-white transition-colors hover:text-brand-red-soft sm:text-lg"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              {COMPANY_CONTACT.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY_NAME}. Sva prava zadržana.
          </p>
          <p>Građevina · Investicije · Materijal · Izvođenje</p>
        </div>
      </Container>
    </footer>
  );
}
