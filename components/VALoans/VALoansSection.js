import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const BenefitsOfVALoans = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the Benefits of VA Loans?
      </h2>

      <ul className="space-y-4 text-[#666] text-base leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Zero Down Payment Required
            </span>
            <br />
            This is the biggest advantage. Most mortgages require 3% to 20%
            down. On a $600,000 California home, that’s $18,000 to $120,000
            you’d need saved. With VA loans in California, you can finance 100%
            of the purchase price and keep your cash for furniture, moving
            costs, or emergencies.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              No Mortgage Insurance Ever
            </span>
            <br />
            Put down less than 20% on a conventional loan and you pay PMI. FHA
            loans require mortgage insurance for the life of the loan. VA loans?
            Zero mortgage insurance—ever. That can save $200 to $400 per month.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Lower Interest Rates Than Other Loans
            </span>
            <br />
            VA loans typically offer interest rates 0.25% to 0.50% lower than
            conventional mortgages. Over a 30-year loan, that difference can
            save tens of thousands of dollars.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              More Flexible Credit Requirements
            </span>
            <br />
            The VA does not set a minimum credit score. Most VA home loan
            lenders in California approve scores as low as 580 to 620. We’ve
            even helped veterans with scores around 550 get approved.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              No Prepayment Penalties
            </span>
            <br />
            Want to pay off your mortgage early or refinance later? VA loans
            never charge prepayment penalties.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Lifetime Reusable Benefit
            </span>
            <br />
            Use your VA loan, sell the home, and use it again. This benefit
            lasts for life, allowing you to buy multiple homes over time using
            VA financing.
          </span>
        </li>
      </ul>
    </div>
  );
};

const VAEligibilityCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Who Qualifies for a VA Loan in California?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Not every veteran automatically qualifies. Here’s who is eligible for VA
        loans in California:
      </p>

      <ul className="space-y-4 text-[#666] text-base leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Active Duty Military
            </span>
            <br />
            Served at least 90 consecutive days and currently on active duty?
            You’re eligible now.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Veterans</span>
            <br />
            Served 90 consecutive days during wartime or 181 days during
            peacetime with an honorable discharge? You qualify.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              National Guard and Reserves
            </span>
            <br />
            Completed at least 6 years of service? You’re eligible. You may also
            qualify if you served 90 days of active duty, including training.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Surviving Spouses
            </span>
            <br />
            You may qualify if your spouse died in service or from a
            service-connected disability. Eligibility may also apply if your
            spouse is missing in action (MIA) or a prisoner of war (POW).
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Discharged Service Members
            </span>
            <br />
            Your discharge must be honorable or general under honorable
            conditions. Other-than-honorable, bad conduct, or dishonorable
            discharges typically do not qualify.
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        You don’t need to have enlisted in California—you simply need to be
        purchasing a home in California.
      </p>
    </div>
  );
};

const CertificateOfEligibility = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is a Certificate of Eligibility (COE)?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Your Certificate of Eligibility (COE) is the document that proves you
        qualify for VA home loan benefits. It shows lenders how much VA
        entitlement you have available.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Here’s how to get your COE:
      </p>

      <ul className="space-y-4 text-[#666] text-base leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Option 1: Online (Fastest)
            </span>
            <br />
            Visit the VA’s eBenefits portal and request your COE directly. If
            your service records are already in the system, this usually takes
            about 10 minutes.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Option 2: Through Your Lender (Easiest)
            </span>
            <br />
            We can request your COE for you through the VA’s lender portal and
            typically receive it the same day.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Option 3: By Mail (Slowest)
            </span>
            <br />
            Complete VA Form 26-1880 and mail it along with your DD-214. This
            option can take several weeks.
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        You’ll need your COE before closing, but you can begin your home search
        and pre-approval process without it.
      </p>
    </div>
  );
};

const VALoanRequirementsCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are VA Loan Requirements in California?
      </h2>

      <ul className="space-y-4 text-[#666] text-base leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Credit Score Requirements
            </span>
            <br />
            The VA does not set a minimum credit score, but most lenders do. We
            typically work with scores as low as 580, while some VA home loan
            lenders in California require 620 or higher. Past credit issues
            aren’t a deal-breaker if you can show financial recovery.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Income and Employment
            </span>
            <br />
            You must have steady, reliable income to cover mortgage payments.
            The VA generally requires two years of employment history. If you’re
            self-employed, lenders will use your tax returns to verify income.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Debt-to-Income Ratio
            </span>
            <br />
            Your total monthly debts (including the new mortgage) divided by
            your gross monthly income. Most lenders prefer 41% or less, though
            the VA may allow ratios up to 50% in certain cases.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Residual Income Requirement
            </span>
            <br />
            Unique to VA loans, this requirement ensures you have enough money
            left after paying monthly debts to cover living expenses like food,
            utilities, and transportation. The required amount depends on your
            family size and location.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Property Requirements
            </span>
            <br />
            The home must be your primary residence and meet VA Minimum Property
            Requirements—safe, livable, and sanitary. Investment properties and
            vacation homes are not eligible.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">VA Funding Fee</span>
            <br />A one-time fee (typically 2.15% to 3.3% of the loan amount)
            paid to support the VA loan program. It’s usually rolled into the
            loan, so you don’t pay out of pocket. Veterans with
            service-connected disabilities are exempt.
          </span>
        </li>
      </ul>
    </div>
  );
};

const VALoanLimitsCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Much Can I Borrow with a VA Loan?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        If you have full VA entitlement (meaning you haven’t used your benefit
        before, or you paid off a previous VA loan and sold the home), there is
        technically no loan limit. You can borrow as much as a lender will
        approve you for.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        If you’ve used your VA benefit before and haven’t restored full
        entitlement, county loan limits apply in California:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Low-Cost California Counties:
            </span>{" "}
            $806,500
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              High-Cost California Counties
            </span>{" "}
            (Los Angeles, San Francisco, San Diego, Orange): $1,209,750
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Multi-Unit Property Limits:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Duplex:</span>{" "}
            $1,032,500 to $1,548,300
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Triplex:</span>{" "}
            $1,248,250 to $1,871,050
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Fourplex:</span>{" "}
            $1,551,050 to $2,325,650
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Your actual loan amount depends on how much the lender approves based on
        your income, existing debts, and credit profile.
      </p>
    </div>
  );
};

const VALoanEntitlement = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is VA Loan Entitlement?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Your VA loan entitlement is the amount the VA guarantees to your lender.
        Think of it as your available VA loan “credit,” which helps lenders
        approve your loan with better terms.
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Basic Entitlement:
            </span>{" "}
            $36,000, which typically covers VA loans up to $144,000
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Bonus Entitlement:
            </span>{" "}
            Varies by county and covers loan amounts above $144,000
          </span>
        </li>
      </ul>

      <h3 className="text-xl md:text-2xl font-bold text-primary mt-4">
        Can I Use My VA Loan More Than Once?
      </h3>

      <p className="text-[#666] text-base leading-relaxed">
        Yes. Your VA loan benefit is reusable. Here are the ways you can use it
        again:
      </p>

      <ul className="space-y-4 text-[#666] text-base leading-relaxed">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">Full Restoration</span>
            <br />
            Pay off your VA loan and sell the home. Your entitlement is fully
            restored, allowing you to use your VA benefit again with no loan
            limits.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              One-Time Restoration
            </span>
            <br />
            Pay off your VA loan but keep the home as a rental. You can restore
            your entitlement once without selling. After that, you’ll need to
            sell the property to restore it again.
          </span>
        </li>

        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <span className="font-semibold text-primary">
              Remaining Entitlement
            </span>
            <br />
            If you currently have a VA loan and want to buy another home, you
            may have enough remaining entitlement to do so. This depends on your
            existing loan balance and county loan limits.
          </span>
        </li>
      </ul>
    </div>
  );
};

const VAEligibleProperties = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Properties Qualify for VA Loans?
      </h2>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Single-family homes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Condos (must be VA-approved)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Townhomes</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Manufactured homes (built after June 1976)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Multi-unit properties (2–4 units — you must live in one unit)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Property Must Meet VA Minimum Property Requirements:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Safe, sound, and sanitary condition</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Adequate heating, cooling, and utilities</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Clean water supply and functional sewage systems</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Roof in good condition with at least two years of remaining life
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>No lead-based paint hazards</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Adequate access and egress</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>No structural or foundation issues</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        VA appraisals are more thorough than conventional appraisals. If issues
        arise, the seller typically resolves them or provides a credit at
        closing.
      </p>
    </div>
  );
};

const VALoanVsFHALoan = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary">
        What Is the Difference Between VA and FHA Loans?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Both VA and FHA loans are government-backed, but they serve different
        borrowers and come with important differences.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Feature
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                VA Loan
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                FHA Loan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Who Qualifies
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Military members and veterans
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Anyone who meets FHA guidelines
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Down Payment
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                $0 required
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                3.5% minimum
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Mortgage Insurance
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">None</td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Required (upfront + monthly)
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Funding / Insurance Fee
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                2.15% to 3.3% funding fee (can be financed)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                1.75% upfront mortgage insurance premium
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Credit Score
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                580–620 typical
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                580 for 3.5% down
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Loan Limits
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to $1.2M+ in California
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Up to $1.2M in high-cost areas
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Property Requirements
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Must meet VA Minimum Property Requirements (MPRs)
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Must meet FHA property standards
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#666] text-base leading-relaxed mt-4">
        If you’re eligible for a VA loan, it’s almost always the better option.
        You save on the down payment and avoid paying mortgage insurance for the
        life of the loan—often saving tens of thousands of dollars over time.
      </p>
    </div>
  );
};

const VAFundingFee = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is the VA Funding Fee?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        The VA funding fee helps support the VA loan program and is calculated
        as a percentage of your loan amount. The amount you pay depends on your
        down payment, whether it’s your first time using a VA loan, and your
        service type.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        First-Time Use:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>0% down: 2.15% of the loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>5% down: 1.50% of the loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>10% down: 1.25% of the loan amount</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Subsequent Use:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>0% down: 3.30% of the loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>5% down: 1.50% of the loan amount</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>10% down: 1.25% of the loan amount</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Reserves / National Guard:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>0% down: 2.40% of the loan amount</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Who’s Exempt from the VA Funding Fee:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Veterans receiving VA disability compensation</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Veterans eligible for compensation but receiving retirement pay
            instead
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Surviving spouses receiving Dependency and Indemnity Compensation
            (DIC)
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        The funding fee is almost always rolled into your loan amount, so you
        don’t have to pay it out of pocket at closing.
      </p>
    </div>
  );
};

const VALoanClosingCosts = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are VA Loan Closing Costs?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        VA loans have closing costs just like any other mortgage. Typically, you
        can expect to pay <strong>2% to 5% of the loan amount</strong>. On a
        $500,000 loan, that equals approximately{" "}
        <strong>$10,000 to $25,000</strong>.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Typical VA Closing Costs Include:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>VA funding fee (usually financed into the loan)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Appraisal fee ($500 to $800)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Credit report fee ($50 to $100)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Title insurance and escrow fees</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Recording fees</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Prepaid property taxes and homeowners insurance</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Fees the VA Prohibits Lenders From Charging:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>Attorney fees (unless required by state law)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Loan origination fees over 1%</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Document preparation fees</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Application fees</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Sellers are allowed to contribute up to{" "}
        <strong>4% of the purchase price</strong> toward your VA loan closing
        costs. In many cases, sellers cover most or even all of these
        costs—meaning you could buy a home with virtually{" "}
        <strong>zero out-of-pocket expenses</strong> (excluding your earnest
        money deposit).
      </p>
    </div>
  );
};

const VAStreamlineRefinance = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is a VA Streamline Refinance (IRRRL)?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Already have a VA loan? The{" "}
        <strong>Interest Rate Reduction Refinance Loan (IRRRL)</strong>, also
        known as a <strong>VA streamline refinance</strong>, lets you refinance
        to a lower interest rate with minimal paperwork and faster closing.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Benefits of a VA Streamline Refinance:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>
            <strong>No Appraisal Required:</strong> Your home does not need to
            be re-appraised, even if property values have declined.
          </span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>
            <strong>No Income Verification:</strong> In most cases, you won’t
            need pay stubs, W-2s, or tax returns.
          </span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>
            <strong>No Credit Check:</strong> Some lenders don’t even pull
            credit. If you qualified for your current VA loan, refinancing is
            usually allowed.
          </span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>
            <strong>Lower Funding Fee:</strong> Just <strong>0.50%</strong>{" "}
            compared to 2.15%–3.3% on VA purchase loans.
          </span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>
            <strong>Fast Closing:</strong> Most VA IRRRLs close within
            <strong> 2–3 weeks</strong> due to reduced documentation.
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        To qualify, the new loan must provide a{" "}
        <strong>net tangible benefit</strong>—typically a lower interest rate or
        reduced monthly payment. Cash-out refinances are
        <strong> not allowed</strong> with an IRRRL.
      </p>
    </div>
  );
};

const ApplyForVALoanSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Do I Apply for a VA Loan in California?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Applying for a VA loan is straightforward when you know the steps.
        Here’s how the process typically works from start to finish.
      </p>

      <div className="flex flex-col gap-4 text-[#666] text-base leading-relaxed">
        <p>
          <strong className="text-primary">
            Step 1: Get Your Certificate of Eligibility
          </strong>
          <br />
          Request your COE through the VA website, or we can pull it for you. If
          your service records are available, this usually takes just a few
          minutes.
        </p>

        <p>
          <strong className="text-primary">Step 2: Get Pre-Approved</strong>
          <br />
          We’ll review your income, credit, and debts to determine how much you
          can borrow. You’ll receive a pre-approval letter to show sellers
          you’re a serious buyer.
        </p>

        <p>
          <strong className="text-primary">Step 3: Find Your Home</strong>
          <br />
          Shop confidently within your budget and work with a real estate agent
          who understands VA loans and the California market.
        </p>

        <p>
          <strong className="text-primary">Step 4: Make an Offer</strong>
          <br />
          Submit your offer along with your pre-approval letter. In competitive
          California markets, being pre-approved (not just pre-qualified) makes
          your offer much stronger.
        </p>

        <p>
          <strong className="text-primary">
            Step 5: Home Inspection and VA Appraisal
          </strong>
          <br />
          The VA orders an appraisal to confirm the home’s value and ensure it
          meets Minimum Property Requirements. You should also schedule your own
          home inspection for peace of mind.
        </p>

        <p>
          <strong className="text-primary">Step 6: Underwriting</strong>
          <br />
          Your loan goes through underwriting, where your income, employment,
          assets, and credit are verified. Additional documents may be
          requested— responding quickly helps avoid delays.
        </p>

        <p>
          <strong className="text-primary">Step 7: Clear to Close</strong>
          <br />
          Once underwriting approves everything, you’re cleared to close. You’ll
          receive your Closing Disclosure outlining your final loan terms and
          costs.
        </p>

        <p>
          <strong className="text-primary">Step 8: Closing</strong>
          <br />
          Sign the final paperwork, get your keys, and move in. Most VA loans
          close within <strong>30–45 days</strong> from an accepted offer.
        </p>
      </div>
    </div>
  );
};

const VALoanTimelineSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Long Does It Take to Close a VA Loan?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Most VA loans close in <strong>30 to 45 days</strong> from accepted
        offer to closing. Here’s what the typical timeline looks like.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-[#ddd] text-sm">
          <thead>
            <tr className="bg-[#F8F9FA]">
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                Timeline
              </th>
              <th className="border border-[#ddd] p-3 text-left font-bold text-primary">
                What Happens
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Days 1–7
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Submit loan application, order VA appraisal, and provide
                required documents.
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Days 8–21
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                VA appraisal completed and underwriting begins reviewing your
                file.
              </td>
            </tr>

            <tr>
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Days 22–30
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Conditional approval issued, underwriting conditions addressed
                and cleared.
              </td>
            </tr>

            <tr className="bg-[#F8F9FA]">
              <td className="border border-[#ddd] p-3 font-bold text-primary">
                Days 31–45
              </td>
              <td className="border border-[#ddd] p-3 text-[#666]">
                Final approval, closing scheduled, documents signed, and keys
                delivered.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-[#666] text-sm leading-relaxed mt-4">
        Some VA loans can close faster—we’ve completed closings in as little as{" "}
        <strong>21 days</strong>. Delays usually happen due to appraisal
        repairs, underwriting conditions, or slow document responses from the
        buyer.
      </p>
    </div>
  );
};

const VARenovationLoanSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Use a VA Loan to Buy a Fixer-Upper?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Sort of. Standard VA loans require homes to meet the VA’s{" "}
        <strong>Minimum Property Requirements (MPRs)</strong>, which usually
        rules out properties needing major repairs. However, there is a solution
        for buyers looking at fixer-uppers.
      </p>

      <h3 className="text-xl font-semibold text-primary mt-2">
        VA Renovation Loan
      </h3>

      <p className="text-[#666] text-base leading-relaxed">
        A VA renovation loan lets you finance both the{" "}
        <strong>purchase price and renovation costs</strong> into one mortgage.
        This allows you to buy a home below market value, renovate it, and build
        equity quickly.
      </p>

      <ul className="list-disc pl-6 text-[#666] text-sm leading-relaxed">
        <li>Fix structural or safety-related issues</li>
        <li>Update kitchens and bathrooms</li>
        <li>Replace roofing, plumbing, or HVAC systems</li>
        <li>Add energy-efficient improvements</li>
        <li>Add rooms or increase square footage</li>
      </ul>

      <p className="text-[#666] text-sm leading-relaxed">
        Renovation funds are held in escrow by the lender and released in stages
        as work is completed. You’ll need licensed contractor bids and a
        detailed scope of work approved before closing.
      </p>

      <p className="text-[#666] text-sm leading-relaxed">
        This option is ideal for buyers who find a home with good bones that
        needs work and want to roll renovation costs into a single VA loan
        instead of paying cash or using high-interest financing.
      </p>
    </div>
  );
};

const TwoVALoansSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Have Two VA Loans at the Same Time?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Yes, it’s possible to have two VA loans at the same time — as long as
        you have enough <strong>remaining VA entitlement</strong>. Many veterans
        and active-duty service members don’t realize this benefit exists.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        The VA guarantees <strong>25% of your loan amount</strong>. For example,
        if you used a VA loan for $300,000 in a county with a $1,209,750 loan
        limit, you’ve used $75,000 of entitlement. The remaining entitlement may
        still allow you to qualify for another VA loan.
      </p>

      <h3 className="text-xl font-semibold text-primary mt-2">
        When You Might Have Two VA Loans
      </h3>

      <ul className="list-disc pl-6 text-[#666] text-sm leading-relaxed">
        <li>
          <strong>Relocating for Military Orders:</strong> Keep your current
          home as a rental and buy a new primary residence at your next duty
          station using remaining entitlement.
        </li>
        <li>
          <strong>Buying a Multi-Unit Property:</strong> Purchase a duplex,
          triplex, or fourplex, live in one unit, and rent the others using a
          second VA loan.
        </li>
        <li>
          <strong>Upgrading to a Larger Home:</strong> Turn your starter home
          into a rental and use your remaining entitlement to buy a larger
          primary residence.
        </li>
      </ul>

      <p className="text-[#666] text-sm leading-relaxed">
        How much you can borrow depends on your county’s VA loan limit, how much
        entitlement you’ve already used, and your income and debt profile. In
        many cases, veterans are surprised by how much entitlement they still
        have available.
      </p>
    </div>
  );
};

const VALowAppraisalSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Happens If the VA Appraisal Comes in Low?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        The VA appraisal determines the home’s fair market value. If the
        appraised value comes in lower than your agreed purchase price, the VA
        will only finance the <strong>appraised amount</strong>. While this can
        feel stressful, you have several solid options.
      </p>

      <h3 className="text-xl font-semibold text-primary mt-2">
        Your Options When a VA Appraisal Is Low
      </h3>

      <ul className="list-disc pl-6 text-[#666] text-sm leading-relaxed">
        <li>
          <strong>Renegotiate the Price:</strong> Ask the seller to reduce the
          price to the appraised value. In slower or balanced markets, sellers
          often agree to keep the deal together.
        </li>

        <li>
          <strong>Make Up the Difference:</strong> If the home appraises at
          $580,000 but the purchase price is $600,000, you can bring the $20,000
          difference to closing. The VA loan will still be based on the lower
          value.
        </li>

        <li>
          <strong>Walk Away:</strong> VA purchase contracts include a mandatory
          appraisal contingency. If the value comes in low, you can cancel the
          contract and recover your earnest money.
        </li>

        <li>
          <strong>Request a Reconsideration of Value (ROV):</strong> If you or
          your agent believe the appraisal missed key comparable sales, you can
          challenge it. Provide better comps, and the VA may adjust the value.
        </li>
      </ul>

      <p className="text-[#666] text-sm leading-relaxed">
        A low VA appraisal doesn’t mean the deal is dead. In many cases, smart
        negotiation or a successful reconsideration keeps the transaction moving
        forward without costing you extra money.
      </p>
    </div>
  );
};

const VAIncomeLimitsSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Are There Income Limits for VA Loans?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        <strong>No.</strong> There are no income limits for VA loans in
        California. You can earn $50,000 or $500,000 and still qualify, as long
        as your income supports the monthly mortgage payment and your overall
        debts.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        Instead of income caps, VA lenders focus on:
      </p>

      <ul className="list-disc pl-6 text-[#666] text-sm leading-relaxed">
        <li>Your debt-to-income (DTI) ratio</li>
        <li>Your residual income after monthly obligations</li>
        <li>Employment stability and income consistency</li>
      </ul>

      <p className="text-[#666] text-sm leading-relaxed">
        One important exception: <strong>California assistance programs</strong>{" "}
        that can be paired with VA loans (such as CalHFA) <em>do</em> have
        income limits. These limits vary by county and household size.
      </p>

      <p className="text-[#666] text-sm leading-relaxed">
        If you’re considering stacking a VA loan with state or local assistance,
        it’s important to review those income caps upfront to avoid surprises
        later in the process.
      </p>
    </div>
  );
};

const VABadCreditSection = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Get a VA Loan with Bad Credit?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        <strong>Yes</strong>, but it depends on how bad your credit is. Most VA
        home loan lenders in California look for a minimum credit score between{" "}
        <strong>580 and 620</strong>. Some lenders may approve scores as low as{" "}
        <strong>550</strong> if you have strong income and manageable debt.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Credit issues KC Lending can work with:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>Late payments from 1–2 years ago</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Collections or charge-offs that have been paid</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Past bankruptcy (2 years after discharge)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Past foreclosure (2–3 years after completion)</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>High debt-to-income ratio (up to 50%)</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed mt-2">
        What makes approval harder:
      </p>

      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span>•</span>
          <span>Recent late mortgage payments</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Active collections or judgments</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Bankruptcy discharged less than 2 years ago</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Tax liens or unpaid child support</span>
        </li>
        <li className="flex gap-3">
          <span>•</span>
          <span>Foreclosure completed less than 2 years ago</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        We can review your credit report and tell you exactly where you stand,
        what lenders will approve today, and what steps to take if you need to
        improve your chances before applying.
      </p>
    </div>
  );
};

const StartVALoanApplicationSection = () => {
  return (
    <div className="my-6 flex flex-col gap-4">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Let&apos;s Start Your VA Loan Application
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        You earned this benefit through your service. Now it&apos;s time to use
        it to buy your home in California. Mortgage loans for veterans through
        the VA program are the <strong>best financing option available</strong>.
        Zero down, no mortgage insurance, competitive rates, and lifetime
        reusability make VA loans truly unbeatable.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        We&apos;ve helped hundreds of veterans, active-duty servicemembers, and
        military families purchase homes across California using VA financing.
        We understand the program inside and out, and we know how to get your
        loan approved and closed on time.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        <strong>Call us</strong> at{" "}
        <span className="text-primary font-semibold">+1 (555) 123-4567</span>,{" "}
        <strong>email</strong>{" "}
        <span className="text-primary font-semibold">info@demo.com</span>, or
        complete our quick pre-approval form. We&apos;ll review your situation,
        verify your eligibility, and tell you exactly how much you can borrow
        using your VA benefit.
      </p>
    </div>
  );
};

export default function VALoansSection() {
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
                  VA Loans California
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  You served your country, now let your country help you buy a
                  home. VA loans California let you finance 100% of your home's
                  value with no down payment, no mortgage insurance, and rates
                  that beat just about everything else out there.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  If you're active duty military, a veteran, or an eligible
                  surviving spouse, this is hands down the best home loan
                  program available. Let's break down exactly how it works and
                  how you can use it.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What Is a VA Loan?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  A VA loan is a mortgage backed by the U.S. Department of
                  Veterans Affairs. Here's the important part: the VA doesn't
                  actually lend you money. Instead, they guarantee your loan to
                  a private lender (like us), which means if you default, the VA
                  covers a portion of the lender's loss.
                </p>

                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  Why does this matter? Because that government guarantee lets
                  lenders offer veteran home loan benefits they couldn't
                  otherwise provide. Think zero down payment, no mortgage
                  insurance, flexible credit requirements, and interest rates
                  typically lower than conventional or FHA loans.
                </p>

                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  These mortgage loans for veterans were created in 1944 to help
                  servicemembers returning from World War II buy homes. Over 28
                  million VA loans have been issued since then. The program
                  still exists today because it works, and because your service
                  earned you these benefits.
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

          {/* Benefits of VA Loans */}
          <BenefitsOfVALoans />

          {/* VA Eligibility California */}
          <VAEligibilityCalifornia />

          {/* Certificate of Eligibility */}
          <CertificateOfEligibility />

          {/* VA Loan Requirements California */}
          <VALoanRequirementsCalifornia />

          {/* VA Loan Limits California */}
          <VALoanLimitsCalifornia />

          {/* VA Loans Entitlement */}
          <VALoanEntitlement />

          {/* VA Eligible Properties*/}
          <VAEligibleProperties />

          {/* VA Loans vs FHA Loans Section */}
          <VALoanVsFHALoan />

          {/* VA Funding Fee */}
          <VAFundingFee />

          {/* VA Loan Closing Cost */}
          <VALoanClosingCosts />

          {/* VA Streamline Refinance */}
          <VAStreamlineRefinance />

          {/* Apply for VA Loan Section */}
          <ApplyForVALoanSection />

          {/* VA Loan Timeline Section */}
          <VALoanTimelineSection />

          {/* VA Renovation Loan Section */}
          <VARenovationLoanSection />

          <TwoVALoansSection />

          <VALowAppraisalSection />

          {/* VA Income Limits Section */}
          <VAIncomeLimitsSection />

          {/* VA Bad Credit Section  */}
          <VABadCreditSection />

          {/* Start VA Loan Application Section  */}
          <StartVALoanApplicationSection />

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
