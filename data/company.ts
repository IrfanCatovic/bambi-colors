import type { CompanyContact } from "./types";

/**
 * Single source of truth for company identity and contact.
 * Change phone / address here — components consume these constants.
 */

export const COMPANY_NAME = "Bambi Colors Group";

export const COMPANY_TAGLINE =
  "Građevinski lanac — od materijala i izvođenja do razvoja stambenih, komercijalnih i ugostiteljskih projekata.";

/** Short footer / about blurb — replace with confirmed copy later */
export const COMPANY_DESCRIPTION =
  "Bambi Colors Group je građevinska i investiciona grupacija. Delujemo kroz investicije i stambeni razvoj, građevinski materijal, veleprodaju i završne radove.";

export const COMPANY_CONTACT: CompanyContact = {
  phoneDisplay: "063 470 666",
  phoneHref: "tel:+38163470666",
  addressLines: [
    // TODO: replace with confirmed address
    "Adresa — biće potvrđena",
    "Srbija",
  ],
};

/** Re-export phone helpers for one-line imports */
export const PHONE_DISPLAY = COMPANY_CONTACT.phoneDisplay;
export const PHONE_HREF = COMPANY_CONTACT.phoneHref;

export const SITE_URL = "https://bambicolorsgroup.rs"; // TODO: confirm production domain

export const DEFAULT_SEO = {
  title: COMPANY_NAME,
  titleTemplate: `%s | ${COMPANY_NAME}`,
  description:
    "Bambi Colors Group — investicije i stambeni razvoj, građevinski materijal, veleprodaja i završni radovi.",
};
