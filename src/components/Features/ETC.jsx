import React from 'react'

function ETC() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        ECOWAS TRAVEL CERTIFICATE
      </h2>

      {/* List */}
      <div className="max-w-4xl mx-auto space-y-4">
        
        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">Eligibility</span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">Validity</span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Purpose of Travel Certificate
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Issuing Authority
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Requirements for Issuance of ECOWAS travel Certificate
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Replacements/Amendments
          </span>
          <span>⌄</span>
        </div>

      </div>
    </section>
  )
}

export default ETC