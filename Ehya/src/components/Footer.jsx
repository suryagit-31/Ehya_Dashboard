import React from "react";
import icon from "../assets/Icon.svg";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";
import icon3 from "../assets/Icon3.svg";
import Base from "../assets/Base.svg";
import heart from "../assets/heart.svg";
import ehya from "../assets/ehya.svg";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-3xl font-bold"><img src={ehya} alt="" /></div>
            <p className="text-gray-400 leading-relaxed font-dmsans">
              Build a modern and creative website with crealand
            </p>
            {/* Logos row */}
            <div className="flex space-x-1.5 mt-[142px]">
              <img src={icon3} alt="Logo 1" className="w-10 h-10" />
              <img src={icon2} alt="Logo 2" className="w-10 h-10" />
              <img src={icon1} alt="Logo 3" className="w-10 h-10" />
              <img src={icon} alt="Logo 4" className="w-10 h-10" />
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Analytics
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Scheduling
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Reporting
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                API
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Status
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="relative inline-block">
            <img src={Base} alt="Base" className="mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={heart} className="w-8 h-8" />
            </div>
          </div>

          <p className="text-gray-400 mt-4">
            © 2024 Ehya. All rights reserved. | Privacy Policy | Terms of
            Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
