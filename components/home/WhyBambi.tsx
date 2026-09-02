import { Container } from "@/components/layout/Container";
import { whyBambi } from "@/data/homepage";

export function WhyBambi() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
              {whyBambi.heading}
            </h2>
            <div className="mt-6 h-px w-14 bg-brand-red" aria-hidden />
          </div>

          <div className="lg:col-span-8">
            <ol className="border-t border-line">
              {whyBambi.items.map((item, index) => (
                <li
                  key={item.title}
                  className="grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/40 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-9"
                >
                  <span className="tabular-display font-display text-3xl font-medium text-brand-red sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-ink sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
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
