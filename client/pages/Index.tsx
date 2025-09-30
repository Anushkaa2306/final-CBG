import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import SparePartsSection from "@/components/sections/SparePartsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import DisclaimerSection from "@/components/sections/DisclaimerSection";
import SocialBarSection from "@/components/sections/SocialBarSection";

/**
 * Homepage Component (Index)
 * 
 * This is the main homepage that brings together all the key sections:
 * 1. Hero Section - Main introduction and call-to-action
 * 2. Pricing Section - Service offerings and pricing
 * 3. Spare Parts Section - Parts request functionality
 * 
 * The page has been refactored into separate components for:
 * - Better code organization and readability
 * - Easier maintenance and updates
 * - Reusable components across the application
 * - Clear separation of concerns
 */
export default function Index() {
  return (
    <div className="min-h-screen">
      
      {/* Social bar */}
      <SocialBarSection />

      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Service Pricing Section */}
      <PricingSection />

      {/* How it Works */}
      <HowItWorksSection />

      {/* Spare Parts Request Section */}
      <SparePartsSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* Disclaimer */}
      <DisclaimerSection />

    </div>
  );
}
