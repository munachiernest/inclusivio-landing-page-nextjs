// components/footer.tsx
import Link from "next/link";
import Logo from "@/components/logo"; // Assuming logo is here
import { TwitterIcon, LinkedinIcon } from "lucide-react"; // Import icons

export function Footer() {
  return (
    <footer className="bg-secondary-background text-brand-button border-t border-gray-200">
      {" "}
      {/* Using light background from globals */}
      <div className="container mx-auto px-4 py-12">
        {/* Top section: Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo */}
          <div className="flex items-start">
            <Logo />
            <Link
              href="/"
              className="text-xl font-semibold ml-2 text-brand-button"
            >
              {" "}
              {/* Use brand color */}
              Inclusivio
            </Link>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="font-semibold mb-3 text-brand-button">Product</h4>{" "}
            {/* Use brand color */}
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="hover:text-brand-accent text-sm"
                >
                  Features
                </Link>
              </li>{" "}
              {/* Link to sections or pages */}
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-brand-accent text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-brand-accent text-sm">
                  Demo
                </Link>
              </li>{" "}
              {/* Assuming a /demo page or section */}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="font-semibold mb-3 text-brand-button">Company</h4>{" "}
            {/* Use brand color */}
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-brand-accent text-sm">
                  About Us
                </Link>
              </li>{" "}
              {/* Assuming /about page */}
              <li>
                <Link
                  href="/careers"
                  className="hover:text-brand-accent text-sm"
                >
                  Careers
                </Link>
              </li>{" "}
              {/* Assuming /careers page */}
              <li>
                <Link href="/press" className="hover:text-brand-accent text-sm">
                  Press
                </Link>
              </li>{" "}
              {/* Assuming /press page */}
            </ul>
          </div>

          {/* Column 4: Resources Links */}
          <div>
            <h4 className="font-semibold mb-3 text-brand-button">Resources</h4>{" "}
            {/* Added heading */}
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-brand-accent text-sm">
                  Blog
                </Link>
              </li>{" "}
              {/* Assuming /blog page */}
              <li>
                <Link
                  href="/support"
                  className="hover:text-brand-accent text-sm"
                >
                  Support
                </Link>
              </li>{" "}
              {/* Assuming /support page */}
            </ul>
          </div>
        </div>

        {/* Bottom section: Social and Copyright */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="font-medium text-brand-button">FOLLOW US</span>{" "}
            {/* Use brand color */}
            {/* Replace '#' with your actual social media links */}
            <Link
              href="#"
              aria-label="Follow us on X (Twitter)"
              className="text-gray-500 hover:text-brand-accent"
            >
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Follow us on LinkedIn"
              className="text-gray-500 hover:text-brand-accent"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
          <div>
            © {new Date().getFullYear()} A11y Labs, Inc.{" "}
            {/* Use your company name */}
          </div>
        </div>
      </div>
    </footer>
  );
}
