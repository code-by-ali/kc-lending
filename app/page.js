import AboutServiceSection from "@/components/Home/AboutServiceSection";
import BlogSection from "@/components/Home/BlogSection";
import ComparisonTableSection from "@/components/Home/ComparisonTableSection";
import FAQSection from "@/components/Home/FAQSection";
import GetInTouch from "@/components/Home/GetInTouch";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import KCLendingSection from "@/components/Home/KCLendingSection";
import KCServicesSection from "@/components/Home/KCServicesSection";
import LoansAndClaimsSection from "@/components/Home/LoansAndClaimsSection";
import LogosSection from "@/components/Home/LogosSection";
import MortgageCalculatorSection from "@/components/Home/MortgageCalculatorSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogosSection />
      <KCLendingSection />
      <HowItWorksSection />
      <MortgageCalculatorSection />
      <ComparisonTableSection />
      <GetInTouch />
      <AboutServiceSection />
      <TestimonialsSection />
      <KCServicesSection />
      <LoansAndClaimsSection />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
}
