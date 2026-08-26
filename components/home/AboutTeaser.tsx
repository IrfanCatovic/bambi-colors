import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { aboutTeaser } from "@/data/homepage";

export function AboutTeaser() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="relative overflow-hidden border border-line bg-ink text-white">
          <div className="absolute inset-0">
            <Image
              src={aboutTeaser.image.src}
              alt={aboutTeaser.image.alt}
              fill
              className="object-cover opacity-45"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
          </div>

          <div className="relative grid gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:px-14 lg:py-24">
            <div className="lg:col-span-8">
              <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {aboutTeaser.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {aboutTeaser.text}
              </p>
              <Link
                href={aboutTeaser.href}
                className="mt-8 inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-brand-red hover:bg-brand-red"
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
