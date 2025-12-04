"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What's the difference between pre-qualification and pre-approval?",
      answer:
        "Pre-qualification is a quick estimate of what you can borrow. Pre-approval is a verified commitment from a lender after reviewing your financial documents and credit, giving you stronger buying power.",
    },
    {
      question: "How much down payment do I actually need in California?",
      answer:
        "It depends on your loan type. FHA loans require as little as 3.5% down, while conventional loans can start at 3-5%. VA loans offer zero down for qualified veterans.",
    },
    {
      question: "What's the difference between a mortgage broker and a bank?",
      answer:
        "A certified mortgage broker like KC Lending accesses 100+ lenders to find your best rate, while banks only offer their own products. Brokers give you more options and often better deals.",
    },
    {
      question: "Will shopping for rates hurt my credit score?",
      answer:
        "Multiple mortgage inquiries within 45 days count as one credit check. As the best mortgage broker in your area, we help you compare offers without damaging your score.",
    },
    {
      question: "Can I get a mortgage with student loan debt?",
      answer:
        "Yes! Mortgage lenders in California look at your debt-to-income ratio. As long as your total monthly debts (including student loans) don't exceed certain thresholds, you can qualify.",
    },
    {
      question: "What documents do I need to start the mortgage process?",
      answer:
        "You'll need recent pay stubs, W-2s or tax returns, bank statements, and ID. As a mortgage broker near me, we guide you step-by-step on exactly what's required.",
    },
    {
      question: "Are there programs for first-time homebuyers in California?",
      answer:
        "Absolutely! California offers down payment assistance programs, tax credits, and special loan options specifically designed to help first-time buyers get into homes with less money down.",
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

export default FAQSection;
