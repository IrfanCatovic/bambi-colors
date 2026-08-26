import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { projectsSection } from "@/data/homepage";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectsShowcaseProps = {
  projects: Project[];
};

/**
 * Large alternating project presentations — not small cards.
 */
export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section id="projekti" className="scroll-mt-24 border-y border-line bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {projectsSection.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {projectsSection.intro}
          </p>
        </div>

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
          {projects.map((project, index) => {
            const imageSrc = project.images.card ?? project.images.hero;
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={cn(
                    "group relative overflow-hidden border border-line bg-surface-muted lg:col-span-7",
                    reverse && "lg:order-2",
                  )}
                >
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={imageSrc}
                      alt={project.images.heroAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    "lg:col-span-5",
                    reverse && "lg:order-1",
                  )}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
                    {project.sectionLabel}
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {project.sectionTitle}
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-y border-line py-4 text-sm text-graphite">
                    {project.facts.map((fact) => (
                      <li key={fact} className="flex items-center gap-2">
                        <span
                          className="size-1.5 shrink-0 rounded-full bg-brand-red"
                          aria-hidden
                        />
                        {fact}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-base leading-relaxed text-muted">
                    {project.sectionCopy}
                  </p>
                  <Link
                    href={project.href}
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink transition-colors hover:text-brand-red"
                  >
                    Pogledajte projekat
                    <span
                      className="translate-x-0 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
