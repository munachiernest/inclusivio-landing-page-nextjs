import {
  Search,
  Laptop,
  Activity,
  UserCheck,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhyChooseSection() {
  return (
    <section
      className="py-24 relative bg-[#9BC53D]/5"
      aria-labelledby="why-choose-heading"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-transparent border-[#9BC53D]/40 border-2 text-[#304F21] text-sm mb-4">
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
          <Button className="mt-8 bg-[#304F21] hover:bg-[#304F21]/80 text-white">
            Get started free
          </Button>
        </div>

        <div className="relative mt-16">
          {/* Center circle */}
          <div className="w-32 h-32 bg-[#36f200] rounded-2xl mx-auto flex items-center justify-center">
            <div className="text-white">
              <Image
                src="/images/icons/spinner.svg"
                width="30"
                height="30"
                alt="controller"
              ></Image>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-3 gap-x-32 gap-y-16 max-w-4xl mx-auto mt-16">
            {/* Left column */}
            <div className="col-start-1">
              <FeatureCard
                icon={<Search className="w-6 h-6" />}
                title="Accessibility Diagnostics"
              />
            </div>
            <div className="col-start-1">
              <FeatureCard
                icon={<Laptop className="w-6 h-6" />}
                title="Smart Compliance Engine"
              />
            </div>
            <div className="col-start-1">
              <FeatureCard
                icon={<Activity className="w-6 h-6" />}
                title="Real-Time Monitoring"
              />
            </div>

            {/* Right column */}
            <div className="col-start-3">
              <FeatureCard
                icon={<UserCheck className="w-6 h-6" />}
                title="Expert-Led Audits"
              />
            </div>
            <div className="col-start-3">
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
    <div className="flex flex-col items-center p-4 bg-[#e8f5e9] rounded-lg">
      <div className="text-[#304F21] mb-2">{icon}</div>
      <h3 className="text-[#304F21] text-sm font-medium text-center">
        {title}
      </h3>
    </div>
  );
}
