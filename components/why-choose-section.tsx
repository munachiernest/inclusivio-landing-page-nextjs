import { Search, Laptop, Activity, UserCheck, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GridWithFeatures from "@/icons/GridWithFeatures";
import Link from "next/link";

export function WhyChooseSection() {
  return (
    <section
      className="pt-8 relative bg-secondary-background border-t-2 border-accent/40"
      id="why-us"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto">
        <div className="text-center">
          <span
            className="inline-block px-4 py-1 rounded-full bg-transparent border-[#9BC53D]/40 border-2
           text-[#304F21] text-sm mb-4"
          >
            MODERN & FLEXIBLE
          </span>
          <h2
            id="why-choose-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose Inclusivio for
            <br />
            Your{" "}
            <div className="bg-[#9BC53D]/10 px-2 mx-2 relative inline-block">
              Accessibility Needs?
              {/* Top-left corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#081303]/18" />
              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#081303]/18" />
              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#081303]/18" />
              {/* Bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#081303]/18" />
            </div>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Inclusivio empowers website owners and designers with intuitive,
            automated tools to ensure accessibility, without needing deep
            technical knowledge
          </p>
          <Button
            className="mt-8 bg-[#304F21] hover:bg-[#304F21]/80 text-white"
            asChild
          >
            <Link href="/coming-soon?feature=Free%20Trial">
              Get started free
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div className="overflow-hidden w-screen md:block hidden">
            <GridWithFeatures className="w-full h-full" />
          </div>

          {/* Features grid */}
          <div className="mt-8 mx-auto md:hidden">
            {/* Left column */}
            <div>
              <FeatureCard
                icon={<Search className="w-6 h-6" />}
                title="Accessibility Diagnostics"
              />
            </div>
            <div>
              <FeatureCard
                icon={<Laptop className="w-6 h-6" />}
                title="Smart Compliance Engine"
              />
            </div>
            <div>
              <FeatureCard
                icon={<Activity className="w-6 h-6" />}
                title="Real-Time Monitoring"
              />
            </div>

            {/* Right column */}
            <div>
              <FeatureCard
                icon={<UserCheck className="w-6 h-6" />}
                title="Expert-Led Audits"
              />
            </div>
            <div>
              <FeatureCard
                icon={<FileText className="w-6 h-6" />}
                title="Compliance Reporting"
              />
            </div>
            <div className="col-start-3">
              <FeatureCard
                icon={
                  <Image
                    src="/images/icons/Tuning 3.svg"
                    width="30"
                    height="30"
                    alt="icon for integrations"
                    className="w-6 h-6"
                  />
                }
                title="Seamless Development Integration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-[#A1C391]">
      <div className="text-[#304F21] bg- mb-2">{icon}</div>
      <h3 className="text-[#304F21] text-sm font-medium text-center">
        {title}
      </h3>
    </div>
  );
}
