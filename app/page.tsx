import { HeroSlider } from "@/components/home/HeroSlider";
import { TrustStats } from "@/components/home/TrustStats";
import { BrandStatement } from "@/components/home/BrandStatement";
import { ProjectsShowcase } from "@/components/home/ProjectsShowcase";
import { WhyBambi } from "@/components/home/WhyBambi";
import { BusinessAreas } from "@/components/home/BusinessAreas";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
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
    <main className="page-atmosphere flex-1 overflow-x-hidden">
      <HeroSlider projects={projects} />
      <TrustStats stats={homepageStats} />
      <Reveal>
        <BrandStatement />
      </Reveal>
      <Reveal delay={80}>
        <ProjectsShowcase projects={projects} />
      </Reveal>
      <Reveal delay={60}>
        <WhyBambi />
      </Reveal>
      <Reveal delay={80}>
        <BusinessAreas areas={businessAreas} />
      </Reveal>
      <Reveal delay={60}>
        <AboutTeaser />
      </Reveal>
      <Reveal delay={40}>
        <FinalCta />
      </Reveal>
    </main>
  );
}
