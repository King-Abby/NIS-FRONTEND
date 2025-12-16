import React from 'react'
import greenPass from "../../assets/desktop/greenPass.png";
import darkPass from "../../assets/desktop/darkPass.png";
import redPass from "../../assets/desktop/redPass.png";

function Passports() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Passport Types
        </h2>

        <p className="text-gray-600 max-w-4xl mx-auto mb-12 text-sm md:text-base">
          There are three kinds of fingerprint enhanced e-Passports that the
          Nigerian Immigration Service gives out. Normal passports (green) for
          Nigerians and comes in 32-page/5-year, 64-page/5-year, and
          64-page/10-year, Official Passports (blue) for Government officials and
          Diplomatic passports.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="relative h-[320px] rounded-2xl overflow-hidden flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${greenPass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-white font-semibold text-xl md:text-2xl px-4">
              Enhanced e-Passports
            </h3>
          </div>

          {/* Card 2 */}
          <div
            className="relative h-[320px] rounded-2xl overflow-hidden flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${darkPass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-white font-semibold text-xl md:text-2xl px-4">
              Official Passports
            </h3>
          </div>

          {/* Card 3 */}
          <div
            className="relative h-[320px] rounded-2xl overflow-hidden flex items-center justify-center text-center"
            style={{
              backgroundImage: `url(${redPass})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-white font-semibold text-xl md:text-2xl px-4">
              Diplomatic Passports
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Passports