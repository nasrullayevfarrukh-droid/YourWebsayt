import { FeaturedProjectsSection } from "@/sections/featured-projects-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HomeContactSection } from "@/sections/home-contact-section";
import { HomeHero } from "@/sections/home-hero";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <FinalCtaSection />
      <HomeContactSection />
    </>
  );
}
