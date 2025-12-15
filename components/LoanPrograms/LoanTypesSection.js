import React from "react";
import {
  ArrowRight,
  Home,
  Shield,
  Users,
  Building2,
  Briefcase,
  Clock,
} from "lucide-react";
import LoanTypeIcon1 from "@/public/assets/kcloan-loan-type-icon-1.svg";
import LoanTypeIcon2 from "@/public/assets/kcloan-loan-type-icon-2.svg";
import LoanTypeIcon3 from "@/public/assets/kcloan-loan-type-icon-3.svg";
import LoanTypeIcon4 from "@/public/assets/kcloan-loan-type-icon-4.svg";
import LoanTypeIcon5 from "@/public/assets/kcloan-loan-type-icon-5.svg";
import LoanTypeIcon6 from "@/public/assets/kcloan-loan-type-icon-6.svg";
import CommonImage from "../common/CommonImage";

export default function LoanTypesSection() {
  const loanTypes = [
    {
      icon: LoanTypeIcon1,
      title: "FHA Loans",
      description:
        "Low down payments and flexible credit make homeownership possible for more Californians.",
    },
    {
      icon: LoanTypeIcon2,
      title: "VA Loans",
      description:
        "Exclusive zero-down home loan programs California for veterans and active military.",
    },
    {
      icon: LoanTypeIcon3,
      title: "First-Time Homebuyer Programs",
      description:
        "Special assistance and lower rates designed specifically for your first home purchase.",
    },
    {
      icon: LoanTypeIcon4,
      title: "Conventional Loans",
      description:
        "Traditional financing with competitive rates for buyers with strong credit and stable income.",
    },
    {
      icon: LoanTypeIcon5,
      title: "Commercial Real Estate Loans",
      description:
        "Mortgage lending programs for investors building portfolios and purchasing income-generating properties.",
    },
    {
      icon: LoanTypeIcon6,
      title: "Hard Money Loans",
      description:
        "Fast, asset-based financing when you need quick closings on time-sensitive real estate deals.",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanTypes.map((loan, index) => {
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-8"
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <CommonImage
                    src={loan.icon.src || loan.icon}
                    alt="icon"
                    className={`w-10 h-10`}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary ">
                    {loan.title}
                  </h3>

                  <p className="text-[#5F636B] font-medium text-base md:text-lg leading-relaxed">
                    {loan.description}
                  </p>
                </div>

                <button className="flex items-center text-primary text-base md:text-lg font-bold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
