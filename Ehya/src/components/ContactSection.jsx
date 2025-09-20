import React, { useState } from "react";
import item1 from "../assets/item1.svg";
import item2 from "../assets/item2.svg";
import item3 from "../assets/item3.svg";
import item4 from "../assets/item4.svg";
import item5 from "../assets/item5.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Contactlogos = [
    { id: 1, src: item1, alt: "Logo 1" },
    { id: 2, src: item2, alt: "Logo 2" },
    { id: 5, src: item5, alt: "Logo 5" },
    { id: 3, src: item3, alt: "Logo 3" },
    { id: 4, src: item4, alt: "Logo 4" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 md:px-10 py-12 md:py-20 border-2 border-white bg-gradient-to-r from-skycustom to-ocean rounded-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - CTA */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-dmsans font-bold leading-tight">
              Grow your brand <br />
              presence on social <br /> media 😍
            </h2>
            <p className="text-blue-100 leading-relaxed font-dmsans text-lg md:text-xl font-semibold">
              Join with over 1000+ happy customers
            </p>

            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {Contactlogos.map((logo) => (
                  <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-blue-100 underline">and others</span>
            </div>
          </div>

          {/* Right Content - Contact Form + Button */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ocean text-white py-3 rounded-lg font-semibold hover:bg-skycustom transition-colors"
              >
                Contact Us
              </button>
            </form>

            {/* Trial Button */}
            <button className="w-full bg-white-100 text-ocean px-8 py-3 rounded-lg font-semibold hover:bg-ocean hover:text-white transition-colors">
              Get your trial now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
