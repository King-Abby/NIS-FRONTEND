import React from "react";
import transparencyIcon from "../../assets/icons/Layer_1.png";
import trustedIcon from "../../assets/icons/Group 7852.png";
import securityIcon from "../../assets/icons/Group 8.png";
import innovationIcon from "../../assets/icons/Group 7859.png";

function Values() {
  return (
    <section className="w-full bg-[#EAFBF3] py-20 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Our Core Values
        </h2>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
        {/* Transparency */}
        <div>
          <img
            src={transparencyIcon}
            alt="Transparency"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We operate with honesty, fairness, and uphold the law in every
            process.
          </p>
        </div>

        {/* Trusted Service */}
        <div>
          <img
            src={trustedIcon}
            alt="Trusted Service"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="font-semibold text-gray-900 mb-2">Trusted Service</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We are committed to providing fast, transparent, and respectful
            service to all.
          </p>
        </div>

        {/* Security */}
        <div>
          <img
            src={securityIcon}
            alt="Security"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We safeguard national interests by protecting borders.
          </p>
        </div>

        {/* Innovation */}
        <div>
          <img
            src={innovationIcon}
            alt="Innovation"
            className="w-12 h-12 mx-auto mb-4"
          />
          <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            We embrace technology and modern practices to improve immigration
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Values;
