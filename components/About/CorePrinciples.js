"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CorePrinciplesImg from "@/public/assets/about-core-principles-img.svg";
import CommonImage from "../common/CommonImage";

export default function CorePrinciples() {
  const [activeIndex, setActiveIndex] = useState(0);

  const principles = [
    {
      title: "[01] Your Story Comes First",
      description:
        "We don't start with loan products, we start with YOU. Understanding your financial journey, your goals, and your concerns helps us find solutions that actually fit your life.",
    },
    {
      title: "[02] Transparency, Always",
      description:
        "No fine print games. No surprise fees. We explain every number, every step, and every option in plain English so you can make decisions with complete confidence and clarity.",
    },
    {
      title: "[03] Speed Without Shortcuts",
      description:
        "As California home loan experts, we move fast when markets demand it, but never at the expense of accuracy, thoroughness, or getting you the absolute best deal available.",
    },
    {
      title: "[04] Advocacy Over Sales",
      description:
        "We're not here to push products. We're here to fight for your approval, negotiate better terms, and ensure lenders treat you fairly throughout the entire process.",
    },
    {
      title: "[05] Relationships Beyond Closing",
      description:
        "Our job doesn't end when you get your keys. We stay in touch, answer questions years later, and become your trusted advisor for every home financing decision ahead.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="w-full bg-primary-blue py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Accordion */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-12 leading-snug">
              The Core Principles We
              <br />
              <span className="italic font-serif">Never Compromise On</span>
            </h2>

            <div className="space-y-14">
              {principles.map((principle, index) => (
                <div key={index} className="border-b border-blue-200 pb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group outline-none"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-white">
                      {principle.title}
                    </h3>
                    <div className="flex-shrink-0 ml-4 bg-[#DDDEFF] p-1 rounded-full cursor-pointer">
                      {activeIndex === index ? (
                        <Minus className="w-6 h-6 text-primary-blue" />
                      ) : (
                        <Plus className="w-6 h-6 text-primary-blue" />
                      )}
                    </div>
                  </button>

                  {activeIndex === index && (
                    <div className="mt-4 pr-8">
                      <p className="text-white/70 font-normal text-sm md:text-base leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content Card */}
          <div className="flex flex-col justify-start">
            <div className="rounded-2xl mb-10">
              <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                We're the best mortgage company in California, not because we
                say so, but because we do things differently. These five
                principles aren't just words on a website; they're how we
                actually work every single day.
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <CommonImage
                src={CorePrinciplesImg.src || CorePrinciplesImg}
                alt="Team collaboration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
