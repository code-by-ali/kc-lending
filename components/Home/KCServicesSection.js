import React from "react";
import {
  ShoppingCart,
  TrendingUp,
  FileText,
  BarChart3,
  HelpCircle,
  Users,
  RefreshCw,
  DollarSign,
} from "lucide-react";

const KCServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "FHA Loans",
      description:
        "Low down payment options with flexible credit requirements, perfect for buyers who are just starting their homeownership journey.",
    },
    {
      icon: TrendingUp,
      title: "VA Loans",
      description:
        "Exclusive benefits for veterans and active military, including zero down payment and no private mortgage insurance required.",
    },
    {
      icon: FileText,
      title: "First-Time Homebuyer Programs",
      description:
        "Special assistance programs with down payment help and competitive rates to make your first home more affordable.",
    },
    {
      icon: BarChart3,
      title: "Conventional Loans",
      description:
        "Traditional financing with competitive rates for buyers with strong credit and stable income looking for flexibility.",
    },
    {
      icon: HelpCircle,
      title: "Commercial Real Estate Loans",
      description:
        "Financing solutions for investment properties, multi-family units, and commercial buildings to grow your real estate portfolio.",
    },
    {
      icon: Users,
      title: "Hard Money Loans",
      description:
        "Fast, asset-based financing for fix-and-flip investors or borrowers who need quick closings on time-sensitive deals.",
    },
    {
      icon: RefreshCw,
      title: "DSCR Loans",
      description:
        "Income-based loans for real estate investors, qualify based on property cash flow, not personal tax returns.",
    },
    {
      icon: DollarSign,
      title: "Jumbo Loans",
      description:
        "Financing for luxury homes and high-value properties that exceed conventional loan limits in California's premium markets.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Title and Subtitle */}
          <div>
            <div className="mb-4">
              <span className="text-[#20479E] text-base md:text-lg lg:text-xl font-semibold tracking-[-2%]">
                KC Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Loan Programs Designed to Fit Every Situation
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="flex items-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              See how our tailored solutions can boost your real estate work. we
              provide the expertise to drive your success.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white hover:bg-[#184FA1] p-6 flex flex-col justify-between h-[300px] group transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#184FA1] flex items-center justify-center transition-colors duration-300">
                    <IconComponent
                      size={24}
                      className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-description group-hover:text-white/90 leading-relaxed mb-6 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Details Link */}
                <div className="mt-auto">
                  <button className="text-sm p-3 font-medium text-primary border border-[#171D2F33] group-hover:border-white group-hover:text-white flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    {" "}
                    Learn More
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KCServicesSection;
