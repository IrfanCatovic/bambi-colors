import { Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { finalCta } from "@/data/homepage";
import { PHONE_DISPLAY, PHONE_HREF } from "@/data/company";

export function FinalCta() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mx-auto mb-8 block h-px w-16 bg-brand-red/80"
            aria-hidden
          />
          <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl lg:text-[3.35rem]">
            {finalCta.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/72 sm:text-xl">
            {finalCta.text}
          </p>
          <a
            href={PHONE_HREF}
            className="mt-10 inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-xl font-medium tracking-wide text-white transition-colors duration-200 hover:border-brand-red hover:bg-brand-red sm:text-2xl"
            aria-label={`Pozovite ${PHONE_DISPLAY}`}
          >
            <Phone className="size-5 sm:size-6" aria-hidden />
            {PHONE_DISPLAY}
          </a>
        </div>
      </Container>
    </section>
  );
}
