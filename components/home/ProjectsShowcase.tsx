import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { projectsSection } from "@/data/homepage";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";

type ProjectsShowcaseProps = {
  projects: Project[];
};

/**
 * Large alternating portfolio rows — architecture first.
 */
export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section
      id="projekti"
      className="scroll-mt-28 border-y border-line bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            {projectsSection.heading}
          </h2>
          <span className="brand-rule mt-6 block" aria-hidden />
          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            {projectsSection.intro}
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-14 lg:mt-16 lg:space-y-20">
          {projects.map((project, index) => {
            const imageSrc = project.images.card ?? project.images.hero;
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12"
              >
                <div
                  className={cn(
                    "group lg:col-span-7",
                    reverse && "lg:order-2",
                  )}
                >
                  <ProjectVisual
                    src={imageSrc}
                    alt={project.images.heroAlt}
                    title={project.sectionLabel}
                    subtitle={project.sectionTitle}
                    aspectClassName="aspect-[16/11] h-full min-h-[18rem] lg:min-h-[30rem]"
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  />
                </div>

                <div
                  className={cn(
                    "flex flex-col justify-center lg:col-span-5",
                    reverse && "lg:order-1",
                  )}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-red sm:text-[0.8rem]">
                    {project.sectionLabel}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                    {project.sectionTitle}
                  </h3>

                  <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-6">
                    {project.facts.map((fact) => (
                      <div key={fact} className="flex gap-3">
                        <span
                          className="mt-2 h-px w-4 shrink-0 bg-brand-red"
                          aria-hidden
                        />
                        <dt className="text-[0.95rem] leading-snug text-graphite sm:text-base">
                          {fact}
                        </dt>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-7 text-base leading-relaxed text-muted sm:text-lg">
                    {project.sectionCopy}
                  </p>

                  <Link
                    href={project.href}
                    className="link-draw mt-8 inline-flex w-fit pb-0.5 text-[0.95rem] font-medium tracking-wide text-ink transition-colors hover:text-brand-red"
                  >
                    Pogledajte projekat
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
