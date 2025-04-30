import { Clock } from "lucide-react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import { RadarSweepIcon } from "../icons/RotatingSweepArm";

export function AutomateSection() {
  return (
    <section
      className="py-4 w-screen bg-secondary-background"
      id="features"
      aria-labelledby="automate-compliance"
    >
      <div className="container mx-auto px-4 flex flex-col gap-8 h-1/2 justify-center">
        <div className=" bg-white p-8">
          <p className="rounded-full border border-accent px-4 py-2 text-center text-azure max-w-fit mx-auto">
            UNDERLYING MAGIC
          </p>
          <h2
            id="automate-heading"
            className="text-4xl md:text-5xl font-bold text-center text-[#081303 leading-[58px] tracking-[-1.56px]"
          >
            Automate Compliance with
            <br />
            <div className="bg-accent/10 px-2 mx-2 relative inline-block">
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

      <div
        className="relative flex flex-col md:flex-row bg-secondary-background z-10 border-t border-accent/27 w-full 
      h-1/2"
      >
        <div
          className="relative w-full lg:w-1/3 flex items-center justify-center border-r 
        border-accent/27"
        >
          {/* Small pill at the top */}
          <span
            className="flex shadow-lg absolute top-24 md:top-[16%] text-[#8CB62D] text-sm px-2 py-1 border
          border-accent/10 rounded-full bg-white z-10 gap-1 leading-tight"
          >
            <ArrowUp className="text-white bg-[#69842D] rounded-full w-4 h-4" />
            Immediate time savings
          </span>

          {/* Center the rings container */}
          <div className="relative mx-4 w-full h-full overflow-clip">
            {/* Concentric rings: Use percentage widths and aspect-square */}
            <Clock
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18.75%]
             h-auto text-[#678A18] z-10"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[31.25%] 
            aspect-square border-2 border-accent/40 rounded-full shadow-lg"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[46.875%]
             aspect-square border border-accent/40 rounded-full border-b-accent/20"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[62.5%] 
            aspect-square border border-accent/40 rounded-full border-b-accent/20"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[81.25%] 
            aspect-square border border-accent/40 rounded-full"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full 
            aspect-square border border-accent/40 rounded-full"
            />
          </div>

          {/* Text positioned at the bottom */}
          <div className="max-w-sm absolute bottom-0 left-0 px-4 z-10 bg-secondary-background">
            <h2 className="text-xl font-semibold text-[#081303] mb-2">
              Lightning-Fast Scans
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our advanced algorithms swiftly detect accessibility issues,
              providing comprehensive results in seconds.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 flex flex-col items-center justify-between h-full">
          <div
            className="absolute left-1/4 mx-9 top-0 
          bg-[repeating-linear-gradient(to_right,_#d9f99d_0px,_#d9f99d_1px,_transparent_1px,_transparent_35px)]
           w-5/12 h-full -z-10"
          />
          <Image
            src="/images/issuesPreview.png"
            alt="Issues preview"
            width={500}
            height={400}
            className="object-contain max-w-3/5 max-h-1/2 mt-4"
          />
          {/* Small pill at the top */}
          <span
            className="flex shadow-lg text-[#8CB62D] text-sm px-2 py-1 border border-accent/10 rounded-full
           bg-white z-10 gap-1 tracking-tight leading-tight"
          >
            <ArrowUp className="text-white bg-green-500 rounded-full w-4 h-4" />
            Let&apos;s Start Fixing Now
          </span>
          <div className="px-4 bg-secondary-background self-start justify-self-end">
            <h2 className="text-xl font-semibold text-[#081303] mb-2">
              AI Driven Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Leverage cutting-edge AI to automatically generate intelligent
              fixes for identified accessibility problems
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/3 flex items-center justify-center border-l border-accent/27">
          {/* Small pill at the top */}
          <span
            className="flex shadow-md absolute top-4 md:top-[16%] text-[#8CB62D] text-sm px-2 py-1 rounded-full
           border border-accent/27  bg-white z-10 gap-1 leading-tight"
          >
            <ArrowUp className="text-white bg-[#69842D] rounded-full w-4 h-4" />
            Continuous Compliance Monitoring
          </span>

          {/* Center the rings container */}
          <div className="relative mx-4 w-full h-full overflow-clip">
            {/* Concentric rings: Use percentage widths and aspect-square */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
               flex flex-col items-center justify-center text-[#678A18]"
            >
              <RadarSweepIcon className="text-[#678A18]" />
            </div>
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[31.25%]
             aspect-square border-2 border-accent/40 rounded-full shadow-lg"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[46.875%] 
            aspect-square border border-accent/40 rounded-full border-b-accent/20"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[62.5%] 
            aspect-square border border-accent/40 rounded-full border-b-accent/20"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[81.25%] 
            aspect-square border border-accent/40 rounded-full"
            />
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full
             aspect-square border border-accent/40 rounded-full"
            />
          </div>

          {/* Text positioned at the bottom */}
          <div className="max-w-sm absolute bottom-0 left-0 px-4 z-10 bg-secondary-background">
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
