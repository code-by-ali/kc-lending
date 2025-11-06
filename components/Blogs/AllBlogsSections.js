"use client";
import Image from "next/image";
import React from "react";
import Blog1 from "@/public/assets/home-blog-img-1.svg";
import Blog2 from "@/public/assets/home-blog-img-2.svg";
import Blog3 from "@/public/assets/home-blog-img-3.svg";
import CommonImage from "../common/CommonImage";

const allBlogs = [
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

const AllBlogsSections = () => {
  return (
    <section className="py-20 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allBlogs.map((blog, index) => (
            <div key={index} className="group cursor-pointer mt-8">
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
      </div>
    </section>
  );
};

export default AllBlogsSections;
