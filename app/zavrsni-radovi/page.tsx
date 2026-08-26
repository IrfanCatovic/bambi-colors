import { PageShell } from "@/components/layout/PageShell";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CtaLink } from "@/components/ui/CtaLink";
import { PHONE_HREF } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Završni radovi",
  description:
    "Završni građevinski radovi — Bambi Colors Group. Sadržaj stranice biće dopunjen.",
  path: "/zavrsni-radovi/",
});

export default function FinishingWorksPage() {
  return (
    <PageShell
      eyebrow="Delatnost"
      title="Završni radovi"
      description="Izvođenje završnih radova. Detalji biće dodati nakon potvrde sadržaja."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ImagePlaceholder
          src="/images/services/finishing.svg"
          alt="Završni radovi — placeholder"
          label="Završni radovi"
        />
        <div>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {/* TODO: replace with confirmed finishing-works copy */}
            Placeholder sadržaj za stranicu završnih radova.
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
