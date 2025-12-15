import React from "react";

export default function CLBanner() {
  return (
    <div className="relative w-full bg-primary-blue py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[400px]">
      {/* Background text "Contact" */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none py-10">
        <span className="text-[20vw] sm:text-[18vw] md:text-[18vw] lg:text-[18vw] font-bold text-white opacity-5 whitespace-nowrap tracking-wider">
          KC Loans
        </span>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto min-h-[350px] text-center flex items-center justify-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-white">
          Conventional Home Loans California
        </h2>
      </div>
    </div>
  );
}
