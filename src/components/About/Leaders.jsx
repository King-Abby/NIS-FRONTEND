import React from "react";
import currentLeader from "../../assets/desktop/currentLeader.png";
import leader1 from "../../assets/desktop/leader1.png";
import leader2 from "../../assets/desktop/leader2.png";
import leader3 from "../../assets/desktop/leader3.png";
import leader4 from "../../assets/desktop/leader4.png";

function Leaders() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        Current and Past Leaders
      </h2>

      {/* Current Leader */}
      <div className="flex flex-col items-center text-center mb-16">
        <img
          src={currentLeader}
          alt="Current Leader"
          className="w-56 h-72 object-cover rounded-2xl mb-6"
        />

        <h3 className="font-semibold text-gray-900">
          Kemi Nanna Nandap Pcc, Mmis, Fsm
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Comptroller General, Nigeria Immigration Sercive
        </p>
      </div>

      {/* Past Leaders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="text-center">
          <img
            src={leader1}
            alt="Caroline Wura Ola Adepoju"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h4 className="text-sm font-semibold">Caroline Wura Ola Adepoju</h4>
          <p className="text-xs text-gray-500 mt-1">
            CGIS (2023 to February 2024)
          </p>
        </div>

        <div className="text-center">
          <img
            src={leader2}
            alt="Isah Jere Idris"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h4 className="text-sm font-semibold">Isah Jere Idris MFR</h4>
          <p className="text-xs text-gray-500 mt-1">Ag. CGIS (2022-2023)</p>
        </div>

        <div className="text-center">
          <img
            src={leader3}
            alt="Muhammed Babandede"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h4 className="text-sm font-semibold">Muhammed Babandede, MFR</h4>
          <p className="text-xs text-gray-500 mt-1">CGIS (2016-2021)</p>
        </div>

        <div className="text-center">
          <img
            src={leader4}
            alt="Martin Kure Abeshi"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h4 className="text-sm font-semibold">Martin Kure Abeshi</h4>
          <p className="text-xs text-gray-500 mt-1">CGIS (2015-2016)</p>
        </div>
      </div>
    </section>
  );
}

export default Leaders;
