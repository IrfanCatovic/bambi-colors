import { Container } from "@/components/layout/Container";
import type { StatItem } from "@/data/types";
import { cn } from "@/lib/utils";

type TrustStatsProps = {
  stats: StatItem[];
};

/**
 * Architectural information strip — one composed block, not isolated cards.
 */
export function TrustStats({ stats }: TrustStatsProps) {
  return (
    <section
      className="relative z-20 -mt-10 sm:-mt-12"
      aria-label="Ključne brojke"
    >
      <Container>
        <div className="grid grid-cols-2 border border-line bg-white lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "px-5 py-8 sm:px-8 sm:py-10 lg:px-9 lg:py-11",
                index % 2 === 1 && "border-l border-line",
                index >= 2 && "border-t border-line lg:border-t-0",
                index >= 1 && "lg:border-l lg:border-line",
              )}
            >
              <p className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted sm:text-[0.95rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
