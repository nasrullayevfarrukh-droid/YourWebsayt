import { FeaturedProjectsSection } from "@/sections/featured-projects-section";
import { FinalCtaSection } from "@/sections/final-cta-section";
import { HomeContactSection } from "@/sections/home-contact-section";
import { HomeHero } from "@/sections/home-hero";
import { ProcessSection } from "@/sections/process-section";
import { ServicesSection } from "@/sections/services-section";
import { TrustStrip } from "@/sections/trust-strip";
import { WhyYourWebsaytSection } from "@/sections/why-yourwebsayt-section";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <ServicesSection />
      <FeaturedProjectsSection />
      <ProcessSection />
      <WhyYourWebsaytSection />
      <FinalCtaSection />
      <HomeContactSection />
    </>
  );
}
