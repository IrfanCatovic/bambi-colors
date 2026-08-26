import { Container } from "@/components/layout/Container";
import { whyBambi } from "@/data/homepage";

export function WhyBambi() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              {whyBambi.heading}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-line border-y border-line">
              {whyBambi.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-8"
                >
                  <span className="font-display text-2xl text-brand-red">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-ink sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
