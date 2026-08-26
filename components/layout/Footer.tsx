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
 * Corporate footer aligned with homepage visual language.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-ink text-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Logo height={44} href="/" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red-soft">
              Projekti
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerProjectLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red-soft">
              Poslovanje
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red-soft">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/65">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-white transition-colors hover:text-brand-red-soft"
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

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY_NAME}. Sva prava zadržana.
          </p>
          <p>Građevina · Investicije · Materijal · Izvođenje</p>
        </div>
      </Container>
    </footer>
  );
}
