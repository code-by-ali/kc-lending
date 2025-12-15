import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const WhatQualifiesCRE = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Qualifies as Commercial Real Estate?
      </h2>
      <p className="text-primary font-semibold text-base leading-relaxed">
        Income-Producing Properties:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Office buildings</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Retail centers and shopping malls</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Industrial warehouses and manufacturing facilities</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Apartment buildings (5+ units)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Self-storage facilities</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Hotels and motels </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Owner-Occupied Properties:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Buildings where your business operates (offices, restaurants,
            medical practices, etc.)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Mixed-use properties where you occupy part and lease the rest
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        If you're buying a duplex, triplex, or fourplex (2-4 units) to live in
        one unit, that's still residential financing. Once you hit 5+ units or
        buy purely for investment, you're in commercial territory.
      </p>
    </div>
  );
};

const WhatTypesOfCPL = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Types of Commercial Property Loans Are Available in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Understanding your options is the first step toward securing the right
        financing. Commercial loan brokers California typically work with
        multiple loan products because different situations require different
        solutions.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Conventional Commercial Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        These are traditional home loan programs adapted for commercial real
        estate, offered by banks, credit unions, and commercial lenders. They're
        the most common type of commercial financing.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong>5 to 10-year fixed terms with 20 to 30-year
            amortization (balloon payment at the end of the term)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment: </strong> 20% to 30%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Interest Rates: </strong>Typically 1% to 2% above the prime
            rate
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Stabilized properties with steady cash
            flow, experienced borrowers with strong financials
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Conventional loans offer competitive rates but require strong credit,
        substantial down payments, and proven business performance. Banks want
        to see that the property generates enough income to cover the mortgage
        payment with room to spare.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        SBA 504 Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The Small Business Administration's 504 program is designed specifically
        for business owners buying property they'll occupy. This is one of the
        best business mortgage solutions for owner-occupied commercial real
        estate.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Structure: </strong>50% conventional bank loan, 40% SBA
            loan, 10% down payment
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment: </strong> As low as 10%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong>10, 20, or 25-year fixed rates
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Maximum: </strong> $5.5 million (can go higher for
            manufacturing or energy projects)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Businesses buying buildings they'll
            occupy at least 51% of
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        The SBA guarantees the 40% portion, which reduces the bank's risk and
        allows for lower down payments. You end up with a long-term fixed rate
        and preserve working capital.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        SBA 7(a) Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        More flexible than 504 loans but with higher down payment requirements.
        It can be used for a broader range of purposes, including working
        capital, equipment, and real estate.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Maximum: </strong>$5 million
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment: </strong> 10% to 20%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong> Up to 25 years for real estate
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Businesses needing both real estate and
            working capital/equipment financing
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        CMBS Loans (Commercial Mortgage-Backed Securities)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        These loans are pooled together and sold to investors as securities.
        Lenders focus heavily on the property's performance rather than the
        borrower's credit.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Loan Size: </strong>Typically $2 million minimum
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong> 5, 7, or 10-year fixed rates
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Amortization: </strong>25 to 30 years
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Structure: </strong> Non-recourse (no personal guarantee)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Larger stabilized properties with strong
            cash flow
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        CMBS loans offer competitive rates and non-recourse terms but come with
        strict servicing requirements and prepayment penalties.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Bridge Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Short-term financing (6 to 36 months) is used when you need quick
        funding or are planning renovations before permanent financing.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong>6 months to 3 years
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Interest Rates: </strong> Higher than permanent financing
            (typically 8% to 12%)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment: </strong>20% to 30%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Property rehabs, quick closings,
            transitional properties
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Bridge loans are expensive but fast. They're designed to get you into a
        property quickly with the expectation that you'll refinance into
        permanent financing once the property is stabilized.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Hard Money Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Asset-based loans from private lenders focus on the property's value
        rather than your credit or financials.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong> 6 months to 2 years
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Interest Rates: </strong> 10% to 15%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment: </strong>25% to 40%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> Quick closings, credit challenges,
            properties banks won't touch
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Hard money fills the gap when traditional financing isn't available.
        It's expensive but accessible if you have equity in the property.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Construction Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Financing for ground-up development or significant renovations. Funds
        are disbursed in draws as construction progresses.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Terms: </strong> 12 to 24 months (construction period)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Interest: </strong> Variable rate during construction
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Conversion: </strong>Often converts to permanent financing
            upon completion
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Best For: </strong> New construction, major rehabs
          </span>
        </li>
      </ul>
    </div>
  );
};

const CPLRequirementsCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Are the Requirements for Commercial Property Loans in California?{" "}
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Commercial lenders evaluate three main factors: the property, the
        borrower, and the business. Here's what mortgage lenders California
        typically require when you apply for commercial financing.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Credit Score Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Minimum: </strong> 680 for most conventional commercial
            loans
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Preferred: </strong> 700+ for best rates and terms
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>SBA Loans: </strong>680+ typically required
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Hard Money: </strong> May accept lower scores (focused on
            property value)
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Your personal credit matters even when financing commercial property.
        Lenders want to see a history of responsible financial management.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Down Payment Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Conventional Loans: </strong> 20% to 30%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>SBA 504 Loans: </strong> 10%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>SBA 7(a) Loans: </strong>10% to 20%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CMBS Loans: </strong> 25% to 30%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Bridge/Hard Money: </strong> 25% to 40%
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Larger down payments demonstrate your commitment to the project and
        reduce the lender's risk. Some lenders offer lower down payments for
        exceptionally strong deals.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Debt Service Coverage Ratio (DSCR)
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        This is the most critical metric in commercial lending. DSCR compares
        the property's net operating income to its debt service (mortgage
        payment).
        <br />
        <strong>Formula:</strong> Net Operating Income ÷ Annual Debt Service =
        DSCR
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Minimum DSCR: </strong> 1.20 to 1.25 for most lenders
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Preferred DSCR: </strong> 1.35 to 1.50 for best terms
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        A DSCR of 1.25 means the property generates 25% more income than needed
        to cover the mortgage. This cushion protects the lender in the event
        that vacancy increases or rents decline.
      </p>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Business Financials
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Lenders want to see:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>2-3 years of business tax returns</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Profit and loss statements</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Balance sheets</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Business bank statements (3-6 months)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Personal financial statements</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Business plan (for startups or acquisitions)</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Personal Guarantees
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Most commercial loans under $5 million require personal guarantees from
        owners who hold 20% or more ownership stakes. This means you're
        personally liable if the business defaults.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Recourse Loans: </strong>The Lender can pursue personal
            assets beyond the property
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Non-Recourse Loans: </strong>Lender's only recourse is the
            property itself (typically CMBS loans or very large loans)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-lg leading-relaxed">
        Property Requirements{" "}
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Appraisal: </strong>Third-party appraisal confirming
            property value and income potential
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Environmental Assessment: </strong>Phase I (sometimes Phase
            II) environmental report
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Property Condition: </strong>Deferred maintenance must be
            addressed
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Occupancy: </strong>Strong occupancy rates (80%+ for
            multi-tenant properties)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Lease Terms: </strong>Long-term leases with credit-worthy
            tenants preferred
          </span>
        </li>
      </ul>
    </div>
  );
};

const ComparisonTableSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        How Do Commercial Loans Differ from Residential Mortgages?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        If you've only dealt with residential mortgages, commercial financing
        will feel different. Understanding these differences helps you prepare
        for the process and know what to expect.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Feature
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Residential Mortgage
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Commercial Loan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Based On
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Personal income and credit
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Property income and business financials
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Down Payment
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3% to 20%
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                20% to 30%
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Terms
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                15 or 30 years fixed
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                5-10 years with balloon payment
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Amortization
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Matches loan term
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Longer than term (20-30 years){" "}
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Interest Rates
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Lower (residential rates)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Higher (1-2% above residential)
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Personal Guarantee
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Not typically required
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Usually required
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Prepayment{" "}
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Usually no penalty
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Often has prepayment penalties
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Closing Time
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                30-45 days
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                45-90 days
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Documentation
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Personal financials
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Business + personal financials
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#666] text-sm leading-relaxed mt-4">
        The biggest difference? Residential lenders care if you can afford the
        payment. Commercial lenders care if the property can afford the payment.
      </p>
    </div>
  );
};

const WhatPropertyTypeCanYouFinanceWithCL = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Property Types Can You Finance with Commercial Loans?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Real estate financing for businesses works across virtually every
        commercial property type. Here's how financing differs by property
        category and what lenders look for in each.
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Office Buildings
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        From small professional buildings to high-rise towers, office properties
        remain a staple of commercial lending, despite the rise of remote work
        trends.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Tenant mix and lease terms heavily scrutinized</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Downtown locations vs. suburban office parks evaluated differently
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Class A buildings command better terms than Class B/C</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Medical office buildings often get favorable terms due to stable
            tenancy
          </span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        20-25% down, 1.25 DSCR, strong tenant credit profiles required
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Retail Properties
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        Shopping centers, strip malls, standalone retail buildings, and
        restaurants all fall under retail financing.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Anchor tenants critical for shopping centers</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            National credit tenants (Starbucks, CVS, etc.) strengthen deals
            significantly
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Restaurant properties face higher scrutiny due to business failure
            rates
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            E-commerce impact means lenders want strong, stable tenancy
          </span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        25-30% down for retail, 30-40% for restaurants, higher DSCR requirements{" "}
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Industrial and Warehouse Properties
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        California's logistics boom has made industrial properties highly
        attractive, from small flex spaces to massive distribution centers.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Location relative to ports, highways, and distribution networks
            matters
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Clear height, loading docks, and truck access affect value
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>E-commerce-driven demand strengthens financing terms</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Cold storage and specialized industrial may require niche lenders
          </span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        20-25% down, strong financing available for quality properties{" "}
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Multifamily Properties (5+ Units)
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        Apartment buildings, student housing, and senior living facilities. Once
        you hit 5+ units, it's commercial financing.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Strong, consistent rental history required</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Location and school districts matter for family housing</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Student housing requires university proximity and enrollment trends
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Senior living has specific regulatory considerations</span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        20-25% down, agency debt (Fannie Mae, Freddie Mac) often available for
        larger properties
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Mixed-Use Properties
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        Buildings that combine commercial and residential uses, such as retail
        spaces on the ground floor with apartments above.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Lenders evaluate both commercial and residential components
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Strong residential income can offset weaker commercial performance
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Urban locations typically command better terms</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Must meet occupancy requirements for both uses</span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        25-30% down, complexity affects pricing{" "}
      </p>

      <p className="text-primary text-lg font-semibold leading-relaxed">
        Hotels and Hospitality
      </p>
      <p className="text-[#666] text-lg font-normal leading-relaxed">
        From limited-service hotels to full-service resorts, hospitality
        properties are management-intensive and evaluated accordingly.
      </p>
      <p className="text-primary text-base font-semibold leading-relaxed">
        Financing Considerations:
      </p>
      <ul className="space-y-2 text-[#666] font-normal text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Operating history and revenue per available room (RevPAR) critical
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Brand affiliation (Marriott, Hilton) can improve terms</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Location and tourism trends heavily weighted</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Management company experience matters significantly</span>
        </li>
      </ul>
      <p className="text-base font-normal text-[#666]">
        <span className="text-primary font-bold">Typical Terms: </span>
        30-40% down, experienced operators preferred, higher rates than other
        property types
      </p>
    </div>
  );
};

const HowCLProcessWork = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        How Does the Commercial Loan Application Process Work?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Getting approved for investment property loans requires more
        documentation and takes longer than residential mortgages. Here's the
        step-by-step process and what you need to know at each stage.
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 1: Pre-Qualification (1-3 Days)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Before you start shopping for properties, talk to lenders about what
          you can afford. Share basic information about your business, credit,
          and down payment. Commercial loan brokers California can quickly tell
          you which loan products you'll likely qualify for.
          <br />
          You'll provide:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Basic business overview</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Estimated credit scores</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Down payment amount available</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Type of property you're targeting</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 2: Find Your Property (Varies)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Once you know your budget, work with a commercial real estate broker
          to find suitable properties. Look for assets with strong fundamentals:
          good location, solid tenancy, reasonable asking price relative to
          income.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 3: Submit Full Application (3-7 Days)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Once you have a property under contract, submit a complete loan
          application with all supporting documents.
        </p>
        <p className="text-primary text-base font-semibold leading-relaxed">
          Required Documentation:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Business tax returns (2-3 years)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Personal tax returns (2-3 years)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Business financial statements (P&L, balance sheet)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Personal financial statement</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Business bank statements (3-6 months)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              Operating statements for the property (if income-producing)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Rent roll (for multi-tenant properties)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Purchase agreement</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Business plan or property analysis</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 4: Property Appraisal (2-3 Weeks)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          The lender orders an appraisal to confirm the property's value and
          assess its income potential. Commercial appraisals are more detailed
          than residential and often cost $3,000 to $10,000+, depending on
          property size and complexity.
          <br />
          Appraisers use three approaches:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Income approach (capitalization of NOI)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Sales comparison approach (comparable properties)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Cost approach (replacement cost)</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 5: Environmental Assessment (2-3 Weeks)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Phase I environmental assessments check for contamination, hazardous
          materials, and environmental risks. Can run concurrently with the
          appraisal. If Phase I raises concerns, Phase II testing (including
          soil samples and groundwater testing) may be required, which would add
          time and cost.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 6: Underwriting (2-4 Weeks)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          The underwriter analyzes everything: your financials, the property's
          income, market conditions, appraisal, environmental report, and
          business plan. They'll come back with conditions you must meet before
          approval.
          <br />
          Common Conditions:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Additional financial documentation</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Explanations for credit issues</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Proof of reserves</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Lease agreements for tenants</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Insurance quotes</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Updated rent roll</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 7: Loan Committee Approval (1 Week)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          For larger loans, a loan committee (multiple decision-makers) must
          approve the loan. You may be asked to present your deal in person.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Step 8: Closing (1-2 Weeks)
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Once approved, the closing process begins. Title work, final
          documentation, insurance placement, and funding coordination all
          happen here.
          <br />
          <strong>Total Timeline: </strong>
          45 to 90 days from application to closing for most commercial loans.
        </p>
      </div>
    </div>
  );
};

const BuyOrLease = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Should You Buy or Lease Commercial Property?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Before pursuing hard money financing for a commercial property purchase,
        it's worth asking whether buying is even the right move. Leasing offers
        flexibility; if your business outgrows the space, contracts, or pivots
        into a different model, you're not stuck with a property you can't use.
        You also preserve capital that could be deployed into growing your
        business, hiring staff, buying inventory, or expanding operations.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Monthly lease payments are straightforward operating expenses with no
        surprises about roof repairs, HVAC replacements, or property tax
        increases. For businesses in early growth stages or industries with
        uncertain futures, leasing often makes more sense than tying up hundreds
        of thousands in real estate.
      </p>
    </div>
  );
};

const SBAForCRE = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Can You Use an SBA Loan for Commercial Real Estate?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Yes, and SBA loans are often the best option for business owners buying
        property they'll occupy. These government-backed programs offer terms
        that conventional lenders can't match.
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          SBA 504 Loan Details
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          The 504 program splits financing three ways: 50% bank loan, 40% SBA
          loan through a CDC, and 10% your down payment. Loan amounts reach $5.5
          million, with fixed rates below market, and terms of up to 25 years,
          making them ideal for owner-occupied properties.
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Your business must occupy at least 51% of existing buildings or 60% of
          new construction. For-profit companies only, with net worth under $15
          million and average net income below $5 million. Funds cover property
          and equipment, not working capital.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          SBA 7(a) Loan Details
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          The 7(a) program offers up to $5 million with 10-20% down and 25-year
          terms for real estate. This single-loan structure is simpler than the
          504 and covers real estate, equipment, working capital, refinancing,
          and business acquisitions, making it perfect for diverse funding
          needs.
        </p>
        <p className="text-[#666] text-base font-normal leading-relaxed">
          Applicants need a decent credit score (typically 680+), a demonstrated
          ability to repay, and must operate a for-profit business in the United
          States. Personal guarantees required from owners with 20%+ stake.
          Collateral is often required for businesses with a net worth under $15
          million.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Which SBA Program Is Better?
        </p>
        <p className="text-primary text-base font-semibold leading-relaxed">
          Choose SBA 504 if:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You're buying property and will occupy most of it</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You want the lowest down payment (10%)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You prefer long-term fixed rates</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You don't need working capital</span>
          </li>
        </ul>

        <p className="text-primary text-base font-semibold leading-relaxed">
          Choose SBA 7(a) if:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You need both real estate and working capital</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You want a simpler single-loan structure</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Your occupancy won't meet 504 requirements (below 51%)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>You need more flexibility in how funds are used</span>
          </li>
        </ul>
      </div>

      <p className="text-[#666] text-base font-normal leading-relaxed">
        KC Lending helps clients layer these programs with FHA financing all the
        time. It's how people buy $600,000 homes with $15,000 out of pocket.
      </p>
    </div>
  );
};

const ReadyToFinance = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Ready to Finance Your Commercial Property?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Commercial property loans California give you the tools to stop renting,
        build equity, and control your business's real estate future. Whether
        you need real estate financing for a business buying its first building
        or you're an experienced investor adding to your portfolio, the right
        financing structure makes all the difference.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        As experienced commercial loan brokers California, we've helped hundreds
        of business owners and investors secure investment property loans across
        every property type—from small office buildings to large apartment
        complexes. We understand California's commercial real estate market and
        know which lenders offer the best business mortgage solutions for your
        specific situation.
      </p>

      <p className="text-[#666] text-base font-normal leading-relaxed">
        Call us at +1 (555) 123-4567, email us at info@demo.com, or complete our
        commercial loan inquiry form. We'll review your property, analyze your
        financials, and identify the loan products that offer you the best terms
        and approval odds.
      </p>

      <p className="text-[#666] text-base font-normal leading-relaxed">
        Let's get your commercial property financed.
      </p>
    </div>
  );
};


export default function CPLCSection() {
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
                  Commercial Property Loans California
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  Buying commercial real estate is different from buying a home.
                  The stakes are higher, the numbers are bigger, and the
                  financing works completely differently. Whether you're a
                  business owner looking to stop paying rent and own your
                  building, or an investor building a portfolio of
                  income-producing properties, understanding commercial property
                  loans California is essential.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  The good news? California's robust economy and diverse real
                  estate market mean there are multiple financing options
                  available. From traditional bank loans to SBA programs to
                  private money, real estate financing for businesses comes in
                  many forms. Let's break down exactly how commercial loans work
                  and determine which option makes the most sense for your
                  situation.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What is a Commercial Real Estate Loan?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  A commercial real estate loan is financing used to purchase,
                  refinance, or renovate property that generates income or
                  houses a business. Unlike residential mortgages designed for
                  homes, commercial loans are based primarily on the property's
                  ability to generate income and the strength of your business.
                </p>

                <div className="mb-6">
                  <p className="text-[#666666] text-base font-normal leading-relaxed">
                    These loans are issued to businesses, LLCs, corporations, or
                    investors rather than individuals buying a personal
                    residence. The property itself serves as collateral, but
                    lenders also look at your business financials, cash flow
                    projections, and experience managing commercial real estate.
                  </p>
                </div>
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
          <WhatQualifiesCRE />

          {/* Why California Buyers Choose FHA Loans */}
          <WhatTypesOfCPL />

          {/* FHA Loan Requirements in California */}
          <CPLRequirementsCalifornia />

          {/* Comparison Table */}
          <ComparisonTableSection />

          {/* What is FHA Mortgage Insurance */}
          <WhatPropertyTypeCanYouFinanceWithCL />

          {/* 2025 FHA Loan Limits */}
          <HowCLProcessWork />

          {/* Special Programs */}
          <BuyOrLease />

          {/* California-Specific Help */}
          <SBAForCRE />

          {/* What Properties Qualify */}
          <ReadyToFinance />

          

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
