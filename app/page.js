import HeroSection from "./components/Home/HeroSection";
import HowItWorksSection from "./components/Home/HowItWorksSection";
import KCLendingSection from "./components/Home/KCLendingSection";
import LogosSection from "./components/Home/LogosSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogosSection />
      <KCLendingSection />
      <HowItWorksSection />
    </div>
  );
}
