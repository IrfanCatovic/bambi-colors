import { PageShell } from "@/components/layout/PageShell";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CtaLink } from "@/components/ui/CtaLink";
import { PHONE_HREF } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Veleprodaja",
  description:
    "Veleprodaja — Bambi Colors Group. Sadržaj stranice biće dopunjen.",
  path: "/veleprodaja/",
});

export default function WholesalePage() {
  return (
    <PageShell
      eyebrow="Delatnost"
      title="Veleprodaja"
      description="Veleprodajna ponuda za partnere. Detalji biće dodati nakon potvrde sadržaja."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <ImagePlaceholder
          src="/images/services/wholesale.svg"
          alt="Veleprodaja — placeholder"
          label="Veleprodaja"
        />
        <div>
          <p className="max-w-xl text-base leading-relaxed text-muted">
            {/* TODO: replace with confirmed wholesale copy */}
            Placeholder sadržaj za stranicu veleprodaje.
          </p>
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
