import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const ConventionalLoanLimits2025 = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the 2025 Conventional Loan Limits in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Understanding loan limits is crucial because they determine whether
        you'll need a conforming conventional loan or a jumbo loan. The Federal
        Housing Finance Agency (FHFA) sets these limits annually based on home
        price trends, and California has some of the highest limits in the
        country due to our expensive housing market.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        2025 Conforming Loan Limits
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Baseline (Most California Counties):</strong> $806,500 for a
            single-family home
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>High-Cost Counties:</strong> $1,209,750 for a single-family
            home
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        High-cost counties include Los Angeles, Orange, San Diego, San
        Francisco, San Mateo, Santa Clara, Marin, Contra Costa, Alameda, and
        several others where median home prices significantly exceed the
        national average.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Multi-Unit Properties
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The limits increase if you're buying a multi-unit property:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Duplex:</strong> $1,032,500 (baseline) to $1,548,300
            (high-cost)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Triplex:</strong> $1,248,250 (baseline) to $1,871,050
            (high-cost)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Fourplex:</strong> $1,551,050 (baseline) to $2,325,650
            (high-cost)
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        If your loan amount exceeds your county's conforming limit, you'll need
        a jumbo loan, which comes with stricter requirements and typically
        higher interest rates.
      </p>
    </div>
  );
};

const ConventionalLoanRequirements = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the Requirements for Conventional Loans in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Conventional loans have more stringent qualification criteria than
        government-backed programs, but they're not impossible to get. Here's
        what mortgage lenders California typically look for when you apply for a
        conventional loan.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Credit Score Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Minimum:</strong> 620 credit score for most conventional
            loans
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Recommended:</strong> 700+ for the best mortgage rates
            California
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Ideal:</strong> 740+ for the absolute lowest rates and best
            terms
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Your credit score directly impacts your interest rate. The difference
        between a 620 score and a 760 score can mean tens of thousands of
        dollars over the life of your loan.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Down Payment Requirements
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Conventional loans offer flexibility with down payments:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>3% Down:</strong> Available for first-time buyers and
            certain programs (Conventional 97, HomeReady, Home Possible)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>5% Down:</strong> Standard minimum for most borrowers
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>10% Down:</strong> Reduces your mortgage insurance costs
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>20% Down:</strong> Eliminates private mortgage insurance
            (PMI) entirely
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Putting down less than 20% means you'll pay PMI, but it's a small price
        to get into a home sooner rather than waiting years to save 20%.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Income and Employment
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        You need a stable, verifiable income to qualify. Lenders typically want
        to see:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Two years of employment history (same field, not necessarily same
            employer)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>W-2s and pay stubs for employed borrowers</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Two years of tax returns for self-employed borrowers</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Proof of other income (bonuses, commissions, rental income, alimony,
            etc.)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Debt-to-Income Ratio (DTI)
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Your DTI compares your monthly debt payments to your gross monthly
        income. Most mortgage lenders California require:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Maximum DTI:</strong> 43% to 50%
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Preferred DTI:</strong> 36% or less
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        For example, if you earn $8,000/month gross, your total monthly debts
        (including the new mortgage) shouldn't exceed $3,440 to $4,000,
        depending on the lender and your overall financial profile.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Assets and Reserves
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        You'll need money for:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Down payment</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Closing costs (2% to 5% of purchase price)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Reserves (typically 2-6 months of mortgage payments in savings)
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Some conventional loan programs (especially with lower down payments)
        don't require reserves, but having them strengthens your application.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Property Requirements
      </p>
      <p className="text-[#666] text-base leading-relaxed">The home must:</p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Be your primary residence, second home, or investment property
            (conventional loans work for all three)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Pass an appraisal confirming its value</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Meet basic safety and livability standards (less strict than FHA)
          </span>
        </li>
      </ul>
    </div>
  );
};

const FixedRateMortgagePrograms = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are Fixed Rate Mortgage Programs?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        When people talk about traditional home loan programs, they're usually
        referring to fixed-rate mortgages. These are the most popular types of
        conventional loans, and for good reason.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        A fixed rate mortgage program means your interest rate stays the same
        for the entire life of the loan. If you lock in at 6.5%, you'll still
        pay 6.5% in year 1, year 15, and year 30. Your principal and interest
        payment never changes, which makes budgeting easy and protects you from
        rising interest rates.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Common Fixed-Rate Terms
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>30-Year Fixed:</strong> The most popular option. Lower
            monthly payments spread over three decades. You pay more interest
            over time, but the payment is manageable.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>20-Year Fixed:</strong> Middle ground between 15 and 30
            years. Higher monthly payment than a 30-year, but you save
            significantly on interest.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>15-Year Fixed:</strong> Higher monthly payments but
            dramatically lower total interest. Great if you can afford the
            payments and want to build equity fast.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>10-Year Fixed:</strong> Aggressive payoff timeline with very
            low interest rates. Requires significant income to handle the high
            monthly payments.
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Most California homebuyers choose 30-year fixed rate mortgage programs
        because they offer the lowest monthly payment, even if they cost more in
        interest over time. You can always pay extra toward the principal if you
        want to pay off the loan faster.
      </p>
    </div>
  );
};

const ConventionalLoanBenefits = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the Benefits of Conventional Loans?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Understanding why conventional home loans California might be your best
        option helps you make an informed decision. Here are the key advantages
        that make conventional financing a compelling choice.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Lower Overall Costs
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If you have good credit and put down 20% or more, conventional loans are
        typically cheaper than FHA loans. You avoid upfront mortgage insurance
        premiums and don't pay ongoing insurance if you put down 20%.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        PMI Can Be Removed
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Put down less than 20%? You'll pay private mortgage insurance (PMI).
        However, here's the good news: once you reach 20% equity through
        payments or appreciation, you can request cancellation of PMI. With FHA
        loans, mortgage insurance lasts for the life of the loan if you put down
        less than 10%.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Higher Loan Limits
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        California's conforming loan limits increase to $1,209,750 in high-cost
        areas, which is significantly higher than the FHA limits. This allows
        you to purchase more expensive homes without needing a jumbo loan.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Flexible Property Types
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Conventional loans work for:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Primary residences</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Second homes/vacation properties</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Investment properties / rental properties</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Single-family homes, condos, townhomes, multi-unit properties
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        FHA and VA require owner-occupancy. Conventional loans give you more
        flexibility.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Better Terms for Strong Borrowers
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If you have excellent credit (740+), 20% down, and low debt,
        conventional loans reward you with the best mortgage rates California.
        Government loans don't differentiate as much between borrowers.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        No Upfront Mortgage Insurance Premium
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        FHA charges 1.75% of the loan amount upfront. On a $500,000 loan, that's
        $8,750. Conventional loans have no upfront PMI, though you'll pay it
        monthly if you put down less than 20%.
      </p>
    </div>
  );
};

const PrivateMortgageInsurance = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Does Private Mortgage Insurance (PMI) Work?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        PMI is a reality for most conventional borrowers who put down less than
        20%. Understanding how it works helps you plan for the true cost of
        homeownership. Private mortgage insurance protects the lender (not you)
        if you default on your loan. Because you're putting down less than 20%,
        the lender has more risk. PMI compensates them for that risk.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        How Much Does PMI Cost?
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        PMI typically costs 0.3% to 1.5% of your original loan amount per year,
        paid monthly. The exact amount depends on:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Your credit score (higher score = lower PMI)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Your down payment amount (more down = lower PMI)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Your loan-to-value ratio (LTV)</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        When Can You Cancel PMI?
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        <strong>Automatic Termination:</strong> When your loan balance reaches
        78% of the original home value, your lender must automatically cancel
        PMI (if you're current on payments).
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        <strong>Borrower-Requested Cancellation:</strong> You can request PMI
        cancellation once you reach 20% equity. You'll need to:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Be current on payments with no late payments in the past year
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Confirm there are no subordinate liens on the property</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Sometimes provide a new appraisal showing you have 20% equity
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        <strong>Early Cancellation Through Appreciation:</strong> If your home
        value increases significantly, you might reach 20% equity faster than
        expected. Obtain a new appraisal and request cancellation of PMI.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The ability to eliminate PMI is a massive advantage of conventional
        loans over FHA financing.
      </p>
    </div>
  );
};

const ComparisonTableSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Is the Difference Between Conventional and FHA Loans?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        This is one of the most common questions buyers ask. Both are solid
        financing options, but they serve different types of borrowers. Let's
        compare them directly so you can see which fits your situation better.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Feature
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Conventional Loan
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                FHA Loan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Credit Score Minimum
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">620</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                580 (3.5% down) / 500 (10% down)
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Down Payment
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3% to 20%
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3.5% to 10%
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Mortgage Insurance
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                PMI only if &lt;20% down (cancellable)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                MIP required regardless of down payment
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Upfront MI Premium
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">None</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                1.75% of loan amount
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Monthly MI Cost
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                0.3% to 1.5% annually
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                0.15% to 0.75% annually
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                MI Duration
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Until 20% equity
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Life of loan if &lt;10% down, 11 years if 10%+ down
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Loan Limits (CA High-Cost)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                $1,209,750
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                $1,209,750
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Property Standards
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Basic appraisal
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Stricter FHA appraisal with safety requirements
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                DTI Ratio
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                43% to 50%
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to 57% in some cases
              </td>
            </tr>
            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Investment Property
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">Allowed</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Not allowed
              </td>
            </tr>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Second Home
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">Allowed</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Not allowed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#666] text-sm leading-relaxed mt-4">
        Choose FHA if you have credit in the 500-680 range, a high
        debt-to-income ratio, or a minimal down payment saved. Choose
        conventional if you have a credit score of 620 or higher and want lower
        long-term costs, with the option to cancel mortgage insurance.
      </p>
    </div>
  );
};

const AdjustableRateMortgages = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are Adjustable-Rate Mortgages (ARMs)?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        While most California buyers choose fixed rate mortgage programs,
        adjustable-rate mortgages (ARMs) are another conventional loan option
        worth understanding. ARMs can save you money if used strategically. An
        ARM has an interest rate that changes over time based on market
        conditions. Most ARMs have two periods:
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Initial Fixed Period
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Your rate stays locked for a set number of years (typically 3, 5, 7, or
        10 years). During this time, ARM rates are usually 0.5% to 1% lower than
        30-year fixed rates.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Adjustment Period
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        After the initial fixed period ends, your rate adjusts periodically
        (usually annually) based on an index plus a margin. Your rate can
        increase or decrease, but some caps limit the amount of change that can
        occur.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Common ARM Structures:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>5/1 ARM:</strong> Fixed for 5 years, then adjusts annually
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>7/1 ARM:</strong> Fixed for 7 years, then adjusts annually
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>10/1 ARM:</strong> Fixed for 10 years, then adjusts annually
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        When ARMs Make Sense?
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            You're buying a starter home and plan to move within 5-7 years
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You expect your income to increase significantly</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You plan to refinance before the adjustment period</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Current fixed rates are very high, and you expect them to drop
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        When ARMs Are Risky?
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You plan to stay in the home long-term</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            You can barely afford the initial payment (can't handle an increase)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Interest rates are already low (nowhere to go but up)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Most mortgage lenders California offer both fixed and adjustable-rate
        conventional loans. Choose based on your timeline and risk tolerance.
      </p>
    </div>
  );
};

const BestMortgageRates = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Do I Qualify for the Best Mortgage Rates in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Interest rates can vary significantly between borrowers. Someone with
        excellent credit might receive a rate of 6.0%, while someone with fair
        credit might receive a rate of 7.5% on the same day. Here's how to
        position yourself for the best mortgage rates California on your
        conventional loan.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Improve Your Credit Score
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Every 20-point increase in your credit score can lower your rate by
        0.125% to 0.25%. Ways to boost your score before applying:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Pay down credit card balances to below 30% utilization</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Dispute any errors on your credit reports</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Don't open new credit accounts</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Make all payments on time for 6-12 months before applying</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Increase Your Down Payment
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The more you put down, the better your rate:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>5% down:</strong> Highest rates in the conventional category
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>10% down:</strong> Moderate improvement
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>15% down:</strong> Better rates
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>20% down:</strong> Best rates plus no PMI
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>25%+ down:</strong> Marginal additional improvements
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Lower Your DTI Ratio
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Pay down debts before applying. Every dollar of monthly debt you
        eliminate increases your buying power and can improve your rate.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Choose a Shorter Loan Term
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        15-year mortgages always have lower rates than 30-year loans (typically
        0.5% to 0.75% lower). If you can afford the higher payment, you'll save
        dramatically on interest.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Lock Your Rate at the Right Time
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Rates fluctuate daily. When rates are favorable, lock immediately. Most
        locks last 30-60 days. If you're shopping for homes and not ready to
        lock, track rates closely.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Shop Multiple Lenders
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Different lenders offer different rates. Get quotes from at least 3-5
        mortgage lenders California. Compare not just rates but also fees,
        closing costs, and service quality.
      </p>
    </div>
  );
};

const PropertyTypesConventionalLoans = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Property Types Qualify for Conventional Loans?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        One advantage of conventional home loans California is their flexibility
        regarding property types, unlike government loans with strict occupancy
        requirements; conventional financing works for various real estate
        purchases.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Primary Residences
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The home you'll live in most of the time. This gets the best rates and
        most favorable terms. You'll need to move in within 60 days of closing
        and live there for at least one year.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Second Homes
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Vacation properties or homes in another city. Requirements:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Must be at least 50 miles from your primary residence</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Can't be rented out regularly</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Slightly higher rates than primary residence (usually 0.25% to 0.5%)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Higher down payment often required (10-20%)</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Investment Properties
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Rental properties where tenants pay rent. Requirements:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Higher rates than primary or second homes (usually 0.5% to 0.75%
            higher)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Larger down payment (typically 15-25%)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Stronger reserves (6 months of mortgage payments)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Lender may count 75% of the expected rental income toward qualifying
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Property Structure Options
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Conventional loans work for:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Single-family homes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Condos (condo association must be financially sound)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Townhomes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>PUDs (Planned Unit Developments)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Multi-unit properties (2-4 units)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Manufactured homes (if permanently affixed to land and titled as
            real property)
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        This flexibility makes conventional financing versatile for various real
        estate strategies, from house hacking to building a rental portfolio.
      </p>
    </div>
  );
};

const MultiUnitPropertyConventionalLoan = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Buy a Multi-Unit Property with a Conventional Loan?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Yes, and this is one of the most effective ways to utilize a
        conventional loan. Buying a duplex, triplex, or fourplex with
        conventional financing allows you to live in one unit and rent out the
        others, significantly reducing your housing costs.
      </p>
    </div>
  );
};

const ClosingCostsConventionalLoans = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are Closing Costs for Conventional Loans?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Closing costs are the fees you pay when finalizing your home purchase.
        On conventional loans, expect to pay 2% to 5% of the purchase price in
        closing costs.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Typical Closing Costs in California
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        On a $600,000 home, closing costs might include:
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Lender Fees:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Loan origination fee: $600 to $2,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Underwriting fee: $400 to $800</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Processing fee: $300 to $700</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Credit report: $50 to $100</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Third-Party Fees:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Appraisal: $500 to $800</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Title insurance: $1,500 to $3,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Escrow fees: $1,000 to $2,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Home inspection: $400 to $600</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Recording fees: $200 to $500</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Prepaid Costs:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Homeowners insurance (1 year prepaid): $1,200 to $2,500</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property taxes (2-6 months prepaid): Varies by location</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Prepaid interest (per diem interest from closing to end of month)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>HOA fees (if applicable)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        <strong>Total:</strong> $12,000 to $30,000 on a $600,000 purchase
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Ways to Reduce Closing Costs
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Negotiate Seller Credits:</strong> Sellers can contribute up
            to 3% (with 10%+ down) or 6% (with 25%+ down) toward your closing
            costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Shop for Services:</strong> Compare rates for title
            insurance, homeowners insurance, and inspection services.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Ask for Lender Credits:</strong> Accept a slightly higher
            interest rate in exchange for lender credits toward closing costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Close at Month-End:</strong> Less prepaid interest required
            if you close on the 28th vs. the 1st.
          </span>
        </li>
      </ul>
    </div>
  );
};

const ConventionalLoanTimeline = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Long Does It Take to Get a Conventional Loan?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        The timeline from application to closing on a conventional loan in
        California typically ranges from 30 to 45 days, though it can be faster
        or slower depending on various factors.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Typical Conventional Loan Timeline
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 1-3: Application and Initial Review:</strong> Submit
            your loan application with all required documentation (W-2s, pay
            stubs, bank statements, tax returns). Lender reviews your file and
            orders your credit report.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 4-10: Processing:</strong> The loan processor verifies
            your employment, income, and assets. Orders the appraisal. You may
            be asked for additional documentation.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 7-14: Appraisal:</strong> Appraiser inspects the
            property and prepares a report confirming the home's value. Delays
            here are common due to appraiser availability.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 15-30: Underwriting:</strong> Underwriter reviews your
            complete financial profile and the appraisal. Issues conditional
            approval with a list of conditions you must meet (additional
            documentation, explanations, etc.).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 25-35: Clearing Conditions:</strong> You provide
            whatever the underwriter requested. Underwriter reviews and issues
            final approval (clear to close).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Days 35-45: Closing:</strong> The title company prepares
            closing documents. You do a final walkthrough of the property. Sign
            the documents at closing and receive your keys.
          </span>
        </li>
      </ul>
    </div>
  );
};

const SelfEmployed = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Happens If I'm Self-Employed?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Self-employed borrowers can obtain conventional loans, but the
        documentation requirements are more stringent. Lenders need to verify
        that your income is stable and likely to continue.
      </p>

      <div className="flex flex-col gap-2">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Documentation for Self-Employed Borrowers
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              <strong>Personal Tax Returns:</strong>
              Last 2 years (all schedules){" "}
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              <strong>Business Tax Returns:</strong>
              Last 2 years if you own 25%+ of a business
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              <strong>Year-to-Date Profit & Loss Statement:</strong>
              Showing current year income
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              <strong>CPA Letter:</strong>
              Sometimes required, verifying your business and income
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              <strong>Business License:</strong>
              Proof your business is legitimate and active
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const GiftFundDownPayment = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Can I Use Gift Funds for My Down Payment?
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Yes, conventional loans allow you to use gift funds from family members
        for your down payment and closing costs, although there are specific
        rules governing this process.
      </p>

      <div className="flex flex-col gap-3">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Gift Fund Requirements
        </p>
        <p className="text-primary text-base font-normal leading-relaxed">
          Who Can Give Gifts:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              Immediate family members (parents, siblings, grandparents, spouse,
              children)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Domestic partners</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Fiancé or fiancée</span>
          </li>
        </ul>

        <p className="text-primary text-base font-normal leading-relaxed">
          Not Allowed:
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>
              Friends (unless you can prove your relationship qualifies under
              special circumstances)
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Real estate agents, builders, or sellers</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Anyone with a financial interest in the transaction</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-primary text-lg font-semibold leading-relaxed">
          Documentation Required
        </p>
        <p className="text-primary text-base font-normal leading-relaxed">
          Gift Letter:{" "}
          <span className="text-[#666]">Donor must sign a letter stating:</span>
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>The dollar amount of the gift</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>The relationship to you</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>The property address</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>A statement that no repayment is expected</span>
          </li>
        </ul>

        <p className="text-primary text-base font-normal leading-relaxed">
          Paper Trail: <span className="text-[#666]">Lender needs to see:</span>
        </p>
        <ul className="space-y-2 text-[#666] text-base font-normal">
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Donor's bank statement showing they have the funds</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Transfer of funds from the donor to you</span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#666666]">•</span>
            <span>Your bank statement showing receipt of the funds</span>
          </li>
        </ul>
      </div>

      <p className="text-[#666] text-base font-normal leading-relaxed">
        <span className="font-bold text-primary">Seasoning:</span> Some lenders
        require gift funds to be in your account for 60 days before closing.
        Others allow immediate use if properly documented.
      </p>
    </div>
  );
};

const CompareOptions = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        Compare Your Conventional Loan Options
      </h2>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Conventional home loans California offer the flexibility, competitive
        rates, and long-term savings that make them the right choice for
        millions of homebuyers. Whether you're buying your first home, upgrading
        to a larger property, or investing in real estate, conventional
        financing gives you options.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        As experienced mortgage lenders California, KC Lending has helped
        thousands of buyers secure fixed rate mortgage programs with the best
        mortgage rates California. We know how to structure your loan to
        maximize your approval chances and minimize your costs.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Call us at +1 (555) 123-4567, email us at info@demo.com, or complete our
        quick pre-qualification form. We'll review your situation, run your
        numbers, and tell you exactly what you qualify for with a conventional
        loan.
      </p>
      <p className="text-[#666] text-base font-normal leading-relaxed">
        Whether you need help understanding if conventional or FHA makes more
        sense for you, want to explore traditional home loan programs with
        various down payment options, or just need honest answers about
        California's competitive mortgage market, we're here to help.
      </p>
    </div>
  );
};

export default function FTHPSection() {
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
                  Conventional Home Loans California
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  When most people think "mortgage," they're thinking of a
                  conventional loan. These are the traditional home loan
                  programs that banks, credit unions, and mortgage lenders
                  California have offered for decades. No government backing, no
                  special programs, just straightforward financing that's been
                  helping Americans buy homes for a long time before FHA or VA
                  loans existed.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  If you have decent credit, steady income, and some money saved
                  for a down payment, conventional home loans California often
                  offer the best combination of flexibility, competitive rates,
                  and long-term savings. Let's break down everything you need to
                  know about conventional financing.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What Is a Conventional Home Loan?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  A conventional loan is a mortgage that isn't backed or insured
                  by any government agency. Unlike FHA loans (insured by the
                  Federal Housing Administration) or VA loans (guaranteed by the
                  Department of Veterans Affairs), conventional loans are issued
                  by private lenders who assume all the risk.
                </p>

                <div className="mb-6">
                  <p className="text-[#666666] text-base font-normal leading-relaxed">
                    Because there's no government insurance protecting the
                    lender, conventional loans typically have stricter
                    qualification requirements than government-backed programs.
                    But if you meet those requirements, you'll often get better
                    terms and lower overall costs.
                  </p>
                  <p className="text-primary font-semibold text-lg leading-relaxed">
                    Types of Conventional Loans
                  </p>
                  <ul className="space-y-3 text-[#666] text-base">
                    <li className="flex gap-3">
                      <span className="text-[#666666]">•</span>
                      <span>
                        <strong className="text-primary">
                          Conforming Loans:{" "}
                        </strong>
                        These adhere to the rules established by Fannie Mae and
                        Freddie Mac, the government-sponsored enterprises that
                        purchase mortgages from lenders. Conforming loans have
                        maximum loan limits and must meet specific underwriting
                        standards.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#666666]">•</span>
                      <span>
                        <strong className="text-primary">
                          Non-Conforming Loans (Jumbo Loans):{" "}
                        </strong>
                        Any loan that exceeds the conforming loan limits or
                        doesn't meet Fannie/Freddie guidelines. Jumbo loans
                        typically require higher credit scores, larger down
                        payments, and more documentation.
                      </span>
                    </li>
                  </ul>
                  <p className="text-[#666666] text-base font-normal leading-relaxed mt-4">
                    Both types fall under the umbrella of conventional home
                    loans California; however, conforming loans are more common
                    and typically offer better rates.
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
          <ConventionalLoanLimits2025 />

          {/* Why California Buyers Choose FHA Loans */}
          <ConventionalLoanRequirements />

          {/* FHA Loan Requirements in California */}
          <FixedRateMortgagePrograms />

          {/* Conventional Loan Benefits*/}
          <ConventionalLoanBenefits />

          {/* Private Mortgage Insurance*/}
          <PrivateMortgageInsurance />

          {/* Comparison Table */}
          <ComparisonTableSection />

          {/* Adjustable Rate Mortagage */}
          <AdjustableRateMortgages />

          {/* Best Mortagage Rates */}
          <BestMortgageRates />

          {/* Property Types Conventional Loans */}
          <PropertyTypesConventionalLoans />

          {/* Multi Unit Conventional Loans */}
          <MultiUnitPropertyConventionalLoan />

          {/* Closing Costs Conventional Loans */}
          <ClosingCostsConventionalLoans />

          {/* Conventional Loan Timeline */}
          <ConventionalLoanTimeline />

          {/* Self Employed */}
          <SelfEmployed />

          {/* Gift Fund for Down Payment */}
          <GiftFundDownPayment />

          {/* Compare Options */}
          <CompareOptions />

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
