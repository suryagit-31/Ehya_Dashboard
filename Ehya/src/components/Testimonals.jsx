import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import item1 from "../assets/Photo.svg";

const Testimonials = () => {
  return (
    <section className="bg-[#F5FCFF] py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] leading-snug">
              Powering the growth of <br />
              100+ business & retailers in <br /> Indonesia.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              From single store, startups, to large multi-store brands.
            </p>
          </div>

          {/* Right Content - Testimonial */}
          <div className="relative">
            {/* Quotation + Stars */}
            <div className="mb-4 flex items-center space-x-2">
              <span className="text-8xl text-[#0D3B66] leading-none">“</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 italic leading-relaxed mb-6">
              “With Ehya, we’re able to easily track our performance in full
              detail. It’s become an essential tool for us to grow and engage
              with our audience.”
            </p>

            {/* User Info */}
            <div className="flex items-center space-x-3">
              <img className="w-12 h-12 rounded-full" src={item1} alt="User" />
              <div>
                <div className="font-semibold text-[#0D3B66]">Jaquon Hart</div>
                <div className="text-sm text-gray-500">
                  Digital Marketing Executive, Hypebeast
                </div>
              </div>
            </div>

            {/* Navigation + Dots */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex space-x-2 ml-1">
                <div className="w-2 h-2 bg-[#0D3B66] rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>

              <button className="p-3 bg-[#0D3B66] text-white rounded-full shadow-lg hover:bg-blue-800 transition">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
