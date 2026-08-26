import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { aboutTeaser } from "@/data/homepage";

export function AboutTeaser() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative min-h-[28rem] overflow-hidden bg-ink text-white sm:min-h-[32rem]">
          <div className="absolute inset-0">
            <ProjectVisual
              src={aboutTeaser.image.src}
              alt={aboutTeaser.image.alt}
              title="BAMBI COLORS GROUP"
              subtitle="Građevina i investicije"
              aspectClassName="h-full w-full"
              tone="hero"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/50" />
            {/* Subtle construction lines */}
            <div
              className="pointer-events-none absolute inset-y-10 right-10 hidden w-px bg-white/10 lg:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-10 left-10 right-10 hidden h-px bg-brand-red/50 lg:block"
              aria-hidden
            />
          </div>

          <div className="relative grid min-h-[28rem] items-end px-6 py-14 sm:min-h-[32rem] sm:px-10 sm:py-16 lg:grid-cols-12 lg:px-14 lg:py-20">
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                {aboutTeaser.heading}
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/78 sm:text-xl">
                {aboutTeaser.text}
              </p>
              <Link
                href={aboutTeaser.href}
                className="mt-9 inline-flex border border-white/35 px-6 py-3.5 text-[0.95rem] font-medium tracking-wide text-white transition-colors duration-200 hover:border-brand-red hover:bg-brand-red"
              >
                {aboutTeaser.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
