import React from "react";
import { Link } from "react-router-dom";
import offMan from "../../assets/desktop/image 259.png"

function Support() {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] flex items-center justify-start px-6 md:px-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={offMan}
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
          md:max-w-[450px] md:items-start 
        "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl font-bold leading-snug
            md:text-4xl md:leading-tight
          "
        >
          Need Help or support?
        </h1>

        <p
          className="
            mt-3 text-base 
            md:mt-4 md:text-lg
          "
        >
          We're Here to help. Choose a topic, reach out to our support team or
          visit a local office
        </p>

        {/* Buttons */}
        <div
          className="
            flex flex-col gap-3 mt-6
            md:flex-row md:gap-4
          "
        >
          <Link to="/signup">
            <button className="bg-green-600 px-6 py-3 rounded-lg font-medium text-sm">
              Visit Help Center
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Support;
