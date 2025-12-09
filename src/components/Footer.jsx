import React from "react";
import imgNis from "../assets/logo/image 7.png";
import imgFb from "../assets/icons/facebook.png";
import imgIn from "../assets/icons/instagram.png";
import imgTwi from "../assets/icons/Icon.png";
import imgLik from "../assets/icons/Linkedin.png";

function Footer() {
  return (
   <footer className="bg-[#004d25] text-white py-8 px-4 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* ========================== TOP GRID ========================== */}
    <div
      className="
        grid grid-cols-1 gap-10
        md:grid-cols-4 lg:grid-cols-5 
        border-b border-green-700 pb-10 mb-8
      "
    >
      {/* ========================== LOGO + CONTACT ========================== */}
      <div className="col-span-1 lg:col-span-2 flex flex-col space-y-4">

        {/* Logo */}
        <div className="flex items-start mb-2">
          <div className="w-50 h-16 mr-3">
            <img
              src={imgNis}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.899a2 2 0 01-2.828 0L6.343 16.657A8 8 0 1117.657 16.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-sm leading-5">
            Umar Musa Yar Adua Express Way,<br />
            Airport Road, Sauka, Abuja, FCT, Nigeria
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p className="text-sm">+234-912-1900-655</p>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-3">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Nisservicom@nigeriaimmigration.gov.ng</p>
        </div>
      </div>

      {/* ========================== QUICK LINKS ========================== */}
      <div className="col-span-1">
        <h3 className="text-lg font-semibold mb-4">Quick links</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline hover:text-green-300">Home</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">About</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">Service</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">Contact Us</a></li>
        </ul>
      </div>

      {/* ========================== HELP ========================== */}
      <div className="col-span-1">
        <h3 className="text-lg font-semibold mb-4">Help</h3>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:underline hover:text-green-300">Faqs</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">Terms & Condition</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">Privacy Policies</a></li>
          <li><a href="#" className="hover:underline hover:text-green-300">How It Works</a></li>
        </ul>
      </div>

      {/* ========================== SOCIALS ========================== */}
      <div className="col-span-1 flex flex-col items-start">

        <h3 className="text-lg font-semibold mb-4">Socials</h3>

        {/* MOBILE → row*/}
        <div
          className="
            flex 
            flex-row space-x-4   /* MOBILE STYLE */
            md:flex-col md:space-x-0 md:space-y-3  /* DESKTOP STYLE */
          "
        >
          <a href="#" className="w-6 h-6 hover:opacity-75">
            <img src={imgFb} alt="Facebook" className="w-full h-full object-contain"/>
          </a>

          <a href="#" className="w-6 h-6 hover:opacity-75">
            <img src={imgIn} alt="Instagram" className="w-full h-full object-contain"/>
          </a>

          <a href="#" className="w-6 h-6 hover:opacity-75">
            <img src={imgTwi} alt="Twitter" className="w-full h-full object-contain"/>
          </a>

          <a href="#" className="w-6 h-6 hover:opacity-75">
            <img src={imgLik} alt="LinkedIn" className="w-full h-full object-contain"/>
          </a>
        </div>
      </div>
    </div>

    {/* ========================== COPYRIGHT ========================== */}
    <div className="text-center text-xs opacity-80">
      <p>© Nigeria Immigration Service 2024 All Rights Reserved</p>
    </div>

  </div>
</footer>
  );
}

export default Footer;
