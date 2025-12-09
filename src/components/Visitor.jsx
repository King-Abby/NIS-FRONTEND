import React from "react";

function Visitor() {
  return (
    <div className="bg-[#004d25] text-white py-12 px-4 sm:px-8 md:px-16 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* --- Left Section: Headline and Vertical Divider --- */}
        <div className="flex items-center mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mr-4 sm:mr-6 text-left">
            Visitors with <br />
            irregular status
          </h2>

          {/* Vertical Divider (thin white line) */}
          <div className="hidden h-20 w-px bg-white opacity-50 md:block"></div>
        </div>

        {/* --- Middle Section: Description Text --- */}
        <div className="max-w-lg mx-auto md:mx-0 md:pl-8 lg:pl-16 text-center md:text-left flex-1">
          <p className="text-base sm:text-lg">
            Regularize your immigration status in Nigeria before the grace
            period ends on 1st August 2025. Take advantage of this chance to
            regularize your stay and avoid future immigration complications.
          </p>
        </div>

        {/* --- Right Section: Call to Action Button --- */}
        <div className="mt-8 md:mt-0 md:ml-8">
          <a
            href="#" 
            className="
              inline-flex items-center justify-center 
              px-8 py-4 
              text-base font-semibold leading-none 
              rounded-md shadow-lg 
              transition duration-300 ease-in-out
              /* Mimic the bright green to dark green gradient for the vibrant look */
              bg-gradient-to-r from-[#00c853] to-[#00a840] 
              hover:from-[#00a840] hover:to-[#008f36]
            "
          >
            Click Here Now
            {/* Arrow icon */}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
