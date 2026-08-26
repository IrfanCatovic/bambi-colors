import { PageShell } from "@/components/layout/PageShell";
import { CtaLink } from "@/components/ui/CtaLink";
import { PHONE_HREF } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "O nama",
  description:
    "Bambi Colors Group — građevinska i investiciona grupacija. Sadržaj stranice biće dopunjen.",
  path: "/o-nama/",
});

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Kompanija"
      title="O nama"
      description="Stranica o kompaniji. Tekst i vizuali biće dodati nakon potvrde sadržaja."
    >
      <p className="max-w-2xl text-base leading-relaxed text-muted">
        {/* TODO: replace with confirmed about copy */}
        Placeholder sadržaj — Bambi Colors Group posluje kroz investicije i
        stambeni razvoj, građevinski materijal, veleprodaju i završne radove.
      </p>
      <div className="mt-8">
        <CtaLink href={PHONE_HREF} variant="phone">
          Kontaktirajte prodaju
        </CtaLink>
      </div>
    </PageShell>
  );
}
