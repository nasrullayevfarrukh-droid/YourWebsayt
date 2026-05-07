import { BusinessImpactSection } from "@/sections/business-impact-section";
import { FeaturedProjectsSection } from "@/sections/featured-projects-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HomeContactSection } from "@/sections/home-contact-section";
import { HomeHero } from "@/sections/home-hero";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";
import { TrustStrip } from "@/sections/trust-strip";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <BusinessImpactSection />
      <FinalCtaSection />
      <HomeContactSection />
    </>
  );
}
