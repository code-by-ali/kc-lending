import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import HardMoneyBanner from "@/components/HardMoneyLoans/HardMoneyBanner";
import HardMoneyFAQSection from "@/components/HardMoneyLoans/HardMoneyFAQSection";
import HardMoneySection from "@/components/HardMoneyLoans/HardMoneySection";
import BlogSection from "@/components/Home/BlogSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HardMoneyBanner />
      <HardMoneySection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <HardMoneyFAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
