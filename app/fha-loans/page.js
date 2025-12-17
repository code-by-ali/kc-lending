import FHAFAQSection from "@/components/FHALoan/FHAFAQSection";
import FHALoanBanner from "@/components/FHALoan/FHALoanBanner";
import FHALoanSection from "@/components/FHALoan/FHALoanSection";
import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <FHALoanBanner />
      <FHALoanSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FHAFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
