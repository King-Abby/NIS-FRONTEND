import React from "react";
import birthIcon from "../../assets/icons/mdi_mother-nurse.png";
import naturalizationIcon from "../../assets/icons/people.png";
import registrationIcon from "../../assets/icons/notebook.png";

function Requirements() {
  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Fresh Passport Application <br /> Requirements
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          First-time Nigerian passport applicants must fill out and pay for the
          e-Passport form at{" "}
          <span className="font-medium">passport.immigration.gov.ng</span>.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6">
            <img
              src={birthIcon}
              alt="Citizenship by Birth"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Citizenship By <br /> Birth
            </h3>
            <p className="text-gray-600 text-sm">
              Citizens by birth must show an NPC birth certificate or a signed
              statement of age along with a Nigerian ID.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6">
            <img
              src={naturalizationIcon}
              alt="Naturalization"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Naturalization
            </h3>
            <p className="text-gray-600 text-sm">
              Citizens who are naturalised must show their Presidential
              Certificate of Naturalisation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 border-2 border-green-400 rounded-xl p-6">
            <img
              src={registrationIcon}
              alt="Registration"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Registration
            </h3>
            <p className="text-gray-600 text-sm">
              Citizens who are registered must show their Certificate of
              Registration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Requirements;
