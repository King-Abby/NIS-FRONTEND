import React from 'react'

function Deadline() {
  return (
<section className="w-full bg-green-100 py-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 mb-6">
          Track Your Regularization Deline
        </h2>

        {/* Timer */}
        <div className="w-50 flex justify-center items-center">
          
          {/* Days */}
          <div className="w-20 text-center">
            <p className="text-4xl font-bold text-gray-900 leading-none">
              42
            </p> 
            <p className="text-xs text-gray-600 mt-1">Days</p>
          </div>

          <div className="h-8 w-px bg-gray-300" />

          {/* Hours */}
          <div className="w-20 text-center">
            <p className="text-4xl font-bold text-gray-900 leading-none">
              10
            </p>
            <p className="text-xs text-gray-600 mt-1">Hours</p>
          </div>

          <div className="h-8 w-px bg-gray-300" />

          {/* Minutes */}
          <div className="w-20 text-center">
            <p className="text-4xl font-bold text-gray-900 leading-none">
              13
            </p>
            <p className="text-xs text-gray-600 mt-1">Mins</p>
          </div>

          <div className="h-8 w-px bg-gray-300" />

          {/* Seconds */}
          <div className="w-20 text-center">
            <p className="text-4xl font-bold text-gray-900 leading-none">
              20
            </p>
            <p className="text-xs text-gray-600 mt-1">Secs</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Deadline