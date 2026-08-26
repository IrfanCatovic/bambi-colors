import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { BusinessAreaCard } from "@/components/project/BusinessAreaCard";
import { CtaLink } from "@/components/ui/CtaLink";
import { COMPANY_NAME, COMPANY_TAGLINE, PHONE_HREF } from "@/data/company";
import { projects } from "@/data/projects";
import { businessAreas } from "@/data/business-areas";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
});

/**
 * Homepage — structural placeholder only.
 * Full marketing design will follow in a later step.
 */
export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="border-b border-line bg-white">
        <Container className="py-20 sm:py-24 lg:py-28">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-bronze">
            {COMPANY_NAME}
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Građevina i investicije kroz ceo lanac vrednosti
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {COMPANY_TAGLINE}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaLink href="/projekti/novi-pazar/">Pogledajte projekat</CtaLink>
            <CtaLink href={PHONE_HREF} variant="phone">
              Pozovite nas
            </CtaLink>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Projekti"
            title="Aktivni razvojni projekti"
            description="Svaki projekat ima svoju stranicu. Detaljni sadržaj biće dopunjen potvrđenim podacima."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Delatnosti"
            title="Ceo građevinski lanac"
            description="Investicije i razvoj, materijal, veleprodaja i završni radovi — pod jednim brendom."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area) => (
              <BusinessAreaCard key={area.id} area={area} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
