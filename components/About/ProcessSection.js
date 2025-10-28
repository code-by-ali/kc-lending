import React from "react";
import { Search, Settings, Rocket } from "lucide-react";
import ProcessIcon1 from "@/public/assets/about-process-icon-1.svg";
import ProcessIcon2 from "@/public/assets/about-process-icon-2.svg";
import ProcessIcon3 from "@/public/assets/about-process-icon-3.svg";
import CommonImage from "../common/CommonImage";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ProcessIcon1,
      title: "Discover & Diagnose",
      description:
        "We begin by deeply understanding your organization's unique challenges, opportunities, and goals.",
    },
    {
      number: "02",
      icon: ProcessIcon2,
      title: "Strategize & Plan",
      description:
        "With insights in hand, we co-create a tailored strategy that aligns with your business objectives.",
    },
    {
      number: "03",
      icon: ProcessIcon3,
      title: "Implement & Optimize",
      description:
        "We translate strategy into action by deploying solutions, streamlining processes, and enabling teams.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Heading */}
          <div>
            <p className="text-primary-blue text-lg md:text-xl font-semibold mb-3 tracking-[-1%]">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-4 leading-snug">
              Step-by-Step to
              <br />
              <span className="italic font-serif">Business Growth</span>
            </h2>
            <p className="text-primary text-base md:text-lg font-normal">
              How We Turn Strategy Into Measurable Success
            </p>
          </div>

          {/* Right Side - Timeline Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-12 bottom-12 w-0.5 bg-blue-200 hidden sm:block"></div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                return (
                  <div key={index} className="relative flex gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 p-4">
                      {/* Icon Circle */}
                      <div className="w-16 h-16 bg-[#EAEAFF] rounded-full flex items-center justify-center mb-4">
                        <CommonImage
                          src={step.icon.src || step.icon}
                          className="w-7 h-7 text-primary-blue"
                        />
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl md:text-2xl font-medium text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-primary/60 text-sm md:text-base font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
