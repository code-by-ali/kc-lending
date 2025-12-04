"use client";
import React, { useState } from "react";
import { Play, Home, Check } from "lucide-react";
import HomeImage from "@/public/assets/kc-lending-section-img.svg";
import CommonImage from "../common/CommonImage";

const KCLendingSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  const visionContent = {
    title: "A future where home financing doesn't keep you up at night.",
    benefits: [
      "Build lasting relationships with clients who trust us as their “mortgage broker near me” for life.",
      "Create a lending experience that feels like working with a friend, not a faceless institution.",
      "Help more California families access homeownership without the stress.",
    ],
  };

  const missionContent = {
    title: "We're here to make your home loan journey easier, period.",
    benefits: [
      "Be the best mortgage broker who listens first, then finds solutions that actually fit your situation.",
      "Give you access to rates and options most mortgage lenders in California can't offer.",
      "Handle the heavy lifting so you can focus on what matters: finding your home.",
    ],
  };

  const currentContent =
    activeTab === "vision" ? visionContent : missionContent;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - House Image with Cards */}
          <div className="relative">
            <CommonImage src={HomeImage.src || HomeImage} alt="home-image" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-[#20479E] font-semibold text-base md:text-lg lg:text-xl tracking-[-2%] mb-3">
                Why KC Lending?
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[-3%] text-[#1A202C] leading-tight mb-8">
                Why Smart Buyers Choose KC Lending Over Traditional Banks?
              </h2>
            </div>

            {/* Tabs */}
            <div className="inline-flex bg-[#F3F5F7] rounded-full p-1 mb-8">
              <button
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base tracking-[-2%] ${
                  activeTab === "vision"
                    ? "gradient-bg text-white"
                    : "text-[#90A3BF]"
                }`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
              <button
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base tracking-[-2%] ${
                  activeTab === "mission"
                    ? "gradient-bg text-white"
                    : "text-[#90A3BF]"
                }`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-semibold text-[#1A202C] tracking-[-3%] leading-relaxed">
                {currentContent.title}
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {currentContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-[#9CD323] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[#1A202C] tracking-[-2%] font-medium text-base md:text-lg leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KCLendingSection;
