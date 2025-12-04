"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import HouseImage from "@/public/assets/home-hero-img.svg";
import ThumbnailImage from "@/public/assets/home-hero-thumbnails.svg";
import StarsImage from "@/public/assets/home-hero-stars.svg";
import CommonImage from "../common/CommonImage";

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 px-6 lg:px-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-relaxed tracking-[-1px]">
            Lets Find You a <br className="hidden sm:block" />
            Mortagage That <br className="hidden sm:block" />
            Fits Your Life
          </h1>

          <p className="text-blue-100 mt-4 max-w-lg mx-auto md:mx-0 text-sm sm:text-base md:text-lg font-normal tracking-[-0.36px]">
            As certified mortgage brokers in California, we cut through the
            complexity and find you the right loan, without the stress
            traditional lenders put you through.
          </p>

          {/* Buttons + Ratings */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Buttons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="tracking-[-2%] bg-[#F3E063] text-[#1A202C] text-sm md:text-base font-semibold px-5 py-2 rounded-lg">
                Purchase
              </button>
              <button className="tracking-[-2%] bg-white text-[#1751A8] text-sm md:text-base font-semibold px-5 py-2 rounded-lg">
                Refinance
              </button>
            </div>

            {/* Rating */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Avatars */}
              <div className="flex">
                <CommonImage
                  src={ThumbnailImage.src || ThumbnailImage}
                  alt={"thumbnail-image"}
                />
              </div>
              <div className="flex flex-col gap-2">
                {/* Stars + Text */}
                <div className="flex items-center gap-1">
                  <CommonImage
                    src={StarsImage.src || StarsImage}
                    alt={"stars-image"}
                  />
                </div>
                <p className="text-sm md:text-base text-white tracking-[-0.32px] font-semibold">
                  From 2000+ ratings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-md md:max-w-none">
          <Image
            src={HouseImage}
            alt="Neighborhood view"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
