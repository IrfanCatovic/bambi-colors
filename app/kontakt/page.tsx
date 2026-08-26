import { PageShell } from "@/components/layout/PageShell";
import { CtaLink } from "@/components/ui/CtaLink";
import {
  COMPANY_CONTACT,
  COMPANY_NAME,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kontakt",
  description: `Kontaktirajte ${COMPANY_NAME} — ${PHONE_DISPLAY}.`,
  path: "/kontakt/",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Kontakt"
      title="Kontaktirajte nas"
      description="Za informacije o projektima i prodaji, pozovite nas."
    >
      <div className="max-w-lg space-y-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
            Telefon
          </p>
          <a
            href={PHONE_HREF}
            className="mt-2 inline-block font-display text-3xl font-medium tracking-tight text-ink transition-colors hover:text-brand-red sm:text-4xl"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
            Adresa
          </p>
          <div className="mt-2 space-y-1 text-base text-muted">
            {COMPANY_CONTACT.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <CtaLink href={PHONE_HREF} variant="primary">
          Pozovite nas
        </CtaLink>
      </div>
    </PageShell>
  );
}
