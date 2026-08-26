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
 * Sticky header with logo, navigation, and discreet phone link.
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
          ? "border-line shadow-[0_1px_0_rgba(20,20,20,0.04)]"
          : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.75rem]">
        <Logo height={40} priority />

        <DesktopNav className="mx-4 flex-1 justify-center" />

        <div className="flex items-center gap-1 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 px-1 py-2 text-sm font-medium tracking-wide text-ink transition-colors hover:text-brand-red md:inline-flex"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-3.5 text-brand-red" aria-hidden />
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex size-10 items-center justify-center text-ink transition-colors hover:text-brand-red md:hidden"
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
