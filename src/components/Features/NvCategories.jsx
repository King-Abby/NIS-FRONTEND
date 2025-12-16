import React from "react";
import embassyIcon from "../assets/embassy.png";
import evisaIcon from "../assets/evisa.png";
import trvIcon from "../assets/trv.png";
import prvIcon from "../assets/prv.png";

function NvCategories() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-green-50">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
        Nigeria Visa Categories
      </h2>

      <p className="text-center text-gray-600 mt-3 max-w-3xl mx-auto text-sm md:text-base">
        Discover the visa type that fits your journey—whether it’s a short
        visit, temporary stay, or a permanent move. Explore your options below.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <img
            src={embassyIcon}
            alt="Short Term Visa Embassy"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-900">
            Short Term Visa (Embassy)
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            For travelers planning to stay beyond 90 days or requiring special
            clearance. Obtained only through Nigerian embassies or consulates.
          </p>
          <p className="text-sm text-gray-500 mt-3">Validity: 90+ days</p>
          <button className="mt-5 bg-green-600 text-white text-sm px-6 py-2 rounded-md">
            Apply
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <img
            src={evisaIcon}
            alt="Short Term Visa eVisa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-900">
            Short Term Visa (e-Visa)
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Apply online for visit, tourism, business events, and humanitarian
            purposes. Quick approval and no in-person visit needed.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Validity: Up to 90 days (Non-extendable)
          </p>
          <button className="mt-5 bg-green-600 text-white text-sm px-6 py-2 rounded-md">
            Apply
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <img
            src={trvIcon}
            alt="Temporary Resident Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-900">
            Temporary Resident Visa (TRV)
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Ideal for individuals working, studying, or staying in Nigeria for
            extended but non-permanent durations.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Validity: Typically 6–24 months
          </p>
          <button className="mt-5 bg-green-600 text-white text-sm px-6 py-2 rounded-md">
            Apply
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <img
            src={prvIcon}
            alt="Permanent Resident Visa"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h3 className="font-semibold text-gray-900">
            Permanent Resident Visa (PRV)
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            For individuals with long-term ties to Nigeria—family reunification,
            retirement, or permanent employment.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Validity: Indefinite stay
          </p>
          <button className="mt-5 bg-green-600 text-white text-sm px-6 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </section>
  );
}

export default NvCategories;
