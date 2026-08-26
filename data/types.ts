/**
 * Shared TypeScript types for site content.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem =
  | (NavLink & { children?: never })
  | {
      label: string;
      href?: never;
      children: NavLink[];
    };

export type ProjectStat = {
  label: string;
  value: string;
};

export type ProjectImageSet = {
  /**
   * Hero image path.
   * Swap the .svg placeholder for hero.webp when the final render is ready.
   */
  hero: string;
  /**
   * Optional separate image for homepage project sections.
   * Falls back to hero when omitted.
   */
  card?: string;
  gallery: string[];
  heroAlt: string;
  /** Brief describing the final render needed */
  renderBrief: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  locationLabel: string;
  location: string;
  type: string;
  shortDescription: string;
  description: string;
  status: string;
  href: string;
  /** Hero slider eyebrow, e.g. "NOVI PAZAR · STAMBENO-POSLOVNI PROJEKAT" */
  heroLabel: string;
  heroHeading: string;
  heroDescription: string;
  /** Projects section label */
  sectionLabel: string;
  sectionTitle: string;
  sectionCopy: string;
  /** Short fact chips / bullets for homepage */
  facts: string[];
  stats: ProjectStat[];
  images: ProjectImageSet;
};

export type BusinessArea = {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

export type CompanyContact = {
  phoneDisplay: string;
  phoneHref: string;
  addressLines: string[];
};

export type StatItem = {
  value: string;
  label: string;
};

export type WhyItem = {
  title: string;
  description: string;
};
