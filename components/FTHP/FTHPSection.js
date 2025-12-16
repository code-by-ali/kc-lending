import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

const FirstTimeHomebuyerPrograms = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What First-Time Homebuyer Programs Are Available in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        California offers some of the most generous first home loan programs in
        the country. Let's break down what's actually available.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        CalHFA (California Housing Finance Agency) Programs
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        CalHFA is the state's main housing agency. They don't lend directly to
        you, but they work with approved lenders (like us) to offer special loan
        programs with better terms than you'd get on the open market.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalHFA FHA Loan:</strong> 30-year fixed-rate FHA loan with
            CalHFA's competitive interest rates. Can be combined with down
            payment assistance.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalHFA Conventional Loan:</strong> 30-year fixed-rate
            conventional financing with private mortgage insurance. Suitable for
            buyers with stronger credit.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalHFA VA Loan:</strong> For Veterans and Active Military
            Personnel. Combines federal VA benefits with CalHFA's rates.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalHFA USDA Loan:</strong> For rural and suburban areas.
            Often allows zero down payment.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalPLUS FHA:</strong> FHA loan with a slightly higher rate,
            but you get a zero-interest second loan (ZIP) to cover closing
            costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalPLUS Conventional:</strong> Similar structure, but for
            conventional buyers who want help with closing costs.
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        All CalHFA programs require homebuyer education (8-hour online course or
        in-person class) and have income limits that vary by county.
      </p>
    </div>
  );
};

const MyHomeAssistanceProgram = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is CalHFA's MyHome Assistance Program?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        This is the main California homebuyer assistance program for down
        payment help. MyHome gives you a second "silent" loan to cover your down
        payment and closing costs. Here's what makes it special:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>For FHA/VA/USDA Loans:</strong> Up to 3.5% of the purchase
            price
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>For Conventional Loans:</strong> Up to 3% of the purchase
            price
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        How the Silent Second Works?
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Let's say you're buying a $500,000 home with an FHA loan. MyHome gives
        you $17,500 (3.5%) as a second loan. You don't make monthly payments on
        this second loan. It sits there "silent" until:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You sell the home</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You refinance your first mortgage</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You pay off your first mortgage</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        At that point, you pay back the MyHome loan with no interest charged. If
        you keep the home long-term, you're essentially getting free money to
        buy now.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Here are the requirements:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Must be a first-time homebuyer</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Meet CalHFA income limits</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Complete homebuyer education</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property must be your primary residence</span>
        </li>
      </ul>
    </div>
  );
};

const CaliforniaDreamForAll = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Is California Dream For All?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Dream For All is California's newest and most talked-about program. It
        offers up to 20% down payment assistance (capped at $150,000) for
        first-time buyers.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Here is how it works:
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        This isn't a traditional loan or grant. It's a "shared appreciation
        loan," which means:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>You get:</strong> Up to 20% of the purchase price to use for
            down payment or closing costs
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>California gets:</strong> The same percentage of your home's
            appreciation when you sell
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        For example:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Buy a $600,000 home</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Receive $120,000 (20%) from Dream For All</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Live there for 10 years</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Home is now worth $900,000 (increased by $300,000)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            When you sell, you owe the original $120,000 PLUS 20% of the
            $300,000 appreciation ($60,000)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Total you repay: $180,000</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        If your home doesn't appreciate or goes down in value, you only pay back
        the original amount.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Who Qualifies?
      </p>
      <p className="text-[#666] text-base leading-relaxed">You must:</p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Be a first-generation homebuyer (neither you nor your parents have
            owned a home in the U.S. in the last 7 years)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Be a current California resident</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Meet income limits</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Complete homebuyer education</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Use a Dream For All approved lender</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Demand is insane. CalHFA uses a lottery system. You register for a
        voucher, and winners are selected randomly. The program runs in rounds
        and often runs out of funding quickly.
      </p>
    </div>
  );
};

const LocalProgramsCalifornia = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Local Programs Are Available in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Beyond state programs, many California cities and counties offer their
        own first-time buyer mortgage options.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Los Angeles Programs
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>LIPA (Low Income Purchase Assistance):</strong> Deferred
            loan up to $85,000 for down payment and closing costs for buyers
            earning up to 80% of the area median income.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>MIPA (Moderate Income Purchase Assistance):</strong>{" "}
            Deferred loan up to $95,000 for moderate-income buyers (up to 150%
            of the area median income).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>MCC (Mortgage Credit Certificate):</strong> Get a
            dollar-for-dollar federal tax credit for 20% of your annual mortgage
            interest. This increases your qualifying income without requiring
            additional upfront money.
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        San Diego Programs
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>SDHC First-Time Homebuyer Program:</strong> Up to $10,000 or
            4% of the purchase price for down payment and closing costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Deferred Payment Assistance Loan:</strong> Up to 22% of the
            purchase price as a deferred loan (no monthly payments until you
            sell).
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        San Jose / Silicon Valley Programs
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Empower Homebuyers SCC:</strong> Up to 30% of appraised
            value as a loan (with income restrictions and shared appreciation).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>HELP (Homebuyer Empowerment Loan Program):</strong> For
            buyers who earn too much for other programs but still need help.
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Other Cities
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Long Beach, Sacramento, San Francisco, Oakland, Fresno, and dozens of
        other California cities have local programs. Requirements and funding
        vary widely.
      </p>
    </div>
  );
};

const FirstTimeHomebuyerRequirements = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are the Requirements for First-Time Homebuyer Programs in
        California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Requirements vary by program, but here are the common themes:
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Credit Score
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>CalHFA Programs:</strong> Typically 640-680 minimum,
            depending on loan type
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Dream For All:</strong> 680 minimum
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Local Programs:</strong> Often 640-660 minimum
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Lower credit? Focus on FHA or VA options, which are more forgiving.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Income Limits
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Every program has maximum income limits that vary by county. In
        expensive areas like LA, SF, and San Diego, limits are higher.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        <strong>Example (2025 Los Angeles County):</strong>
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>1-person household: $126,500 maximum</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>4-person household: $180,600 maximum</span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Your income includes all sources, such as wages, bonuses,
        self-employment income, alimony, and investment income.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Purchase Price Limits
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Some programs cap the amount of money you can spend on a home. Limits
        are higher in expensive areas.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Property Requirements
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Must be your primary residence</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Single-family homes, condos, townhomes, and 2-4 unit properties
            usually qualify
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Property must meet minimum standards</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Homebuyer Education
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Almost every program requires you to complete homebuyer education:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Online:</strong> eHome's 8-hour course ($100)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>In-Person:</strong> Through NeighborWorks America or
            HUD-approved agencies (fees vary)
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        You will receive a certificate upon completion that your lender requires
        before closing.
      </p>
    </div>
  );
};

const LoanTypesFirstTimeBuyers = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Types of Loans Work for First-Time Buyers?
      </h2>

      <p className="text-primary font-semibold text-base leading-relaxed">
        FHA Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The most popular choice for first-time homebuyers California needing low
        down payment home loans.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment:</strong> 3.5% with 580+ credit score
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Credit Score:</strong> 580 minimum for 3.5% down, 500-579
            requires 10% down
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Mortgage Insurance:</strong> Required (upfront and monthly)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Loan Limits:</strong> Up to $1,209,750 in high-cost
            California areas
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        FHA loans are government-backed, so lenders are more flexible with
        credit issues, past bankruptcies, and high debt-to-income ratios.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Conventional Loans (97% LTV)
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment:</strong> 3% for first-time buyers
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Credit Score:</strong> 620-640 minimum, typically
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Mortgage Insurance:</strong> Required until 20% equity (but
            can be dropped)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Loan Limits:</strong> Up to $1,149,825 in high-cost areas
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        Better than FHA if you have good credit (700+), as PMI is usually
        cheaper and drops off once you reach 20% equity.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        VA Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        For veterans and active military.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment:</strong> $0
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Credit Score:</strong> No minimum (lenders typically want
            620+)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Mortgage Insurance:</strong> None
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Funding Fee:</strong> 2.15% to 3.3% (can be financed)
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        This is the best loan program available if you're eligible. Zero down,
        no mortgage insurance, and great rates.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        USDA Loans
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        For homes in eligible rural and suburban areas.
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Down Payment:</strong> $0
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Credit Score:</strong> 640+ typically
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Mortgage Insurance:</strong> Required (upfront and annual)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Income Limits:</strong> Must be below area limits
          </span>
        </li>
      </ul>
      <p className="text-[#666] text-base leading-relaxed">
        More California areas qualify than you'd think. Many suburbs outside
        major cities are USDA-eligible.
      </p>
    </div>
  );
};

const DownPaymentFirstTimeBuyer = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Much Down Payment Do I Need as a First-Time Buyer in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        The short answer: 3% to 3.5% for most programs.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        On a $600,000 California home:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>FHA 3.5% down:</strong> $21,000
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Conventional 3% down:</strong> $18,000
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>VA 0% down:</strong> $0
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>USDA 0% down:</strong> $0
          </span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        But here's where first home loan programs really help:
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Scenario 1: Using CalHFA MyHome + FHA
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>$600,000 home</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>3.5% down = $21,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>MyHome covers the full $21,000</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You bring $0 down payment out of pocket</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            You still need 2-4% for closing costs ($12,000 to $24,000)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Scenario 2: Using Dream For All
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>$600,000 home</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>20% assistance = $120,000 from Dream For All</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Covers full 20% down payment AND closing costs</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>You bring $0 total out of pocket</span>
        </li>
      </ul>
    </div>
  );
};

const ClosingCostsFirstTimeBuyers = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Are Closing Costs for First-Time Buyers?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Closing costs in California typically run 2% to 5% of the purchase
        price. On a $500,000 home, expect $10,000 to $25,000 in closing costs:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Appraisal fee ($500 to $800)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Credit report ($50 to $100)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Title insurance ($1,000 to $3,000)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Escrow fees ($1,000 to $2,000)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Recording fees ($200 to $500)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Lender fees (varies)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Prepaid property taxes and insurance (varies)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>HOA transfer fees (if applicable)</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Here are some ways to reduce closing costs:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Ask the Seller to Contribute:</strong> Sellers can pay up to
            3% to 6% of the purchase price toward your closing costs (amount
            varies by loan type).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Use CalPLUS Loans with ZIP:</strong> The Zero Interest
            Program gives you a second loan to cover closing costs at 0%
            interest.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Lender Credits:</strong> Accept a slightly higher interest
            rate in exchange for lender credits toward closing costs.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            <strong>Shop Around:</strong> Some costs are negotiable. Get quotes
            from multiple lenders and service providers.
          </span>
        </li>
      </ul>
    </div>
  );
};

const QualifyFirstTimeHomebuyerPrograms = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Do I Qualify for First-Time Homebuyer Programs?
      </h2>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 1: Check Your Credit
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Pull your credit reports from all three bureaus (Equifax, Experian,
        TransUnion). You can get free reports at annualcreditreport.com.
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If your score is low:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Pay down credit card balances</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Dispute any errors on your report</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Avoid opening new credit accounts</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Make all payments on time for 6+ months</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 2: Calculate Your Debt-to-Income Ratio
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Add up all your monthly debt payments (car loan, student loans, credit
        cards, etc.) and divide by your gross monthly income. Most programs
        require a DTI (debt-to-income ratio) of under 43%, although FHA allows
        up to 50% in some cases.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 3: Save for Your Down Payment
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Even with assistance programs, you'll likely need some cash for earnest
        money deposits and potential out-of-pocket costs.
      </p>
      <p className="text-[#666] text-base leading-relaxed">Savings Tips:</p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Automate transfers to a dedicated house fund</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Cut discretionary spending temporarily</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Use windfalls (tax refunds, bonuses) for savings</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Consider low-risk investments if you're 2+ years from buying
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 4: Get Pre-Approved
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Contact a lender approved to do CalHFA loans and other assistance
        programs. Get a real pre-approval (not just pre-qualified). Pre-approval
        means:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Lender pulls your credit</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Verifies your income and assets</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Reviews your employment</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Issues a commitment letter stating how much they'll lend</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 5: Complete Homebuyer Education
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Take the required 8-hour course online or in-person. Get your
        certificate before you're ready to make offers.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 6: Find Your Home
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Work with a buyer's agent who understands first-time buyer programs and
        knows how to structure offers using assistance programs.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 7: Make an Offer
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Your agent submits your offer with your pre-approval letter. In
        California's competitive market, being pre-approved (not just
        pre-qualified) gives you an edge.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 8: Home Inspection and Appraisal
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Once your offer is accepted, schedule inspections. The lender orders an
        appraisal to confirm the home's value.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 9: Final Underwriting
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        The lender verifies everything one last time. Provide any additional
        documents they request quickly.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Step 10: Close
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Sign the paperwork, get your keys, and move in. Most California home
        purchases close in 30-45 days.
      </p>
    </div>
  );
};

const FirstTimeBuyerMistakes = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What Mistakes Do First-Time Homebuyers Make in California?
      </h2>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 1: Not Shopping for Lenders
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Different lenders offer different programs and rates. Talk to at least 3
        lenders before choosing one.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 2: Maxing Out Your Budget
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Just because you're approved for $700,000 doesn't mean you should spend
        it. Leave room in your budget for unexpected expenses.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 3: Skipping the Inspection
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Always get a professional home inspection. California homes, especially
        older ones, can have hidden issues (foundation, plumbing, electrical).
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 4: Forgetting About Property Taxes
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        California property taxes are roughly 1.25% of the purchase price
        annually. On a $600,000 home, that's $7,500/year or $625/month.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 5: Not Understanding HOA Rules
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        If buying a condo or townhome, read the HOA documents carefully. Some
        have strict rules regarding rentals, pets, modifications, and so on.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 6: Draining All Your Savings
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Keep an emergency fund after buying. Home repairs, appliance breakdowns,
        and job changes occur.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 7: Changing Jobs During the Process
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Lenders verify your employment right before closing. A job change can
        delay or kill your loan.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Mistake 8: Making Large Purchases
      </p>
      <p className="text-[#666] text-base leading-relaxed">
        Avoid purchasing a new car, furniture, or opening new credit cards while
        applying for a mortgage. It affects your debt-to-income ratio and credit
        score.
      </p>
    </div>
  );
};

const HomeBuyingTimeline = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        How Long Does It Take to Buy a Home in California?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        From start to finish, expect 3 to 6 months:
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Months 1-2: Preparation
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Check credit and finances</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Get pre-approved</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Complete homebuyer education</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Save for down payment</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Months 2-4: Home Search
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Work with a realtor</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Attend open houses</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Make offers (may take multiple attempts in competitive markets)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Months 4-5: Escrow
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>30-45 days from accepted offer to closing</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Home inspection, appraisal, final loan approval</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Review documents and prepare for closing</span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Month 6: Close
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Sign paperwork</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Get keys</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Move in</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Some buyers move faster (2-3 months), others take longer (6-12 months),
        depending on market conditions and how long it takes to find the right
        home.
      </p>
    </div>
  );
};

const BuyingCondoTownhome = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Buy a Condo or Townhome as a First-Time Buyer?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Yes! Condos and townhomes are often more affordable entry points in
        California. Programs such as FHA, conventional, VA, and CalHFA are all
        applicable to condos.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Here are the requirements:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Condo complex must be FHA-approved (for FHA loans)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>HOA must be financially stable</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Owner-occupancy ratio requirements (typically 50%+ owners must live
            there, not rent)
          </span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>HOA insurance coverage meets lender requirements</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Your lender will review the HOA documents and financial statements
        before approving your loan.
      </p>
    </div>
  );
};

const ManufacturedMobileHomes = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        What About Manufactured Homes or Mobile Homes?
      </h2>
      <p className="text-[#666] text-base leading-relaxed">
        Manufactured homes built after June 1976 qualify for most loan programs,
        including FHA, VA, and CalHFA.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Here are the requirements:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Home must be permanently affixed to the land you own</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Meets HUD construction standards</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Chassis, wheels, and towing hitch removed</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Home titled as real property (not personal property)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        Mobile homes in mobile home parks are harder to finance and typically
        require specialized lenders.
      </p>
    </div>
  );
};

const BuyingMultiUnitProperty = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Can I Buy a Multi-Unit Property as My First Home?
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Absolutely. Buying a duplex, triplex, or fourplex as your first home is
        smart if you want rental income to help pay the mortgage.
      </p>

      <p className="text-primary font-semibold text-base leading-relaxed">
        How It Works:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Buy a 2–4 unit property</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Live in one unit (required for owner-occupied financing)</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Rent out the other units</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>
            Rental income counts toward your qualifying income (typically 75% of
            rent)
          </span>
        </li>
      </ul>

      <p className="text-primary font-semibold text-base leading-relaxed">
        Available Loan Types:
      </p>
      <ul className="space-y-3 text-[#666] text-base">
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>FHA: Up to 3.5% down on 2–4 units</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>Conventional: 5% down on 2 units, 10% down on 3–4 units</span>
        </li>
        <li className="flex gap-3">
          <span className="text-[#666666]">•</span>
          <span>VA: $0 down on 2–4 units (if eligible)</span>
        </li>
      </ul>

      <p className="text-[#666] text-base leading-relaxed">
        This strategy (called &quot;house hacking&quot;) lets you live for free
        or cheap while building wealth through real estate.
      </p>
    </div>
  );
};

const GetStartedFirstHomePurchase = () => {
  return (
    <div className="my-6 flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl font-bold text-primary">
        Get Started with Your First Home Purchase
      </h2>

      <p className="text-[#666] text-base leading-relaxed">
        Buying your first home in California doesn&apos;t have to mean saving
        $150,000 for a down payment. Between California homebuyer assistance
        programs, low down payment home loans, and federal options, there&apos;s
        likely a path to homeownership that works for your situation.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        KC Lending has helped hundreds of first-time homebuyers California
        navigate these programs, stack assistance options, and close on homes
        they thought they couldn&apos;t afford. We know which programs you
        qualify for, how to maximize your buying power, and how to structure
        offers that sellers actually accept.
      </p>

      <p className="text-[#666] text-base leading-relaxed">
        Call us at{" "}
        <span className="font-semibold text-primary">+1 (555) 123-4567</span>,
        email us at{" "}
        <span className="font-semibold text-primary">info@demo.com</span>, or
        complete our quick pre-qualification form. We&apos;ll review your
        situation, check which first home loan programs you&apos;re eligible
        for, and show you exactly how much home you can buy. Most importantly,
        we&apos;ll tell you the truth about what&apos;s realistic and
        what&apos;s not.
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
                  First Home Loan Programs California
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  Buying your first home in California feels impossible when the
                  median price is over $850,000. But here's what most first-time
                  homebuyers California don't know: there are programs that can
                  help you buy with as little as 3% down, get thousands in down
                  payment assistance, and secure better interest rates than
                  you'd get on your own.
                </p>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-4">
                  You don't need to be rich to buy a house in California. You
                  just need to know which programs exist and how to use them.
                  Let's break down everything available to first-time buyers.
                </p>
              </div>

              {/* What is an FHA Loan */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  What Does First-Time Homebuyer Mean in California?
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  You might think "first-time buyer" means you've never owned a
                  home before. That's partly true, but the definition is broader
                  than you'd expect. According to HUD and most California
                  programs, you're a first-time homebuyer if:
                </p>

                <div className="mb-6">
                  <ul className="space-y-3 text-[#666] text-base">
                    <li className="flex gap-3">
                      <span className="text-[#666666]">•</span>
                      <span>You've never owned a home before, OR</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#666666]">•</span>
                      <span>
                        You haven't owned a principal residence in the past 3
                        years, OR
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-[#666666]">•</span>
                      <span>
                        You're a single parent who only owned a home with a
                        former spouse
                      </span>
                    </li>
                  </ul>
                  <p className="text-[#666666] text-base font-normal leading-relaxed mt-4">
                    So if you owned a home 5 years ago, sold it, and have been
                    renting since, you still qualify as a first-time buyer for
                    most programs.
                    <br />
                    There's also a newer category called "first-generation
                    homebuyer," which means neither you nor your parents have
                    ever owned a home in the United States. This opens up
                    additional programs, such as California's Dream For All.
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

          {/* First Time Homebuyer Programs */}
          <FirstTimeHomebuyerPrograms />

          {/* My Home Assistance Program */}
          <MyHomeAssistanceProgram />

          {/* California Dream for All */}
          <CaliforniaDreamForAll />

          {/* Local Programs California */}
          <LocalProgramsCalifornia />

          {/* First Time Homebuyer Requirements */}
          <FirstTimeHomebuyerRequirements />

          {/* Loan Types First Time Buyers */}
          <LoanTypesFirstTimeBuyers />

          {/* Down Payment First Time Buyers */}
          <DownPaymentFirstTimeBuyer />

          {/* Closing Cost First Time Buyers */}
          <ClosingCostsFirstTimeBuyers />

          {/* Quality First Time Homebuyers Programs */}
          <QualifyFirstTimeHomebuyerPrograms />

          {/* First Time Buyers Mistakes */}
          <FirstTimeBuyerMistakes />

          {/* HomeBuying Timeline */}
          <HomeBuyingTimeline />

          {/* Buying Condo Townhouse */}
          <BuyingCondoTownhome />

          {/* Manufactured Mobile Homes */}
          <ManufacturedMobileHomes />

          {/* Buying Multi Unit Property */}
          <BuyingMultiUnitProperty />

          {/* Get Started First Home Purchase */}
          <GetStartedFirstHomePurchase />

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
