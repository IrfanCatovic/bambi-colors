import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { businessAreasSection } from "@/data/homepage";
import type { BusinessArea } from "@/data/types";

type BusinessAreasProps = {
  areas: BusinessArea[];
};

/**
 * Capability overview — numbered columns with thin dividers, no cards.
 */
export function BusinessAreas({ areas }: BusinessAreasProps) {
  return (
    <section className="border-y border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            {businessAreasSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
            {businessAreasSection.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-0 border-t border-line sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {areas.map((area, index) => (
            <Link
              key={area.id}
              href={area.href}
              className={`group flex flex-col border-b border-line py-8 transition-colors duration-200 hover:bg-surface/80 md:px-6 md:py-10 xl:border-b-0 xl:px-7 ${
                index > 0 ? "xl:border-l xl:border-line" : ""
              } ${index % 2 === 1 ? "md:border-l md:border-line xl:border-l" : ""} ${
                index >= 2 ? "md:border-t md:border-line xl:border-t-0" : ""
              }`}
            >
              <span className="font-display text-2xl text-brand-red sm:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-2xl font-medium tracking-tight text-ink sm:text-[1.65rem]">
                {area.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                {area.shortDescription}
              </p>
              <span className="mt-8 text-[0.95rem] font-medium text-graphite transition-colors group-hover:text-brand-red">
                Saznajte više
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
