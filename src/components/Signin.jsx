import React from "react";
import { Link } from "react-router-dom";
import imgNis from "../assets/logo/image 7.png";
import imgOff from "../assets/desktop/IMMIGRTION 1.png";
import iconEmail from "../assets/icons/sms (1).png";
import iconLock from "../assets/icons/lock.png";
import googleLogo from "../assets/icons/devicon_google.png";

function Signin() {
  return (
<div className="w-full min-h-screen flex flex-col md:flex-row bg-white">

  {/* LEFT SIDE IMAGE */}
  <div className="hidden md:block md:w-1/2">
    <img
      src={imgOff}
      alt="Immigration officer"
      className="w-full h-full object-cover"
    />
  </div>

  {/* RIGHT SIDE CONTENT */}
  <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">

    {/* Logo and Title Header */}
    <div className="mb-8 flex flex-col items-center md:items-start">
      <div className="flex items-center mb-6">
        <img src={imgNis} alt="NIS Logo" className="w-50 h-16 mr-2" />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mt-4">
        Welcome to Nigeria Immigration Portal
      </h1>

      <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
        Sign in securely to access passport, visa and permit services.
      </p>
    </div>

    {/* --- Form Section --- */}
    <form className="space-y-4">

      {/* Email Input */}
      <div className="relative">
        <input
          type="email"
          placeholder="Email Address"
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

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm mt-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 text-[#00a840] border-gray-300 rounded focus:ring-[#00a840]"
          />
          <span className="text-gray-700">Remember me</span>
        </label>

        <button
          type="button"
          className="text-[#00a840] font-medium hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* Log In Button */}
      <button
        type="submit"
        className="w-full bg-[#00a840] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition duration-150"
      >
        Sign In
      </button>
    </form>

    {/* OR Divider */}
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
      Sign in with google
    </button>

    {/* Signup Link */}
    <div className="text-sm text-center mt-6">
      Don't have an account?{" "}
      <Link to="/signup" className="text-[#00a840] font-semibold hover:underline">
        Sign Up
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

export default Signin;
