import type { BusinessArea } from "./types";

/**
 * Business areas under the single master brand.
 */

export const businessAreas: BusinessArea[] = [
  {
    id: "investments",
    title: "Investicije i gradnja",
    shortDescription:
      "Razvoj stambenih, poslovnih i turističkih projekata od planiranja do realizacije.",
    href: "/#projekti",
  },
  {
    id: "materials",
    title: "Građevinski materijal",
    shortDescription:
      "Širok izbor završnog građevinskog materijala za privatne kupce i profesionalne izvođače.",
    href: "/gradjevinski-materijal/",
  },
  {
    id: "wholesale",
    title: "Veleprodaja",
    shortDescription:
      "Pouzdano snabdijevanje građevinskim materijalima za firme, izvođače i poslovne partnere.",
    href: "/veleprodaja/",
  },
  {
    id: "finishing",
    title: "Završni radovi",
    shortDescription:
      "Fasaderski, gipsarski i završni građevinski radovi realizovani sa fokusom na kvalitet izvedbe.",
    href: "/zavrsni-radovi/",
  },
];
