import React from "react";
import imgCpac from "../assets/desktop/Frame 1171279510.png"

function Cerpac() {
  return (
<section className="w-full py-16 px-6 md:px-20 bg-green-50">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">


    <img
      src={imgCpac}
      className="w-full max-w-md mx-auto order-2 md:order-1"
    />

    {/* Text */}
    <div className="order-1 md:order-2 text-center md:text-left mx-auto md:mx-0">
      <h3 className="text-2xl font-bold text-black-800">Cerpac</h3>
      <p className="text-gray-700 mt-4 text-sm leading-relaxed">
        Combined Expatriate Residence Permit and Aliens Card (CERPAC) is the
        official document required for foreigners who wish to reside and work in
        Nigeria. It grants legal stay, identification, and permission to live
        within the country.
      </p>
      <button className="mt-6 text-green-700 font-medium underline">
        Read more →
      </button>
    </div>

  </div>
</section>
  );
}

export default Cerpac;
