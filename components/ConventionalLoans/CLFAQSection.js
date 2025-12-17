"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const CLFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What credit score do I need for a conventional loan?",
      answer:
        "A minimum of 620, but 700+ will get you better rates. The best mortgage rates California typically require a credit score of 740 or higher.",
    },
    {
      question: "Can I get a conventional loan with less than 20% down?",
      answer:
        "Yes. Conventional loans allow as little as 3% down for qualified borrowers. You'll pay PMI but can cancel it later.",
    },
    {
      question: "How much are closing costs on a conventional loan?",
      answer:
        "Typically, 2% to 5% of the purchase price, or $10,000 to $30,000 on a $600,000 home in California.",
    },
    {
      question: "Can I buy a rental property with a conventional loan?",
      answer:
        "Yes. Conventional loans are suitable for investment properties, requiring a 15-25% down payment and slightly higher interest rates compared to owner-occupied homes.",
    },
    {
      question:
        "What is the maximum loan amount for a conventional loan in California?",
      answer:
        "$806,500 in standard counties and $1,209,750 in high-cost counties, such as LA, SF, San Diego, and Orange County, for 2025.",
    },
    {
      question: "How long does it take to close a conventional loan?",
      answer:
        "Typically, 30 to 45 days from application to closing, though it can be faster or slower depending on complexity.",
    },
    {
      question: "Can self-employed people get conventional loans?",
      answer:
        "Yes, with 2 years of tax returns showing stable income. Many mortgage lenders California specialize in self-employed borrowers.",
    },
    {
      question: "When can I remove PMI from my conventional loan?",
      answer:
        "When you reach 20% equity through payments or appreciation, you can request cancellation of PMI. It automatically terminates at 78% LTV.",
    },
    {
      question: "What is better, conventional or FHA loan?",
      answer:
        "Conventional is better if you have 620+ credit and want long-term savings. FHA is better suited for borrowers with credit scores between 500-619 or those with high debt ratios.",
    },
    {
      question: "Can I refinance from FHA to conventional?",
      answer:
        "Yes. Many homeowners refinance from FHA to conventional loans once they have 20% equity, which allows them to eliminate mortgage insurance and lower their costs.",
    },
    {
      question: "Do conventional loans require an appraisal?",
      answer:
        "Yes. The lender orders an appraisal to confirm the home's value and ensure it meets basic safety and livability standards.",
    },
    {
      question: "Are conventional loan rates negotiable?",
      answer:
        "Interest rates themselves aren't negotiable, but you can shop lenders for the best rates and negotiate lender fees and closing costs.",
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

export default CLFAQSection;
