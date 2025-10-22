import React from "react";
import CheckIcon from "@/public/assets/home-check-icon.svg";
import CrossIcon from "@/public/assets/home-cross-icon.svg";
import CommonImage from "../common/CommonImage";

const ComparisonTableSection = () => {
  const services = [
    { name: "Instant Online Buying", kc: true, other: false },
    { name: "No Hidden Fees", kc: true, other: false },
    { name: "Save Time And Money", kc: true, other: false },
    { name: "100% Independent", kc: true, other: true },
    { name: "Compare Cost And Futures", kc: true, other: false },
    { name: "Available 24/7", kc: true, other: false },
    { name: "No Claim Bonus", kc: true, other: true },
    { name: "Claim Settlement Ratio", kc: true, other: true },
    { name: "Own Damage Cover", kc: true, other: false },
    { name: "Third party's death or injury", kc: true, other: false },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background - 70% */}
      <div
        className="gradient-bg relative"
        style={{
          height: "70%",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
        }}
      ></div>

      {/* White Background - 30% */}
      <div
        className="bg-white"
        style={{
          height: "30%",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></div>

      <div className="max-w-5xl mx-auto relative z-10 py-12 sm:py-16 px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 tracking-[-0.5%] leading-tight px-4">
            That Makes Us the Best Car
            <br />
            Insurance Provider
          </h2>
        </div>

        {/* Comparison Table - Scrollable on mobile */}
        <div className="bg-white overflow-hidden shadow-lg rounded-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-[#F3E063]">
                <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-[#1A202C] text-sm sm:text-lg md:text-xl lg:text-2xl">
                  Services
                </div>
                <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-[#1A202C] text-sm sm:text-lg md:text-xl lg:text-2xl text-center border-l border-[#E5D94D]">
                  KC Lending
                </div>
                <div className="px-4 sm:px-6 py-3 sm:py-4 font-semibold text-[#1A202C] text-sm sm:text-lg md:text-xl lg:text-2xl text-center border-l border-[#E5D94D]">
                  Other Bank
                </div>
              </div>

              {/* Table Body */}
              <div>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 ${
                      index !== services.length - 1
                        ? "border-b border-[#E1E9EC]"
                        : ""
                    }`}
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 text-[#1A202C] font-medium text-xs sm:text-base md:text-lg lg:text-xl">
                      {service.name}
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-center items-center border-l border-[#E1E9EC]">
                      {service.kc ? (
                        <CommonImage
                          src={CheckIcon?.src || CheckIcon}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      ) : (
                        <CommonImage
                          src={CrossIcon?.src || CrossIcon}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      )}
                    </div>
                    <div className="px-4 sm:px-6 py-3 sm:py-4 flex justify-center items-center border-l border-[#E1E9EC]">
                      {service.other ? (
                        <CommonImage
                          src={CheckIcon?.src || CheckIcon}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      ) : (
                        <CommonImage
                          src={CrossIcon?.src || CrossIcon}
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="text-center mt-4 sm:hidden">
          <p className="text-white text-xs opacity-70">← Swipe to see more →</p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
