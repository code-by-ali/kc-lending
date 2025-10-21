"use client";
import Image from "next/image";
import React from "react";
import Blog1 from "@/public/assets/home-blog-img-1.svg";
import Blog2 from "@/public/assets/home-blog-img-2.svg";
import Blog3 from "@/public/assets/home-blog-img-3.svg";
import CommonImage from "../common/CommonImage";

const blogs = [
  {
    image: Blog1,
    category: "BUSINESS",
    date: "MARCH 24, 2024",
    title: "Subscription Billing Simplifying Recurring Payments for.",
  },
  {
    image: Blog2,
    category: "FINTECH",
    date: "MARCH 24, 2024",
    title: "Global Payment Trends Adapting to the Changing Landscape.",
  },
  {
    image: Blog3,
    category: "BUSINESS",
    date: "MARCH 24, 2024",
    title: "The Role of Blockchain Technology in Payment Solutions.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <p className="text-[#1751A8] font-medium text-lg md:text-xl mb-2">Latest Blogs</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A202C]">
              Want to stay up to date?
            </h2>
          </div>
          <p className="text-[#6C727F] text-lg md:text-xl lg:text-2xl mt-4 lg:mt-0 max-w-md">
            We’re committed to creating solutions that align with your unique
            goals and needs.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl">
                <CommonImage
                  src={blog.image.src || blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-3 text-sm md:text-base text-[#6C727F] uppercase tracking-wider">
                  <span>{blog.category}</span>
                  <span className="w-4 h-[2px] bg-[#D9D9D9]" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="mt-3 text-lg md:text-xl lg:text-2xl font-semibold text-[#1A202C] leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="cursor-pointer px-10 py-4 gradient-bg text-white rounded-lg font-medium hover:bg-[#0f3e85] transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
