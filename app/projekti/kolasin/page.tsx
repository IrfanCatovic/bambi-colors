import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { StatsItem } from "@/components/ui/StatsItem";
import { CtaLink } from "@/components/ui/CtaLink";
import { getProjectBySlug } from "@/data/projects";
import { PHONE_HREF } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

const SLUG = "kolasin";

export const metadata = buildMetadata({
  title: "Kolašin",
  description:
    "Apart-hotel / turističko-stambeni razvoj u Kolašinu — Bambi Colors Group.",
  path: `/projekti/${SLUG}/`,
});

export default function KolasinProjectPage() {
  const project = getProjectBySlug(SLUG);
  if (!project) notFound();

  return (
    <PageShell
      eyebrow={project.type}
      title={project.name}
      description={project.shortDescription}
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <ImagePlaceholder
          src={project.images.hero}
          alt={project.images.heroAlt}
          priority
          label={project.name}
        />
        <div>
          <p className="text-sm text-muted">{project.location}</p>
          <p className="mt-2 text-sm text-graphite">Status: {project.status}</p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {project.stats.map((stat) => (
              <StatsItem key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
          <div className="mt-8">
            <CtaLink href={PHONE_HREF} variant="phone">
              Kontaktirajte prodaju
            </CtaLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
