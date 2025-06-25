// app/pricing/page.tsx
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon, ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// --- Interfaces ---
interface PlanFeature {
  text: string;
  included: boolean;
}

interface IncluJetPlan {
  name: string;
  priceYearly: string;
  priceMonthly: string;
  pricePeriodYearly: string;
  pricePeriodMonthly: string;
  description: string;
  pageLimit: string;
  recommended?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "outline";
  standoutFeatures?: PlanFeature[];
  premiumFeatures?: PlanFeature[];
  support?: PlanFeature[];
  addedPremiumFeatures?: PlanFeature[];
  remediation?: PlanFeature[];
  isEnterprise?: boolean;
}

interface IncluFixPlan {
  name: string;
  priceYearly: string;
  priceMonthly: string;
  pricePeriodYearly: string;
  pricePeriodMonthly: string;
  description: string;
  ctaText: string;
  ctaVariant?: "default" | "outline";
  features: PlanFeature[];
  isEnterprise?: boolean;
  freeTrialNote?: string;
}

// --- Pricing Data ---

// Added "White Labelled Widget" as a feature to IncluJet plans
const incluJetPlans: IncluJetPlan[] = [
  {
    name: "Micro",
    priceYearly: "$390",
    pricePeriodYearly: "/year",
    priceMonthly: "$60",
    pricePeriodMonthly: "/month",
    description: "Automated scanning & widget",
    pageLimit: "Up to 10 pages", // Updated limit
    ctaText: "Start Free Trial",
    ctaVariant: "outline",
    standoutFeatures: [
      { text: "Automated web accessibility", included: true },
      { text: "Ongoing scans & fixes every 24 hrs", included: true },
      { text: "Accessibility report & documentation", included: true },
      { text: "White Labelled Widget", included: false },
    ],
    support: [
      { text: "Online help center", included: true },
      { text: "Email", included: true },
      { text: "Live chat", included: true },
    ],
  },
  {
    name: "Growth",
    priceYearly: "$1,390",
    pricePeriodYearly: "/year",
    priceMonthly: "$139",
    pricePeriodMonthly: "/month",
    description: "For growing businesses",
    pageLimit: "Up to 100 pages", // Updated limit
    ctaText: "Start Free Trial",
    ctaVariant: "outline",
    standoutFeatures: [{ text: "Everything in Micro, plus:", included: false }], // Fixed repetition
    premiumFeatures: [
      { text: "Dedicated case manager", included: true },
      { text: "Built-in Google Analytics", included: true },
      { text: "Multi-account management", included: true },
      { text: "User & team management", included: true },
      { text: "White Labelled Widget", included: true },
    ],
    support: [{ text: "Up to 2 days response", included: true }],
  },
  {
    name: "Scale",
    priceYearly: "$3,890",
    pricePeriodYearly: "/year",
    priceMonthly: "$399",
    pricePeriodMonthly: "/month",
    description: "For scaling businesses",
    pageLimit: "Up to 1000 pages", // Updated limit
    recommended: true,
    ctaText: "Book a Demo",
    ctaVariant: "default",
    standoutFeatures: [
      { text: "Everything in Growth, plus:", included: false },
    ], // Fixed repetition
    premiumFeatures: [
      { text: "Top ADA attorney consultation", included: true },
      { text: "White Labelled Widget with Custom Branding", included: true },
    ],
    remediation: [
      { text: "Manual testing & validation by experts", included: true },
      {
        text: "Custom fixes to improve accessibility conformance",
        included: true,
      },
    ],
    support: [{ text: "Up to 2 days response", included: true }],
  },
  {
    name: "Enterprise (IncluJet)",
    priceYearly: "Custom",
    pricePeriodYearly: "",
    priceMonthly: "Custom",
    pricePeriodMonthly: "",
    description: "Tailored large-scale solutions",
    pageLimit: "Over 1000 pages",
    ctaText: "Let's Talk",
    ctaVariant: "outline",
    isEnterprise: true,
    standoutFeatures: [{ text: "Everything in Scale, plus:", included: false }], // Fixed repetition
    remediation: [
      { text: "On demand testing & validation by experts", included: true },
    ],
    addedPremiumFeatures: [
      { text: "10 hours with expert ADA attorney", included: true },
      { text: "Single-sign-on (SSO)", included: true },
      { text: "Solution engineering", included: true },
      { text: "Fully Customizable White Labelled Widget", included: true },
    ],
  },
];

const incluFixPlans: IncluFixPlan[] = [
  {
    name: "Micro",
    priceMonthly: "$300",
    pricePeriodMonthly: "/month",
    priceYearly: "$3,000",
    pricePeriodYearly: "/year",
    description: "Up to 10 web pages", // Updated limit
    ctaText: "Start Free Trial",
    ctaVariant: "default",
    freeTrialNote: "* Free trial for business emails only",
    features: [
      { text: "Expert AI & Manual Code Fixes", included: true },
      { text: "Core accessibility remediation", included: true },
      { text: "WCAG/ADA focus", included: true },
      { text: "Basic reporting", included: true },
      { text: "Up to 2 users", included: true },
    ],
  },
  {
    name: "Growth",
    priceMonthly: "$1,099",
    pricePeriodMonthly: "/month",
    priceYearly: "$10,990",
    pricePeriodYearly: "/year",
    description: "Up to 100 web pages", // Updated limit
    ctaText: "Start Free Trial",
    ctaVariant: "default",
    freeTrialNote: "* Free trial for business emails only",
    features: [
      { text: "Expert AI & Manual Code Fixes", included: true },
      { text: "Full AI auditing & monitoring integration", included: true },
      { text: "Automatic monthly scans integration", included: true },
      { text: "20 daily on demand page scans integration", included: true },
      { text: "10 journey actions integration", included: true },
      { text: "Up to 5 users", included: true },
    ],
  },
  {
    name: "Scale",
    priceMonthly: "$2,099",
    pricePeriodMonthly: "/month",
    priceYearly: "$20,900",
    pricePeriodYearly: "/year",
    description: "Up to 1,000 web pages", // Updated limit
    ctaText: "Start Free Trial",
    ctaVariant: "default",
    freeTrialNote: "* Free trial for business emails only",
    features: [
      { text: "Everything in Growth", included: true },
      { text: "Expert AI & Manual Code Fixes", included: true },
      { text: "Bi-weekly scan frequency integration", included: true },
      { text: "50 daily on demand page scans integration", included: true },
      { text: "50 journey actions integration", included: true },
      { text: "Up to 9 users", included: true },
      { text: "Project management integrations", included: true },
      { text: "5 hours onboarding", included: true },
      { text: "Federated Login using Google", included: true },
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    pricePeriodMonthly: "",
    priceYearly: "Custom",
    pricePeriodYearly: "",
    description: "1,000+ web pages", // Updated limit
    ctaText: "Contact Us",
    ctaVariant: "outline",
    isEnterprise: true,
    features: [
      { text: "Everything in Scale", included: true },
      { text: "Expert AI & Manual Code Fixes", included: true },
      { text: "Weekly scan frequency integration", included: true },
      { text: "150 daily on demand page scans integration", included: true },
      { text: "150 journey actions integration", included: true },
      { text: "10+ users", included: true },
      { text: "Custom Legal and SLA", included: true },
      { text: "CI/CD integrations", included: true },
      { text: "Dev environments", included: true },
      { text: "Single Sign-On", included: true },
      { text: "10 hours onboarding", included: true },
    ],
  },
];

// --- Helper Components ---

const FeatureList = ({ items }: { items?: PlanFeature[] }) => {
  if (!items || items.length === 0) return null;
  return (
    <ul className="space-y-3 mt-6 pt-6 border-t border-[#304F21]">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-sm">
          {item.included ? (
            <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mr-2 mt-0.5" />
          ) : item.text.startsWith("Everything in") ? (
            <span className="w-5 h-5 mr-2 flex-shrink-0 text-brand-accent font-bold">
              ✓
            </span>
          ) : (
            <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mr-2 mt-0.5" />
          )}
          <span className="text-gray-300">{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

const PricingCard = ({
  plan,
  billingCycle,
}: {
  plan: IncluJetPlan | IncluFixPlan;
  billingCycle: "monthly" | "yearly";
}) => {
  const isIncluJet = "pageLimit" in plan;
  const isRecommended = isIncluJet && (plan as IncluJetPlan).recommended;
  const isEnterprise = plan.isEnterprise;

  const price =
    billingCycle === "yearly" ? plan.priceYearly : plan.priceMonthly;
  const period =
    billingCycle === "yearly"
      ? plan.pricePeriodYearly
      : plan.pricePeriodMonthly;

  const features = isIncluJet ? null : (plan as IncluFixPlan).features;
  const standoutFeatures = isIncluJet
    ? (plan as IncluJetPlan).standoutFeatures
    : null;
  const premiumFeatures = isIncluJet
    ? (plan as IncluJetPlan).premiumFeatures
    : null;
  const support = isIncluJet ? (plan as IncluJetPlan).support : null;
  const addedPremiumFeatures = isIncluJet
    ? (plan as IncluJetPlan).addedPremiumFeatures
    : null;
  const remediation = isIncluJet ? (plan as IncluJetPlan).remediation : null;

  return (
    <div
      className={cn(
        "relative bg-[#132213] border border-accent/20 rounded-lg p-6 flex flex-col h-full",
        isRecommended ? "border-accent border-2" : ""
      )}
    >
      {isRecommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="inline-block bg-accent text-[#081303] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Recommended
          </span>
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wide">
          {plan.name}
        </h3>
        <div className="mb-4 h-16">
          {" "}
          {/* Fixed height for price section */}
          {isEnterprise ? (
            <span className="text-4xl font-bold text-white block">Custom</span>
          ) : (
            <>
              <span className="text-4xl font-bold text-white">{price}</span>
              <span className="text-lg text-gray-400">{period}</span>
            </>
          )}
        </div>
        <p className="text-gray-400 mb-6">{plan.description}</p>
        {isIncluJet && (
          <p className="text-brand-accent font-semibold mb-6">
            {(plan as IncluJetPlan).pageLimit}
          </p>
        )}
      </div>

      <Button
        variant={plan.ctaVariant || "default"}
        className={cn(
          "w-full mt-auto mb-6",
          plan.ctaVariant === "default"
            ? "bg-accent text-[#081303] hover:bg-accent/80"
            : "bg-transparent border border-accent text-accent hover:bg-accent/10"
        )}
      >
        {plan.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {!isIncluJet && (plan as IncluFixPlan).freeTrialNote && (
        <p className="text-xs text-gray-500 text-center mb-4">
          {(plan as IncluFixPlan).freeTrialNote}
        </p>
      )}

      <div className="flex-grow">
        {standoutFeatures && <FeatureList items={standoutFeatures} />}
        {premiumFeatures && <FeatureList items={premiumFeatures} />}
        {remediation && <FeatureList items={remediation} />}
        {addedPremiumFeatures && <FeatureList items={addedPremiumFeatures} />}
        {support && <FeatureList items={support} />}
        {features && <FeatureList items={features} />}
      </div>
    </div>
  );
};

const BillingToggle = ({
  billingCycle,
  onToggle,
}: {
  billingCycle: "monthly" | "yearly";
  onToggle: (cycle: "monthly" | "yearly") => void;
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-12">
      <button
        onClick={() => onToggle("monthly")}
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors",
          billingCycle === "monthly"
            ? "bg-accent text-[#081303]"
            : "text-gray-400 hover:text-white"
        )}
      >
        Monthly
      </button>
      <div className="relative">
        <button
          onClick={() => onToggle("yearly")}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-medium transition-colors",
            billingCycle === "yearly"
              ? "bg-accent text-[#081303]"
              : "text-gray-400 hover:text-white"
          )}
        >
          Annually
        </button>
        <span
          className="absolute -top-4 -right-4 bg-[#304F21] text-accent text-xs font-semibold px-2 py-0.5 rounded-full border border-accent/50"
          style={{ transform: "rotate(15deg)" }}
        >
          Save 35%
        </span>
      </div>
    </div>
  );
};

// --- Main Pricing Page Component ---

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  const handleToggle = (cycle: "monthly" | "yearly") => {
    setBillingCycle(cycle);
  };

  return (
    <div className="bg-[#081303] text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span
            className="inline-block px-4 py-1 rounded-full bg-transparent border-accent/40
          border-2 text-accent text-sm mb-4"
          >
            FLEXIBLE PRICING
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Accessibility Solution
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Select the plan that best fits your needs, whether you need
            automated scanning with IncluJet or code-level remediation with
            IncluFix. Get started today and make your digital presence
            inclusive.
          </p>
          <BillingToggle billingCycle={billingCycle} onToggle={handleToggle} />
        </div>

        <Tabs defaultValue="inclujet" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-[#132213] border border-accent/20 p-1 h-auto rounded-lg">
            <TabsTrigger
              value="inclujet"
              className="data-[state=active]:bg-accent data-[state=active]:text-[#081303] text-white rounded-md py-2 text-lg font-semibold" // Increased text size
            >
              IncluJet (Widget)
            </TabsTrigger>
            <TabsTrigger
              value="inclufix"
              className="data-[state=active]:bg-accent data-[state=active]:text-[#081303] text-white rounded-md py-2 text-lg font-semibold" // Increased text size
            >
              IncluFix (Code)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="inclujet">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {incluJetPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="inclufix">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {incluFixPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Comparison Table Section (Optional - Add later if needed) */}
        {/*
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          {/* Add comparison table component here *}
        </div>
        */}

        {/* FAQ Section (Optional - Add later if needed) */}
        {/*
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          {/* Add FAQ component here *}
        </div>
        */}
      </div>
    </div>
  );
}
