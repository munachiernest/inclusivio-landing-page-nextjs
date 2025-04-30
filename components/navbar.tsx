"use client";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation"; // Import usePathname
import { cn } from "@/lib/utils"; // Import cn

export default function Navbar() {
  const pathname = usePathname(); // Get the current path

  return (
    <header className="border-b border-[#002200] bg-[#081303]">
      <nav
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main"
      >
        <div className="flex items-center space-x-2">
          <Logo />
          <Link href="/" className="text-white text-xl font-semibold">
            Inclusivio
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {/* Updated Links */}
          <Link
            href="/#why-us"
            className={cn(
              "hover:text-white",
              pathname === "/" || pathname.startsWith("/#why-us")
                ? "text-white font-medium"
                : "text-[#a3a3a3]" // Example active state for homepage sections
            )}
          >
            Why Us
          </Link>
          {/* Assuming a section ID #how-it-works on the homepage */}
          <Link
            href="/#how-it-works"
            className={cn(
              "hover:text-white",
              pathname.startsWith("/#how-it-works")
                ? "text-white font-medium"
                : "text-[#a3a3a3]"
            )}
          >
            How it Works
          </Link>
          <Link
            href="/pricing"
            className={cn(
              "hover:text-white",
              pathname === "/pricing"
                ? "text-white font-medium"
                : "text-[#a3a3a3]" // Active state for Pricing page
            )}
          >
            Pricing
          </Link>
          <Link
            href="/#features"
            className={cn(
              "hover:text-white",
              pathname.startsWith("/#features")
                ? "text-white font-medium"
                : "text-[#a3a3a3]"
            )}
          >
            Features
          </Link>
          {/* Removed Resources Link */}
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-[#a3a3a3] border-2 border-[#304F21] hover:text-white"
          >
            Login
          </Button>
          <Button
            className="bg-[#304F21] hover:bg-[#304F21]/60 text-white border-[#307029] border-1"
            aria-label="Get started with Inclusivio"
          >
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
}

// IMPORTANT: Add 'use client' at the top of this file
// since we are now using the usePathname hook.
