import React from "react";
import overstayImg from "../../assets/desktop/image 253.png";

function Amnesty() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 flex justify-center">
      <div className="relative w-[90%] max-w-6xl">
        {/* MOBILE TEXT */}
        <div
          className="bg-[#EAF7F0] rounded-2xl p-6 text-center mb-8 
                        lg:absolute lg:top-1/2 lg:right-0 lg:-translate-y-1/2 
                        lg:w-[45%] lg:p-10 lg:mb-0 lg:text-left lg:shadow-md"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">
            Overstay Amnesty: <br className="lg:hidden" />
            Regularize Your Status Now
          </h3>

          <p className="text-gray-700 text-sm leading-relaxed">
            If your Nigerian visa or residence permit has expired, you may
            qualify for a penalty free regularization before the August 1st,
            2025 deadline. We encourage all non-citizens to ensure their
            immigration documents are valid and up to date to avoid penalties
            and ensure continued legal residence in Nigeria.
          </p>
        </div>

        {/* IMAGE CARD */}
        <div
          className="w-full h-[260px] rounded-2xl overflow-hidden
                        lg:w-[65%] lg:h-[420px]"
        >
          <img
            src={overstayImg}
            alt="Nigeria Immigration Service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Amnesty;
