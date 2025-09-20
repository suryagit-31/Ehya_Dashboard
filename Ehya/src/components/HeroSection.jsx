import React from "react";
import Hero from "../assets/Hero.png";
import { MoveRight } from "lucide-react";
import Underline from "../assets/vector.svg"; // your SVG file

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-400 to-blue-600 min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-10 z-10 relative">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight relative">
                We help you grow your business <br />
                faster
              </h1>
              {/* SVG underline */}
              <img
                src={Underline}
                alt="underline"
                className="absolute left-0 w-36 md:w-48 lg:w-42 transform rotate-[-7deg] "
              />
            </div>

            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              Ehya is the Instagram analytics platform focused on the goals,
              track engagement <br />
              and grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-ocean px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                See how it works
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ocean transition-colors flex items-center justify-evenly">
                Get a free demo <MoveRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Right Content - Large Dashboard Mockup */}
          <div className="relative flex justify-center items-center">
            <img
              src={Hero}
              alt="Dashboard"
              className="w-[170%] md:w-[135%] lg:w-[180%] h-auto object-contain -ml-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
