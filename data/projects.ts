import type { Project } from "./types";

/**
 * Project content. Only confirmed facts are filled in;
 * everything else uses clear placeholders for later replacement.
 */

export const projects: Project[] = [
  {
    id: "novi-pazar",
    slug: "novi-pazar",
    name: "Novi Pazar",
    locationLabel: "Novi Pazar",
    location: "Novi Pazar, Srbija",
    type: "Stambeno-poslovni kompleks",
    shortDescription:
      "Stambeno-poslovni razvoj. Detalji projekta biće dopunjeni.",
    description:
      // TODO: replace with confirmed project description
      "Opis projekta u Novom Pazaru biće dodat nakon potvrde sadržaja.",
    status: "U pripremi", // TODO: confirm status
    href: "/projekti/novi-pazar/",
    stats: [
      // TODO: replace with confirmed statistics
      { label: "Jedinice", value: "—" },
      { label: "Površina", value: "—" },
      { label: "Status", value: "—" },
    ],
    images: {
      hero: "/images/projects/novi-pazar/hero.svg",
      gallery: [
        "/images/projects/novi-pazar/gallery-01.svg",
        "/images/projects/novi-pazar/gallery-02.svg",
      ],
      heroAlt: "Projekat Novi Pazar — vizuelni prikaz (placeholder)",
    },
  },
  {
    id: "sjenica",
    slug: "sjenica",
    name: "Sjenica",
    locationLabel: "Sjenica",
    location: "Sjenica, Srbija",
    type: "Stambeno-poslovni kompleks",
    shortDescription:
      "Stambeno-poslovni razvoj. Detalji projekta biće dopunjeni.",
    description:
      // TODO: replace with confirmed project description
      "Opis projekta u Sjenici biće dodat nakon potvrde sadržaja.",
    status: "U pripremi", // TODO: confirm status
    href: "/projekti/sjenica/",
    stats: [
      { label: "Jedinice", value: "—" },
      { label: "Površina", value: "—" },
      { label: "Status", value: "—" },
    ],
    images: {
      hero: "/images/projects/sjenica/hero.svg",
      gallery: [
        "/images/projects/sjenica/gallery-01.svg",
        "/images/projects/sjenica/gallery-02.svg",
      ],
      heroAlt: "Projekat Sjenica — vizuelni prikaz (placeholder)",
    },
  },
  {
    id: "kolasin",
    slug: "kolasin",
    name: "Kolašin",
    locationLabel: "Kolašin",
    location: "Kolašin, Crna Gora",
    type: "Apart-hotel / turističko-stambeni razvoj",
    shortDescription:
      "Apart-hotel i turističko-stambeni razvoj. Detalji projekta biće dopunjeni.",
    description:
      // TODO: replace with confirmed project description
      "Opis projekta u Kolašinu biće dodat nakon potvrde sadržaja.",
    status: "U pripremi", // TODO: confirm status
    href: "/projekti/kolasin/",
    stats: [
      { label: "Jedinice", value: "—" },
      { label: "Površina", value: "—" },
      { label: "Status", value: "—" },
    ],
    images: {
      hero: "/images/projects/kolasin/hero.svg",
      gallery: [
        "/images/projects/kolasin/gallery-01.svg",
        "/images/projects/kolasin/gallery-02.svg",
      ],
      heroAlt: "Projekat Kolašin — vizuelni prikaz (placeholder)",
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
