import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import imgNis from "../assets/logo/image 7.png";
import imgOff from "../assets/desktop/IMMIGRTION 1.png";
import iconEmail from "../assets/icons/sms (1).png";
import iconLock from "../assets/icons/lock.png";
import googleLogo from "../assets/icons/devicon_google.png";

function Signin() {
  const navigate = useNavigate();

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("https://nis-backend-isgh.onrender.com/api/auth/login", {
        email,
        password,
      });

      // If login is successful → go to home
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img
          src={imgOff}
          alt="Immigration officer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16  flex flex-col justify-center">
        {/* HEADER */}
        <div className="mb-8 flex flex-col items-center md:items-start">
          <img src={imgNis} alt="NIS Logo" className="w-50 h-16 mb-6" />

          <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Nigeria Immigration Portal
          </h1>

          <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
            Sign in securely to access passport, visa and permit services.
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center md:text-left">
            {error}
          </p>
        )}

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10"
              required
            />
            <img
              src={iconEmail}
              alt="Email Icon"
              className="absolute top-3 left-3 w-5 h-5"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#00a840] focus:border-[#00a840] pl-10"
              required
            />
            <img
              src={iconLock}
              alt="Lock Icon"
              className="absolute top-3 left-3 w-5 h-5"
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-[#00a840] font-medium hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00a840] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* GOOGLE */}
        <button
          type="button"
          className="w-full bg-white border border-gray-300 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-50"
        >
          <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-3" />
          Sign in with Google
        </button>

        {/* SIGNUP LINK */}
        <div className="text-sm text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#00a840] font-semibold">
            Sign Up
          </Link>
        </div>

        {/* FOOTER TEXT */}
        <div className="text-xs text-gray-400 text-center mt-6">
          This is a secured government portal, unauthorized access is prohibited
        </div>
      </div>
    </div>
  );
}

export default Signin;
