import React from "react";
import hrIcon from "../../assets/icons/user-square.png";
import financeIcon from "../../assets/icons/wallet-money.png";
import planningIcon from "../../assets/icons/chart-square.png";

function Explore() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900">
        Explore Our Directorates
      </h2>

      <p className="text-center text-gray-500 mt-4 max-w-3xl mx-auto text-sm md:text-base">
        Discover key departments driving the mission of the Nigeria Immigration
        Service. Learn what each directorate does and how they contribute to
        national security and service delivery.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
        {/* Card 1 */}
        <div className="border rounded-2xl p-8 text-center bg-white shadow-sm">
          <img
            src={hrIcon}
            alt="Human Resources"
            className="w-12 h-12 mx-auto mb-5"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Human Resources
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Manages recruitment, appointments, promotions, and staff development
            to ensure a well-equipped workforce.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl p-8 text-center bg-white shadow-sm">
          <img
            src={financeIcon}
            alt="Finance & Accounts"
            className="w-12 h-12 mx-auto mb-5"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Finance & Accounts
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Oversees budgeting, financial planning, and revenue tracking to
            support operational goals.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl p-8 text-center bg-white shadow-sm">
          <img
            src={planningIcon}
            alt="Planning & Research"
            className="w-12 h-12 mx-auto mb-5"
          />
          <h3 className="text-lg font-semibold text-gray-900">
            Planning & Research
          </h3>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            Conducts strategic planning, research, and statistical analysis to
            drive informed policy decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
