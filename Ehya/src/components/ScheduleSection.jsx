import React from "react";
import { Check, ArrowRight, CheckCircle } from "lucide-react";
import Mac from "../assets/DeviceMacbookPro.png";

const ScheduleSection = () => {
  const features = [
    "Best Time to Post",
    "Geolocation",
    "User Tag",
    "Others benefit",
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Schedule Your Post <br />
              Whenever You Want
            </h2>
            <p className="text-gray-600 leading-relaxed font-medium font-dmsans">
              Publish your content automatically to ensure that your content
              reaches the right people. Built-in features such as
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 text-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-cyan" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="text-cyan-500 font-bold font-dmsans flex items-center space-x-2 hover:text-cyan-600 transition-colors">
              <span>Learn about scheduled post</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="relative">
            <div className="rounded-t-2xl p-4">
              <img src={Mac} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
