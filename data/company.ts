import type { CompanyContact } from "./types";

/**
 * Single source of truth for company identity and contact.
 */

export const COMPANY_NAME = "Bambi Colors Group";

export const COMPANY_LOGO = {
  src: "/brand/logo.png",
  alt: "Bambi Colors Group",
  width: 2172,
  height: 724,
} as const;

export const COMPANY_TAGLINE =
  "Od građevinskog materijala do prostora za život.";

export const COMPANY_DESCRIPTION =
  "Bambi Colors Group povezuje građevinski materijal, veleprodaju, završne radove i razvoj sopstvenih stambenih i turističkih projekata.";

export const COMPANY_CONTACT: CompanyContact = {
  phoneDisplay: "063 470 666",
  phoneHref: "tel:+38163470666",
  addressLines: ["Dr Ejupa Mušovića 61, Novi Pazar"],
};

export const PHONE_DISPLAY = COMPANY_CONTACT.phoneDisplay;
export const PHONE_HREF = COMPANY_CONTACT.phoneHref;

export const SITE_URL = "https://bambicolorsgroup.rs"; // TODO: confirm production domain

export const DEFAULT_SEO = {
  title: COMPANY_NAME,
  titleTemplate: `%s | ${COMPANY_NAME}`,
  description:
    "Bambi Colors Group — investicije i stambeni razvoj, građevinski materijal, veleprodaja i završni radovi.",
};
