import React from "react";
import manPass from "../../assets/desktop/manPass.png";

function Legal() {
  return (
    <div className="w-full bg-[#E8FFF5] p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      {/* RIGHT IMAGE SECTION (mobile first order) */}
      <div className="md:w-1/2 w-full flex justify-center order-1 md:order-2">
        <img
          src={manPass}
          alt="Passport documents"
          className="w-[300px] md:w-[500px] rounded-xl"
        />
      </div>

      {/* LEFT TEXT SECTION */}
      <div className="md:w-1/3 w-full  md:order-1 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          Legal Framework
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
          On May 25, 2015, the National Assembly passed a new Immigration Act.
          This legislation repealed the 1963 Act and introduced an additional
          Directorate—Migration Directorate—further reinforcing the NIS's legal
          and structural foundations.
        </p>
      </div>
    </div>
  );
}

export default Legal;
