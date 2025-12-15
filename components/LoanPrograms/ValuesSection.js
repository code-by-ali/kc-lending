import React from "react";
import { Check, TrendingUp } from "lucide-react";
import OurValueImg from "@/public/assets/kcloan-our-values-img.svg";
import CommonImage from "../common/CommonImage";

export default function ValuesSection() {
  const values = [
    {
      title: "Clarity",
      description:
        "Mortgages are confusing enough. We break down every rate, fee, and term in simple language so you actually understand what you're signing and feel confident about it.",
    },
    {
      title: "Hustle",
      description:
        "We return calls same-day, work evenings when deals need it, and treat your loan like it's our own house on the line. Urgency isn't optional here.",
    },
    {
      title: "Loyalty",
      description:
        "You're not a transaction number. We remember your name, your story, and your goals, even years after closing when you call with refinancing questions or need help again.",
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
              That Help Us Find Your Best Home Loan Options
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
