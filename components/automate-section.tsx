import { Clock } from "lucide-react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export function AutomateSection() {
  return (
    <section
      className="py-4 w-screen h-screen bg-[#9BC53D]/5"
      aria-labelledby="automate-compliance"
    >
      <div className="container mx-auto px-4 flex flex-col gap-8 h-1/2 items-center justify-center">
        <div className="bg-white pl-8">
          <p className="rounded-full border border-[#9BC53D] px-4 py-2 text-center text-azure max-w-fit mx-auto">
            UNDERLYING MAGIC
          </p>
          <h2
            id="automate-heading"
            className="text-4xl md:text-5xl font-bold text-center text-[#081303 leading-[58px] tracking-[-1.56px]"
          >
            Automate Compliance with
            <br />
            <div className="bg-[#9BC53D]/10 px-2 mx-2 relative inline-block">
              AI-Powered
              {/* Top-left corner */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#081303]/18" />
              {/* Top-right corner */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#081303]/18" />
              {/* Bottom-left corner */}
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#081303]/18" />
              {/* Bottom-right corner */}
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#081303]/18" />
            </div>
            Precision
          </h2>
          <p className="text-center text-[#081303] text-xl md:text-2xl">
            Unlike manual compliance tools, Inclusivio uses advanced AI to
            automatically identify and fix accessibility issues across your
            entire website in real-time
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-6 bg-white border border-[#9BC53D] w-full h-1/2">
        {/* Left side: Concentric rings + Icon */}
        <div className="relative w-full md:w-1/3 min-h-[400px] md:min-h-0 flex items-center justify-center border-r">
          {/* Small pill at the top */}
          <span className="flex shadow-lg absolute top-4 md:top-16 text-[#8CB62D] text-sm px-1 py-1 border rounded-full bg-white z-10 gap-2">
            <ArrowUp className="text-white px-1 bg-[#69842D] rounded-full w-4 h-4" />
            Immediate time savings
          </span>

          {/* Center the rings container */}
          <div className="relative w-[320px] h-[320px]">
            {/* Concentric rings */}
            <Clock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] text-[#678A18] z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-2 border-[#9BC53D]/40 rounded-full shadow-lg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border border-[#9BC53D]/40 rounded-full border-b-[#9BC53D]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#9BC53D]/40 rounded-full border-b-[#9BC53D]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-[#9BC53D]/40 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-[#9BC53D]/40 rounded-full" />
          </div>

          {/* Text positioned at the bottom */}
          <div className="max-w-sm absolute -bottom-4 px-4 z-10 bg-white">
            <h2 className="text-xl font-semibold text-[#081303] mb-2">
              Lightning-Fast Scans
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our advanced algorithms swiftly detect accessibility issues,
              providing comprehensive results in seconds.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex items-center justify-center">
          <Image
            src="/images/issuesPreview.png"
            alt="Issues preview"
            width={600}
            height={400}
            className="max-w-full md:w-2/3 h-auto"
          />
        </div>
        <div className="relative w-full md:w-1/3 min-h-[400px] md:min-h-0 flex items-center justify-center">
          {/* Small pill at the top */}
          <span className="flex shadow-lg absolute top-4 md:top-16 text-[#8CB62D] text-sm px-1 py-1 border rounded-full bg-white z-10 gap-2">
            <ArrowUp className="text-white px-1 bg-[#69842D] rounded-full w-4 h-4" />
            Continuous Compliance Monitoring
          </span>

          {/* Center the rings container */}
          <div className="relative w-[320px] h-[320px]">
            {/* Concentric rings */}
            <Clock className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] text-[#678A18] z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border-2 border-[#9BC53D]/40 rounded-full shadow-lg" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border border-[#9BC53D]/40 rounded-full border-b-[#9BC53D]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-[#9BC53D]/40 rounded-full border-b-[#9BC53D]/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] border border-[#9BC53D]/40 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-[#9BC53D]/40 rounded-full" />
          </div>

          {/* Text positioned at the bottom */}
          <div className="max-w-sm absolute -bottom-4 px-4 z-10 bg-white">
            <h2 className="text-xl font-semibold text-[#081303] mb-2">
              WCAG Compliance Assurance
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stay ahead of accessibility standards with continuous updates
              aligned with the latest WCAG guidelines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
