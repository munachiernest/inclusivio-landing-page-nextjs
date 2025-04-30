import { Button } from "@/components/ui/button";

export function IntegrateSection() {
  return (
    <section
      className="py-24 relative bg-[#081303]"
      aria-labelledby="integrate-heading"
    >
      <div className="container mx-auto px-4">
        <h2
          id="integrate-heading"
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Integrate Inclusivio with Just
          <br />a Few Lines of Code
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          {/* Left column for Shopify Integration */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-[#0a0a0a] rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-bold text-white mb-4">
                Shopify Integration
              </h3>
              <p className="text-green-500 mb-4">
                Connect your Shopify store to run automated accessibility scans
              </p>
              <Button className="bg-[#36f200] hover:bg-[#36f200]/80 text-black px-8 py-2">
                Link Shopify Store
              </Button>
            </div>
          </div>

          {/* Right column for Code Example */}
          <div className="bg-[#0a0a0a] rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="p-6">
              <pre className="text-sm text-[#888888] overflow-x-auto">
                <code>{`import { Inclusivio } from '@inclusivio/react';

// Initialize the accessibility scanner
const scanner = new Inclusivio({
  apiKey: 'your_api_key',
  autoFix: true
});

// Start monitoring for accessibility issues
scanner.watch();

// Get real-time accessibility score
const score = await scanner.getScore();`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Achieve Compliance in Minutes
          </h3>
          <Button className="bg-[#36f200] hover:bg-[#36f200]/80 text-black px-8">
            Start Integration
          </Button>
        </div>
      </div>
    </section>
  );
}
