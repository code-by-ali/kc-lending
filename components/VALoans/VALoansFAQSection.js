"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const VALoansFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Can I Buy a Multi-Unit Property with a VA Loan?",
      answer:
        'Yes! You can buy a duplex, triplex, or fourplex with a VA loan as long as you live in one of the units. This is called "house hacking," and it\'s one of the smartest ways to use your VA benefit.',
    },
    {
      question: "Do VA loans require a down payment?",
      answer:
        "No. VA loans allow zero down payment financing on homes up to the county loan limit if you have full entitlement.",
    },
    {
      question:
        "Can I use a VA loan to buy a second home or investment property?",
      answer:
        "No. VA loans require you to occupy the home as your primary residence. However, you can buy multi-unit properties and rent out extra units.",
    },
    {
      question: "What is the VA funding fee, and can it be waived?",
      answer:
        "The VA funding fee is 2.15% to 3.3% of the loan amount. Veterans with service-connected disabilities rated at 10% or higher are exempt from paying it.",
    },
    {
      question: "Can I refinance a conventional loan to a VA loan?",
      answer:
        "Yes. The VA cash-out refinance lets you refinance any mortgage type into a VA loan and potentially take cash out of your equity.",
    },
    {
      question: "How many times can I use my VA loan benefit?",
      answer:
        "Unlimited times. Pay off your VA loan, sell the home, and your entitlement fully restores. Use it again and again throughout your lifetime.",
    },
    {
      question: "Are VA loans only for first-time homebuyers?",
      answer:
        "No. Anyone eligible can use a VA loan regardless of whether they've owned a home before. You can use your VA benefit multiple times.",
    },
    {
      question: "Can I get a VA loan if I'm currently on active duty?",
      answer:
        "Yes. Active-duty servicemembers who have served at least 90 consecutive days are eligible to use their VA loan benefit right now.",
    },
    {
      question: "What credit score do I need for a VA loan in California?",
      answer:
        "Most lenders require a minimum of 580 to 620. The VA itself has no minimum credit score requirement, but individual lenders set their own standards.",
    },
    {
      question: "Do VA loans take longer to close than conventional loans?",
      answer:
        "No. VA loans typically close in 30 to 45 days, the same timeframe as conventional or FHA loans. Proper preparation speeds up the process.",
    },
    {
      question: "Can my spouse use my VA loan benefit if I die?",
      answer:
        "Yes. Surviving spouses of veterans who died in service or from service-connected disabilities may be eligible to use VA loan benefits.",
    },
    {
      question: "Can I pay off my VA loan early without penalty?",
      answer:
        "Yes. VA loans never have prepayment penalties. Pay extra whenever you want or pay off the entire balance without any fees.",
    },
    {
      question: "What types of homes can I buy with a VA loan?",
      answer:
        "Single-family homes, condos (if VA-approved), townhomes, manufactured homes built after 1976, and multi-unit properties (2-4 units) where you live in one unit.",
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

export default VALoansFAQSection;
