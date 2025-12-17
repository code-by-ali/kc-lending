"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FHAFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What disqualifies you from getting an FHA loan?",
      answer:
        "Unpaid tax liens, recent foreclosure (within 3 years), active bankruptcy, inability to verify income, or the property doesn't meet FHA standards disqualify you from getting an FHA loan.",
    },
    {
      question: "How much income do I need for a $300K house with FHA?",
      answer:
        "With 3.5% down and today's rates, you'd need roughly $50,000-$60,000 annual income, depending on your other debts.",
    },
    {
      question: "Can I use an FHA loan if I've owned a home before?",
      answer:
        "Yes. You just need to sell your current home first (or prove you're relocating and can afford both).",
    },
    {
      question: "What's the current FHA interest rate?",
      answer:
        "Rates change daily based on market conditions. Call us for today's rate; it takes 2 minutes.",
    },
    {
      question: "How long is an FHA loan for?",
      answer:
        "Most are 30-year fixed mortgages, but 15-year and other terms are available.",
    },
    {
      question: "Is California giving $150,000 to first-time buyers?",
      answer:
        "There's a proposed program called the California Dream for All, but availability is limited, and it's not a $150K giveaway. It's a shared appreciation loan. We can explain what assistance programs you actually qualify for.",
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

export default FHAFAQSection;
