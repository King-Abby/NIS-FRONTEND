import React from "react";
import phoneIcon from "../../assets/icons/call.png";
import emailIcon from "../../assets/icons/sms.png";
import locationIcon from "../../assets/icons/Vector.png";
import clockIcon from "../../assets/icons/clock.png";

function Connect() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl font-semibold text-black mb-4">
              Get in Touch with us
            </h2>

            <p className="text-gray-600 max-w-sm mb-6">
              Feel free to reach out to us with any inquiries, feedback, or
              support you may need.
            </p>

            <div className="w-full h-px bg-gray-300 mb-8"></div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <img src={phoneIcon} alt="" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-black">Phone</p>
                  <p className="text-sm text-gray-600">
                    0700-CALL-NIS (0700-2255-647)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <img src={emailIcon} alt="" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-black">Email</p>
                  <p className="text-sm text-gray-600">
                    Support@immigration.gov.ng
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <img src={locationIcon} alt="" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-black">Address</p>
                  <p className="text-sm text-gray-600 max-w-xs">
                    Umaru Musa Yar'Adua Expressway, Sauka, Abuja.
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <img src={clockIcon} alt="" className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-black">Working Hours</p>
                  <p className="text-sm text-gray-600">
                    Mon-Fri: 8:00 AM - 4:00PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="bg-green-50 rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full h-12 rounded-lg px-4 outline-none border border-transparent focus:border-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-lg px-4 outline-none border border-transparent focus:border-green-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your email"
                  rows="4"
                  className="w-full rounded-lg px-4 py-3 outline-none border border-transparent focus:border-green-500 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-12 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
