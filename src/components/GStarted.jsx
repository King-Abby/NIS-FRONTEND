import React from "react";
import iconStart from "../assets/icons/boxarrow.png";
import iconUpload from "../assets/icons/cloud.png";
import iconPay from "../assets/icons/money.png";
import iconTrack from "../assets/icons/time.png";

function GStarted() {
  return (
<div className="bg-gray-50 py-16 px-4 sm:px-8 md:px-16 text-gray-800">
  <div className="max-w-7xl mx-auto text-center">

    {/* --- Top Text Section --- */}
    <div className="mb-12">
      <h2 className="text-4xl font-bold mb-4">Get Started</h2>
      <div className="max-w-3xl mx-auto text-lg text-gray-600">
        Whether you're applying for a passport, visa, or travel certificate, getting started is simple. Just follow these clear steps to complete your process quickly, securely, and with confidence.
      </div>
    </div>

    {/* --- 4-Step Process Section --- */}
    <div className="flex flex-col md:flex-row justify-between md:items-start pt-8 pb-12">

      {/* --- Step 1 --- */}
      <div className="flex flex-col items-center md:w-1/4 z-10 px-2 mb-8 md:mb-0">
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00a840] flex items-center justify-center shadow-lg">
            <img src={iconStart} alt="Start application icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">Start your application</div>
        <div className="text-sm text-gray-600">Create an account or log in to begin your process.</div>
      </div>

      {/* --- Separator 1--- */}
      <div className="hidden md:flex flex-col justify-center w-[calc(1/3*100%-80px)] mt-10">
        <div className="h-1 bg-green-500 w-full"></div> 
      </div>

      {/* --- Step 2 --- */}
      <div className="flex flex-col items-center md:w-1/4 z-10 px-2 mb-8 md:mb-0">
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00a840] flex items-center justify-center shadow-lg">
            <img src={iconUpload} alt="Upload document icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">Upload required document</div>
        <div className="text-sm text-gray-600">Scan and upload necessary files like ID passport photos.</div>
      </div>

      {/* --- Separator 2 --- */}
      <div className="hidden md:flex flex-col justify-center w-[calc(1/3*100%-80px)] mt-10">
        <div className="h-1 bg-green-500 w-full"></div> 
      </div>

      {/* --- Step 3 --- */}
      <div className="flex flex-col items-center md:w-1/4 z-10 px-2 mb-8 md:mb-0">
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00a840] flex items-center justify-center shadow-lg">
            <img src={iconPay} alt="Make payment icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">Make secure payment</div>
        <div className="text-sm text-gray-600">Pay using approved payment channels and receive confirmation.</div>
      </div>

      {/* --- Separator 3 --- */}
      <div className="hidden md:flex flex-col justify-center w-[calc(1/3*100%-80px)] mt-10">
        <div className="h-1 bg-green-500 w-full"></div> 
      </div>

      {/* --- Step 4 --- */}
      <div className="flex flex-col items-center md:w-1/4 z-10 px-2">
        <div className="relative mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00a840] flex items-center justify-center shadow-lg">
            <img src={iconTrack} alt="Track progress icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-2">Track progress</div>
        <div className="text-sm text-gray-600">Use your tracking ID to monitor updates and get notified.</div>
      </div>

    </div>

    {/* --- Apply Now Button --- */}
    <div className="mt-12">
      <a
        href="#"
        className="inline-block px-10 py-3 text-base font-medium border border-[#00a840] text-[#00a840] rounded-md hover:bg-[#00a840] hover:text-white transition duration-300"
      >
        Apply Now
      </a>
    </div>

  </div>
</div>
  );
}

export default GStarted;
