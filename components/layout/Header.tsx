import Link from "next/link";
import { Phone } from "lucide-react";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/data/company";
import { Container } from "@/components/layout/Container";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";

/**
 * Site header — brand, navigation, and primary phone CTA.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="shrink-0 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
        >
          {COMPANY_NAME}
        </Link>

        <DesktopNav className="mx-4 flex-1 justify-center" />

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 border border-bronze/35 px-3 py-2 text-sm font-medium tracking-wide text-ink transition-colors hover:border-bronze sm:inline-flex"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-3.5 text-bronze" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
