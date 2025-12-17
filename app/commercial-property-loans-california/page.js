import CPLCBanner from "@/components/CommercialPropertyLoansCalifornia/CPLCBanner";
import CPLCFAQSection from "@/components/CommercialPropertyLoansCalifornia/CPLCFAQSection";
import CPLCSection from "@/components/CommercialPropertyLoansCalifornia/CPLCSection";
import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CPLCBanner />
      <CPLCSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <CPLCFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
