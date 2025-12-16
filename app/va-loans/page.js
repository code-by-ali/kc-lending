import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import VALoansBanner from "@/components/VALoans/VALoansBanner";
import VALoansSection from "@/components/VALoans/VALoansSection";
import React from "react";

const page = () => {
  return (
    <div>
      <VALoansBanner />
      <VALoansSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
