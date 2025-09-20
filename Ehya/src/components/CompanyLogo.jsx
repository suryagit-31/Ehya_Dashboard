import React from "react";
import List from "../assets/List.png";
const CompanyLogos = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-12 md:space-x-16 lg:space-x-20 opacity-60 grayscale">
          <img src={List} alt="" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
