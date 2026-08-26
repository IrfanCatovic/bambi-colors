import Link from "next/link";
import { cn } from "@/lib/utils";

type CtaVariant = "primary" | "secondary" | "ghost" | "phone";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: CtaVariant;
  className?: string;
  external?: boolean;
};

const variants: Record<CtaVariant, string> = {
  primary:
    "bg-ink text-white hover:bg-ink-soft border border-ink",
  secondary:
    "bg-transparent text-ink border border-line hover:border-ink",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-line",
  phone:
    "bg-transparent text-ink border border-bronze/40 hover:border-bronze",
};

/**
 * Primary interactive CTA / link control.
 * Prefer links over buttons for navigation and tel: actions.
 */
export function CtaLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: CtaLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200",
    variants[variant],
    className,
  );

  if (href.startsWith("tel:") || external) {
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
