"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/free-mode";

import OtherProgramIcon1 from "@/public/assets/detailed-loan-other-program-icon-1.svg";
import OtherProgramIcon2 from "@/public/assets/detailed-loan-other-program-icon-2.svg";
import OtherProgramIcon3 from "@/public/assets/detailed-loan-other-program-icon-3.svg";
import OtherProgramIcon4 from "@/public/assets/detailed-loan-other-program-icon-4.svg";
import CommonImage from "../common/CommonImage";

export default function OtherProgramsCarousel() {
  const programs = [
    {
      icon: OtherProgramIcon1,
      title: "Conventional Loans",
      description: "Competitive rates for buyers with established credit.",
    },
    {
      icon: OtherProgramIcon2,
      title: "First-Time Homebuyer Programs",
      description:
        "Special programs designed to make owning your first home easier.",
    },
    {
      icon: OtherProgramIcon3,
      title: "VA Loans",
      description:
        "Exclusive benefits for veterans, active-duty service members, and their families.",
    },
    {
      icon: OtherProgramIcon4,
      title: "Commercial Loans",
      description: "Financing solutions for business owners and investors.",
    },
    {
      icon: OtherProgramIcon1,
      title: "Refinance Programs",
      description:
        "Lower your monthly payments and get better terms on your existing loan.",
    },
    {
      icon: OtherProgramIcon1,
      title: "Jumbo Loans",
      description:
        "Financing for high-value properties that exceed conventional loan limits.",
    },
  ];

  return (
    <div className="w-full bg-primary-blue py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <p className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2">
          More from KC
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Other Programs
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={16}
          slidesPerView={1.1}
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
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="!px-4 sm:!px-6 lg:!px-8"
        >
          {programs.map((program, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 h-80 flex flex-col select-none">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <CommonImage
                      src={program.icon.src || program.icon}
                      className="w-12 h-12"
                      draggable="false"
                    />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {program.title}
                  </h3>

                  <p className="text-description text-base md:text-lg mb-6 flex-grow">
                    {program.description}
                  </p>

                  <button className="flex items-center text-primary text-base md:text-lg font-bold group mt-auto">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-4 text-primary-blue group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}