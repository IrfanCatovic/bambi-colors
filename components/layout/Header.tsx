"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/company";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { DesktopNav } from "@/components/navigation/DesktopNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { cn } from "@/lib/utils";

/**
 * Sticky header — stronger presence, elegant phone, readable nav.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-surface transition-[border-color,box-shadow] duration-300",
        scrolled
          ? "border-line bg-surface/95 shadow-[0_1px_0_rgba(20,20,20,0.06)] backdrop-blur-md"
          : "border-line/70 bg-surface",
      )}
    >
      <Container className="flex h-[4.75rem] items-center justify-between gap-5 sm:h-[5.25rem] lg:h-[5.5rem]">
        <Logo height={52} priority />

        <DesktopNav className="mx-4 flex-1 justify-center" />

        <div className="flex items-center gap-1 sm:gap-0">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2.5 border-l border-line pl-5 text-[0.95rem] font-medium tracking-wide text-ink transition-colors hover:text-brand-red lg:inline-flex"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-4 text-brand-red" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex size-11 items-center justify-center text-ink transition-colors hover:text-brand-red lg:hidden"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-5" aria-hidden />
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
