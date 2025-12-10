import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const WhyDoFHALoansEvenExist = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Why Do FHA Loans Even Exist?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        During the Great Depression, it was nearly impossible to obtain a
        mortgage. Banks were failing, homeownership collapsed, and the housing
        market tanked. The government created the FHA to get people back into
        homes and stabilize the economy.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Fast forward to today: FHA loans still serve the same purpose. They help
        regular people, such as teachers, nurses, retail managers, and
        tradespeople, buy homes even when they don't have perfect credit or
        $100,000 in savings. In expensive states like California, that mission
        matters more than ever.
      </p>
    </div>
  );
};

const WhyCaliforniaBuyersChooseFHALoans = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Why California Buyers Choose FHA Loans?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        FHA loans have a lot for first-time buyers and popular for good reasons.
        Here's what makes them different:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Tiny Down Payments: Put down just 3.5% if your credit score is 580
            or higher. Even with a score between 500-579, you only need 10%
            down, still way less than conventional loans.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Credit Flexibility: Bad credit from a medical bill or job loss a few
            years ago? FHA lenders look at your whole financial picture, not
            just your credit score.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Gift Funds Allowed: Your parents or family can gift you the entire
            down payment and closing costs. You don't have to save it all
            yourself.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Higher Debt-to-Income Ratios: Carrying student loans or a car
            payment? FHA loans allow DTI ratios up to 50% (sometimes even 57%),
            which means you can qualify even with existing debt
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Multi-Unit Properties: Buy a duplex, triplex, or fourplex, live in
            one unit, and rent out the others. Your rental income can help you
            qualify.
          </span>
        </li>
      </ul>
    </div>
  );
};

const FHALoanRequirementsCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        FHA Loan Requirements in California
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Let's cut through the confusion. Here's what you actually need to
        qualify:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Credit Score: Minimum 580 for 3.5% down. Between 500-579? You'll
            need 10% down.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Down Payment: 3.5% to 10% depending on your credit score. Gift funds
            from family are totally fine.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Employment: Two years of steady work history. Self-employed? We'll
            use your tax returns.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Debt-to-Income Ratio: Most lenders want to see 43% or less, but FHA
            allows up to 57% in some cases.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Property Standards: The home needs to meet FHA's safety and
            livability requirements (no major structural issues, functioning
            systems).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Occupancy: This has to be your primary residence. No buying vacation
            homes or pure investment properties with FHA.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Mortgage Insurance: You'll pay both upfront (1.75%) and monthly
            premiums. More on this below.
          </span>
        </li>
      </ul>
    </div>
  );
};

const WhatIsFHAMortgageInsurance = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What is FHA Mortgage Insurance (MIP)?{" "}
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Here's the part nobody loves about FHA: you pay mortgage insurance. Two
        kinds, actually:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Upfront Mortgage Insurance Premium (UFMIP): This is 1.75% of your
            loan amount, charged at closing. Good news: it's almost always
            rolled into your loan, so you don't pay it out of pocket.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Annual Mortgage Insurance Premium (MIP): This is paid monthly as
            part of your mortgage payment. The rate ranges from 0.15% to 0.75%
            annually, depending on your loan amount, down payment, and loan
            term.
          </span>
        </li>
      </ul>

      <p className="text-base font-bold text-primary">When does MIP go away?</p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            If you put down less than 10%: MIP lasts for the life of the loan
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>If you put down 10% or more: MIP drops off after 11 years</span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Unlike conventional PMI, which cancels at 20% equity, FHA's MIP is
        stickier. That's the tradeoff for easier qualification. Many buyers
        refinance to conventional loans once they build equity, allowing them to
        ditch the insurance.
      </p>
    </div>
  );
};

const FHA2025LoanLimits = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        2025 FHA Loan Limits in California
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Affordable home loan programs like FHA have loan limits that vary by
        county. In California, that means:
      </p>
      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Low-Cost Counties: $524,255 for a single-family home</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            High-Cost Counties (LA, SF, Orange, San Diego): $1,209,750 for a
            single-family home
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Multi-Unit Limits in High-Cost Areas:{" "}
      </p>
      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Duplex: $1,548,300</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Triplex: $1,871,050</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Fourplex: $2,325,650</span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        The limit goes up if you're buying a multi-unit property. A fourplex in
        LA County? You can borrow over $2.3 million with FHA. Your county's
        limit affects how much you can borrow. In cheaper areas, the limits are
        lower. In expensive metropolitan areas, they're significantly higher to
        account for local prices.
      </p>
    </div>
  );
};

const ComparisonTableSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        FHA vs. Conventional Loans: What is the Difference?
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Feature
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                FHA Loan
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Conventional Loan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Down Payment
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3.5% minimum
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3% minimum
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Credit Score
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                580 for best terms
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                620+ typically required
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Mortgage Insurance
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Upfront + monthly (life of loan with 3.5% down)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Monthly PMI only (drops at 20% equity)
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Loan Limits
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to $1.2M in high-cost CA areas
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to $1M+ in conforming areas
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Debt-to-Income
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to 50-57% allowed
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Usually capped at 43-45%
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Property Standards
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Stricter appraisal requirements
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                More flexible
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Gift Funds
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                100% of the down payment is allowed
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Allowed but with restrictions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#666] text-sm leading-relaxed mt-4">
        If your credit is strong (700+) and you have 10-20% down, conventional
        will probably save you money long-term because you can drop PMI. If
        you're working with lower credit scores or a smaller down payment, FHA
        is usually your best, and sometimes only, option.
      </p>
    </div>
  );
};

const SpecialFHAPrograms = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Special FHA Programs Worth Knowing About
      </h2>

      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            FHA 203(k) Rehab Loan: Want to buy a fixer-upper? The 203(k) loan
            lets you finance both the purchase price and renovation costs in one
            mortgage. You can buy that outdated house and roll the remodel into
            your loan.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            FHA Streamline Refinance: Already have an FHA loan? The streamline
            refi lets you lower your rate with minimal paperwork, no appraisal,
            and sometimes no credit check. It's the easiest refinance process
            you'll ever do.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            FHA Energy Efficient Mortgage (EEM): Add energy-efficient upgrades
            (solar panels, new HVAC, insulation) to your home purchase and
            finance them into your FHA loan.
          </span>
        </li>
      </ul>
    </div>
  );
};

const CaliforniaSpecificHelp = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        California-Specific Help for FHA Buyers{" "}
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        California offers programs that stack with FHA loans California to make
        buying even easier:
      </p>
      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            CalHFA MyHome Assistance Program: Get up to 3.5% of the purchase
            price as a deferred-payment junior loan (no monthly payments) to
            cover your down payment and closing costs. When you sell or
            refinance years later, you pay it back.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            CalPLUS FHA + ZIP Loan: Combines an FHA loan with a zero-interest
            junior loan specifically for closing costs. Perfect if you've saved
            your down payment but need help with closing.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Down Payment Assistance Programs: Multiple California counties and
            cities offer grants and forgivable loans to first-time buyers. Some
            you never have to pay back if you stay in the home for a certain
            number of years.
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        KC Lending helps clients layer these programs with FHA financing all the
        time. It's how people buy $600,000 homes with $15,000 out of pocket.
      </p>
    </div>
  );
};

const WhatPropertyQualify = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Properties Qualify for FHA Financing?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        FHA loans work for:
      </p>
      <ul className="space-y-2 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Single-family homes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Condos (if the complex is FHA-approved)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Townhomes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Manufactured homes (built after 1976)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Multi-unit properties (2-4 units, you must live in one)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base font-normal leading-relaxed">
        Property must meet FHA standards:
      </p>
      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Safe and habitable condition</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>No major structural issues</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Functioning utilities (water, electric, heat)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Roof in decent shape</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>No peeling paint (lead paint concerns)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Meets local building codes</span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        The FHA appraisal is stricter than a conventional one. If the home has
        issues, the seller typically fixes them or gives you a credit at
        closing.
      </p>
    </div>
  );
};

const HowToQualify = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        How to Qualify For FHA Loans California: Step-by-Step Process
      </h2>

      <ul className="space-y-2 text-[#666] text-base font-normal">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 1: Check Your Credit: Pull your credit report and see where you
            stand. A score of 580+ is ideal, but we've worked with scores as low
            as 500.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 2: Calculate Your DTI: Add up all your monthly debts (car
            payment, student loans, credit cards, future mortgage payment) and
            divide by your gross monthly income. Under 43% is great, but FHA
            allows higher.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 3: Save Your Down Payment: You need 3.5% of the purchase price
            plus closing costs (usually 2-5% of the loan amount). Gift funds
            from family can cover all of it.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 4: Get Pre-Approved: We'll verify your income, pull your
            credit, and provide you with a pre-approval letter, demonstrating to
            sellers that you're a serious buyer.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 5: Find Your Home: Shop with confidence knowing your budget.
            Your realtor will submit offers with your FHA pre-approval in place.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 6: Home Inspection & Appraisal: FHA requires an appraisal to
            confirm the home's value and condition. Any safety issues must be
            addressed.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Step 7: Close: Sign papers, hand over your down payment, and get
            your keys.
          </span>
        </li>
        <li className="flex gap-3 font-bold text-primary">
          <span className="">•</span>
          <span>
            Timeline: 30-45 days from offer acceptance to closing for most FHA
            loans.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default function DetailedLoanSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* Contact Info Card */}
            <div className="bg-[#F8F9FA] p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">
                For additional question, contact us:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#666] mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:info@neom.com"
                    className="text-sm text-[#666] hover:text-[#1a1a1a]"
                  >
                    info@neom.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#666] mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+15551234567"
                    className="text-sm text-[#666] hover:text-[#1a1a1a]"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#666] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#666]">
                    1234 Sample Street, NYC
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Download Brochure Card */}
            <div className="bg-[#1950A3] p-6 flex flex-col">
              <p className="text-white text-xs font-medium uppercase tracking-wider mb-2">
                DOWNLOAD BROCHURE
              </p>
              <h4 className="text-white text-xl font-semibold mb-8">
                Our logistic list of services pdf
              </h4>
              <button className="w-full bg-[#fbbf24] cursor-pointer text-primary font-semibold py-3 px-4 text-sm uppercase tracking-wide transition-colors">
                DOWNLOAD PDF
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Get Into a California Home with Just 3.5% Down (FHA Loans)
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  Saving up 20% for a down payment in California? Good luck with
                  that. The median home price keeps climbing, and by the time
                  you've saved enough, prices have jumped again. That's where
                  FHA loans California come in; they let you buy with as little
                  as 3.5% down, even if your credit isn't perfect.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What is an FHA Loan?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  An FHA loan is a mortgage backed by the Federal Housing
                  Administration, a government agency created back in 1934.
                  Here's how it works: the FHA doesn't actually lend you money;
                  your mortgage comes from a regular bank or lender. But the FHA
                  insures that loan, which means if you default, they cover the
                  lender's loss.
                </p>

                <div className="mb-6">
                  <h3 className="text-base font-bold text-primary mb-3">
                    Why does this matter to you?
                  </h3>
                  <p className="text-[#666666] text-base font-normal leading-relaxed">
                    Because lenders take on less risk with government backed
                    home loans, they're willing to approve borrowers with lower
                    credit scores, smaller down payments, and higher debt levels
                    than they would for conventional mortgages. Basically, FHA
                    insurance makes lenders way more flexible about who they'll
                    approve
                  </p>
                </div>

                <p className="text-[#666] text-base leading-relaxed mb-6">
                  These are affordable home loan programs specifically designed
                  to assist individuals who may not qualify for traditional
                  financing. You're not getting a handout; you're getting access
                  to better terms because the government is reducing the
                  lender's risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Image */}
          <div className="overflow-hidden mb-10">
            <CommonImage
              src={SectionImg.src || SectionImg}
              alt="Shipping containers and forklift"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Why Do FHA Loans Even Exist */}
          <WhyDoFHALoansEvenExist />

          {/* Why California Buyers Choose FHA Loans */}
          <WhyCaliforniaBuyersChooseFHALoans />

          {/* FHA Loan Requirements in California */}
          <FHALoanRequirementsCalifornia />

          {/* What is FHA Mortgage Insurance */}
          <WhatIsFHAMortgageInsurance />

          {/* 2025 FHA Loan Limits */}
          <FHA2025LoanLimits />

          {/* Comparison Table */}
          <ComparisonTableSection />

          {/* Special Programs */}
          <SpecialFHAPrograms />

          {/* California-Specific Help */}
          <CaliforniaSpecificHelp />

          {/* What Properties Qualify */}
          <WhatPropertyQualify />

          {/* How to Qualify - Step by Step */}
          <HowToQualify />

          {/* CTA Button */}
          <div className="pt-4">
            <button className="gradient-bg text-white font-semibold py-4 px-8 rounded-lg text-base tracking-tight">
              Get In touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
