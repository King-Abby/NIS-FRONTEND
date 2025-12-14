import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please input all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password mismatch. Please retry.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      console.log("Signup successful");
      // you can redirect here later

    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2 relative">
        <img src={imgOff} alt="Immigration officer" className="w-full h-full object-cover" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center md:items-start">
          <img src={imgNis} alt="NIS Logo" className="w-50 h-16 mb-6" />

          <h1 className="text-2xl font-bold text-gray-800">
            Create Your NIS Account
          </h1>

          <p className="text-gray-600 text-sm mt-2 text-center md:text-left">
            Join thousands of users accessing Nigeria's immigration services digitally
          </p>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
            {error}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:ring-[#00a840] focus:border-[#00a840]"
            />
            <img src={iconUser} alt="" className="absolute top-3 left-3 w-5 h-5" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:ring-[#00a840] focus:border-[#00a840]"
            />
            <img src={iconEmail} alt="" className="absolute top-3 left-3 w-5 h-5" />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md pl-10 focus:ring-[#00a840] focus:border-[#00a840]"
            />
            <img src={iconLock} alt="" className="absolute top-3 left-3 w-5 h-5" />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md pl-10 pr-10 focus:ring-[#00a840] focus:border-[#00a840]"
            />
            <img src={iconLock} alt="" className="absolute top-3 left-3 w-5 h-5" />
            <img src={iconEye} alt="" className="absolute top-3 right-3 w-5 h-5 cursor-pointer" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#00a840] text-white py-3 rounded-md font-semibold hover:bg-green-700 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google */}
        <button className="w-full border border-gray-300 py-3 rounded-md font-semibold flex items-center justify-center hover:bg-gray-50">
          <img src={googleLogo} alt="" className="w-5 h-5 mr-3" />
          Sign up with Google
        </button>

        {/* Login */}
        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00a840] font-semibold hover:underline">
            Log in
          </Link>
        </p>

        <p className="text-xs text-gray-400 text-center mt-6">
          This is a secured government portal, unauthorized access is prohibited
        </p>
      </div>
    </div>
  );
}

export default Signup;
