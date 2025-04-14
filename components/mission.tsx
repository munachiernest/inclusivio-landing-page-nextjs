import Image from "next/image";
import React from "react";

// Define the Mission component as a functional component
export function Mission() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-between gap-12 lg:gap-32">
          {/* Left Column: Mission Statement */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#304F21] leading-tight">
              Our Mission: Make the internet accessible, inclusive & equitable
            </h2>
          </div>

          {/* Right Column: Quote */}
          <div className="w-full md:w-2/3">
            <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-6">
              <p>
                “25 years ago, we dreamt of a connected future and got the
                internet but 25% of us are still being left out of it.”
              </p>
            </blockquote>
            <div className="flex items-center gap-2">
              <Image
                src="/images/munachi-ernest-eze.png" // Replace with the actual path to the image
                alt="Munachi Ernest-Eze"
                width={400} // Adjust size as needed
                height={400}
                className="rounded-full w-12 h-12"
              />
              <div className="">
                <p className="font-semibold text-gray-900 tracking-tight">
                  Munachi Ernest-Eze
                </p>
                <p className="text-sm text-gray-900 uppercase tracking-wide">
                  FOUNDER @ Accessibility Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Correct the export: Export the component itself, not the result of calling it.
export default Mission;
