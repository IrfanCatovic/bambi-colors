"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/company";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  className?: string;
};

/**
 * Mobile navigation drawer with expandable projects and easy call action.
 */
export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    setProjectsOpen(false);
  }

  return (
    <div className={cn("lg:hidden", className)}>
      <button
        type="button"
        className="inline-flex size-10 items-center justify-center text-ink transition-colors hover:text-brand-red"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Zatvori meni" : "Otvori meni"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-50 bg-ink/45"
            onClick={close}
            aria-hidden
          />

          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobilna navigacija"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,22rem)] flex-col bg-surface"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Logo height={36} href="/" />
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-ink"
                aria-label="Zatvori meni"
                onClick={close}
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav
              aria-label="Mobilna navigacija"
              className="flex-1 overflow-y-auto px-3 py-4"
            >
              <ul className="flex flex-col gap-1">
                {mainNavigation.map((item) => {
                  if ("children" in item && item.children) {
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-medium text-ink"
                          aria-expanded={projectsOpen}
                          onClick={() => setProjectsOpen((value) => !value)}
                        >
                          {item.label}
                          <span className="text-xs text-muted">
                            {projectsOpen ? "−" : "+"}
                          </span>
                        </button>
                        {projectsOpen ? (
                          <ul className="mb-2 ml-3 border-l border-line pl-2">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="block px-3 py-2.5 text-sm text-graphite hover:text-brand-red"
                                  onClick={close}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-3 text-base font-medium text-ink hover:text-brand-red"
                        onClick={close}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-line p-5">
              <a
                href={PHONE_HREF}
                className="flex w-full items-center justify-center gap-2 bg-ink px-4 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-brand-red"
              >
                <Phone className="size-4" aria-hidden />
                Pozovite {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
