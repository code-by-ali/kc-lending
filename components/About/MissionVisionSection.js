import React from "react";
import { Check } from "lucide-react";
import MissionVisionImg1 from "@/public/assets/about-mission-vision-section-img-1.svg";
import MissionVisionImg2 from "@/public/assets/about-mission-vision-section-img-2.svg";
import MissionVisionIcon from "@/public/assets/about-mission-vision-section-icon.svg";
import CommonImage from "../common/CommonImage";

export default function MissionVisionSection() {
  const missionPoints = [
    "Connect you with loan programs designed for your unique situation",
    "Secure competitive rates by leveraging relationships with 100+ lenders",
    "Support you from application to keys with personalized, pressure-free service",
  ];

  const visionPoints = [
    "Be the go-to resource for homebuyers seeking honest, expert guidance",
    "Set the industry standard for transparency and customer-first service",
    "Build a legacy where clients return for life and refer everyone they know",
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 lg:w-1/2 order-2 lg:order-1">
            <p className="text-primary-blue text-lg md:text-xl font-semibold mb-2 tracking-[-1%]">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-4 leading-snug">
              Making Homeownership Accessible
              <br />
              for <span className="italic font-serif">Every Californian</span>
            </h2>
            <p className="text-primary/70 text-base font-normal mb-6">
              As a trusted mortgage broker in California, our mission is to
              remove barriers, simplify complexity, and put homeownership within
              reach for people who deserve it, not just those who fit a perfect
              box.
            </p>

            {/* Points */}
            <div className="space-y-3 mb-8">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                    <CommonImage
                      src={MissionVisionIcon.src || MissionVisionIcon}
                      className="w-3 h-3"
                    />
                  </div>
                  <p className="text-primary font-medium text-base">{point}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-primary-blue text-lg text-white font-semibold px-6 py-3 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 lg:w-1/2 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <CommonImage
                src={MissionVisionImg1.src || MissionVisionImg1}
                alt="Business meeting"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="flex-1 lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <CommonImage
                src={MissionVisionImg2.src || MissionVisionImg2}
                alt="Business consultation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 lg:w-1/2">
            <p className="text-primary-blue text-lg md:text-xl font-semibold mb-2 tracking-[-1%]">
              Our Vision
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-4 leading-snug">
              Becoming California's
              <br />
              Most <span className="italic font-serif">Recommended</span>{" "}
              Mortgage Partner
            </h2>
            <p className="text-primary/70 text-base font-normal mb-6">
              Our vision is simple: make KC Lending synonymous with trust,
              excellence, and results. We want to be the California mortgage
              experts every family turns to when they're ready to buy,
              refinance, or invest in their future.
            </p>

            {/* Points */}
            <div className="space-y-3 mb-8">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5">
                    <CommonImage
                      src={MissionVisionIcon.src || MissionVisionIcon}
                      className="w-3 h-3"
                    />
                  </div>
                  <p className="text-primary font-medium text-base">{point}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="bg-primary-blue text-lg text-white font-semibold px-6 py-3 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
