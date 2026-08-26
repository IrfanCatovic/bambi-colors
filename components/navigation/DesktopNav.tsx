import Link from "next/link";
import { mainNavigation } from "@/data/navigation";
import { ProjectsDropdown } from "@/components/navigation/ProjectsDropdown";
import { cn } from "@/lib/utils";

type DesktopNavProps = {
  className?: string;
};

/**
 * Desktop primary navigation with projects dropdown.
 */
export function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav
      aria-label="Glavna navigacija"
      className={cn("hidden items-center gap-7 lg:flex", className)}
    >
      {mainNavigation.map((item) => {
        if ("children" in item && item.children) {
          return (
            <ProjectsDropdown
              key={item.label}
              label={item.label}
              items={item.children}
            />
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-ink transition-colors hover:text-bronze"
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
