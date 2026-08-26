import type { StatItem, WhyItem } from "./types";

/**
 * Homepage-specific content blocks.
 */

export const homepageStats: StatItem[] = [
  { value: "15+", label: "godina iskustva" },
  { value: "3", label: "grada sa aktuelnim projektima" },
  { value: "100+", label: "stambenih jedinica u projektima" },
  { value: "4", label: "oblasti poslovanja" },
];

export const brandStatement = {
  eyebrow: "BAMBI COLORS GROUP",
  heading: "Od građevinskog materijala do prostora za život.",
  paragraphs: [
    "Više od 15 godina iskustva u građevinskom sektoru omogućilo nam je da razvijemo poslovanje koje danas povezuje građevinski materijal, veleprodaju, završne radove i razvoj sopstvenih stambenih i turističkih projekata.",
    "Poznavanje cijelog procesa daje nam širu perspektivu svakog projekta — od izbora materijala i izvođenja do prostora koji na kraju postaje dom, poslovni prostor ili investicija.",
  ],
} as const;

export const projectsSection = {
  heading: "Aktuelni projekti",
  intro:
    "Savremeni stambeni i turistički projekti u Novom Pazaru, Sjenici i Kolašinu.",
} as const;

export const whyBambi: {
  heading: string;
  items: WhyItem[];
} = {
  heading: "Zašto Bambi Colors Group",
  items: [
    {
      title: "Iskustvo koje se gradi godinama",
      description:
        "Više od 15 godina prisustva u građevinskom sektoru.",
    },
    {
      title: "Od materijala do investicije",
      description:
        "Poslovanje koje povezuje građevinski materijal, izvođenje i razvoj sopstvenih projekata.",
    },
    {
      title: "Fokus na kvalitet",
      description:
        "Pažljiv odnos prema materijalima, izvedbi i završnoj obradi svakog prostora.",
    },
    {
      title: "Dugoročna vrijednost",
      description:
        "Projekti osmišljeni sa fokusom na funkcionalnost, lokaciju i kvalitet života.",
    },
  ],
};

export const businessAreasSection = {
  heading: "Čime se bavimo",
  intro: "Znanje i iskustvo kroz više oblasti građevinske industrije.",
} as const;

export const aboutTeaser = {
  heading: "Kompanija izgrađena na iskustvu.",
  text: "Od prvih koraka u trgovini građevinskim materijalom do razvoja sopstvenih stambenih i turističkih projekata, Bambi Colors Group danas povezuje različite dijelove građevinskog procesa u jednu cjelinu.",
  ctaLabel: "Upoznajte Bambi Colors Group",
  href: "/o-nama/",
  image: {
    // Replace with /images/company/about-home.webp when ready
    src: "/images/company/about-home.svg",
    alt: "Bambi Colors Group — gradnja i arhitektura (placeholder)",
    renderBrief:
      "Premium wide construction or architectural detail image representing scale, precision and development. No people required.",
  },
} as const;

export const finalCta = {
  heading: "Zainteresovani ste za neki od naših projekata?",
  text: "Za više informacija o projektima, strukturama stanova i apartmana i uslovima kupovine, kontaktirajte naš prodajni tim.",
} as const;

export const HERO_AUTOPLAY_MS = 6000;
