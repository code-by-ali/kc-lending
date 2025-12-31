"use client";

import {
  Check,
  ChevronDown,
  ChevronLeft,
  CircleCheck,
  CircleX,
  DollarSign,
  FileLock,
  FileLock2,
  Frown,
  House,
  Landmark,
  Smile,
  X,
} from "lucide-react";
import React, { useState } from "react";
import CreditScore1 from "@/public/assets/purchase-flow-credit-score-1.svg";
import CreditScore2 from "@/public/assets/purchase-flow-credit-score-2.svg";
import CreditScore3 from "@/public/assets/purchase-flow-credit-score-3.svg";
import CreditScore4 from "@/public/assets/purchase-flow-credit-score-4.svg";
import CreditScore5 from "@/public/assets/purchase-flow-credit-score-5.svg";
import FinalFormImg from "@/public/assets/purchase-flow-final-form-img.svg";
import CommonImage from "../common/CommonImage";

export default function PurchaseFlowForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    loanType: "",
    propertyType: "",
    propertyUsage: "",
    hasFoundHome: "",
    state: "Washington",
    purchasePrice: 220000,
    firstTimeBuyer: "",
    creditScore: "",
    militaryService: "",
    propertyTypeSecond: "",
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const totalSteps = 11;

  const states = [
    "California",
    "Colorado",
    "Florida",
    "Illinois",
    "North Carolina",
    "Oregon",
    "Pennsylvania",
    "South Carolina",
    "Texas",
    "Washington",
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSelection = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.loanType !== "";
      case 2:
        return formData.propertyType !== "";
      case 3:
        return formData.propertyUsage !== "";
      case 4:
        return formData.hasFoundHome !== "";
      case 5:
        return formData.state !== "";
      case 6:
        return formData.purchasePrice > 0;
      case 7:
        return formData.firstTimeBuyer !== "";
      case 8:
        return formData.creditScore !== "";
      case 9:
        return formData.militaryService !== "";
      case 10:
        return formData.propertyTypeSecond !== "";
      case 11:
        return true; // Last step has form validation
      default:
        return false;
    }
  };

  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        />
      </div>
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="w-full max-w-5xl">
          {/* Progress Indicator */}
          <div className="text-center mb-8">
            <p className="inline-block px-4 py-3 rounded-xl bg-[#1D65D1]/10 text-[#1D65D1] font-semibold text-sm mb-4">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Step 1: Select Loan Type */}
          {currentStep === 1 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Select a loan type
              </h2>
              <div className="flex justify-center gap-6 mb-12">
                <button
                  onClick={() => handleSelection("loanType", "purchase")}
                  className={`flex flex-col items-center justify-center bg-white w-44 h-40 rounded-2xl border-2 transition-all ${
                    formData.loanType === "purchase"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <DollarSign
                    className={`w-12 h-12 mb-2
                  ${
                    formData.loanType === "purchase"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold
                  ${
                    formData.loanType === "purchase"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }`}
                  >
                    Purchase
                  </span>
                </button>

                <button
                  onClick={() => handleSelection("loanType", "refinancing")}
                  className={`flex flex-col items-center justify-center bg-white w-44 h-40 rounded-2xl border-2 transition-all ${
                    formData.loanType === "refinancing"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <Landmark
                    className={`
                  w-12 h-12 mb-2
                  ${
                    formData.loanType === "refinancing"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold
                  ${
                    formData.loanType === "refinancing"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    Refinancing
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Property Type */}
          {currentStep === 2 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                What type of property are you looking for?
              </h2>
              <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {[
                  "Single Family Home",
                  "Townhouse",
                  "Condominium",
                  "Multi Family Home",
                  "Manufactured",
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleSelection("propertyType", type)}
                    className={`flex flex-col items-center justify-center bg-white w-44 h-40 rounded-2xl border-2 transition-all ${
                      formData.propertyType === type
                        ? "border-[#184FA1]"
                        : "border-gray-200"
                    }`}
                  >
                    <House
                      className={`
                  w-12 h-12 mb-4
                  ${
                    formData.propertyType === type
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                    />

                    <span
                      className={`font-bold text-base text-center px-2
                  ${
                    formData.propertyType === type
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                    >
                      {type}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Property Usage */}
          {currentStep === 3 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                How is the property being used?
              </h2>
              <div className="flex justify-center gap-6 mb-12">
                {[
                  "Primary Residence",
                  "Secondary Residence",
                  "Rental Home",
                ].map((usage) => (
                  <button
                    key={usage}
                    onClick={() => handleSelection("propertyUsage", usage)}
                    className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                      formData.propertyUsage === usage
                        ? "border-[#184FA1]"
                        : "border-gray-200"
                    }`}
                  >
                    <House
                      className={`
                  w-12 h-12 mb-4
                  ${
                    formData.propertyUsage === usage
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                    />

                    <span
                      className={`font-bold text-base text-center px-2
                  ${
                    formData.propertyUsage === usage
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                    >
                      {usage}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Found Home */}
          {currentStep === 4 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Have your already found your new home?
              </h2>
              <div className="flex justify-center gap-6 mb-12">
                <button
                  onClick={() => handleSelection("hasFoundHome", "yes")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.hasFoundHome === "yes"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleCheck
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.hasFoundHome === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.hasFoundHome === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    Yes
                  </span>
                </button>

                <button
                  onClick={() => handleSelection("hasFoundHome", "no")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.hasFoundHome === "no"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleX
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.hasFoundHome === "no"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.hasFoundHome === "no"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    No
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Select State */}
          {currentStep === 5 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Select your state
              </h2>
              <div className="max-w-2xl mx-auto mb-8 relative">
                <select
                  value={formData.state}
                  onChange={(e) => handleSelection("state", e.target.value)}
                  className="w-full px-4 py-4 pr-12 rounded-xl border-2 border-gray-200 focus:border-[#184FA1] focus:outline-none text-gray-900 font-medium bg-white appearance-none cursor-pointer transition-all hover:border-gray-300 shadow-sm"
                  style={{
                    backgroundImage: "none",
                  }}
                >
                  {states.map((state) => (
                    <option
                      key={state}
                      value={state}
                      className="text-[#184FA1] font-medium"
                    >
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-6 h-6 text-[#184FA1]" />
                </div>
              </div>
              <p className="text-[#666666] text-base max-w-2xl text-left mx-auto">
                Program availability varies by state. In CA, CO, FL, IL, NC, OR,
                PA, SC, TX and WA, you can select from all available programs.
                For all other states, only investment programs are offered.
              </p>
            </div>
          )}

          {/* Step 6: Purchase Price */}
          {currentStep === 6 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                What is the estimated purchase price?
              </h2>
              <div className="max-w-xl mx-auto mb-12">
                <div className="mb-8">
                  <p className="text-3xl font-semibold text-[#1E293B] mb-6">
                    ${formData.purchasePrice.toLocaleString()}
                  </p>
                  <input
                    type="range"
                    min="100000"
                    max="400000"
                    step="10000"
                    value={formData.purchasePrice}
                    onChange={(e) =>
                      handleSelection("purchasePrice", parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #1A3A76 0%, #4B8BFF ${
                        ((formData.purchasePrice - 100000) / 300000) * 100
                      }%, #e5e7eb ${
                        ((formData.purchasePrice - 100000) / 300000) * 100
                      }%, #e5e7eb 100%)`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-sm font-medium text-[#505967]">
                  <span>$100K</span>
                  <span>$200K</span>
                  <span>$300K</span>
                  <span>$400K</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 7: First Time Buyer */}
          {currentStep === 7 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Is this your first time buying home?
              </h2>
              <div className="flex justify-center gap-6 mb-12">
                <button
                  onClick={() => handleSelection("firstTimeBuyer", "yes")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.firstTimeBuyer === "yes"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleCheck
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.firstTimeBuyer === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.firstTimeBuyer === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    Yes
                  </span>
                </button>

                <button
                  onClick={() => handleSelection("firstTimeBuyer", "no")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.firstTimeBuyer === "no"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleX
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.firstTimeBuyer === "no"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.firstTimeBuyer === "no"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    No
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 8: Credit Score */}
          {currentStep === 8 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Estimate your credit score
              </h2>
              <div className="flex justify-center gap-4 mb-12 flex-wrap max-w-5xl mx-auto">
                {[
                  { label: "760+", value: "760+", creditImg: CreditScore1 },
                  {
                    label: "720-760",
                    value: "720-760",
                    creditImg: CreditScore2,
                  },
                  {
                    label: "680-719",
                    value: "680-719",
                    creditImg: CreditScore3,
                  },
                  {
                    label: "640-679",
                    value: "640-679",
                    creditImg: CreditScore4,
                  },
                  {
                    label: "Below 640",
                    value: "below-640",
                    creditImg: CreditScore5,
                  },
                ].map((score) => (
                  <button
                    key={score.value}
                    onClick={() => handleSelection("creditScore", score.value)}
                    className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                      formData.creditScore === score.value
                        ? "border-[#184FA1]"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="relative w-20 h-20 mb-3">
                      <CommonImage
                        src={score.creditImg.src || score.creditImg}
                        className="w-20 h-20"
                      />
                    </div>
                    <span
                      className={`font-bold text-base text-center px-2
                  ${
                    formData.creditScore === score.value
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                    >
                      {score.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 9: Military Service */}
          {currentStep === 9 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                Have your or your spouse served in the military?
              </h2>
              <div className="flex justify-center gap-6 mb-12">
                <button
                  onClick={() => handleSelection("militaryService", "yes")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.militaryService === "yes"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleCheck
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.militaryService === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.militaryService === "yes"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    Yes
                  </span>
                </button>

                <button
                  onClick={() => handleSelection("militaryService", "no")}
                  className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                    formData.militaryService === "no"
                      ? "border-[#184FA1]"
                      : "border-gray-200"
                  }`}
                >
                  <CircleX
                    className={`
                  w-12 h-12 mb-4
                  ${
                    formData.militaryService === "no"
                      ? "text-[#184FA1]"
                      : "text-[#94A3B8]"
                  }`}
                  />
                  <span
                    className={`font-bold text-base text-center px-2
                  ${
                    formData.militaryService === "no"
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                  >
                    No
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Step 10: Property Type Second */}
          {currentStep === 10 && (
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#1E293B] mb-12">
                What type of property are you looking for?
              </h2>
              <div className="flex justify-center gap-6 mb-12 flex-wrap">
                {[
                  {
                    label: "Single Family Home",
                    icon: <Smile className="w-12 h-12 mb-4" />,
                  },
                  {
                    label: "Townhouses",
                    icon: <Landmark className="w-12 h-12 mb-4" />,
                  },
                  {
                    label: "Multi Family Home",
                    icon: <FileLock2 className="w-12 h-12 mb-4" />,
                  },
                  {
                    label: "Manufactured",
                    icon: <Frown className="w-12 h-12 mb-4" />,
                  },
                ].map((type) => (
                  <button
                    key={type.label}
                    onClick={() =>
                      handleSelection("propertyTypeSecond", type.label)
                    }
                    className={`flex flex-col items-center justify-center bg-white w-48 h-40 rounded-2xl border-2 transition-all ${
                      formData.propertyTypeSecond === type.label
                        ? "border-[#184FA1]"
                        : "border-gray-200"
                    }`}
                  >
                    <div
                      className={`
                  ${
                    formData.propertyTypeSecond === type.label
                      ? "text-blue-600"
                      : "text-gray-400"
                  }
                  `}
                    >
                      {type.icon}
                    </div>
                    <span
                      className={`font-bold text-base text-center px-2
                  ${
                    formData.propertyTypeSecond === type.label
                      ? "text-[#184FA1]"
                      : "text-[#1E293B]"
                  }
                  `}
                    >
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 11: Final Form */}
          {currentStep === 11 && (
            <div>
              <h2 className="text-3xl md:text-4xl text-center tracking-tight font-bold text-[#1E293B] mb-12">
                The final message for us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side - Image */}
                <div className="rounded-3xl overflow-hidden">
                  <CommonImage
                    src={FinalFormImg.src || FinalFormImg}
                    alt="Happy family"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Side - Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#344054] font-medium mb-2">
                      Full name*
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        handleSelection("fullName", e.target.value)
                      }
                      placeholder="John Carter"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#184FA1] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#344054] font-medium mb-2">
                      Email address*
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleSelection("email", e.target.value)}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#184FA1] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#344054] font-medium mb-2">
                        Phone*
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleSelection("phone", e.target.value)
                        }
                        placeholder="(123) 657-889"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#184FA1] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[#344054] font-medium mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          handleSelection("subject", e.target.value)
                        }
                        placeholder="Buying house"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#184FA1] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#344054] font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleSelection("message", e.target.value)
                      }
                      placeholder="Write here..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#184FA1] focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#184FA1] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#184FA1]/30"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer border-2 border-gray-300 text-[#344054] font-semibold hover:bg-gray-50 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
                Back
              </button>
            )}

            {currentStep < totalSteps && (
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  isStepValid()
                    ? "bg-[#184FA1] text-white hover:bg-blue-700 shadow-lg shadow-[#184FA1]/30 cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
