import CPLCBanner from "@/components/CommercialPropertyLoansCalifornia/CPLCBanner";
import CPLCSection from "@/components/CommercialPropertyLoansCalifornia/CPLCSection";
import OtherProgramsCarousel from "@/components/DetailedLoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CPLCBanner />
      <CPLCSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
