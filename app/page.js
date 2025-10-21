import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import GetInTouch from "@/components/Home/GetInTouch";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import KCLendingSection from "@/components/Home/KCLendingSection";
import KCServicesSection from "@/components/Home/KCServicesSection";
import LoansAndClaimsSection from "@/components/Home/LoansAndClaimsSection";
import LogosSection from "@/components/Home/LogosSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogosSection />
      <KCLendingSection />
      <HowItWorksSection />
      <GetInTouch />
      <KCServicesSection />
      <LoansAndClaimsSection />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
}
