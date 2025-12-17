"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CPLCFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What credit score do I need for a commercial loan?",
      answer:
        "Most lenders require 680 minimum for conventional commercial loans, though 700+ gets better terms. SBA loans typically need 680+; hard money lenders may accept lower.",
    },
    {
      question: "How much down payment is required for commercial property?",
      answer:
        "Typically, 20% to 30% for conventional loans. SBA 504 loans require only 10% down. Hard money and bridge loans typically require a down payment of 25% to 40%.",
    },
    {
      question: "What is a good debt service coverage ratio?",
      answer:
        "Lenders typically require a minimum DSCR of 1.20 to 1.25. A ratio of 1.35 to 1.50 is considered strong and may qualify for better rates.",
    },
    {
      question: "Can I get a commercial loan for a startup business?",
      answer:
        "Difficult but possible. SBA loans are your best bet. You'll need a substantial down payment, strong personal credit, industry experience, and a detailed business plan.",
    },
    {
      question: "How long does it take to close a commercial loan?",
      answer:
        "Conventional loans take 45 to 90 days. SBA loans can take 60 to 120 days. Bridge and hard money loans can close in 2 to 4 weeks.",
    },
    {
      question: "Are commercial loan interest rates higher than residential?",
      answer:
        "Yes, typically 1% to 2% higher than residential mortgage rates due to increased risk and complexity of commercial properties.",
    },
    {
      question: "Do I need a personal guarantee for a commercial loan?",
      answer:
        "Most loans under $5 million require personal guarantees from owners with 20%+ stake. CMBS and very large loans may be non-recourse.",
    },
    {
      question: "Can I use a commercial loan to buy land?",
      answer:
        "Some lenders offer land loans, but with higher down payments (30-50%) and shorter terms. Construction loans are needed to develop the land.",
    },
    {
      question: "What happens when my commercial loan term ends?",
      answer:
        "Most commercial loans have balloon payments at the end of the term. You'll need to refinance, pay off the balance, or sell the property.",
    },
    {
      question: "Can I refinance a commercial property?",
      answer:
        "Yes. Refinancing allows you to access your equity, lower your interest rate, or extend your term. Requires a new appraisal and underwriting, like a purchase.",
    },
    {
      question: "Do commercial loans have prepayment penalties?",
      answer:
        "Many do, especially fixed-rate loans and CMBS loans. Penalties ensure the lender earns their expected interest. Some loans offer prepayment flexibility for a fee.",
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

export default CPLCFAQSection;
