import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const HardMoneyVsTraditionalMortgages = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Hard Money Differs from Traditional Mortgages
      </h2>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Approval Criteria:
            </span>{" "}
            Traditional lenders analyze your entire financial life. Private
            mortgage lenders focus on the property and your exit strategy.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Speed:</span> Bank
            loans take 30–60 days or longer. Hard money can close in 5 to 10
            days, sometimes faster.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Documentation:</span>{" "}
            Banks require mountains of paperwork. Hard money loans require
            minimal documentation, as the property serves as collateral.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Terms:</span> Mortgages
            last 15 to 30 years. Hard money loans last 6 to 24 months.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Interest Rates:</span>{" "}
            Mortgages typically range from 6% to 8%. Hard money typically runs
            8% to 15%.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Down Payment:</span>{" "}
            Traditional loans require 3% to 20% down. Hard money typically
            requires a down payment of 25% to 35%.
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        The higher rates and shorter terms reflect the increased risk lenders
        take and the speed at which they provide funding. You&apos;re paying a
        premium for flexibility, speed, and access to deals that would otherwise
        be impossible to finance.
      </p>
    </div>
  );
};

const WhenToUseHardMoneyLoan = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        When Should You Use a Hard Money Loan?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Hard money isn&apos;t for buying your dream home with a white picket
        fence and a 30-year mortgage. It&apos;s a tool for real estate investors
        and property owners facing situations where traditional financing falls
        short.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Fix and Flip Projects
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        This is the most common use case. You find a distressed property selling
        below market value, buy it with hard money, renovate it over 3 to 6
        months, and sell it for profit. The short loan term aligns perfectly
        with the flip timeline.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Competing with Cash Buyers
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        California&apos;s real estate market moves fast. Sellers prefer cash
        offers because they close quickly with no financing contingencies. A
        hard money loan lets you make offers that look like cash to sellers,
        giving you a competitive edge.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Time-Sensitive Purchases
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Property at auction. Estate sale. Foreclosure. Short sale. Situations
        where you have 7 to 14 days to close. Fast approval loans California
        make these deals possible when conventional financing would kill the
        transaction.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Properties Banks Won&apos;t Finance
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Banks avoid properties with significant deferred maintenance, code
        violations, foundation issues, or that need major repairs. Hard money
        lenders California will finance these properties based on their
        after-repair value, not their current condition.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Bridge Financing
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        You found your next investment property, but haven&apos;t sold your
        current one yet. A hard money loan lets you buy now and refinance into
        conventional financing later, or pay off the loan when your other
        property sells.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Bad Credit or Recent Financial Issues
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Foreclosure, bankruptcy, short sale, or tax liens in your recent past?
        Banks will decline you. Private mortgage lenders may still approve you
        if the property has enough value and you have adequate equity in the
        deal.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Self-Employed or Complex Income
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If your tax returns show low income (because you write off everything)
        or your income structure is complex, banks struggle to qualify you. Hard
        money lenders don&apos;t care about your 1040s. They care about the
        property.
      </p>
    </div>
  );
};

const TypesOfHardMoneyLoans = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Types of Hard Money Loans Are Available?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Hard money lenders California offer several loan structures depending on
        your project type and exit strategy.
      </p>

      {/* Fix and Flip Loans */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Fix and Flip Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Designed specifically for investors who buy properties, renovate them,
        and resell quickly. These loans often cover both the purchase price and
        renovation costs, with funds released in draws as work progresses.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Terms: 6 to 12 months</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>LTV: 65% to 75% of purchase price</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Rehab Funding: Up to 100% of renovation costs in some cases
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Best For: House flippers, experienced renovators</span>
        </li>
      </ul>

      {/* Bridge Loans */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Bridge Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Short-term real estate financing that “bridges” the gap between two
        transactions. Buy your next property before selling your current one,
        then pay off the bridge loan once the first property is sold.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Terms: 6 to 18 months</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>LTV: Up to 75% of combined property value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Best For: Investors moving between properties, homeowners in
            transition
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Bridge loans California borrowers use are often referred to as gap loans
        or swing loans. They provide the flexibility to act fast without being
        constrained by timing.
      </p>

      {/* Cash-Out Refinance */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Cash-Out Refinance Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Pull equity from a property you already own to fund your next
        investment. The existing property serves as collateral, and you receive
        cash at closing to use as needed.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Terms: 12 to 24 months</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>LTV: Up to 65% of property value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Best For: Investors with existing properties who need capital for
            new deals
          </span>
        </li>
      </ul>

      {/* Construction Loans */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Construction Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Finance ground-up construction or major renovations that go beyond
        cosmetic fixes. Funds are distributed in draws based on construction
        milestones.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Terms: 12 to 24 months</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>LTV: Based on future completed value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Best For: Developers, major renovation projects</span>
        </li>
      </ul>

      {/* Commercial Hard Money Loans */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Commercial Hard Money Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Financing for multi-family properties (5+ units), retail, office
        buildings, industrial properties, and other commercial real estate.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Terms: 12 to 36 months</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Loan Amounts: Typically $500,000 minimum</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Best For: Commercial property investors, business owners buying
            buildings
          </span>
        </li>
      </ul>
    </div>
  );
};

const HardMoneyLoanRequirements = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the Requirements for Hard Money Loans?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        The good news is that requirements are much simpler than those for
        conventional financing. The bad news: you need more money down, and
        costs are higher.
      </p>

      {/* Down Payment */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Down Payment Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Standard: 25% to 35% of the purchase price</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Lenders want you to have &quot;skin in the game.&quot; Your equity
        investment protects them if property values decline or the project goes
        wrong. Some lenders will go as low as 20% down for experienced investors
        with strong track records. First-time investors typically need to put
        more down.
      </p>

      {/* Credit Score */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Credit Score Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Minimum: 600 to 640 for most lenders</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Preferred: 660+</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        While private mortgage lenders focus more on property value than credit,
        they still check your score. Bad credit won&apos;t automatically
        disqualify you, but it may affect your interest rate and down payment
        requirement. Recent bankruptcies, foreclosures, or short sales are
        generally acceptable as long as you can explain them and show
        you&apos;ve recovered financially.
      </p>

      {/* LTV */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Loan-to-Value (LTV) Ratio
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        This is the most critical number in hard money lending. LTV is the loan
        amount divided by the property value.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Formula: Loan Amount ÷ Property Value = LTV
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Standard LTV: 65% to 75%</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Conservative LTV: 60%</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Aggressive LTV: 80% (rare, usually for experienced investors)
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        The lower the LTV, the less risk the lender assumes. Expect better rates
        and terms at 65% LTV than at 75% LTV.
      </p>

      {/* Exit Strategy */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Exit Strategy
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Lenders want to know how you&apos;ll repay them. You need a clear exit
        strategy before they&apos;ll approve your loan.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Sell the property after renovations</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Refinance into conventional financing once the property is
            stabilized
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Pay off with sale proceeds from another property</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Rental income covers payments until you refinance or sell</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Vague plans, such as &quot;I&apos;ll figure it out,&quot; won&apos;t get
        approved. You need specific timelines and realistic numbers.
      </p>

      {/* Property Requirements */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Property Requirements
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Acceptable Property Types:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Single-family homes (1–4 units)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Multi-family properties (5+ units)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Mixed-use buildings</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Commercial properties</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Land (some lenders)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Investment properties in any condition</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">Property Must:</p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Be located in California (for local lenders)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Have a clear title</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Be worth enough to support the LTV ratio</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Have adequate insurance coverage</span>
        </li>
      </ul>

      {/* Additional Requirements */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Additional Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Experience: First-time flippers may face higher rates or stricter
            terms. Demonstrable real estate experience helps.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Reserves: Some lenders want to see 6 months of payments in reserve
            to cover unexpected delays.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Contractor Estimates: Detailed renovation plans and contractor bids
            showing scope of work and costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Appraisal: Independent appraisal determining current value and
            after-repair value (ARV).
          </span>
        </li>
      </ul>
    </div>
  );
};

const HardMoneyLoanCosts = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Much Do Hard Money Loans Cost?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Speed and flexibility come at a price. Understanding the true cost helps
        you determine if hard money makes sense for your deal.
      </p>

      {/* Interest Rates */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Interest Rates
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Range: 8% to 15% annually</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Most Common: 9% to 12%</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Your rate depends on:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>LTV ratio (lower LTV = lower rate)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Credit score</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Experience level</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property type and condition</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Market conditions</span>
        </li>
      </ul>

      {/* Points */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Points (Origination Fees)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Points are upfront fees charged by the lender, calculated as a
        percentage of the loan amount.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Typical Range: 2 to 4 points</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>One Point = 1% of the loan amount</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Some hard money lenders California offer points in the loan amount, so
        you don&apos;t pay them out of pocket. Others require points paid at
        closing.
      </p>

      {/* Other Fees */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Other Fees
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Appraisal Fee: $500 to $1,500</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Processing Fee: $500 to $1,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Underwriting Fee: $500 to $1,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Escrow/Title Fees: $2,000 to $5,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Document Preparation: $300 to $500</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Total closing costs typically run 5% to 8% of the loan amount. If you
        sell the property for $550,000 after $50,000 in renovations, you still
        profit $90,000 after all costs. That $26,400 in financing costs was
        worth it to make the deal happen.
      </p>
    </div>
  );
};

const HardMoneyLoanProcess = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Does the Hard Money Loan Process Work?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Unlike traditional mortgages that take weeks or months, fast approval
        loans California lenders provide can close in days.
      </p>

      {/* Step 1 */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 1: Initial Consultation (Same Day)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Contact a hard money lender with details about your property and
        project. They&apos;ll inform you immediately if the deal is feasible and
        provide preliminary terms.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        What You&apos;ll Need:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property address</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Purchase price or estimated value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>The amount you need to borrow</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Project overview (fix and flip, rental, etc.)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Exit strategy</span>
        </li>
      </ul>

      {/* Step 2 */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 2: Submit Application (1–2 Days)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Complete a simple application. Unlike traditional mortgages, you
        won&apos;t need:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Tax returns</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Pay stubs</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>W-2s</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Employment verification</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Bank statements (in most cases)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">You will need:</p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Basic personal information</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property details and purchase contract</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Renovation plans and contractor estimates (if applicable)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Photos of the property (sometimes)</span>
        </li>
      </ul>

      {/* Step 3 */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 3: Property Evaluation (2–3 Days)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The lender orders an appraisal or broker price opinion (BPO) to
        determine:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Current property value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>After-repair value (ARV)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Whether the LTV works</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>If the deal makes financial sense</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        For fix-and-flip projects, they&apos;ll review your renovation budget
        and timeline to ensure they&apos;re realistic.
      </p>

      {/* Step 4 */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 4: Approval and Terms (1–2 Days)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If everything checks out, you&apos;ll receive a loan commitment letter
        outlining:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Interest rate</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Points and fees</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Term length</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Draw schedule (if applicable)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Requirements for funding</span>
        </li>
      </ul>

      {/* Step 5 */}
      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 5: Closing (2–5 Days)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Once you accept the terms, the lender coordinates with title/escrow to
        close the loan. Sign documents, pay closing costs, and receive your
        funds.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        <span className="font-semibold text-primary">Total Timeline:</span> 5 to
        10 days from application to funding for most deals. Some hard money
        lenders California can close transactions in as little as three days for
        straightforward deals.
      </p>
    </div>
  );
};

const HardMoneyVsConventionalTable = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Hard Money vs. Conventional Financing: Which Is Right for You?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Not every deal requires hard money. Understanding when to use each type
        of financing saves you money and hassle.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Feature
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Hard Money Loan
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Conventional Mortgage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Approval Time
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                5–10 days
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                30–60 days
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Based On
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Property value
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Credit and income
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Credit Score
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                600+ acceptable
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                620+ required, 740+ for best rates
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Documentation
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">Minimal</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Extensive
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Down Payment
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">25–35%</td>
              <td className="border border-[#ddd] p-3 text-[#666]">3–20%</td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Interest Rates
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">8–15%</td>
              <td className="border border-[#ddd] p-3 text-[#666]">6–8%</td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Terms
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                6–24 months
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                15–30 years
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Monthly Payments
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Interest-only common
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Principal + interest
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Property Condition
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Any condition accepted
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Must meet minimum standards
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Best For
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Investors, flippers, time-sensitive deals
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Owner-occupied, long-term holds, stable properties
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Use Cases */}
      <p className="text-primary font-semibold text-base leading-relaxed mt-4">
        Use Hard Money When:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>You need to close in under 2 weeks</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Property is in poor condition</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>You have recent credit issues</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>You&apos;re self-employed with complex income</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>You&apos;re competing with cash buyers</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Traditional lenders have declined you</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Project duration is under 12 months</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Use Conventional Financing When:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>You have time for a normal closing process</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Your credit and finances are solid</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Property is in good condition</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>You&apos;re holding long-term (buy and hold rental)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Interest rates matter more than speed</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Many investors use a bridge loans California strategy: hard money to
        acquire and renovate quickly, then refinance into conventional financing
        once the property is stabilized and rented. This gives you the best of
        both worlds.
      </p>
    </div>
  );
};

const FirstTimeInvestorSection = () => {
  return (
    <div className="my-6 flex flex-col gap-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Can First-Time Investors Get Hard Money Loans?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Yes, but expect higher rates, larger down payments, and more scrutiny.
        Hard money lenders in California typically prefer experienced investors,
        but first-time investors can still qualify with the right approach.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        How to Improve Your Odds:
      </p>

      <ul className="space-y-4 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="font-bold text-primary">•</span>
          <span>
            <strong className="text-primary">
              Partner with Someone Experienced:
            </strong>{" "}
            Partner with an experienced lender or investor such as KC Lending
            who has successfully completed similar projects. Proven experience
            helps offset your lack of track record.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-primary">•</span>
          <span>
            <strong className="text-primary">
              Start with a Conservative Deal:
            </strong>{" "}
            Focus on properties that need cosmetic updates rather than major
            structural work. Simpler projects reduce risk and build credibility.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-primary">•</span>
          <span>
            <strong className="text-primary">Have a Solid Plan:</strong> Present
            a detailed renovation budget, realistic timeline, reliable
            contractor, and a clear exit strategy to show you&apos;re prepared.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-primary">•</span>
          <span>
            <strong className="text-primary">Bring More Money:</strong> A larger
            down payment (typically 35%–40%) reduces lender risk and
            significantly improves approval chances.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="font-bold text-primary">•</span>
          <span>
            <strong className="text-primary">Get Pre-Approved:</strong> Secure
            pre-approval before making offers so you know your budget and can
            move quickly on the right opportunity.
          </span>
        </li>
      </ul>
    </div>
  );
};

const ReadyToCloseSection = () => {
  return (
    <div className="my-8 flex flex-col gap-4 bg-[#F8F9FA] p-6 sm:p-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Ready to Close Your Next Deal Fast?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Hard money lenders in California give real estate investors the speed
        and flexibility to capitalize on opportunities traditional banks
        can&apos;t handle. Whether you&apos;re flipping your first house,
        building a rental portfolio, or using bridge loans in California to move
        between properties, the right hard money partner makes all the
        difference.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        At <span className="font-semibold text-primary">KC Lending</span>, we
        understand short-term real estate financing because we&apos;re investors
        ourselves. We know what it&apos;s like to find a great deal and need to
        close in 7 days. We also know renovation budgets stretch and timelines
        slip. That&apos;s why we structure fast approval loans California
        investors need—with terms that actually work in the real world.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        We won&apos;t quote rates we can&apos;t deliver or promise timelines we
        can&apos;t meet. We&apos;re direct lenders who make decisions in-house
        and fund deals with our own capital. When we commit to your project, we
        follow through.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        Call us at{" "}
        <span className="font-semibold text-primary">+1 (555) 123-4567</span>,
        email us at{" "}
        <span className="font-semibold text-primary">info@demo.com</span>, or
        complete our quick online application. Most deals receive preliminary
        approval within 24 hours.
      </p>

      <p className="text-primary font-semibold text-lg">
        Let&apos;s get you funded.
      </p>
    </div>
  );
};

export default function HardMoneySection() {
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
                  Hard Money Lenders California
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  Traditional bank loans take 30 to 60 days. Some deals can't
                  wait that long. When you need to close fast on an investment
                  property, beat cash buyers, or finance a property banks won't
                  touch, hard money lenders California provide the speed and
                  flexibility conventional financing can't match.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  Hard money loans are short term real estate financing backed
                  by property value rather than credit scores or tax returns.
                  They're designed for real estate investors, house flippers,
                  and property owners who need quick capital for time-sensitive
                  opportunities. Whether you're buying a fixer-upper at auction,
                  refinancing to pull equity for your next deal, or need fast
                  cash to close before a competitor does, hard money gives you
                  the leverage to move quickly in California's competitive
                  market.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  The trade-off? Higher interest rates and shorter terms than
                  conventional loans. But for investors who know how to use them
                  strategically, fast approval loans California offer are worth
                  every point of interest when they mean the difference between
                  landing a profitable deal or watching someone else take it.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What Is a Hard Money Loan?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  A hard money loan is short term real estate financing secured
                  by the property itself. Unlike traditional mortgages, where
                  lenders scrutinize your credit score, income, employment
                  history, and debt-to-income ratio, hard money lenders
                  California focus primarily on one thing: the value of the
                  property you're buying or refinancing.
                </p>

                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  This asset-based lending approach means approval depends on
                  the property's current value, after-repair value (ARV), and
                  the amount of equity you're bringing to the deal. Your credit
                  matters less. Your W-2s don't matter. What matters is whether
                  the property has enough value to protect the lender if you
                  can't repay.
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

          {/* HardMoney vs Traditional Mortgages */}
          <HardMoneyVsTraditionalMortgages />

          {/* When To Use HardMoney Loans */}
          <WhenToUseHardMoneyLoan />

          {/* Types of HardMoney Loans */}
          <TypesOfHardMoneyLoans />

          {/* HardMoney Loan Requirements */}
          <HardMoneyLoanRequirements />

          {/* HardMoney Loan Costs */}
          <HardMoneyLoanCosts />

          {/* HardMoney Loan Process */}
          <HardMoneyLoanProcess />

          {/* HardMoney Vs Conventional Table */}
          <HardMoneyVsConventionalTable />

          {/* First Time Investor Section */}
          <FirstTimeInvestorSection />

          {/* Ready To Close Section */}
          <ReadyToCloseSection />

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
