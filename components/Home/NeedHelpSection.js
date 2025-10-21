import React from "react";
import { Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";
import CircleImg from "@/public/assets/home-need-help-circle-img.svg";
import CardImg from "@/public/assets/home-need-help-card-img.svg";

import CommonImage from "../common/CommonImage";

const NeedHelpSection = () => {
  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6 text-[#1751A8]" />,
      title: "Any Questions?",
      subtitle: "Mon-Fri (9-5pm)",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#1751A8]" />,
      title: "Prefer Writing?",
      subtitle: "Send an email",
      action: "Write Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#1751A8]" />,
      title: "Need Advice?",
      subtitle: "Talk to an expert",
      action: "Book Now",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row - Title and Description */}
        <div className="flex flex-col md:flex-row gap-8 mb-12 justify-between">
          {/* Left - Title */}
          <div>
            <p className="text-[#20479E] text-base md:text-lg lg:text-xl font-semibold mb-3 tracking-[-2%]">
              Need Help?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#1A202C] tracking-[-3%] leading-tight">
              Need a Hand? We've Got You.
            </h2>
          </div>

          {/* Right - Description */}
          <div className="flex items-center">
            <p className="text-[#6C727F] text-lg md:text-xl lg:text-2xl max-w-md">
              We're committed to creating solutions that align with your unique
              goals and needs.
            </p>
          </div>
        </div>

        {/* Bottom Row - 70/30 Split */}
        <div className="grid lg:grid-cols-10 gap-8 mt-20">
          {/* Left Column - 70% width (7 columns) */}
          <div className="lg:col-span-7 rounded-xl shadow-md p-6">
            {/* Blue Circle Icon */}
            <div className="mb-8">
              <CommonImage src={CircleImg.src || CircleImg} />
            </div>

            {/* New to KC Lending Card */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A202C] mb-2 tracking-[-0.5%]">
                New to KC Lending?
              </h3>
              <p className="text-[#6C727F] text-base md:text-lg tracking-[-0.2px]">
                Our Synox team is happy to help you with all things insurance.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-4">
              {contactOptions.map((option, index) => (
                <div key={index} className="bg-[#F3F3F3] rounded-xl p-6">
                  <div className="mb-4">{option.icon}</div>
                  <h4 className="text-[#1A202C] font-semibold text-base md:text-lg mb-1">
                    {option.title}
                  </h4>
                  <p className="text-[#6C727F] text-sm md:text-base mb-4 font-normal">
                    {option.subtitle}
                  </p>
                  <button className="text-[#1A202C] text-base md:text-lg font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    {option.action}
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - 30% width (3 columns) - Customer Login Card */}
          <div className="lg:col-span-3">
            <div className="relative rounded-lg overflow-hidden h-full min-h-[500px]">
              {/* Background Image */}
              <div className="absolute inset-0">
                <CommonImage src={CardImg.src || CardImg} className="object-cover w-full rounded-lg"/>
              </div>

              {/* Overlay Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 pb-8 mx-4 flex flex-col gap-2 items-center">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                  Already a customer?
                </h3>
                <p className="text-white text-base md:text-lg mb-6 text-center">
                  Make a claim, manage your insurance or ask a question.
                </p>
                <button className="w-full bg-white text-[#1751A8] font-bold py-3 px-6 tracking-[-0.2%]">
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;
