import React from "react";

function Innovation() {
  return (
    <section className="w-full bg-[#004d25] py-20 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-snug">
        Empowering Progress Through Innovation & Service
      </h2>

      <p className="text-center text-green-100 mt-5 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
        From regional integration to digital transformation, the NIS has
        continuously evolved to serve Nigeria and the world with increased
        speed, security, and transparency
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Regional Alignments
          </h3>
          <p className="text-gray-600 text-sm">
            Introduction of ECWAS and African Affairs Division
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Border Patrol Management
          </h3>
          <p className="text-gray-600 text-sm">
            Aliens control border patrol management
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">
            Issuance of Passports
          </h3>
          <p className="text-gray-600 text-sm">
            Issuance of all Nigerian documents since 1998
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">MRP Launch</h3>
          <p className="text-gray-600 text-sm">
            Introducing the machine readable in June 1998
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">CERPA Rollouts</h3>
          <p className="text-gray-600 text-sm">
            Rolling out the Combined Expirate Residence Permit and Aliens card
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-2">Online Payments</h3>
          <p className="text-gray-600 text-sm">
            Adopting revenue collection for online payments
          </p>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
