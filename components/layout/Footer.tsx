import Link from "next/link";
import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
  COMPANY_CONTACT,
} from "@/data/company";
import { footerNavigation, footerProjectLinks } from "@/data/navigation";
import { Container } from "@/components/layout/Container";

/**
 * Corporate footer — brand, nav, projects, phone, address placeholder.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-ink text-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <p className="font-display text-xl font-medium tracking-tight text-white">
              {COMPANY_NAME}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-surface-muted/90">
              {COMPANY_DESCRIPTION}
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-bronze-soft">
              Navigacija
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-bronze-soft">
              Projekti
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerProjectLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-muted transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-bronze-soft">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-surface-muted">
              <li>
                <a
                  href={PHONE_HREF}
                  className="text-white transition-colors hover:text-bronze-soft"
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

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-surface-muted/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY_NAME}. Sva prava zadržana.
          </p>
          <p>Građevina · Investicije · Materijal · Izvođenje</p>
        </div>
      </Container>
    </footer>
  );
}
