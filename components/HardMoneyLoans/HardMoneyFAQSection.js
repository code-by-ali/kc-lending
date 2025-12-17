"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const HardMoneyFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can I get a hard money loan?",
      answer:
        "Five to ten days for most deals, with some transactions taking as little as three days for straightforward purchases. Speed depends on property complexity and documentation.",
    },
    {
      question: "What is the typical loan-to-value ratio?",
      answer:
        "Sixty-five to seventy-five percent of the property value. Lower LTV ratios typically result in better rates and terms. First-time investors may be limited to 65% LTV.",
    },
    {
      question: "Are hard money loans more expensive than conventional loans?",
      answer:
        "Yes. Interest rates are typically 8% to 15% compared to 6% to 8% for conventional mortgages. You also pay origination fees of 2% to 4% points.",
    },
    {
      question: "Can I use hard money for my primary residence?",
      answer:
        "Some lenders offer owner-occupied hard money loans, but they're subject to additional regulations and longer timelines. Hard money works best for investment properties.",
    },
    {
      question: "What happens if I can't pay back the loan?",
      answer:
        "The lender can foreclose on the property just like any mortgage. This is why having a solid exit strategy and financial cushion is critical.",
    },
    {
      question: "Do I need an appraisal?",
      answer:
        "Yes. Lenders order independent appraisals to determine current value and after-repair value. This protects both you and the lender.",
    },
    {
      question: "Can I get 100% financing with hard money?",
      answer:
        "Almost never. Hard money lenders require substantial down payments (25% to 35%) to ensure you have equity invested in the deal.",
    },
    {
      question: "What properties qualify for hard money loans?",
      answer:
        "Single-family homes, multi-family properties, commercial buildings, land, and properties in any condition. Each lender has specific preferences for property types.",
    },
    {
      question: "How are renovation funds distributed?",
      answer:
        "For fix-and-flip loans, funds are typically released in draws based on completed work. You submit invoices and progress photos, and the lender inspects before releasing each draw.",
    },
    {
      question: "Can I refinance a hard money loan?",
      answer:
        "Yes. Many investors use hard money to acquire properties quickly, then refinance into conventional financing once the property is renovated and stabilized.",
    },
    {
      question: "What if my project takes longer than expected?",
      answer:
        "Most lenders offer extensions for additional fees. Plan ahead and budget for this possibility, as renovation delays are common and extensions can be expensive.",
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

export default HardMoneyFAQSection;
