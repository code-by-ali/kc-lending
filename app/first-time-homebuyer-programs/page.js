import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import FTHPBanner from "@/components/FTHP/FTHPBanner";
import FTHPFAQSection from "@/components/FTHP/FTHPFAQSection";
import FTHPSection from "@/components/FTHP/FTHPSection";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <FTHPBanner />
      <FTHPSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FTHPFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
