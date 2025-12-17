import CLBanner from "@/components/ConventionalLoans/CLBanner";
import CLFAQSection from "@/components/ConventionalLoans/CLFAQSection";
import CLSection from "@/components/ConventionalLoans/CLSection";
import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CLBanner />
      <CLSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <CLFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
