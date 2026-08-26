import Image from "next/image";
import Link from "next/link";
import { COMPANY_LOGO, COMPANY_NAME } from "@/data/company";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Visual height in CSS pixels */
  height?: number;
  priority?: boolean;
  href?: string | null;
};

/**
 * Official Bambi Colors Group logo — do not restyle the mark itself.
 */
export function Logo({
  className,
  height = 40,
  priority = false,
  href = "/",
}: LogoProps) {
  const width = Math.round((COMPANY_LOGO.width / COMPANY_LOGO.height) * height);

  const image = (
    <Image
      src={COMPANY_LOGO.src}
      alt={COMPANY_LOGO.alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ height, width: "auto" }}
    />
  );

  if (href === null) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center focus-visible:outline-offset-4"
      aria-label={COMPANY_NAME}
    >
      {image}
    </Link>
  );
}
