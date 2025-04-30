import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./logo";

function Navbar() {
  return (
    <header className="border-b border-[#002200] bg-[#081303]">
      <nav
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Main"
      >
        <div className="flex items-center space-x-2">
          <Logo />
          <span className="text-white text-xl font-semibold">Inclusivio</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-[#a3a3a3] hover:text-white">
            Why Us
          </Link>
          <Link href="#" className="text-[#a3a3a3] hover:text-white">
            How it Works
          </Link>
          <Link href="#" className="text-[#a3a3a3] hover:text-white">
            Features
          </Link>
          <Link href="#" className="text-[#a3a3a3] hover:text-white">
            Resources
          </Link>
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

export default Navbar;
