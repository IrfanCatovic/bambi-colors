import Link from "next/link";
import type { BusinessArea } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type BusinessAreaCardProps = {
  area: BusinessArea;
  className?: string;
};

/**
 * Compact card linking to a business area page.
 * Kept visually quiet — border, typography, no heavy shadow.
 */
export function BusinessAreaCard({ area, className }: BusinessAreaCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col border border-line bg-white transition-colors duration-200 hover:border-graphite/40",
        className,
      )}
    >
      <Link href={area.href} className="flex h-full flex-col focus-visible:outline-offset-[-2px]">
        <ImagePlaceholder
          src={area.image}
          alt={area.imageAlt}
          aspectClassName="aspect-[4/3]"
          label={area.title}
        />
        <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
          <h3 className="font-display text-xl font-medium tracking-tight text-ink">
            {area.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted">
            {area.shortDescription}
          </p>
          <span className="mt-auto pt-4 text-sm font-medium text-bronze transition-colors group-hover:text-bronze-deep">
            Saznajte više
          </span>
        </div>
      </Link>
    </article>
  );
}
