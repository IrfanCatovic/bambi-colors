"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { ProjectsDropdown } from "@/components/navigation/ProjectsDropdown";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
};

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

/**
 * Desktop primary navigation — slightly larger for scanability.
 */
export function DesktopNav({ className }: DesktopNavProps) {
  const pathname = normalizePath(usePathname() ?? "/");

  return (
    <nav
      aria-label="Glavna navigacija"
      className={cn("hidden items-center gap-7 xl:gap-8 lg:flex", className)}
    >
      {mainNavigation.map((item) => {
        if ("children" in item && item.children) {
          const childActive = item.children.some(
            (child) => normalizePath(child.href) === pathname,
          );

          return (
            <ProjectsDropdown
              key={item.label}
              label={item.label}
              items={item.children}
              active={childActive}
            />
          );
        }

        const href = normalizePath(item.href);
        const active = href === pathname;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "link-draw pb-0.5 text-[0.95rem] font-medium tracking-wide transition-colors hover:text-brand-red",
              active ? "text-brand-red" : "text-ink",
            )}
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
