import React from "react";
import imgVisa from "../assets/desktop/visa.png";
import imgPassport from "../assets/desktop/passport.png";
import imgcertificate from "../assets/desktop/certificate.png";


function Services() {
  return (
   <div className="bg-gray-50 py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            Explore our core services designed to make passport, visa, and
            travel processing easier and faster.
          </div>
        </div>

        {/* --- Services Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1: Everything Visa */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
            <img
              src={imgVisa}
              alt="Visa Services"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Text Overlay and Button */}
            <div className="relative h-full p-8 flex flex-col justify-end text-white">
              <div className="text-4xl font-bold mb-4 text-left">
                Everything <br /> Visa
              </div>

              {/* Arrow Button */}
              <div className="flex justify-start">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition hover:bg-white hover:text-gray-800"
                  aria-label="Go to Visa Services"
                >
                  {/* Right Arrow SVG */}
                  <svg
                    className="w-5 h-5"
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

          {/* Service Card 2: Everything Passport */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
            {/* Background Image */}
            <img
              src={imgPassport}
              alt="Passport Services"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Text Overlay and Button */}
            <div className="relative h-full p-8 flex flex-col justify-end text-white">
              <div className="text-4xl font-bold mb-4 text-left">
                Everything <br /> Passport
              </div>

              {/* Arrow Button */}
              <div className="flex justify-start">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition hover:bg-white hover:text-gray-800"
                  aria-label="Go to Passport Services"
                >
                  {/* Right Arrow SVG */}
                  <svg
                    className="w-5 h-5"
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

          {/* Service Card 3: Travel Certificate */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl h-96">
            {/* Background Image */}
            <img
              src={imgcertificate}
              alt="Travel Certificate Services"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />

            {/* Text Overlay and Button */}
            <div className="relative h-full p-8 flex flex-col justify-end text-white">
              <div className="text-4xl font-bold mb-4 text-left">
                Travel <br /> Certificate
              </div>

              {/* Arrow Button */}
              <div className="flex justify-start">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition hover:bg-white hover:text-gray-800"
                  aria-label="Go to Travel Certificate Services"
                >
                  {/* Right Arrow SVG */}
                  <svg
                    className="w-5 h-5"
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
        </div>
      </div>
    </div>

  );
}

export default Services;



    