import DetailedLoanSection from "@/components/DetailedLoan/DetailedLoanSection";
import OtherPrograms from "@/components/DetailedLoan/OtherPrograms";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <DetailedLoanSection />
      <OtherPrograms />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
