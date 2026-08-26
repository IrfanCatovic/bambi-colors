import { Container } from "@/components/layout/Container";
import { brandStatement } from "@/data/homepage";

export function BrandStatement() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3 lg:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-red sm:text-[0.8rem]">
              {brandStatement.eyebrow}
            </p>
            <div
              className="mt-5 h-px w-14 bg-brand-red"
              aria-hidden
            />
          </div>
          <div className="lg:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
              {brandStatement.heading}
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted sm:text-xl">
              {brandStatement.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
