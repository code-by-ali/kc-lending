"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

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

export default function OtherBlogsCarousel() {
  return (
    <div className="w-full bg-primary-blue py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <p className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2">
          More from KC
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Other Blogs
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.2}
          freeMode={true}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 24,
            },
          }}
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {allBlogs.map((blog, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer select-none h-full">
                  <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                    <CommonImage
                      src={blog.image.src || blog.image}
                      alt={blog.title}
                      className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl sm:rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      draggable="false"
                    />
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white uppercase tracking-wider">
                      <span>{blog.category}</span>
                      <span className="w-3 sm:w-4 h-[2px] bg-white opacity-50" />
                      <span className="text-[10px] sm:text-xs">{blog.date}</span>
                    </div>
                    <h3 className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl font-semibold text-white leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}