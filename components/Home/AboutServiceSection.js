import React from "react";
import { MessageCircle } from "lucide-react";
import CommonImage from "../common/CommonImage";
import AboutServiceImg1 from "@/public/assets/home-about-service-img-1.svg";
import AboutServiceImg2 from "@/public/assets/home-about-service-img-2.svg";

const AboutServiceSection = () => {
  const insuranceCompanies = [
    { name: "PROGRESSIVE", score: 99, logo: "PROGRESSIVE" },
    { name: "GEICO", score: 80, logo: "GEICO" },
    { name: "Nationwide", score: 95, logo: "Nationwide", hasIcon: true },
    { name: "TRAVELERS", score: 85, logo: "TRAVELERS", hasSuperscript: true },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* White Background - 50% */}
      <div
        className="bg-white"
        style={{
          height: "40%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      ></div>

      {/* Gradient Background - 50% */}
      <div
        className="gradient-bg"
        style={{
          height: "60%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 py-16 px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* About Us Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A202C] mb-4">
              Dedicated Support
            </h2>
            <p className="text-description font-normal text-base md:text-lg leading-relaxed mb-6">
              From your first call to closing day, one dedicated loan officer
              manages your entire journey. No getting passed around departments
              or repeating your story. As your “trusted mortgage broker near
              me”, we're available when you need us: answering questions,
              providing updates, and ensuring nothing falls through the cracks.
            </p>

            {/* Image */}
            <div className="relative mt-auto">
              <CommonImage
                src={AboutServiceImg1.src || AboutServiceImg1}
                alt="Woman in car"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>

          {/* Best Service Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#1A202C] mb-4">
              Fast Approvals
            </h2>
            <p className="text-description font-normal text-base md:text-lg leading-relaxed mb-6">
              Time matters in competitive markets. Our streamlined process and
              in-house underwriting mean you get pre-approved fast, often the
              same day. Working with the best mortgage broker in California, who
              moves quickly, gives you the edge to make strong offers and close
              deals before they slip away to cash buyers.
            </p>

            {/* Image */}
            <div className="relative mt-auto">
              <CommonImage
                src={AboutServiceImg2.src || AboutServiceImg2}
                alt="Customer service representative"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServiceSection;
