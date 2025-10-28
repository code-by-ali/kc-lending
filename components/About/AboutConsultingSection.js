import React from "react";
import { Settings, TrendingUp, Lightbulb } from "lucide-react";
import ConsultingImg from "@/public/assets/about-consulting-img.svg";
import CommonImage from "../common/CommonImage";
import ConsultingIcon1 from "@/public/assets/about-consulting-icon-1.svg";
import ConsultingIcon2 from "@/public/assets/about-consulting-icon-2.svg";
import ConsultingIcon3 from "@/public/assets/about-consulting-icon-3.svg";

export default function AboutConsultingSection() {
  const services = [
    {
      icon: ConsultingIcon1,
      title: "Strategic Planning",
      description: "Define clear goals and chart the path.",
    },
    {
      icon: ConsultingIcon2,
      title: "Operational Growth",
      description: "Streamline processes to scale efficiently.",
    },
    {
      icon: ConsultingIcon3,
      title: "Digital Evolution",
      description: "Leverage technology to transform.",
    },
  ];

  return (
    <div className="w-full bg-primary-blue py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Heading and Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4 sm:gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight sm:leading-normal">
            We Believe In Results With
            <br />
            Smart <span className="italic font-serif">Consulting.</span>
          </h2>

          <button className="bg-[#F3E063] text-primary font-semibold px-6 py-3 rounded-lg whitespace-nowrap hover:bg-[#e8d557] transition-colors">
            See All Service
          </button>
        </div>

        {/* Bottom Row - Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Content */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6">
            {/* Description */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              At KC Lending, we believe that real business growth is rooted in
              strategy, insight, and execution. As a results-driven consulting
              firm for you.
            </p>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              Our approach blends deep industry insight, extensive experience,
              and strategic thinking to solve complex challenges, innovation,
              and deliver measurable, lasting business value.
            </p>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-6">
              {services.map((service, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow flex flex-col gap-2"
                  >
                    <CommonImage
                      src={service.icon.src || service.icon}
                      className="w-16 h-16 mb-10"
                    />

                    <h3 className="text-primary font-medium text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                      {service.title}
                    </h3>
                    <p className="text-primary/70 font-normal text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 lg:h-full">
              <CommonImage
                src={ConsultingImg.src || ConsultingImg}
                alt="Professional consultant"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
