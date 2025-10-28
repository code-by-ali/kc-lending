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
        "Flexible options with low down payments, perfect for first-time buyers.",
    },
    {
      icon: LoanTypeIcon2,
      title: "VA Loans",
      description:
        "Exclusive benefits for veterans, active-duty service members, and their families.",
    },
    {
      icon: LoanTypeIcon3,
      title: "First-Time Homebuyer Programs",
      description:
        "Special programs designed to make owning your first home easier.",
    },
    {
      icon: LoanTypeIcon4,
      title: "Conventional Loans",
      description: "Competitive rates for buyers with established credit.",
    },
    {
      icon: LoanTypeIcon5,
      title: "Commercial Real Estate Loans",
      description: "Financing solutions for business owners and investors.",
    },
    {
      icon: LoanTypeIcon6,
      title: "Hard Money Loans",
      description:
        "Fast and flexible funding for unique or time-sensitive projects.",
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
