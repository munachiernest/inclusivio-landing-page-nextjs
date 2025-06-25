// app/resources/page.tsx
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HelpCircle, Newspaper } from "lucide-react"; // Icons for placeholders
import { cn } from "@/lib/utils";
import { RethinkSans } from "@/components/fonts"; // Assuming font import path

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#081303] text-white">
      <Navbar />

      <main
        role="main"
        className="flex-grow container mx-auto px-4 py-16 md:py-24"
      >
        {/* Page Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
            RESOURCES
          </span>
          <h1
            className={cn(
              RethinkSans.className, // Use your brand font
              "text-4xl md:text-5xl font-bold text-white mb-4"
            )}
          >
            Help Center & Insights
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore upcoming articles, tips, and support resources designed to
            help you navigate web accessibility.
          </p>
        </div>

        {/* Resource Grid (Simplified to 2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {" "}
          {/* Centered 2-column grid */}
          {/* Blog Placeholder Section */}
          <div className="bg-[#10240E] border border-brand-accent/50 rounded-lg p-8 flex flex-col items-center text-center relative overflow-hidden h-full min-h-[300px]">
            {" "}
            {/* Added min-height */}
            {/* Optional subtle background pattern */}
            <div className="absolute inset-0 opacity-5 [background-image:url('/images/Grid.svg')] [background-size:40px_40px] -z-10" />
            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-accent/30 rounded-tl-md" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand-accent/30 rounded-tr-md" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand-accent/30 rounded-bl-md" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-accent/30 rounded-br-md" />
            <div className="mb-4 p-3 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              <Newspaper className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Blog Insights
            </h2>
            <p className="text-gray-300 text-lg mb-6 flex-grow">
              {" "}
              {/* flex-grow */}
              Coming Soon! We're preparing insightful articles, tips, and
              updates on web accessibility and digital inclusion.
            </p>
            <p className="text-sm text-gray-500 mt-auto">
              {" "}
              {/* Pushed to bottom */}
              Check back soon for updates.
            </p>
          </div>
          {/* Support Placeholder Section */}
          <div className="bg-[#0D1A07] border border-[#304F21] rounded-lg p-8 flex flex-col items-center text-center h-full min-h-[300px]">
            {" "}
            {/* Added min-height */}
            <div className="mb-4 p-3 rounded-full bg-brand-accent/10 border border-brand-accent/20">
              <HelpCircle className="w-8 h-8 text-brand-accent" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              Support Center
            </h2>
            <p className="text-gray-300 mb-6 flex-grow">
              {" "}
              {/* flex-grow */}
              Our support documentation and help resources are currently under
              development. We&apos;ll have guides and FAQs available shortly.
            </p>
            <p className="text-sm text-gray-500 mt-auto">
              {" "}
              {/* Pushed to bottom */}
              Need immediate help? Use the contact form (coming soon) or email
              support.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
