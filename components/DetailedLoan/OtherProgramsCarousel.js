"use client";
import React from "react";
import Slider from "react-slick";
import {
  ArrowRight,
  Home,
  Users,
  Shield,
  Building2,
  DollarSign,
  FileText,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <div className="w-full bg-primary-blue py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-white text-lg md:text-xl font-semibold mb-2">
            More from KC
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Other Programs
          </h2>
        </div>

        <style jsx global>{`
          .slick-dots {
            bottom: -40px;
          }
          .slick-dots li button:before {
            color: white;
            opacity: 0.5;
            font-size: 10px;
          }
          .slick-dots li.slick-active button:before {
            color: white;
            opacity: 1;
          }
          .slick-prev:before,
          .slick-next:before {
            color: white;
            font-size: 24px;
          }
          .slick-prev {
            left: -35px;
          }
          .slick-next {
            right: -35px;
          }
          @media (max-width: 640px) {
            .slick-prev {
              left: -25px;
            }
            .slick-next {
              right: -25px;
            }
          }
        `}</style>

        <Slider {...settings}>
          {programs.map((program, index) => {
            return (
              <div key={index} className="px-3">
                <div className="bg-white rounded-xl p-6 h-80 flex flex-col">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <CommonImage
                      src={program.icon.src || program.icon}
                      className="w-12 h-12 text-white"
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
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
