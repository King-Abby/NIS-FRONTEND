import React from "react";
import { Link } from "react-router-dom";
import imgBuild from "../../assets/desktop/buildings.png";

function Access() {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-start px-6 md:px-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={imgBuild}
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
      max-w-[300px] 
      flex flex-col items-center 
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
          Access All Nigeria Immigration Services, Fast, Secure, and Online
        </h1>

        <p
          className="
        mt-3 text-base 
        md:mt-4 md:text-lg
      "
        >
          From passport applications to visa processing and permit renewals
          manage it all in one place with ease and reliability.
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
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Access;
