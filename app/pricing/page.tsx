import React from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, XIcon } from "lucide-react";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Import Tabs

// --- Interface for IncluJet Plans (Existing) ---
interface IncluJetPlan {
  name: string;
  price: string;
  pricePeriod: string;
  description: string;
  pageLimit: string;
  recommended?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  standoutFeatures?: { text: string; included: boolean }[];
  premiumFeatures?: { text: string; included: boolean }[];
  support?: { text: string; included: boolean }[];
  addedPremiumFeatures?: { text: string; included: boolean }[];
  remediation?: { text: string; included: boolean }[]; // Note: This might be confusing now, maybe rename sections
}

// --- Interface for IncluFix Plans (New) ---
interface IncluFixPlan {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  ctaText: string;
  ctaVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  features: { text: string; included: boolean }[];
  isEnterprise?: boolean;
}

// --- Pricing Data ---

const incluJetPlans: IncluJetPlan[] = [
  {
    name: "Micro",
    price: "$390",
    pricePeriod: "/year",
    description: "Automated scanning & widget",
    pageLimit: "Up to 5 pages",
    ctaText: "Start Free Trial",
    ctaVariant: "outline",
    standoutFeatures: [
      /* ... features ... */ {
        text: "Automated web accessibility",
        included: true,
      },
      { text: "Ongoing scans & fixes every 24 hrs", included: true },
      { text: "Accessibility report & documentation", included: true },
    ],
    support: [
      /* ... features ... */ { text: "Online help center", included: true },
      { text: "Email", included: true },
      { text: "Live chat", included: true },
    ],
  },
  {
    name: "Growth",
    price: "$1,390",
    pricePeriod: "/year",
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
    ],
    support: [{ text: "Up to 2 days response", included: true }],
  },
  {
    name: "Scale",
    price: "$3,890",
    pricePeriod: "/year",
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
    ],
    remediation: [
      { text: "Manual testing & custom remediation", included: true },
      {
        text: "Yearly testing & validation by accessibility experts",
        included: true,
      },
      {
        text: "Custom fixes to improve accessibility conformance",
        included: true,
      },
    ], // This section might need renaming if it causes confusion with IncluFix
    support: [{ text: "Up to 2 days response", included: true }],
  },
  {
    name: "Enterprise (IncluJet)",
    price: "Custom",
    pricePeriod: "",
    description: "Tailored large-scale solutions",
    pageLimit: "Over 1000 pages",
    ctaText: "Let's Talk",
    ctaVariant: "outline",
    standoutFeatures: [{ text: "Everything in Scale, plus:", included: false }],
    remediation: [
      { text: "Manual testing & custom remediation", included: true },
      {
        text: "On demand testing & validation by accessibility experts",
        included: true,
      },
    ], // As above
    addedPremiumFeatures: [
      { text: "10 hours with expert ADA attorney", included: true },
      { text: "Single-sign-on (SSO)", included: true },
      { text: "Solution engineering", included: true },
    ],
  },
];

const incluFixPlans: IncluFixPlan[] = [
  {
    name: "IncluFix Standard",
    priceMonthly: "$300",
    priceYearly: "$1500",
    description: "Direct code-level accessibility remediation by our experts.",
    ctaText: "Get Started with IncluFix",
    ctaVariant: "default", // Example variant
    features: [
      { text: "Expert code fixes for WCAG/ADA compliance", included: true },
      {
        text: "Remediation integrated into your development workflow",
        included: true,
      },
      { text: "Detailed reporting on fixes implemented", included: true },
      { text: "Dedicated support channel", included: true },
      { text: "Billed monthly or save with annual plan", included: false }, // Info text
    ],
  },
  {
    name: "IncluFix Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description:
      "Tailored code remediation solutions for large-scale projects.",
    ctaText: "Contact Sales",
    ctaVariant: "outline", // Example variant
    features: [
      { text: "Everything in Standard, plus:", included: false }, // Placeholder
      { text: "Volume-based remediation plans", included: true },
      { text: "Custom integration & workflow support", included: true },
      { text: "Dedicated account manager & SLAs", included: true },
    ],
    isEnterprise: true,
  },
];

// --- Helper Components ---

const FeatureList = ({
  title,
  items,
}: {
  title: string;
  items?: { text: string; included: boolean }[]; // Make items optional
}) => {
  if (!items || items.length === 0) return null; // Don't render if no items

  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            {item.included ? (
              <CheckIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mr-2 mt-0.5" />
            ) : item.text.includes("Everything in") ||
              item.text.includes("Billed monthly") ? ( // Adjust check for placeholder/info text
              <span className="w-5 h-5 mr-2 flex-shrink-0"></span> // Spacer for placeholder/info text
            ) : (
              // Decide how to show non-included features if needed, or maybe filter them out in data
              <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mr-2 mt-0.5" /> // Example: show X for non-included
            )}
            <span
              className={cn(
                "text-sm",
                item.included ? "text-gray-300" : "text-gray-500"
              )}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// --- Pricing Card Components (Adaptable) ---

// Using a single card component, adaptable based on props
const PricingCard = ({ plan }: { plan: IncluJetPlan | IncluFixPlan }) => {
  // Type guard to check which plan type we have
  const isIncluJet = "pageLimit" in plan;
  const isIncluFix = "priceMonthly" in plan;

  const planName = plan.name;
  const description = plan.description;
  const ctaText = plan.ctaText;
  const ctaVariant = plan.ctaVariant || "outline"; // Default to outline

  // Determine price display
  let priceDisplay: React.ReactNode;
  if (isIncluJet) {
    priceDisplay = (
      <>
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        {plan.pricePeriod && (
          <span className="text-gray-400">{plan.pricePeriod}</span>
        )}
      </>
    );
  } else if (isIncluFix) {
    if (plan.isEnterprise) {
      priceDisplay = (
        <span className="text-4xl font-bold text-white">Custom</span>
      );
    } else {
      priceDisplay = (
        <div>
          <div>
            <span className="text-4xl font-bold text-white">
              {plan.priceMonthly}
            </span>
            <span className="text-gray-400">/month</span>
          </div>
          <div className="text-sm text-gray-400 mt-1">
            or {plan.priceYearly}/year (Save ~16%){" "}
            {/* Calculate actual saving if needed */}
          </div>
        </div>
      );
    }
  }

  return (
    <div
      className={cn(
        "border rounded-lg p-6 flex flex-col h-full",
        isIncluJet && plan.recommended
          ? "border-brand-accent bg-[#10240E] relative" // Recommended style for IncluJet
          : "border-[#304F21] bg-[#0D1A07]" // Standard style
      )}
    >
      {isIncluJet && plan.recommended && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider">
          Recommended
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-white mb-1">{planName}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        {isIncluJet && (
          <p className="text-sm text-brand-accent mb-4 font-medium">
            {plan.pageLimit}
          </p>
        )}{" "}
        {/* Show page limit for IncluJet */}
        <div className="mb-6 min-h-[60px]">
          {" "}
          {/* Ensure consistent height for price area */}
          {priceDisplay}
        </div>
        <Button
          className={cn(
            "w-full mb-6",
            ctaVariant === "default" &&
              "bg-brand-accent text-white hover:bg-brand-accent/80",
            ctaVariant === "outline" &&
              "bg-transparent border-brand-accent text-brand-accent hover:bg-brand-accent/10"
          )}
          variant={ctaVariant === "default" ? "default" : "outline"}
        >
          {ctaText}
        </Button>
        {/* Feature Sections - Adapt based on plan type */}
        {isIncluJet && plan.standoutFeatures && (
          <FeatureList
            title="Standout Features"
            items={plan.standoutFeatures}
          />
        )}
        {isIncluJet && plan.premiumFeatures && (
          <FeatureList title="Premium Features" items={plan.premiumFeatures} />
        )}
        {isIncluJet && plan.remediation && (
          <FeatureList
            title="Manual Testing & Validation"
            items={plan.remediation}
          />
        )}{" "}
        {/* Renamed for clarity */}
        {isIncluJet && plan.addedPremiumFeatures && (
          <FeatureList
            title="Added Premium Features"
            items={plan.addedPremiumFeatures}
          />
        )}
        {isIncluJet && plan.support && (
          <FeatureList title="Support" items={plan.support} />
        )}
        {isIncluFix && plan.features && (
          <FeatureList title="What's Included" items={plan.features} />
        )}
      </div>
    </div>
  );
};

// --- Main Pricing Page Component ---
export default function PricingPage() {
  return (
    <div className="bg-[#081303] min-h-screen text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-brand-accent text-black p-2 z-50"
      >
        Skip to main content
      </a>
      <Navbar />

      <main
        id="main-content"
        role="main"
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
            PRICING PLANS
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Accessibility Solution
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Select between our AI-powered widget & scanner (`IncluJet`) or our
            expert code remediation service (`IncluFix`).
          </p>
        </div>

        {/* --- TABS --- */}
        <Tabs defaultValue="inclujet" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-10 bg-[#0D1A07] border border-[#304F21] h-12 p-1">
            <TabsTrigger
              value="inclujet"
              className="data-[state=active]:bg-[#1A3B13] data-[state=active]:text-white text-gray-400 h-full text-base"
            >
              IncluJet{" "}
              <span className="hidden sm:inline ml-1">(Widget & Scanner)</span>
            </TabsTrigger>
            <TabsTrigger
              value="inclufix"
              className="data-[state=active]:bg-[#1A3B13] data-[state=active]:text-white text-gray-400 h-full text-base"
            >
              IncluFix{" "}
              <span className="hidden sm:inline ml-1">(Code Remediation)</span>
            </TabsTrigger>
          </TabsList>

          {/* IncluJet Content */}
          <TabsContent value="inclujet">
            <p className="text-center text-gray-400 mb-8">
              Automated accessibility checks, reporting, and optional
              user-facing widget. Priced annually based on page volume.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {incluJetPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>

          {/* IncluFix Content */}
          <TabsContent value="inclufix">
            <p className="text-center text-gray-400 mb-8">
              Direct, expert-led remediation of accessibility issues within your
              website&apos;s codebase. Simple monthly or annual pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
              {" "}
              {/* Centered 2-column grid */}
              {incluFixPlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
