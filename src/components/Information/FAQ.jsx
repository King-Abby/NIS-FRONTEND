import React from "react";

function FAQ() {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-10">
        FREQUENTLY ASKED QUESTIONS
      </h2>

      {/* List */}
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            How do i check the status of my visa application?
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Who qualifies for the visa amnesty programme?
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Where can i apply for a cerpac card?
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            What if i overstayed my visa due to illness or emergency?
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Where do i report suspicious visa agents?
          </span>
          <span>⌄</span>
        </div>

        <div className="border border-gray-400 rounded-lg px-5 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-800">
            Is payment online secure?
          </span>
          <span>⌄</span>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
