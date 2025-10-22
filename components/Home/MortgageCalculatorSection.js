"use client";
import React, { useState } from "react";
import { Home, FileText, DollarSign } from "lucide-react";
import MortgageIcon1 from "@/public/assets/home-mortgage-calc-icon-1.svg";
import MortgageIcon2 from "@/public/assets/home-mortgage-calc-icon-2.svg";
import MortgageIcon3 from "@/public/assets/home-mortgage-calc-icon-3.svg";
import CommonImage from "../common/CommonImage";

const MortgageCalculatorSection = () => {
  const [loanAmount, setLoanAmount] = useState(16000);
  const [loanTerm, setLoanTerm] = useState(8);

  // Simple calculation for demonstration
  const calculateMonthlyPayment = () => {
    const rate = 0.074 / 12; // 7.4% annual rate
    const months = loanTerm;
    const payment =
      (loanAmount * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);
    return payment.toFixed(2);
  };

  const calculateTotalPayback = () => {
    return (calculateMonthlyPayment() * loanTerm).toFixed(2);
  };

  const stats = [
    {
      icon: <CommonImage src={MortgageIcon1.src || MortgageIcon1} />,
      value: "7.4%",
      label: "Property Return Rate",
    },
    {
      icon: <CommonImage src={MortgageIcon2.src || MortgageIcon2} />,
      value: "3,856",
      label: "Property to Sell & Rent",
    },
    {
      icon: <CommonImage src={MortgageIcon3.src || MortgageIcon3} />,
      value: "2,540",
      label: "Daily Completed Transactions",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <p className="text-primary-blue text-lg md:text-xl font-semibold mb-3 tracking-[-2%]">
              Mortgage Calculator
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 tracking-[-1%] leading-tight">
              The new way to find you a better loans.
            </h2>
            <p className="text-description text-sm md:text-base mb-12 font-medium">
              Find your dream place to live in with more than 10k+ loans listed.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-description font-medium text-xs md:text-sm leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Calculator Card */}
          <div>
            <div className="bg-white rounded-sm shadow-xl">
              {/* Card Header */}
              <div className="gradient-bg text-white p-6 mb-8 relative">
                <h3 className="text-2xl md:text-3xl font-semibold p-2 flex items-center justify-center">
                  How Much You Need
                </h3>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#1751A8]"></div>
              </div>

              {/* Loan Amount Slider */}
              <div className="p-6 lg:p-10">
                <div className="mb-8">
                  <div className="flex justify-between text-sm md:text-base font-normal text-description mb-2">
                    <span>$1000</span>
                    <span>${loanAmount}</span>
                    <span>$40000</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="40000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1751A8]"
                    style={{
                      background: `linear-gradient(to right, #1751A8 0%, #1751A8 ${
                        ((loanAmount - 1000) / 39000) * 100
                      }%, #E5E7EB ${
                        ((loanAmount - 1000) / 39000) * 100
                      }%, #E5E7EB 100%)`,
                    }}
                  />
                </div>

                {/* Loan Term Slider */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm md:text-base font-normal text-description mb-2">
                    <span>1 Months</span>
                    <span>{loanTerm}</span>
                    <span>12 Months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1751A8]"
                    style={{
                      background: `linear-gradient(to right, #1751A8 0%, #1751A8 ${
                        ((loanTerm - 1) / 11) * 100
                      }%, #E5E7EB ${
                        ((loanTerm - 1) / 11) * 100
                      }%, #E5E7EB 100%)`,
                    }}
                  />
                </div>

                {/* Results */}
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-[#E6EAEF]">
                    <span className="text-description font-normal text-sm md:text-base">
                      Pay Monthly
                    </span>
                    <span className="text-primary font-semibold text-sm md:text-base">
                      ${calculateMonthlyPayment()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#E6EAEF]">
                    <span className="text-description font-normal text-sm md:text-base">
                      Term of Use
                    </span>
                    <span className="text-primary font-semibold text-sm md:text-base">
                      {loanTerm} Months
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-description font-normal text-sm md:text-base">
                      Total Pay Back
                    </span>
                    <span className="text-primary font-semibold text-sm md:text-base">
                      ${calculateTotalPayback()}
                    </span>
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full cursor-pointer gradient-bg rounded-sm text-white font-semibold py-4 text-base md:text-lg">
                  Apply For Loan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageCalculatorSection;
