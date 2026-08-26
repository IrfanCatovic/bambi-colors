import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  src: string;
  alt: string;
  /** Primary identity line shown on placeholders, e.g. "NOVI PAZAR" */
  title: string;
  /** Secondary line, e.g. project type */
  subtitle?: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
  /** Darker overlay for hero readability */
  tone?: "default" | "hero";
};

/**
 * Project / company visual slot.
 * Final photos use next/image; .svg paths render an intentional
 * architectural placeholder (no technical/dev copy in the UI).
 */
export function ProjectVisual({
  src,
  alt,
  title,
  subtitle,
  className,
  aspectClassName = "aspect-[16/10]",
  priority = false,
  tone = "default",
}: ProjectVisualProps) {
  const isPlaceholder = src.endsWith(".svg");

  if (!isPlaceholder) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-ink",
          aspectClassName,
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#161616]",
        aspectClassName,
        className,
      )}
      role="img"
      aria-label={alt}
    >
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />

      {/* Abstract building-line geometry */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-white/12"
        >
          <path d="M180 860 V420 H320 V860" />
          <path d="M320 860 V280 H520 V860" />
          <path d="M520 860 V180 H780 V860" />
          <path d="M780 860 V320 H980 V860" />
          <path d="M980 860 V400 H1180 V860" />
          <path d="M1180 860 V520 H1360 V860" />
          <path d="M420 280 V220 H620 V280" />
          <path d="M620 180 L700 110 L780 180" />
        </g>
        <line
          x1="180"
          y1="860"
          x2="1360"
          y2="860"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand-red/70"
        />
        <line
          x1="180"
          y1="180"
          x2="180"
          y2="220"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-red"
        />
      </svg>

      <div
        className={cn(
          "absolute inset-0",
          tone === "hero"
            ? "bg-gradient-to-r from-ink/50 via-transparent to-transparent"
            : "bg-gradient-to-t from-ink/50 via-transparent to-ink/20",
        )}
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
        {tone !== "hero" ? (
          <>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-brand-red-soft sm:text-xs">
              {title}
            </p>
            {subtitle ? (
              <p className="mt-2 font-display text-xl font-medium tracking-tight text-white/90 sm:text-2xl">
                {subtitle}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
