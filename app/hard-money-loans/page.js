import OtherProgramsCarousel from "@/components/FHALoan/OtherProgramsCarousel";
import HardMoneyBanner from "@/components/HardMoneyLoans/HardMoneyBanner";
import HardMoneySection from "@/components/HardMoneyLoans/HardMoneySection";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HardMoneyBanner />
      <HardMoneySection />
      <OtherProgramsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
