import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import FTHPBanner from "@/components/FTHP/FTHPBanner";
import FTHPSection from "@/components/FTHP/FTHPSection";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <FTHPBanner />
      <FTHPSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
