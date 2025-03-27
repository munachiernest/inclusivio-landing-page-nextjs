import { Button } from "@/components/ui/button";

export function IntegrateSection() {
  return (
    <section className="py-24 relative" aria-labelledby="integrate-heading">
      <div className="container mx-auto px-4">
        <h2
          id="integrate-heading"
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
        >
          Integrate Inclusivio with Just
          <br />a Few Lines of Code
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-[#0a0a0a] rounded-lg overflow-hidden">
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
          <Button className="bg-[#36f200] hover:bg-[#36f200] text-white px-8">
            Start Integration
          </Button>
        </div>
      </div>
    </section>
  );
}
