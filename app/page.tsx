import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AutomateSection } from "@/components/automate-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { IntegrateSection } from "@/components/integrate-section";
import Shopify from "@/icons/shopify";
import { RethinkSans } from "@/components/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Mission from "@/components/mission";
import ProprietarySection from "@/components/benefits";
import Navbar from "@/components/navbar";

export default function LandingPage() {
  return (
    <div>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-[#36f200] text-black p-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <main id="main-content" role="main">
          <div className="bg-[#081303]">
            <section className="container mx-auto px-4 py-16 text-center">
              <span className="text-[#9BC53D]">
                Seamless Integration with Shopify{" "}
                <Shopify className="inline-block" />{" "}
              </span>
              <h1 className="sr-only">
                Inclusivio - Web Accessibility Platform
              </h1>
              <h2
                className={cn(
                  RethinkSans.className,
                  "text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight"
                )}
              >
                Web Accessibility Made Effortless with AI
              </h2>

              <p className="text-[#cccccc] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Our AI-driven platform instantly identifies and resolves
                accessibility issues, ensuring a seamless experience for every
                user.
              </p>

              <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Your Website Link"
                  className="flex-1 bg-[#001a00] border-[#002200] text-white placeholder:text-[#666666]"
                  aria-label="Enter your website link"
                />
                <Button
                  size="lg"
                  className="bg-[#304F21] hover:bg-[#304F21]/60 text-white border-[#307029] border-1"
                  aria-label="Get started with Inclusivio"
                >
                  Get started
                </Button>
              </form>
            </section>
          </div>

          {/* Dashboard Preview Section */}
          <div className="relative overflow-hidden bg-[#081303]">
            <div
              className="absolute inset-0 w-full overflow-hidden top-20
        min-h-screen [background-image:url('/images/Grid.svg')]"
            />
            <section
              className="container mx-auto px-4 mt-16 rounded-lg"
              aria-labelledby="dashboard-preview"
            >
              <h2 id="dashboard-preview" className="sr-only">
                Dashboard Preview
              </h2>
              <div className="w-full h-full">
                <div className="w-full h-[80vh] hidden md:block overflow-hidden">
                  <Image
                    src="/images/dashboard_preview.png"
                    alt="Dashboard Preview"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </section>
          </div>
          {/* New Sections */}
          <AutomateSection />
          <Mission />
          <ProprietarySection />

          <WhyChooseSection />

          <IntegrateSection />
        </main>
      </div>
    </div>
  );
}
