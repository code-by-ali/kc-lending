import React from "react";
import HowItWorksImg1 from "@/public/assets/how-it-works-img-1.svg";
import HowItWorksImg2 from "@/public/assets/how-it-works-img-2.svg";
import HowItWorksImg3 from "@/public/assets/how-it-works-img-3.svg";
import CommonImage from "../common/CommonImage";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Register your account in KC lending",
      image: HowItWorksImg1,
    },
    {
      id: 2,
      title: "Get your loan approved with competitive rates",
      image: HowItWorksImg2,
    },
    {
      id: 3,
      title: "Sign the Paperwork and you're all done",
      image: HowItWorksImg3,
    },
  ];

  return (
    <section className="gradient-bg py-16 px-6 relative overflow-hidden">
      {/* Background decoration - you can remove this when adding background image */}
      <div className="absolute inset-0 gradient-bg"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-3 uppercase tracking-[-2%]">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-6 tracking-[-3%]">
            Getting Your Loan Approved Is Easier Than You Think
          </h2>
          <p className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-normal mx-auto tracking-[-2%]">
            No endless back-and-forth or confusing steps. As your trusted
            mortgage broker in California, we handle everything so you can move
            forward with confidence. Here is how it works:
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="text-center">
              {/* Step Card/Image Placeholder */}
              <div className="relative bg-white rounded-2xl p-6 mb-6">
                {/* Step Number - Positioned on top-left */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-[#F3E063] border-6 border-[#1856B2] rounded-full flex items-center justify-center z-10">
                  <span className="text-xl md:text-2xl font-semibold text-[#1A202C">
                    {step.id}
                  </span>
                </div>

                {/* Replace this div with your actual images */}
                <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <CommonImage
                    src={step.image.src || step.image}
                    alt={`Step ${step.id}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="text-white text-lg md:text-xl font-medium tracking-[-2%] leading-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#F3E063] text-[#1A202C] tracking-[-2%] text-sm md:text-base font-semibold px-6 py-3 rounded-xl cursor-pointer">
            Register Account
          </button>
          <button className="bg-white text-[#1751A8] tracking-[-2%] text-sm md:text-base font-semibold px-6 py-3 rounded-xl cursor-pointer">
            Explore loans
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
