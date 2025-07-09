"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import Navbar from "@/components/navbar";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { z } from "zod";
import Link from "next/link";

const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().optional(),
});

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [useCase, setUseCase] = useState(""); // Add state for useCase
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

  // Countdown logic
  // Use local time for August 1, 2024 midnight
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const launchDate = new Date(2025, 7, 1, 0, 0, 0, 0);
      const now = new Date();
      const diff = launchDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setValidationErrors({});

    // Validate with Zod
    const result = waitlistSchema.safeParse({ name, email, company, useCase });
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      for (const err of result.error.errors) {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      }
      setValidationErrors(fieldErrors);
      setLoading(false);
      return;
    }

    try {
      await addToWaitlist({
        name,
        email,
        company: company,
        useCase: useCase || "",
      });
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
              as we launch in August.
            </p>
            <Link
              href="/"
              className="
                bg-brand-accent text-white hover:bg-brand-accent/80
                rounded-md px-6 py-3 text-lg font-semibold
                transition-colors duration-200 cursor-pointer
                inline-flex items-center justify-center mt-4
              "
            >
              Back to Home
            </Link>
          </div>
        ) : (
          // --- Form State ---
          <>
            <div className="text-center mb-8 max-w-lg">
              <span
                className="
                  inline-block px-3 py-1 rounded-full
                  bg-brand-accent/10 text-brand-accent font-medium mb-4
                "
              >
                COMING SOON
              </span>
              {/* Countdown Timer */}
              <div className="flex justify-center gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold">
                    {timeLeft.days}
                  </span>
                  <span className=" text-gray-400 uppercase tracking-widest">
                    Days
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className=" text-gray-400 uppercase tracking-widest">
                    Hours
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className=" text-gray-400 uppercase tracking-widest">
                    Minutes
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-gray-400 uppercase tracking-widest">
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1A07] border border-[#304F21] rounded-lg p-8 max-w-md w-full">
              {error && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-md  text-red-200">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* --- Name Field --- */}
                <div>
                  <label
                    htmlFor="name"
                    className="block  font-medium text-gray-300 mb-1"
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
                  {validationErrors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {validationErrors.name}
                    </p>
                  )}
                </div>

                {/* --- Email Field --- */}
                <div>
                  <label
                    htmlFor="email"
                    className="block  font-medium text-gray-300 mb-1"
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
                  {validationErrors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {validationErrors.email}
                    </p>
                  )}
                </div>

                {/* --- Company Field (Required) --- */}
                <div>
                  <label
                    htmlFor="company"
                    className="block  font-medium text-gray-300 mb-1"
                  >
                    Company <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full"
                  />
                  {validationErrors.company && (
                    <p className="text-red-400 text-xs mt-1">
                      {validationErrors.company}
                    </p>
                  )}
                </div>

                {/* --- Use Case Field (Optional) --- */}
                <div>
                  <label
                    htmlFor="useCase"
                    className="block  font-medium text-gray-300 mb-1"
                  >
                    Your Use Case (Optional)
                  </label>
                  <Textarea
                    id="useCase"
                    placeholder="Why are you interested in Inclusivio?"
                    value={useCase}
                    onChange={(e) => setUseCase(e.target.value)}
                    className="bg-[#122013] border-[#304F21] text-white placeholder:text-gray-500 w-full min-h-[80px]"
                    rows={3}
                  />
                  {validationErrors.useCase && (
                    <p className="text-red-400 text-xs mt-1">
                      {validationErrors.useCase}
                    </p>
                  )}
                </div>

                {/* --- Submit Button --- */}
                <Button
                  type="submit"
                  className={cn(
                    [
                      "w-full mt-4 bg-brand-accent text-white",
                      "flex items-center justify-center",
                      "transition-colors duration-300",
                      "hover:bg-lime-500 hover:text-black",
                    ].join(" "),
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
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291 A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <>
                      <span>Join Waitlist</span>
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
