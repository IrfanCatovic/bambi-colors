/**
 * Shared TypeScript types for site content.
 * Keep all business content typed so pages stay thin shells over data files.
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
  /** Placeholder-friendly — use "—" or "TBD" until confirmed */
  value: string;
};

export type ProjectImageSet = {
  /** Path under /public — replace with final render when available */
  hero: string;
  gallery: string[];
  heroAlt: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  /** Short location label for nav / cards (e.g. "Novi Pazar") */
  locationLabel: string;
  /** Full location line (city, country) */
  location: string;
  /** Project typology, e.g. residential-commercial */
  type: string;
  /** One-line summary for cards and listings */
  shortDescription: string;
  /** Longer body copy for the project page */
  description: string;
  /** Development status — placeholder until confirmed */
  status: string;
  href: string;
  stats: ProjectStat[];
  images: ProjectImageSet;
};

export type BusinessArea = {
  id: string;
  title: string;
  shortDescription: string;
  href: string;
  /** Path under /public — replace when assets are ready */
  image: string;
  imageAlt: string;
};

export type CompanyContact = {
  phoneDisplay: string;
  phoneHref: string;
  /** Street / city placeholder until confirmed */
  addressLines: string[];
};
