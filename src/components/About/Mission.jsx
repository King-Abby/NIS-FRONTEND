import React from "react";
import missionImg from "../../assets/desktop/teamWork.png";
import visionImg from "../../assets/desktop/fingers.png";

function Mission() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Our Mission and Vision
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Guided by purpose and driven by service, our mission and vision define
          our commitment to secure, efficient, and people-focused immigration
          management
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Mission */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-56 object-cover rounded-xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Mission
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our mission is to deliver secure, transparent, and efficient
              immigration services through innovation, professionalism, and a
              commitment to national growth and global best practices.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-56 object-cover rounded-xl"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Vision</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our vision is to be a trusted, technology-driven immigration
              system that ensures secure borders, efficient migration, and
              excellent service to support national development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
