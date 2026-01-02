import React from "react";
import AboutBanner from "@/components/About/AboutBanner";
import AboutLogoSection from "@/components/About/AboutLogoSection";
import AboutConsultingSection from "@/components/About/AboutConsultingSection";
import MissionVisionSection from "@/components/About/MissionVisionSection";
import CorePrinciples from "@/components/About/CorePrinciples";
import ProcessSection from "@/components/About/ProcessSection";
import AboutBGImage from "@/components/About/AboutBGImage";

const page = () => {
  return (
    <div>
      <AboutBanner />
      <AboutBGImage />
      <AboutLogoSection />
      <AboutConsultingSection />
      <MissionVisionSection />
      <CorePrinciples />
      <ProcessSection />
    </div>
  );
};

export default page;
