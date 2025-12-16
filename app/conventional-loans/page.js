import CLBanner from "@/components/ConventionalLoans/CLBanner";
import CLSection from "@/components/ConventionalLoans/CLSection";
import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CLBanner />
      <CLSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
