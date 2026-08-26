import { PageShell } from "@/components/layout/PageShell";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CtaLink } from "@/components/ui/CtaLink";
import { PHONE_HREF } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Građevinski materijal",
  description:
    "Građevinski materijal — Bambi Colors Group. Sadržaj stranice biće dopunjen.",
  path: "/gradjevinski-materijal/",
});

export default function MaterialsPage() {
  return (
    <PageShell
      eyebrow="Delatnost"
      title="Građevinski materijal"
      description="Asortiman i ponuda biće detaljno predstavljeni nakon potvrde sadržaja."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ImagePlaceholder
          src="/images/materials/hero.svg"
          alt="Građevinski materijal — placeholder"
          label="Građevinski materijal"
        />
        <div>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {/* TODO: replace with confirmed materials copy */}
            Placeholder sadržaj za stranicu građevinskog materijala.
          </p>
          <div className="mt-8">
            <CtaLink href={PHONE_HREF} variant="phone">
              Pozovite nas
            </CtaLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
