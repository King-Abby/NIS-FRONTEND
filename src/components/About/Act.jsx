import React from "react";
import entryIcon from "../../assets/icons/personalcard.png";
import travelIcon from "../../assets/icons/cards.png";
import residenceIcon from "../../assets/icons/home.png";
import borderIcon from "../../assets/icons/signpost.png";

function Act() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          The Act Establishing NIS
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Established in 1963, the Nigeria Immigration Service oversees
          migration, travel documentation, and immigration law enforcement
          nationwide
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-6">
          <img src={entryIcon} alt="" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Control Of Entry And Exist
            </h4>
            <p className="text-sm text-gray-600">
              The control of persons entering or leaving Nigeria.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-6">
          <img src={travelIcon} alt="" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Issuance Of Travel Documents
            </h4>
            <p className="text-sm text-gray-600">
              The issuance of travel document to bona fide Nigeria in and
              outside Nigeria
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-6">
          <img src={residenceIcon} alt="" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Residence Permit
            </h4>
            <p className="text-sm text-gray-600">
              The issuance of resident permits to foreigner in Nigeria
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-4 border border-gray-200 rounded-xl p-6">
          <img src={borderIcon} alt="" className="w-10 h-10" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">
              Boarder Surveillance and Patrol
            </h4>
            <p className="text-sm text-gray-600">
              Monitoring and securing nigerian's boarder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Act;
