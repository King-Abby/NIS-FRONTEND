import React from "react";
import company from "../../assets/desktop/company.png";

function Company() {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-green-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src={company}
          className="w-full max-w-md mx-auto order-2 md:order-1"
        />

        <div className="order-1 md:order-2 text-center md:text-left mx-auto md:mx-11">
          <h3 className="text-2xl font-bold text-black-800">
            Organizational Structure
          </h3>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            In order to align the Nigeria Immigration Service with modern
            operational imperatives and the provisions of the Immigration
            Regulations 2017, while also meeting the growing challenges of
            cross-border migration violations, enhanced entry control, migrant
            monitoring and transnational crime. the Service has undergone a
            comprehensive reorganization. Its new structure now comprises ten
            (10) Directorates and seven (7) specialized Units
          </p>
        </div>
      </div>
    </section>
  );
}

export default Company;
