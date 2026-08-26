import { Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { finalCta } from "@/data/homepage";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/company";

export function FinalCta() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {finalCta.text}
          </p>
          <a
            href={PHONE_HREF}
            className="mt-10 inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-lg font-medium tracking-wide text-white transition-colors duration-200 hover:border-brand-red hover:bg-brand-red sm:text-xl"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-5" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
      </Container>
    </section>
  );
}
