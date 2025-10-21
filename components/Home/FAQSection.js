"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What investment services do you offer?",
      answer:
        "We recommend a diversified portfolio tailored to your individual needs. This may include stocks, bonds, mutual funds, ETFs, real estate.",
    },
    {
      question: "What types of investments do you recommend?",
      answer:
        "We offer a comprehensive range of investment services including portfolio management, retirement planning, tax optimization strategies, and personalized financial advisory services tailored to your goals.",
    },
    {
      question: "How do I get started with investing?",
      answer:
        "Getting started is simple. First, schedule a consultation with one of our advisors. We'll assess your financial goals, risk tolerance, and create a customized investment plan that aligns with your objectives.",
    },
    {
      question: "What is your approach to risk management?",
      answer:
        "Our risk management approach involves thorough assessment of your risk tolerance, diversification across asset classes, regular portfolio rebalancing, and continuous monitoring of market conditions to protect and grow your investments.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="bg-[#1A202C1A] text-[#1A202C] inline-flex p-2 rounded-full text-xs md:text-sm font-medium mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A202C] tracking-[-0.5%] leading-tight">
            Have a Question? Look Here
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white transition-all ${
                openIndex !== index ? "" : "shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left outline-none"
              >
                <span className="text-[#1A202C] font-medium text-lg md:text-xl lg:text-2xl pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-[#1A202C]" />
                  </div>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-2">
                  <p className="text-[#6C727F] text-base md:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
