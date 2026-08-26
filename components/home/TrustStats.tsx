import { Container } from "@/components/layout/Container";
import type { StatItem } from "@/data/types";

type TrustStatsProps = {
  stats: StatItem[];
};

/**
 * Compact scale / trust metrics row beneath the hero.
 */
export function TrustStats({ stats }: TrustStatsProps) {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-10" aria-label="Ključne brojke">
      <Container>
        <div className="grid grid-cols-2 border border-line bg-white lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-7 sm:px-8 sm:py-9 ${
                index % 2 === 1 ? "border-l border-line" : ""
              } ${index >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                index >= 1 ? "lg:border-l lg:border-line" : ""
              }`}
            >
              <p className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
