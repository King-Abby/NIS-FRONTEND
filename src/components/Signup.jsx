import React from "react";
import { Link } from "react-router-dom";
import imgOff from "../assets/desktop/IMMIGRTION 1.png";
import imgNis from "../assets/logo/image 7.png";
import iconUser from "../assets/icons/user.png";
import iconEmail from "../assets/icons/sms (1).png";
import iconLock from "../assets/icons/lock.png";
import iconEye from "../assets/icons/eye-slash.png";
import iconLockSecure from "../assets/icons/lock.png";
import googleLogo from "../assets/icons/devicon_google.png";

function Signup() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src={imgOff}
          alt="Immigration officer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* SECURE LOCK ICON */}
      <div className="relative hidden md:block top-4 left-4 text-gray-400 z-10">
        <img src={iconLockSecure} alt="Security Lock" className="w-6 h-6" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center md:items-start">
          <div className="flex items-center mb-6">
            <img src={imgNis} alt="NIS Logo" className="w-50 h-16 mr-2" />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mt-4">
            Create Your NIS Account
          </h1>
          <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
            Join thousands of users accessing Nigeria's immigration services
            digitally
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10"
            />
            <img
              src={iconUser}
              alt="User Icon"
              className="absolute top-3 left-3 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10"
            />
            <img
              src={iconEmail}
              alt="Email Icon"
              className="absolute top-3 left-3 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10 pr-10"
            />
            <img
              src={iconLock}
              alt="Lock Icon"
              className="absolute top-3 left-3 w-5 h-5 text-gray-400"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10 pr-10"
            />
            <img
              src={iconLock}
              alt="Lock Icon"
              className="absolute top-3 left-3 w-5 h-5 text-gray-400"
            />
            <img
              src={iconEye}
              alt="Eye Icon"
              className="absolute top-3 right-3 w-5 h-5 text-gray-400 cursor-pointer"
            />
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-[#00a840] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-150"
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-50 transition duration-150"
        >
          <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-3" />
          Sign up with google
        </button>

        {/* Login Link */}
        <div className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#00a840] font-semibold hover:underline"
          >
            Log in
          </Link>
        </div>

        {/* Security Text */}
        <div className="text-xs text-gray-400 text-center mt-6">
          This is a secured government portal, unauthorized access is prohibited
        </div>
      </div>
    </div>
  );
}

export default Signup;
