import React from "react";
import { Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";
import CircleImg from "@/public/assets/home-need-help-circle-img.svg";
import CardImg from "@/public/assets/home-need-help-card-img.svg";

import CommonImage from "../common/CommonImage";

const NeedHelpSection = () => {
  const contactOptions = [
    {
      icon: <Phone className="w-6 h-6 text-[#1751A8]" />,
      title: "Got Questions?",
      subtitle: "Mon-Fri (9am-5pm)",
      action: "Call Now",
    },
    {
      icon: <Mail className="w-6 h-6 text-[#1751A8]" />,
      title: "Prefer Email?",
      subtitle: "Send a message",
      action: "Write Now",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#1751A8]" />,
      title: "Need Guidance?",
      subtitle: "Talk to an expert",
      action: "Book Now",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row - Title and Description */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12 justify-between items-start lg:items-center">
          {/* Left - Title */}
          <div className="flex-shrink-0">
            <p className="text-[#20479E] text-base md:text-lg lg:text-xl font-semibold mb-3 tracking-[-2%]">
              Get in touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#1A202C] tracking-[-3%] leading-tight">
              Have Questions? We're Here to Help!
            </h2>
          </div>

          {/* Right - Description */}
          <div className="lg:max-w-md">
            <p className="text-[#6C727F] text-lg md:text-xl lg:text-2xl">
              Whether you're exploring options or ready to apply, our team makes
              it easy to get the answers and guidance you need.
            </p>
          </div>
        </div>

        {/* Bottom Row - 70/30 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mt-8 lg:mt-20">
          {/* Left Column - 70% width (7 columns) */}
          <div className="lg:col-span-7 rounded-xl shadow-md p-6">
            {/* Blue Circle Icon */}
            <div className="mb-8 w-20 h-20">
              <CommonImage src={CircleImg.src || CircleImg} />
            </div>

            {/* New to KC Lending Card */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-[#1A202C] mb-2 tracking-[-0.5%]">
                Just Getting Started?
              </h3>
              <p className="text-[#6C727F] text-base md:text-lg tracking-[-0.2px]">
                Our KC Lending team is ready to answer your questions and help
                you find the perfect loan.
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
            <div className="relative rounded-lg overflow-hidden h-full">
              {/* Minimum height for different screen sizes */}
              <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] relative">
                {/* Background Image - Using a placeholder, replace with your actual image */}
                <CommonImage
                  src={CardImg.src || CardImg}
                  alt="Customer service representative"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1751A8] via-[#1751A8]/60 to-transparent"></div>

                {/* Overlay Card - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 mx-2 sm:mx-4 mb-4 sm:mb-6 flex flex-col gap-2 items-center">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-center">
                    Already a customer?
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-center">
                    Access your loan dashboard, track progress, or connect with
                    your loan officer.
                  </p>
                  <button className="w-full bg-white text-[#1751A8] font-bold py-3 px-6 rounded-lg tracking-[-0.2%] hover:bg-gray-50 transition-colors">
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelpSection;
