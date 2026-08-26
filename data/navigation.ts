import {
  COMPANY_DESCRIPTION,
  COMPANY_NAME,
} from "./company";
import { projectNavLinks } from "./projects";
import type { NavItem, NavLink } from "./types";

/**
 * Primary site navigation.
 * "Projekti" is a dropdown — there is no /projekti listing page.
 */

export const mainNavigation: NavItem[] = [
  { label: "Početna", href: "/" },
  {
    label: "Projekti",
    children: projectNavLinks,
  },
  { label: "Građevinski materijal", href: "/gradjevinski-materijal/" },
  { label: "Veleprodaja", href: "/veleprodaja/" },
  { label: "Završni radovi", href: "/zavrsni-radovi/" },
  { label: "O nama", href: "/o-nama/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const footerNavigation: NavLink[] = [
  { label: "O nama", href: "/o-nama/" },
  { label: "Građevinski materijal", href: "/gradjevinski-materijal/" },
  { label: "Veleprodaja", href: "/veleprodaja/" },
  { label: "Završni radovi", href: "/zavrsni-radovi/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const footerProjectLinks: NavLink[] = projectNavLinks;

export const footerBrandBlurb = COMPANY_DESCRIPTION;

export const footerBrandName = COMPANY_NAME;
