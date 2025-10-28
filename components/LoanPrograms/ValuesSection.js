import React from "react";
import { Check, TrendingUp } from "lucide-react";
import OurValueImg from "@/public/assets/kcloan-our-values-img.svg";
import CommonImage from "../common/CommonImage";

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We thrive on innovation, constantly exploring new horizons to give our clients the best solutions that push boundaries and redefine industry standards.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of collaboration, fostering diverse perspectives and expertise to drive remarkable outcomes, united by a common goal.",
    },
    {
      title: "Integrity",
      description:
        "Integrity forms the foundation of our relationships, guiding us to uphold ethical practices, transparency, and honesty in every interaction.",
    },
  ];

  return (
    <div className="w-full bg-primary-blue py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <p className="text-lg md:text-xl font-semibold mb-2">Our values</p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold mb-8">
              Our values define us
            </h2>
            <hr />

            <div className="space-y-6 mt-10">
              {values.map((value, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <h3 className="text-xl md:text-2xl font-light">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="flex items-center justify-center">
            {/* Main centered image */}
            <div className=" flex items-center justify-center">
              <div className=" rounded-lg overflow-hidden">
                <CommonImage
                  src={OurValueImg.src || OurValueImg}
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
