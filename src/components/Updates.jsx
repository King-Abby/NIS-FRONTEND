import React from "react";
import imgGrp1 from "../assets/desktop/Frame 22.png";
import imgGrp2 from "../assets/desktop/Frame 22 (1).png";
import imgGrp3 from "../assets/desktop/Frame 22 (2).png";

function Updates() {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Important Updates
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            Stay informed with the latest announcements, policy changes, and
            critical immigration service alerts all in one place.
          </div>
        </div>

        {/* --- News Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Nigeria Police Award 2025 Ceremony */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={imgGrp1} // **REPLACE WITH ACTUAL IMAGE PATH**
                alt="Nigeria Immigration Service honored at Nigeria Police Award 2025 Ceremony"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Nigeria Immigration Service honored with security partnership
                recognition award at the Nigeria Police Award 2025 Ceremony.
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                The Nigeria Immigration Service honored with security
                partnership recognition award at the Nigeria Police Award 2025
                Ceremony.
              </p>

              {/* Read More Link */}
              <a
                href="#" 
                className="text-[#00a840] text-sm font-semibold flex items-center mt-auto hover:text-green-700 transition duration-150"
              >
                Read more
                {/* Right Arrow SVG */}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Constitution Review Legislative Dialogue */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={imgGrp2} 
                alt="Comptroller General participated in Constitution Review Legislative Dialogue"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The Comptroller General, KN Nandap, pcc, mmis, fsmn,
                participated in the Constitution Review Legislative Dialogue
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                The Comptroller General received a courtesy visit from the
                International Organization for Migration (IOM) delegation, led
                by Dimanche Sharon.
              </p>

              {/* Read More Link */}
              <a
                href="#" 
                className="text-[#00a840] text-sm font-semibold flex items-center mt-auto hover:text-green-700 transition duration-150"
              >
                Read more
                {/* Right Arrow SVG */}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3: Courtesy Visit from IOM Delegation */}
          <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-60 w-full overflow-hidden">
              <img
                src={imgGrp3} 
                alt="The General received a courtesy visit from the International Organization for Migration (IOM) delegation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The General, KN Nandap, pcc, mmis, fsmn, received a courtesy
                visit from the International Organization for Migration (IOM)
                delegation
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                The Comptroller General received a courtesy visit from the
                International Organization for Migration (IOM) delegation, led
                by Dimanche Sharon, the...
              </p>

              {/* Read More Link */}
              <a
                href="#" 
                className="text-[#00a840] text-sm font-semibold flex items-center mt-auto hover:text-green-700 transition duration-150"
              >
                Read more
                {/* Right Arrow SVG */}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
