import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CompanyLogos from "./components/CompanyLogo";
import ScheduleSection from "./components/ScheduleSection";
import TrackingSection from "./components/TrackingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Testimonals from "./components/Testimonals";

function App() {
  return (
    <div className="min-h-screen">
      <GoogleAnalytics />

      {/* Hero Section with Header */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-600">
        <Header />
        <HeroSection />
      </div>

      {/* Main Content Sections */}
      <CompanyLogos />
      <ScheduleSection />
      <TrackingSection />
      <Testimonals />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
