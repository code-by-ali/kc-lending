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
      title: "Loan Shopping & Comparison",
      description: "Access wholesale rates and National lenders",
    },
    {
      icon: TrendingUp,
      title: "Pre-Approval Assistance",
      description: "Strengthen your offer with verified budgets",
    },
    {
      icon: FileText,
      title: "Loan Application Management",
      description: "From paperwork to underwriting, we handle it",
    },
    {
      icon: BarChart3,
      title: "Expert Guidance",
      description: "Choose right loan, understand closing costs, and more",
    },
    {
      icon: HelpCircle,
      title: "Problem Solving",
      description: "For non-traditional borrowers and unique scenarios",
    },
    {
      icon: Users,
      title: "Closing Co-ordination",
      description: "We work with your realtor, title/title company",
    },
    {
      icon: RefreshCw,
      title: "Refinance & Second Mortgage Solutions",
      description: "Save HOH your realtor, title/title company",
    },
    {
      icon: DollarSign,
      title: "Private Equity Loan Assistance",
      description: "We work with your realtor, title/title company",
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
              What services do we offer for your real estate
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
                className="bg-white hover:bg-blue-600 p-6 flex flex-col justify-between h-[240px] group transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                    <IconComponent
                      size={24}
                      className="text-gray-700 group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-3 leading-tight transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 leading-relaxed mb-6 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Details Link */}
                <div className="mt-auto">
                  <button className="text-sm font-medium text-gray-900 group-hover:text-white flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Details
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
