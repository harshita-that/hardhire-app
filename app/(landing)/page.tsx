import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { GradePreview } from "@/components/landing/grade-preview";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GradePreview />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
