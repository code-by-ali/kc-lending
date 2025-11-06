import AllBlogsBanner from "@/components/Blogs/AllBlogsBanner";
import AllBlogsSections from "@/components/Blogs/AllBlogsSections";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <AllBlogsBanner />
      <AllBlogsSections />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
