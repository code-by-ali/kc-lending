"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-primary-blue py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-white text-lg md:text-xl font-semibold mb-2">
            More from KC
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Other Blogs
          </h2>
        </div>

        <div className="-mx-3">
          <Slider {...settings}>
            {allBlogs.map((blog, index) => {
              return (
                <div key={index} className="px-3">
                  <div className="group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl">
                      <CommonImage
                        src={blog.image.src || blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-3 text-sm md:text-base text-white uppercase tracking-wider">
                        <span>{blog.category}</span>
                        <span className="w-4 h-[2px] bg-white opacity-50" />
                        <span>{blog.date}</span>
                      </div>
                      <h3 className="mt-3 text-lg md:text-xl lg:text-2xl font-semibold text-white leading-snug">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
