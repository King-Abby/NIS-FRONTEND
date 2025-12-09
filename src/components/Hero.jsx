import React from "react";
import { Link } from "react-router-dom";
import imgOfficer from "../assets/desktop/image-officer.png";

function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-start px-6 md:px-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={imgOfficer}
        alt="Hero"
        className="
      absolute inset-0 w-full h-full object-cover
      object-[center_top]  
    "
      />

      {/* Content */}
      <div
        className="
      relative z-10 text-white 
      max-w-[300px] mx-auto 
      flex flex-col items-center text-center
      md:max-w-xl md:items-start 
    "
      >
        {/* Heading */}
        <h1
          className="
        text-3xl font-bold leading-snug
        md:text-4xl md:leading-tight
      "
        >
          Nigeria <span className="text-green-300">Immigration</span> Service
        </h1>

        {/* Paragraph */}
        <p
          className="
        mt-3 text-base 
        md:mt-4 md:text-lg
      "
        >
          Begin your journey with confidence. Whether you're pursuing career
          growth, or a better future for your family, is ready to welcome you.
        </p>

        {/* Buttons */}
        <div
          className="
        flex flex-col gap-3 mt-6
        md:flex-row md:gap-4
      "
        >
          <Link to="/signup">
            <button className="bg-green-600 px-6 py-2 rounded-lg font-medium text-sm">
              Apply now
            </button>
          </Link>

          <button className="border border-green-600 text-white bg-white/20 px-6 py-2 rounded-lg font-medium text-sm">
            Explore services
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
