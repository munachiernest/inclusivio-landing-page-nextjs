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
    pageLimit: "Up to 5 pages",
    ctaText: "Start Free Trial",
    ctaVariant: "outline",
    standoutFeatures: [
      { text: "Automated web accessibility", included: true },
      { text: "Ongoing scans & fixes every 24 hrs", included: true },
      { text: "Accessibility report & documentation", included: true },
      { text: "White Labelled Widget", included: false }, // Added, not included in Micro
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
    pageLimit: "Up to 100 pages",
    ctaText: "Start Free Trial",
    ctaVariant: "outline",
    standoutFeatures: [{ text: "Everything in Micro, plus:", included: false }],
    premiumFeatures: [
      { text: "Dedicated case manager", included: true },
      { text: "Built-in Google Analytics", included: true },
      { text: "Multi-account management", included: true },
      { text: "User & team management", included: true },
      { text: "White Labelled Widget", included: true }, // Added, included in Growth
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
    pageLimit: "Up to 1000 pages",
    recommended: true,
    ctaText: "Book a Demo",
    ctaVariant: "default",
    standoutFeatures: [
      { text: "Everything in Growth, plus:", included: false },
    ],
    premiumFeatures: [
      { text: "Top ADA attorney consultation", included: true },
      { text: "White Labelled Widget with Custom Branding", included: true }, // Enhanced version for Scale
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
    standoutFeatures: [{ text: "Everything in Scale, plus:", included: false }],
    remediation: [
      { text: "On demand testing & validation by experts", included: true },
    ],
    addedPremiumFeatures: [
      { text: "10 hours with expert ADA attorney", included: true },
      { text: "Single-sign-on (SSO)", included: true },
      { text: "Solution engineering", included: true },
      { text: "Fully Customizable White Labelled Widget", included: true }, // Fully customizable for Enterprise
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
    description: "Up to 10 web pages",
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
  // Other IncluFix plans remain unchanged
  {
    name: "Growth",
    priceMonthly: "$1,099",
    pricePeriodMonthly: "/month",
    priceYearly: "$10,990",
    pricePeriodYearly: "/year",
    description: "Up to 1,000 web pages",
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
    description: "Up to 10,000 web pages",
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
    description: "10,000+ web pages",
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
          <span
            className={cn(item.included ? "text-gray-300" : "text-gray-500")}
          >
            {item.text.startsWith("Everything in") ? (
              <>
                <strong>{item.text.split(" ").slice(0, 3).join(" ")}</strong>
                {item.text.substring(
                  item.text.indexOf(" ", item.text.indexOf(" ") + 3)
                )}
              </>
            ) : (
              item.text
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

// --- Pricing Card Component (Handles Both Plan Types) ---

const PricingCard = ({
  plan,
  billingCycle,
}: {
  plan: IncluJetPlan | IncluFixPlan;
  billingCycle: "monthly" | "yearly";
}) => {
  const isIncluJet = "pageLimit" in plan;
  const isIncluFix = "features" in plan && !isIncluJet;

  const planName = plan.name;
  const description = plan.description;
  const ctaText = plan.ctaText;
  // Determine CTA Variant based on plan type and specific conditions
  const isRecommendedStyle =
    isIncluJet && plan.recommended && billingCycle === "yearly";
  const finalCtaVariant = isRecommendedStyle
    ? "default" // Recommended IncluJet uses default visually (accent bg)
    : isIncluFix
    ? plan.isEnterprise
      ? "outline"
      : "default" // IncluFix: Outline for Enterprise, Default otherwise
    : plan.ctaVariant || "outline"; // IncluJet: Use defined variant or default to outline

  let priceDisplay: React.ReactNode;
  let periodDisplay: React.ReactNode;

  if (plan.isEnterprise) {
    priceDisplay = (
      <span className="text-4xl font-bold text-white">Custom</span>
    );
    periodDisplay = null;
  } else if (billingCycle === "monthly") {
    priceDisplay = (
      <span className="text-4xl font-bold text-white">{plan.priceMonthly}</span>
    );
    periodDisplay = (
      <span className="text-gray-400">{plan.pricePeriodMonthly}</span>
    );
  } else {
    priceDisplay = (
      <span className="text-4xl font-bold text-white">{plan.priceYearly}</span>
    );
    periodDisplay = (
      <span className="text-gray-400">{plan.pricePeriodYearly}</span>
    );
  }

  return (
    <div
      className={cn(
        "border rounded-lg p-6 flex flex-col h-full transition-all duration-300",
        isRecommendedStyle
          ? "border-brand-accent bg-[#10240E] relative shadow-lg shadow-brand-accent/10"
          : "border-[#304F21] bg-[#0D1A07]"
      )}
    >
      {isRecommendedStyle && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
          Recommended
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
          {planName}
        </h3>
        <div className="mb-2 min-h-[50px] flex items-baseline space-x-1">
          {priceDisplay}
          {periodDisplay}
        </div>
        <p className="text-gray-400 text-sm mb-6">{description}</p>

        {/* Shadcn Button for CTA */}
        <Button
          variant={finalCtaVariant} // Use the determined variant
          className={cn(
            "w-full mb-4 flex items-center justify-center group",
            // Apply specific background/text colors based on the final variant and recommendation status
            isRecommendedStyle
              ? "bg-brand-accent text-white hover:bg-brand-accent/80" // Recommended Style overrides variant style
              : finalCtaVariant === "default"
              ? "bg-brand-button text-white hover:bg-brand-button-hover" // Standard Default Style
              : "border-brand-accent text-brand-accent hover:bg-brand-accent/10" // Outline Style
          )}
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </Button>

        {isIncluFix && plan.freeTrialNote && (
          <p className="text-xs text-gray-400 text-center mb-4">
            {plan.freeTrialNote}
          </p>
        )}

        {/* Feature Lists */}
        {isIncluJet && plan.standoutFeatures && (
          <FeatureList items={plan.standoutFeatures} />
        )}
        {isIncluJet && plan.premiumFeatures && (
          <FeatureList items={plan.premiumFeatures} />
        )}
        {isIncluJet && plan.remediation && (
          <FeatureList items={plan.remediation} />
        )}
        {isIncluJet && plan.addedPremiumFeatures && (
          <FeatureList items={plan.addedPremiumFeatures} />
        )}
        {isIncluJet && plan.support && <FeatureList items={plan.support} />}
        {isIncluFix && plan.features && <FeatureList items={plan.features} />}
      </div>
    </div>
  );
};

// --- Billing Toggle Component (Using Shadcn Button for Radio Style) ---
const BillingToggle = ({
  billingCycle,
  onToggle,
}: {
  billingCycle: "monthly" | "yearly";
  onToggle: (cycle: "monthly" | "yearly") => void;
}) => {
  return (
    <div
      className="flex items-center justify-center space-x-4 mb-10"
      role="radiogroup"
      aria-label="Billing cycle"
    >
      {/* Monthly Shadcn Button */}
      <Button
        variant="ghost" // Use ghost variant as a base
        size="lg"
        onClick={() => onToggle("monthly")}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 h-auto focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#081303]", // Added focus style
          billingCycle === "monthly"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        )}
        aria-pressed={billingCycle === "monthly"}
        aria-checked={billingCycle === "monthly"}
        aria-label="Select monthly billing"
      >
        <span
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mr-2",
            billingCycle === "monthly"
              ? "border-brand-accent bg-brand-accent"
              : "border-gray-500"
          )}
        >
          {billingCycle === "monthly" && (
            <span className="w-2 h-2 rounded-full bg-[#081303]"></span>
          )}
        </span>
        <span>Billed Monthly</span>
      </Button>

      {/* Yearly Shadcn Button */}
      <Button
        variant="ghost"
        size="lg"
        onClick={() => onToggle("yearly")}
        className={cn(
          "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 h-auto focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#081303]", // Added focus style
          billingCycle === "yearly"
            ? "text-white"
            : "text-gray-400 hover:text-gray-200"
        )}
        aria-pressed={billingCycle === "yearly"}
        aria-checked={billingCycle === "yearly"}
        aria-label="Select yearly billing"
      >
        <span
          className={cn(
            "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mr-2",
            billingCycle === "yearly"
              ? "border-brand-accent bg-brand-accent"
              : "border-gray-500"
          )}
        >
          {billingCycle === "yearly" && (
            <span className="w-2 h-2 rounded-full bg-[#081303]"></span>
          )}
        </span>
        <span>Billed Yearly</span>
      </Button>

      {/* "Save" badge */}
      <span className="bg-[#1A3B13] text-brand-accent text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap border border-brand-accent/30">
        SAVE ~17%
      </span>
    </div>
  );
};

// --- Main Pricing Page Component ---
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly"
  );

  return (
    <div className="bg-[#081303] min-h-screen text-white flex flex-col">
      <Navbar />

      <main
        id="main-content"
        role="main"
        className="container mx-auto px-4 py-16 flex-grow"
      >
        {/* Page Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
            PRICING PLANS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Accessibility Solution
          </h1>
        </div>

        {/* --- Billing Toggle (Uses Shadcn Buttons) --- */}
        <BillingToggle billingCycle={billingCycle} onToggle={setBillingCycle} />

        {/* --- TABS --- */}
        <Tabs defaultValue="inclufix" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-10 bg-[#0D1A07] border border-[#304F21] h-12 p-1 max-w-lg mx-auto">
            {/* Shadcn TabsTrigger is button-like but handled by the Tabs component */}
            <TabsTrigger
              value="inclufix"
              className="data-[state=active]:bg-[#1A3B13] data-[state=active]:text-white text-gray-400 h-full text-base"
            >
              IncluFix{" "}
              <span className="hidden sm:inline ml-1">(Code Fixes)</span>
            </TabsTrigger>
            <TabsTrigger
              value="inclujet"
              className="data-[state=active]:bg-[#1A3B13] data-[state=active]:text-white text-gray-400 h-full text-base"
            >
              IncluJet <span className="hidden sm:inline ml-1">(Widget)</span>
            </TabsTrigger>
          </TabsList>

          {/* IncluFix Content */}
          <TabsContent value="inclufix">
            <p className="text-center text-gray-400 mb-8 -mt-4">
              Direct, expert-led remediation of accessibility issues within your
              website&apos;s codebase.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {incluFixPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>

          {/* IncluJet Content */}
          <TabsContent value="inclujet">
            <p className="text-center text-gray-400 mb-8 -mt-4">
              Our lightweight accessibility widget provides an alternative for
              those seeking a simpler approach. While direct codebase
              improvements offer the most comprehensive solution, IncluJet
              offers a quick-to-implement overlay that enhances usability
              without requiring immediate code changes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {incluJetPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                  billingCycle={billingCycle}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
