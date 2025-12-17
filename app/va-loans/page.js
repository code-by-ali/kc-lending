import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import VALoansBanner from "@/components/VALoans/VALoansBanner";
import VALoansFAQSection from "@/components/VALoans/VALoansFAQSection";
import VALoansSection from "@/components/VALoans/VALoansSection";
import React from "react";

const page = () => {
  return (
    <div>
      <VALoansBanner />
      <VALoansSection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <VALoansFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
