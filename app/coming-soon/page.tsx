"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import Navbar from "@/components/navbar";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { registerUser } from "@/app/actions/registration";

export default function ComingSoonPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const feature = searchParams.get("feature") || "This feature";

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState(""); // Add state for useCase
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Create form data for the server action
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("company", company);
    formData.append("feature", feature);
    formData.append("useCase", useCase); // Add useCase to FormData

    try {
      const result = await registerUser(formData);

      if (!result.success) {
        throw new Error(result.message || "Something went wrong");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to submit. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#081303] min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center container mx-auto px-4 py-16">
        {submitted ? (
          // --- Submitted State ---
          <div className="max-w-md w-full mx-auto text-center">
            <div className="mb-6 p-3 rounded-full bg-brand-accent/10 border border-brand-accent/20 inline-flex">
              <CheckCircle2 className="w-10 h-10 text-brand-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Thanks for signing up!
            </h1>
            <p className="text-gray-300 mb-8">
              We&apos;ve added you to our waitlist and will notify you as soon
              as this feature becomes available.
            </p>
            <Button
              variant="default"
              className="bg-brand-accent text-white hover:bg-brand-accent/80"
              onClick={() => router.push("/")}
            >
              Back to Home
            </Button>
          </div>
        ) : (
          // --- Form State ---
          <>
            <div className="text-center mb-8 max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
                COMING SOON
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {feature} is launching soon
              </h1>
              <p className="text-gray-300">
                We&apos;re working hard to bring you this feature. Sign up now
                to get early access and updates when it launches.
              </p>
            </div>

            <div className="bg-[#0D1A07] border border-[#304F21] rounded-lg p-8 max-w-md w-full">
              <div className="mb-6 flex justify-center">
                <div className="p-3 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-md text-sm text-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* --- Name Field --- */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full"
                  />
                </div>

                {/* --- Email Field --- */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full"
                  />
                </div>

                {/* --- Company Field --- */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full"
                  />
                </div>

                {/* --- Use Case Field (New) --- */}
                <div>
                  <label
                    htmlFor="useCase"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Use Case (Optional)
                  </label>
                  <Textarea
                    id="useCase"
                    placeholder={`Why do you need the "${feature}" feature?`}
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full min-h-[80px]" // Added min-height
                    rows={3} // Suggest number of rows
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Briefly describe how you plan to use this feature.
                  </p>
                </div>

                {/* --- Submit Button --- */}
                <Button
                  type="submit"
                  className={cn(
                    "w-full mt-4 bg-brand-accent text-white hover:bg-brand-accent/80 flex items-center justify-center",
                    loading && "opacity-70 cursor-not-allowed"
                  )}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <span>Notify Me</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center pt-3">
                  We respect your privacy and won&apos;t share your information
                  with third parties.
                </p>
              </form>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
