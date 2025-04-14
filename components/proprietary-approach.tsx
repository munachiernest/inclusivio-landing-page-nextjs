import React from "react";
import {
  Shield,
  Brain,
  FileCode,
  Search,
  Users,
  ExternalLink,
  BarChart,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  return (
    <section
      className="py-24 bg-[#081303] text-white"
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full bg-transparent border-accent/40 
          border-2 text-accent text-sm mb-4"
          >
            COMPLETE SOLUTION
          </span>

          <h2
            id="benefits-heading"
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            The Benefits of True
            <br />
            <div className="bg-accent/10 px-2 mx-2 relative inline-block tracking-wide">
              Digital Accessibility
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/18" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/18" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/18" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/18" />
            </div>
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-10">
            In 2023 and 2024, over 5,000 businesses faced accessibility lawsuits
            and legal demands, with settlements averaging $25,000-$150,000 per
            case. Inclusivio delivers code-level remediation that provides both
            compliance protection and business growth.
          </p>
        </div>

        {/* Split Screen Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
          {/* Left Column - Compliance Benefits */}
          <div className="bg-[#132213] p-8 md:p-10 rounded-lg shadow-lg border border-accent/20">
            <div className="flex items-center mb-6">
              <div className="bg-accent/20 p-3 rounded-lg mr-4">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">
                Resolves Accessibility Concerns Directly in Your Codebase
              </h3>
            </div>

            <p className="mb-8 text-gray-300">
              While most accessibility tools rely on surface-level scans or
              overlays that mask the problem, Inclusivio goes deeper—directly
              into your codebase.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FileCode className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Code-level remediation
                  </h4>
                  <p className="text-gray-300">
                    Solutions that work for all users, not just compliance
                    checkmarks
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Automatic remediation that respects your design
                  </h4>
                  <p className="text-gray-300">
                    Fixes applied without breaking your brand experience
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Compliance that sticks with evolving standards
                  </h4>
                  <p className="text-gray-300">
                    Stay up-to-date with changing WCAG/ADA requirements
                    automatically
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Brain className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    AI that learns from every fix
                  </h4>
                  <p className="text-gray-300">
                    Our AI engine parses your entire codebase leveraging
                    advanced static analysis to identify WCAG violations, and
                    generate tailored code fixes for your tech stack.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xl text-accent">
              It&apos;s accessibility compliance that actually works—and can be
              proven in court.
            </p>
          </div>

          {/* Right Column - Beyond Compliance Benefits */}
          <div className="bg-[#132213] p-8 md:p-10 rounded-lg shadow-lg border border-accent/20">
            <div className="flex items-center mb-6">
              <div className="bg-accent/20 p-3 rounded-lg mr-4">
                <BarChart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Beyond Compliance: Growth</h3>
            </div>

            <p className="mb-8 text-gray-300">
              Accessibility isn&apos;t just about avoiding lawsuits—it&apos;s
              about expanding your reach, improving user experience, and
              ultimately growing your business.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Search className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    SEO advantages
                  </h4>
                  <p className="text-gray-300">
                    Accessibility improvements directly boost search engine
                    rankings
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Users className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Expanded audience
                  </h4>
                  <p className="text-gray-300">
                    Reach 1.3 billion people with disabilities ($1.9T in buying
                    power)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <ExternalLink className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Universal usability
                  </h4>
                  <p className="text-gray-300">
                    Better experience for all users, including those on mobile
                    devices
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Shield className="text-accent w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg text-white">
                    Stay compliant, automatically
                  </h4>
                  <p className="text-gray-300">
                    While you focus on growth, we handle the technical details
                    of WCAG and ADA compliance in the background
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="border-l-4 border-accent pl-6 py-3 text-left mb-8">
            <p className="text-lg md:text-xl text-white">
              Inclusivio is the only platform that combines real-time detection
              with AI-powered code remediation that actually permanently fixes
              underlying accessibility issues. That&apos;s not just
              automation—it&apos;s transformation.
            </p>
          </div>

          <p className="text-lg md:text-xl text-white mb-8 text-center">
            You can achieve both compliance protection and business growth
            through real, sustainable code improvements.
          </p>

          <div className="flex justify-center">
            <Button className="bg-accent hover:bg-accent/80 text-[#081303] font-bold px-8 py-2">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
