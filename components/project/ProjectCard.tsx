import Link from "next/link";
import type { Project } from "@/data/types";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

/**
 * Project teaser used on homepage and related sections.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col border border-line bg-white transition-colors duration-200 hover:border-graphite/40",
        className,
      )}
    >
      <Link
        href={project.href}
        className="flex h-full flex-col focus-visible:outline-offset-[-2px]"
      >
        <ImagePlaceholder
          src={project.images.hero}
          alt={project.images.heroAlt}
          aspectClassName="aspect-[16/10]"
          label={project.name}
        />
        <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-bronze">
            {project.type}
          </p>
          <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
            {project.name}
          </h3>
          <p className="text-sm text-muted">{project.location}</p>
          <p className="mt-1 text-sm leading-relaxed text-graphite">
            {project.shortDescription}
          </p>
          <span className="mt-auto pt-4 text-sm font-medium text-bronze transition-colors group-hover:text-bronze-deep">
            Pogledajte projekat
          </span>
        </div>
      </Link>
    </article>
  );
}
