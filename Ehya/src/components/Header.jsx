import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ehya from "../assets/ehya.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  return (
    <header className="relative z-50 py-8">
      <nav className="container mx-auto px-10 py-2 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-white">
          <img src={ehya} className="h-8" alt="" />
        </div>

        {/* Right: Links + Login */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Home
          </a>

          {/* Landings Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "landings" ? null : "landings")
              }
              className="flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Landings <ChevronDown size={16} className="ml-1" />
            </button>
            {openDropdown === "landings" && (
              <div className="absolute top-full mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md">
                <ul className="flex flex-col">{/* Empty for now */}</ul>
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "pages" ? null : "pages")
              }
              className="flex items-center text-white hover:text-blue-200 transition-colors"
            >
              Pages <ChevronDown size={16} className="ml-1" />
            </button>
            {openDropdown === "pages" && (
              <div className="absolute top-full mt-2 w-40 bg-white text-gray-800 shadow-lg rounded-md">
                <ul className="flex flex-col">{/* Empty for now */}</ul>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Help
          </a>

          {/* Login button sits inside same container */}
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-ocean transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-ocean md:hidden">
            <div className="flex flex-col space-y-4 p-6">
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Home
              </a>
              {/* Landings dropdown placeholder */}
              <button className="flex items-center text-white hover:text-blue-200">
                Landings <ChevronDown size={16} className="ml-1" />
              </button>
              {/* Pages dropdown placeholder */}
              <button className="flex items-center text-white hover:text-blue-200">
                Pages <ChevronDown size={16} className="ml-1" />
              </button>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Docs
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition-colors"
              >
                Help
              </a>
              <button className="bg-skycustom text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors w-full">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
