import { Container } from "@/components/layout/Container";
import { brandStatement } from "@/data/homepage";

export function BrandStatement() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
              {brandStatement.eyebrow}
            </p>
            <div className="mt-6 hidden h-px w-16 bg-brand-red lg:block" aria-hidden />
          </div>
          <div className="lg:col-span-8">
            <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {brandStatement.heading}
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
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
