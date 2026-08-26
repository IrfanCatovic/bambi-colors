import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustStats } from "@/components/home/TrustStats";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { WhyBambi } from "@/components/home/WhyBambi";
import { BusinessAreas } from "@/components/home/BusinessAreas";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { businessAreas } from "@/data/business-areas";
import { homepageStats } from "@/data/homepage";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
});

/**
 * Homepage — primary marketing surface for Bambi Colors Group.
 */
export default function HomePage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <HeroSlider projects={projects} />
      <TrustStats stats={homepageStats} />
      <BrandStatement />
      <ProjectsShowcase projects={projects} />
      <WhyBambi />
      <BusinessAreas areas={businessAreas} />
      <AboutTeaser />
      <FinalCta />
    </main>
  );
}
