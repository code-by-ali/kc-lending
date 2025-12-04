import React from "react";

const LoansAndClaimsSection = () => {
  const loanTypes = [
    {
      id: "01",
      title: "Home Loans",
      description:
        "Get pre-approved fast and shop with confidence knowing your budget and buying power.",
    },
    {
      id: "02",
      title: "Refinance",
      description:
        "Lower your rate, reduce monthly payments, or tap into equity for life's big expenses.",
    },
    {
      id: "03",
      title: "Purchase",
      description:
        "From offer to closing, we guide you through every step of buying your new home.",
    },
    {
      id: "04",
      title: "Second Mortgage",
      description:
        "Access your home's equity without refinancing your primary loan or losing your current rate.",
    },
    {
      id: "05",
      title: "Private Equity",
      description:
        "Alternative financing solutions for investors and borrowers who need flexible, creative lending options",
    },
  ];

  return (
    <section className="gradient-bg py-16 px-10 relative overflow-hidden min-h-screen">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-32">
          {/* Left Column */}
          <div>
            <p className="text-white text-base md:text-lg lg:text-xl font-semibold mb-3 tracking-[-2%]">
              More from KC
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-white mb-8 tracking-[-3%] leading-tight">
              Everything You Need Under One Roof
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#F3E063] text-[#1A202C] tracking-[-2%] text-sm md:text-base font-semibold px-6 py-3 rounded-xl">
                Register Account
              </button>
              <button className="bg-white text-[#1751A8] tracking-[-2%] text-sm md:text-base font-semibold px-6 py-3 rounded-xl">
                Explore loans
              </button>
            </div>
          </div>

          {/* Right Column - Loan Types List */}
          <div className="space-y-10 flex flex-col items-left justify-center">
            {loanTypes.map((loan) => (
              <div
                key={loan.id}
                className="flex gap-4 border-b border-[#184D9D] p-4"
              >
                <div className="flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-[-1px]">
                    {loan.id}.
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-white text-xl md:text-2xl lg:text-3xl font-medium tracking-[-1px]">
                    {loan.title}
                  </h3>
                  <p className="text-white text-sm md:text-base lg:text-lg tracking-[-0.5px]">
                    {loan.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoansAndClaimsSection;
