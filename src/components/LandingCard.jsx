import React from 'react'
import imgPass from "../assets/desktop/Group 2.png"

function LandingCard() {
  return (
<div className="w-full bg-[#E8FFF5] p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

  {/* RIGHT IMAGE SECTION (mobile first order) */}
  <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
    <img
      src={imgPass}
      alt="Passport documents"
      className="w-[300px] md:w-[380px] rounded-xl shadow-md border-b-[12px] border-green-600"
    />
  </div>

  {/* LEFT TEXT SECTION */}
  <div className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
      Landing and Exit Cards
    </h2>

    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
      Landing and Exit Cards are mandatory travel documents required of all
      passengers entering or departing Nigeria. These cards must be completed
      upon arrival at or departure from Nigerian borders and serve as a
      critical instrument for immigration control and border management.
      commences May 1, 2025
    </p>

    <button className="text-green-700 font-medium flex items-center justify-center gap-2 hover:underline mx-auto">
      Read more
      <span className="text-lg">→</span>
    </button>
  </div>

</div>
  )
}

export default LandingCard