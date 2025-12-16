import React from "react";
import freshPassport from "../../assets/desktop/image 8.png";
import renewal from "../../assets/desktop/renewal.png";
import changeOfData from "../../assets/desktop/data.png";

function Apply() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        How To Apply
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {/* Card 1 */}
        <div
          className="h-56 rounded-2xl flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${freshPassport})` }}
        >
          <div className="bg-black/40 w-full h-full rounded-2xl flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">Fresh Passport</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="h-56 rounded-2xl flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${renewal})` }}
        >
          <div className="bg-black/40 w-full h-full rounded-2xl flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">Renewal</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="h-56 rounded-2xl flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${changeOfData})` }}
        >
          <div className="bg-black/40 w-full h-full rounded-2xl flex items-center justify-center">
            <h3 className="text-white text-lg font-semibold">Change of data</h3>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-green-600 hover:bg-green-700 transition text-white px-10 py-3 rounded-md font-medium">
          Click to Apply
        </button>
      </div>
    </section>
  );
}

export default Apply;
