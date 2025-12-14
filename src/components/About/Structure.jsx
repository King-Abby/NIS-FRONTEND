import React from "react";
import { Link } from "react-router-dom";
import fineLady  from "../../assets/desktop/image 242.png";

function Structure() {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-start px-6 md:px-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={fineLady}
        alt="Structure"
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
        flex flex-col
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
          Structured to Serve
        </h1>

        <p
          className="
          mt-3 text-base 
          md:mt-4 md:text-lg
        "
        >
          From a modest department in 1958 to a full-fledged agency in 1963, the
          Nigeria Immigration Service has evolved into a cornerstone of secure
          migration, national development, and service excellence.
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

export default Structure;
