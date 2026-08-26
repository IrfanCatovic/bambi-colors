import Image from "next/image";
import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  src?: string;
  alt: string;
  /** Aspect ratio utility class, e.g. aspect-[16/10] */
  aspectClassName?: string;
  className?: string;
  priority?: boolean;
  label?: string;
};

/**
 * Architectural image slot. Uses next/image when src is provided;
 * otherwise renders a calm neutral placeholder ready for final renders.
 */
export function ImagePlaceholder({
  src,
  alt,
  aspectClassName = "aspect-[16/10]",
  className,
  priority = false,
  label,
}: ImagePlaceholderProps) {
  return (
    <figure
      className={cn(
        "relative w-full overflow-hidden border border-line bg-surface-muted",
        aspectClassName,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,var(--surface-muted)_0%,var(--surface)_50%,var(--line)_100%)]"
          aria-hidden={!alt}
          role={alt ? "img" : undefined}
          aria-label={alt || undefined}
        >
          <span className="px-4 text-center text-xs uppercase tracking-[0.2em] text-muted">
            {label ?? "Vizuelni prikaz"}
          </span>
        </div>
      )}
    </figure>
  );
}
