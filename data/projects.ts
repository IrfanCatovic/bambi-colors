import type { Project } from "./types";

/**
 * Project content — confirmed facts only; placeholders marked clearly.
 *
 * Image swap: replace the .svg files with final .webp renders and update
 * the paths below (e.g. hero.svg to hero.webp).
 */

export const projects: Project[] = [
  {
    id: "novi-pazar",
    slug: "novi-pazar",
    name: "Novi Pazar",
    locationLabel: "Novi Pazar",
    location: "Novi Pazar, Srbija",
    type: "Stambeno-poslovni projekat",
    shortDescription:
      "Dvije lamele, 48 stanova i 51 parking mjesto u projektu koji spaja funkcionalnost, kvalitet i savremeni gradski život.",
    description:
      "Projekat savremenog gradskog stanovanja organizovan kroz dvije lamele, sa funkcionalnim stambenim jedinicama, poslovnim prostorom i organizovanim parkingom.",
    status: "Aktuelan projekat",
    href: "/projekti/novi-pazar/",
    heroLabel: "NOVI PAZAR · STAMBENO-POSLOVNI PROJEKAT",
    heroHeading: "Savremeno stanovanje, promišljeno do detalja.",
    heroDescription:
      "Dvije lamele, 48 stanova i 51 parking mjesto u projektu koji spaja funkcionalnost, kvalitet i savremeni gradski život.",
    sectionLabel: "NOVI PAZAR",
    sectionTitle: "Stambeno-poslovni projekat",
    sectionCopy:
      "Projekat savremenog gradskog stanovanja organizovan kroz dvije lamele, sa funkcionalnim stambenim jedinicama, poslovnim prostorom i organizovanim parkingom.",
    facts: ["48 stanova", "2 lamele", "51 parking mjesto", "Po + Pr + 6"],
    stats: [
      { label: "Stanovi", value: "48" },
      { label: "Lamele", value: "2" },
      { label: "Parking", value: "51" },
      { label: "Spratnost", value: "Po + Pr + 6" },
    ],
    images: {
      hero: "/images/projects/novi-pazar/hero.jpg",
      card: "/images/projects/novi-pazar/card.jpg",
      gallery: [
        "/images/projects/novi-pazar/gallery-01.jpg",
        "/images/projects/novi-pazar/gallery-02.jpg",
      ],
      heroAlt: "Projekat Novi Pazar — eksterijer stambeno-poslovnog objekta",
      renderBrief:
        "Wide exterior architectural render of the complete residential building, preferably 3/4 perspective, daytime or warm evening light. Building dominant with negative space for hero copy.",
    },
  },
  {
    id: "sjenica",
    slug: "sjenica",
    name: "Sjenica",
    locationLabel: "Sjenica",
    location: "Sjenica, Srbija",
    type: "Stambeno-poslovni projekat",
    shortDescription:
      "55 stanova, 6 poslovnih prostora i 63 parking mjesta u savremenom objektu projektovanom za svakodnevni komfor.",
    description:
      "Savremeno projektovan objekat koji povezuje stanovanje, poslovne sadržaje i organizovanu garažnu i parking infrastrukturu.",
    status: "Aktuelan projekat",
    href: "/projekti/sjenica/",
    heroLabel: "SJENICA · STAMBENO-POSLOVNI PROJEKAT",
    heroHeading: "Prostor za život koji traje.",
    heroDescription:
      "55 stanova, 6 poslovnih prostora i 63 parking mjesta u savremenom objektu projektovanom za svakodnevni komfor.",
    sectionLabel: "SJENICA",
    sectionTitle: "Stambeno-poslovni projekat",
    sectionCopy:
      "Savremeno projektovan objekat koji povezuje stanovanje, poslovne sadržaje i organizovanu garažnu i parking infrastrukturu.",
    facts: [
      "55 stanova",
      "6 poslovnih prostora",
      "63 parking mjesta",
      "Po + Pr + 6",
    ],
    stats: [
      { label: "Stanovi", value: "55" },
      { label: "Poslovni", value: "6" },
      { label: "Parking", value: "63" },
      { label: "Spratnost", value: "Po + Pr + 6" },
    ],
    images: {
      hero: "/images/projects/sjenica/hero.jpg",
      card: "/images/projects/sjenica/card.jpg",
      gallery: [],
      heroAlt: "Projekat Sjenica — eksterijer stambeno-poslovnog objekta",
      renderBrief:
        "Wide exterior render showing the complete residential-commercial building. Clean daylight, street-level or elevated 3/4 perspective.",
    },
  },
  {
    id: "kolasin",
    slug: "kolasin",
    name: "Kolašin",
    locationLabel: "Kolašin",
    location: "Kolašin, Crna Gora",
    type: "Apart-hotel",
    shortDescription:
      "Apart-hotel u Smailagića Polju osmišljen za lični boravak i investicioni potencijal u jednoj od najpoznatijih planinskih destinacija Crne Gore.",
    description:
      "Planinski apart-hotel osmišljen kao spoj savremenog boravka, odmora i mogućnosti ulaganja u nekretninu na atraktivnoj turističkoj lokaciji.",
    status: "Aktuelan projekat",
    href: "/projekti/kolasin/",
    heroLabel: "KOLAŠIN · APART-HOTEL",
    heroHeading: "Planinski život. Investicija sa karakterom.",
    heroDescription:
      "Apart-hotel u Smailagića Polju osmišljen za lični boravak i investicioni potencijal u jednoj od najpoznatijih planinskih destinacija Crne Gore.",
    sectionLabel: "KOLAŠIN · CRNA GORA",
    sectionTitle: "Apart-hotel",
    sectionCopy:
      "Planinski apart-hotel osmišljen kao spoj savremenog boravka, odmora i mogućnosti ulaganja u nekretninu na atraktivnoj turističkoj lokaciji.",
    facts: [
      "Turističko stanovanje",
      "Smailagića Polje",
      "Apartmanski koncept",
      "Lični boravak + investicioni potencijal",
    ],
    stats: [
      { label: "Lokacija", value: "Smailagića Polje" },
      { label: "Tip", value: "Apart-hotel" },
      { label: "Koncept", value: "Apartmani" },
      { label: "Namjena", value: "Boravak + investicija" },
    ],
    images: {
      hero: "/images/projects/kolasin/hero.jpg",
      card: "/images/projects/kolasin/card.jpg",
      gallery: ["/images/projects/kolasin/gallery-01.jpg"],
      heroAlt: "Projekat Kolašin — eksterijer apart-hotela",
      renderBrief:
        "Wide exterior render of the apart-hotel with mountain/environment context. Premium but natural atmosphere showing architecture within Kolašin.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectNavLinks = projects.map((project) => ({
  label: project.locationLabel,
  href: project.href,
}));
