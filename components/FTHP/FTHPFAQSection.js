"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FTHPFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who qualifies as a first-time homebuyer California?",
      answer:
        "Anyone who hasn't owned a home in the past three years, has never owned before, or is a single parent who only owned with a former spouse.",
    },
    {
      question: "How much money do I need to buy my first home in California?",
      answer:
        "With assistance programs, you can buy with $0 down. However, budget $5,000 to $15,000 for earnest deposits, inspections, appraisals, and potential out-of-pocket costs.",
    },
    {
      question:
        "What credit score do I need for first-time homebuyer programs?",
      answer:
        "Most California programs require a score of 640-680. FHA loans accept 580+. Some lenders work with scores as low as 500.",
    },
    {
      question: "Do I have to take a homebuyer education class?",
      answer:
        "Yes, for most California assistance programs. It's an 8-hour course costing around $100 online or varies for in-person classes.",
    },
    {
      question: "Can I use a gift from family for my down payment?",
      answer:
        "Yes. FHA, conventional, VA, and most programs allow 100% of your down payment to come from family gifts, provided you have proper documentation.",
    },
    {
      question: "Are there income limits for first-time homebuyer programs?",
      answer:
        "Yes. Most California programs have income limits that vary by county and household size. Limits are higher in expensive areas.",
    },
    {
      question: "Can I buy a fixer-upper with first-time homebuyer programs?",
      answer:
        "Yes, using FHA 203(k) or conventional renovation loans. These let you finance both the purchase and repair costs in one loan.",
    },
    {
      question: "How long do I have to live in the home?",
      answer:
        "Most programs require you to live in the home as your primary residence for at least one year. Some assistance programs require 3-5 years of participation.",
    },
    {
      question: "Can I buy a home if I have had a bankruptcy or foreclosure?",
      answer:
        "Yes. FHA allows purchases 2 years after bankruptcy discharge and 3 years after foreclosure. Conventional typically requires 4 and 7 years, respectively.",
    },
    {
      question: "Can I buy investment property with first-time buyer programs?",
      answer:
        "No. All first-time buyer programs require owner-occupancy. However, you can purchase a multi-unit property, live in one unit, and rent out the others.",
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
            Got Questions? We've Got Answers.
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

export default FTHPFAQSection;
