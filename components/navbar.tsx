// components/navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export default function Navbar() {
  const pathname = usePathname();

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
          <Link
            href="/#why-us"
            className={cn(
              "hover:text-white",
              pathname.startsWith("/#why-us")
                ? "text-white font-medium"
                : "text-[#a3a3a3]"
            )}
          >
            Why Us
          </Link>
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
                : "text-[#a3a3a3]"
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
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="text-[#a3a3a3] border-2 border-[#304F21] hover:text-white"
            asChild // Use asChild to make Button act as Link
          >
            <Link href="/coming-soon?feature=Login%20Portal">Login</Link>
          </Button>
          <Button
            className="bg-[#304F21] hover:bg-[#304F21]/60 text-white border-[#307029] border-1"
            aria-label="Get started with Inclusivio"
            asChild
          >
            <Link href="/coming-soon?feature=Onboarding">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
