import React from "react";
import notEligibleImg from "../../assets/desktop/image 257.png";
import iconImg from "../../assets/icons/Frame 68.png";

function Eligibility() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-2">
          Who Is Not Eligible For Visa Regularization
        </h2>

        <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-12">
          While visa regularization offers a legal pathway to adjust your
          status, not all foreign nationals are eligible.
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left icons list */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-5 h-5 mt-1" />
              <p className="text-sm text-gray-700">
                Foreign Nationals With History of Violation
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-5 h-5 mt-1" />
              <p className="text-sm text-gray-700">
                Persons Involved in Criminal Activities
              </p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-5 h-5 mt-1" />
              <p className="text-sm text-gray-700">Undocumented Entrants</p>
            </div>

            <div className="flex items-start gap-3">
              <img src={iconImg} alt="" className="w-5 h-5 mt-1" />
              <p className="text-sm text-gray-700">
                Overstayers Beyond the Regularization Window
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full h-[280px] rounded-2xl overflow-hidden">
            <img
              src={notEligibleImg}
              alt="Visa Regularization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eligibility;
