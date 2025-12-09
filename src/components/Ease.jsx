import React from "react";
import imgNgf from "../assets/desktop/Ng-flag.png";
import imgpas from "../assets/desktop/passport.png";
import imgPic from "../assets/desktop/Npr.png";

function Ease() {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* --- Header Section --- */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Start Your Journey With Ease
          </h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600">
            Choose your application path below whether you're in Nigeria, abroad
            or renewing your passport, we have made it simple and accessible for
            you.
          </div>
        </div>

        {/* --- Application Path Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Apply From Nigeria */}
          <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={imgNgf} 
                alt="Nigerian Flag and Passport"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Apply From Nigeria
              </h3>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                We accept all application online. the applicant will be required
                to visit a passport office for biometric enrolment.
              </p>

              {/* Apply Now Button */}
              <a
                href="#"
                className="inline-block bg-[#00a840] text-white text-center py-3 rounded-md font-semibold transition hover:bg-green-700"
              >
                Apply now
              </a>
            </div>
          </div>

          {/* Card 2: Apply From Outside Nigeria */}
          <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={imgpas} 
                alt="Hand holding Nigerian Passport"
                className="w-full h-full object-cover rounded"
              />
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Apply From Outside Nigeria
              </h3>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Application is submitted online. Applicant must book with a
                Nigerian Mission.
              </p>

              {/* Apply Now Button */}
              <a
                href="#" 
                className="inline-block bg-[#00a840] text-white text-center py-3 rounded-md font-semibold transition hover:bg-green-700"
              >
                Apply now
              </a>
            </div>
          </div>

          {/* Card 3: Renew or Replace your Passport */}
          <div className="flex flex-col bg-white rounded-lg shadow-xl overflow-hidden text-left">
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={imgPic}
                alt="Nigerian Passport Renewal Banner"
                className="w-full h-full object-cover rounded"
              />
             
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            </div>

            {/* Text Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Renew or Replace your Passport
              </h3>
              <p className="text-gray-600 text-base mb-6 flex-grow">
                Easily update your expired, damaged, or lost passport.
              </p>

              {/* Apply Now Button */}
              <a
                href="#" 
                className="inline-block bg-[#00a840] text-white text-center py-3 rounded-md font-semibold transition hover:bg-green-700"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ease;
