import React from "react";
import passportImg from "../../assets/desktop/image 255.png";
import iconImg from "../../assets/icons/Frame 68.png";

function WRV() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Who Needs To Regularize Their Visa
        </h2>

        <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Visa regularization applies to foreign nationals in Nigeria who are
          out of status or need legally adjust or extend their immigration stay.
          Below are common categories of individuals who qualify.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="w-full h-[280px] rounded-2xl overflow-hidden">
            <img
              src={passportImg}
              alt="Nigerian Passport"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right icon list */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-4 h-4 mt-1" />
              <p className="text-sm text-gray-700">Expired Visa On Arrival</p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-4 h-4 mt-1" />
              <p className="text-sm text-gray-700">Expired CERPAC</p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-4 h-4 mt-1" />
              <p className="text-sm text-gray-700">Expired Single Entry Visa</p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-4 h-4 mt-1" />
              <p className="text-sm text-gray-700">Overstayed e-Visa</p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-4 h-4 mt-1" />
              <p className="text-sm text-gray-700">Changing Visa Purpose</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WRV;
