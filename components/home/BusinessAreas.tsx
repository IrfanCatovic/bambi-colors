import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { businessAreasSection } from "@/data/homepage";
import type { BusinessArea } from "@/data/types";

type BusinessAreasProps = {
  areas: BusinessArea[];
};

/**
 * Architectural grid of business areas — no icon cards.
 */
export function BusinessAreas({ areas }: BusinessAreasProps) {
  return (
    <section className="border-y border-line bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {businessAreasSection.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {businessAreasSection.intro}
          </p>
        </div>

        <div className="mt-12 grid border border-line sm:grid-cols-2">
          {areas.map((area, index) => (
            <Link
              key={area.id}
              href={area.href}
              className={`group flex flex-col justify-between gap-8 p-7 transition-colors duration-200 hover:bg-surface sm:p-9 ${
                index % 2 === 1 ? "sm:border-l sm:border-line" : ""
              } ${index >= 2 ? "border-t border-line" : ""}`}
            >
              <div>
                <span
                  className="mb-5 block h-px w-10 bg-brand-red transition-all duration-200 group-hover:w-14"
                  aria-hidden
                />
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
                  {area.shortDescription}
                </p>
              </div>
              <span className="text-sm font-medium text-graphite transition-colors group-hover:text-brand-red">
                Saznajte više →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
