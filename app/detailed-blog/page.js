import DetailedBlogBanner from "@/components/DetailedBlog/DetailedBlogBanner";
import DetailedBlogSection from "@/components/DetailedBlog/DetailedBlogSection";
import OtherBlogsCarousel from "@/components/DetailedBlog/OtherBlogsCarousel";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import NeedHelpSection from "@/components/Home/NeedHelpSection";
import React from "react";

const page = () => {
  return (
    <div>
      <DetailedBlogBanner />
      <DetailedBlogSection />
      <OtherBlogsCarousel />
      <NeedHelpSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
