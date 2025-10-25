"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CorePrinciplesImg from "@/public/assets/about-core-principles-img.svg";
import CommonImage from "../common/CommonImage";

export default function CorePrinciples() {
  const [activeIndex, setActiveIndex] = useState(0);

  const principles = [
    {
      title: "[01] Client-Centered Thinking",
      description:
        "We put our clients first—understanding their goals, challenges, and customers to deliver tailored solutions that create real value.",
    },
    {
      title: "[02] Creative with Purpose",
      description:
        "We bring innovative thinking to every project, ensuring creativity serves strategic objectives and delivers measurable results.",
    },
    {
      title: "[03] Data-Driven Decisions",
      description:
        "Our recommendations are backed by thorough research and analytics, ensuring every decision is informed and impactful.",
    },
    {
      title: "[04] Collaboration Over Ego",
      description:
        "We believe the best results come from teamwork, open communication, and putting collective success above individual recognition.",
    },
    {
      title: "[05] Always Evolving",
      description:
        "We stay ahead of industry trends and continuously adapt our approaches to deliver cutting-edge solutions for our clients.",
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
              The Core Principles
              <br />
              that <span className="italic font-serif">Guide Us</span>
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
                At KC Lending, our mission is to empower businesses with
                strategic solutions that drive growth, efficiency, and
                transformation.
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
