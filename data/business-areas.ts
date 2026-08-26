import type { BusinessArea } from "./types";

/**
 * Business areas communicated under the single master brand.
 */

export const businessAreas: BusinessArea[] = [
  {
    id: "investments",
    title: "Investicije i stambeni razvoj",
    shortDescription:
      "Razvoj stambenih, komercijalnih i ugostiteljskih projekata.",
    href: "/projekti/novi-pazar/",
    image: "/images/company/investments.svg",
    imageAlt: "Investicije i stambeni razvoj",
  },
  {
    id: "materials",
    title: "Građevinski materijal",
    shortDescription:
      "Asortiman građevinskog materijala za profesionalne i privatne projekte.",
    href: "/gradjevinski-materijal/",
    image: "/images/materials/hero.svg",
    imageAlt: "Građevinski materijal",
  },
  {
    id: "wholesale",
    title: "Veleprodaja",
    shortDescription:
      "Veleprodajna ponuda za partnere u građevinskom lancu.",
    href: "/veleprodaja/",
    image: "/images/services/wholesale.svg",
    imageAlt: "Veleprodaja",
  },
  {
    id: "finishing",
    title: "Završni radovi",
    shortDescription:
      "Izvođenje završnih građevinskih radova uz fokus na kvalitet.",
    href: "/zavrsni-radovi/",
    image: "/images/services/finishing.svg",
    imageAlt: "Završni radovi",
  },
];
