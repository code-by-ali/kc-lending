"use client";
import React, { useState } from "react";
import { Info } from "lucide-react";
import MortgageIcon1 from "@/public/assets/home-mortgage-calc-icon-1.svg";
import MortgageIcon2 from "@/public/assets/home-mortgage-calc-icon-2.svg";
import MortgageIcon3 from "@/public/assets/home-mortgage-calc-icon-3.svg";
import CommonImage from "../common/CommonImage";

const MortgageCalculatorSection = () => {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(5);
  const [insurance, setInsurance] = useState(500);
  const [years, setYears] = useState(30);
  const [hoa, setHoa] = useState(500);
  const [grossRentalIncome, setGrossRentalIncome] = useState(2000);

  const calculateResults = () => {
    const downPaymentAmount = (purchasePrice * downPayment) / 100;
    const loanAmount = purchasePrice - downPaymentAmount;

    // Monthly payment calculation (Principal + Interest)
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment =
      (loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    // Estimated taxes (rough estimate: 1.2% of purchase price annually)
    const estimatedTaxes = (purchasePrice * 0.012) / 12;

    // DSCR Calculation
    const totalMonthlyExpenses =
      monthlyPayment + insurance + hoa + estimatedTaxes;
    const dscr = (grossRentalIncome / totalMonthlyExpenses) * 100;

    return {
      loanAmount: loanAmount.toFixed(2),
      loanPayment: monthlyPayment.toFixed(2),
      estimatedTaxes: estimatedTaxes.toFixed(2),
      dscr: dscr.toFixed(0),
    };
  };

  const results = calculateResults();

  const handleReset = () => {
    setPurchasePrice(500000);
    setDownPayment(20);
    setInterestRate(5);
    setInsurance(500);
    setYears(30);
    setHoa(500);
    setGrossRentalIncome(2000);
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <p className="text-primary-blue text-lg md:text-xl font-semibold mb-3 tracking-[-2%]">
              Mortgage Calculator
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 tracking-[-1%] leading-tight">
              Know Your Numbers Before You Start
            </h2>
            <p className="text-description text-sm md:text-base mb-12 font-medium">
              Get clarity on your monthly payments with our free mortgage
              calculator. Work with the best mortgage broker California to turn
              your estimate into reality.
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

          {/* Right Column - DSCR Calculator Card */}
          <div>
            <div className="bg-white rounded-sm shadow-xl">
              {/* Card Header */}
              <div className="gradient-bg text-white p-6 mb-8 relative">
                <h3 className="text-2xl md:text-3xl font-semibold p-2 flex items-center justify-center">
                  Mortgage Loan Calculator
                </h3>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#1751A8]"></div>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-10">
                <h4 className="text-lg md:text-xl font-semibold text-primary mb-6">
                  Debt Service
                </h4>

                {/* Input Fields Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Purchase Price */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      Purchase Price <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        value={purchasePrice}
                        onChange={(e) =>
                          setPurchasePrice(Number(e.target.value))
                        }
                        className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                      />
                    </div>
                  </div>

                  {/* Down Payment */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      Down Payment <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                        %
                      </span>
                      <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                      />
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      Interest Rate <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                        %
                      </span>
                      <input
                        type="number"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) =>
                          setInterestRate(Number(e.target.value))
                        }
                        className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                      />
                    </div>
                  </div>

                  {/* Insurance */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      Insurance <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        value={insurance}
                        onChange={(e) => setInsurance(Number(e.target.value))}
                        className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                      />
                    </div>
                  </div>

                  {/* Years */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      Years <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                    />
                  </div>

                  {/* HOA */}
                  <div>
                    <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                      HOA <Info className="w-3 h-3 text-gray-400" />
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        value={hoa}
                        onChange={(e) => setHoa(Number(e.target.value))}
                        className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Gross Rental Income - Full Width */}
                <div className="mb-6">
                  <label className="flex items-center gap-1 text-sm font-medium text-description mb-2">
                    Gross Rental Income{" "}
                    <Info className="w-3 h-3 text-gray-400" />
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-description text-sm">
                      $
                    </span>
                    <input
                      type="number"
                      value={grossRentalIncome}
                      onChange={(e) =>
                        setGrossRentalIncome(Number(e.target.value))
                      }
                      className="w-full pl-8 pr-3 py-2.5 border border-gray-300 rounded-sm focus:ring-2 focus:ring-[#1751A8] focus:border-[#1751A8] text-sm"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-[#E6EAEF] pt-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-primary">
                      Result:
                    </h4>
                    <span className="text-xs text-description">
                      *For a correct result, enter all information
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-3 border-b border-[#E6EAEF]">
                      <span className="flex items-center gap-1 text-description font-normal text-sm md:text-base">
                        Loan Amount <Info className="w-3 h-3 text-gray-400" />
                      </span>
                      <span className="text-primary font-semibold text-sm md:text-base">
                        ${Number(results.loanAmount).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#E6EAEF]">
                      <span className="flex items-center gap-1 text-description font-normal text-sm md:text-base">
                        Loan Payment <Info className="w-3 h-3 text-gray-400" />
                      </span>
                      <span className="text-primary font-semibold text-sm md:text-base">
                        ${Number(results.loanPayment).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-[#E6EAEF]">
                      <span className="flex items-center gap-1 text-description font-normal text-sm md:text-base">
                        Estimated Taxes{" "}
                        <Info className="w-3 h-3 text-gray-400" />
                      </span>
                      <span className="text-primary font-semibold text-sm md:text-base">
                        ${Number(results.estimatedTaxes).toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="flex items-center gap-1 text-description font-normal text-sm md:text-base">
                        DSCR <Info className="w-3 h-3 text-gray-400" />
                      </span>
                      <span className="text-primary font-semibold text-sm md:text-base">
                        {results.dscr}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 cursor-pointer gradient-bg rounded-sm text-white font-semibold py-4 text-base md:text-lg hover:opacity-90 transition-opacity"
                  >
                    Reset Calculator
                  </button>
                  <button className="flex-1 cursor-pointer border-2 border-[#1751A8] text-[#1751A8] font-semibold py-4 text-base md:text-lg rounded-sm hover:bg-blue-50 transition-colors">
                    Get Consultation
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

export default MortgageCalculatorSection;
