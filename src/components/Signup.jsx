// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import imgOff from "../assets/desktop/IMMIGRTION 1.png";
// import imgNis from "../assets/logo/image 7.png";
// import iconUser from "../assets/icons/user.png";
// import iconEmail from "../assets/icons/sms (1).png";
// import iconLock from "../assets/icons/lock.png";
// import iconEye from "../assets/icons/eye-slash.png";
// // import iconEyeOpen from "../assets/icons/eye.png";
// import googleLogo from "../assets/icons/devicon_google.png";

// function Signup() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     const { name, email, password, confirmPassword } = formData;

//     // Frontend validation
//     if (!name || !email || !password || !confirmPassword) {
//       setError("Please input all fields");
//       return;
//     }

//     if (password.length < 8) {
//       setError("Password must be at least 8 characters");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch(
//         "https://nis-backend-isgh.onrender.com/api/auth/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ name, email, password }),
//         }
//       );

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || "Signup failed");
//         return;
//       }

//       // Success
//       setSuccess("Signup successful! Redirecting...");

//       setTimeout(() => {
//         navigate("/");
//       }, 2000);
//     } catch (err) {
//       setError("Server error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-white">
//       {/* LEFT IMAGE */}
//       <div className="hidden md:block md:w-1/2">
//         <img src={imgOff} alt="" className="w-full h-full object-cover" />
//       </div>

//       {/* RIGHT CONTENT */}
//       <div className="w-full bg-gray-100 md:w-1/2 flex items-center justify-center px-6">
//         <div className="w-full max-w-[420px] h-100">
//           {/* HEADER */}
//           <div className="mb-8 text-center">
//             <img src={imgNis} alt="NIS" className="h-14 mx-auto mb-6 hover:cursor-pointer" />
//             <h1 className="text-xl font-semibold text-gray-900">
//               Create Your NIS Account
//             </h1>
//             <p className="text-sm text-gray-500 mt-2">
//               Join thousands of users accessing Nigeria's immigration services
//               digitally
//             </p>
//           </div>

//           {/* ERROR */}
//           {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

//           {/* FORM */}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* NAME */}
//             <div className="relative">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full h-11 border bg-gray-100 border-gray-300 rounded px-10 text-sm focus:outline-none"
//               />
//               <img src={iconUser} className="w-4 absolute left-3 top-3.5" />
//             </div>

//             {/* EMAIL */}
//             <div className="relative">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full h-11 border border-gray-300  bg-gray-100  rounded px-10 text-sm focus:outline-none"
//               />
//               <img src={iconEmail} className="w-4 absolute left-3 top-3.5" />
//             </div>

//             {/* PASSWORD */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full h-11 border border-gray-300 bg-gray-100 rounded px-10 text-sm focus:outline-none"
//               />
//               <img src={iconLock} className="w-4 absolute left-3 top-3.5" />
//             </div>

//             {/* CONFIRM PASSWORD */}
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full h-11 border border-gray-300  bg-gray-100 rounded px-10 pr-10 text-sm focus:outline-none"
//               />
//               <img src={iconLock} className="w-4 absolute left-3 top-3.5" />
//               <img
//                 src={showPassword ? iconEyeOpen : iconEye}
//                 className="w-4 absolute right-3 top-3.5 cursor-pointer"
//                 onClick={() => setShowPassword(!showPassword)}
//               />
//             </div>

//             {/* CREATE ACCOUNT */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full h-11 bg-green-600 rounded text-white text-sm font-medium"
//             >
//               {loading ? "Creating account..." : "Create account"}
//             </button>

//             {/* OR DIVIDER */}
//             <div className="flex items-center gap-3 my-4">
//               <div className="flex-1 h-px bg-gray-300" />
//               <span className="text-xs text-gray-500">or</span>
//               <div className="flex-1 h-px bg-gray-300" />
//             </div>

//             {/* GOOGLE */}
//             <button
//               type="button"
//               className="w-full h-11 border border-gray-300 rounded text-sm flex items-center justify-center gap-2"
//             >
//               <img src={googleLogo} className="w-4" />
//               Sign up with google
//             </button>
//           </form>

//           {/* LOGIN */}
//           <p className="text-xs text-center text-gray-500 mt-20">
//             Already have an account?{" "}
//             <Link to="/login" className="text-green-600 font-medium">
//               Log in
//             </Link>
//           </p>
//           <p className="w-15 text-xs text-center text-gray-500 mt-4">
//             This is a secured goverment portal, unauthorized access is
//             prohibited
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imgOff from "../assets/desktop/IMMIGRTION 1.png";
import imgNis from "../assets/logo/image 7.png";
import iconUser from "../assets/icons/user.png";
import iconEmail from "../assets/icons/sms (1).png";
import iconLock from "../assets/icons/lock.png";
import iconEye from "../assets/icons/eye-slash.png";
// import iconEyeOpen from "../assets/icons/eye.png";
import googleLogo from "../assets/icons/devicon_google.png";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { name, email, password, confirmPassword } = formData;

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please input all fields");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://nis-backend-isgh.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      // Success
      setSuccess("Signup successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT IMAGE */}
      <div className="hidden md:block md:w-1/2">
        <img src={imgOff} alt="" className="w-full h-full object-cover" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full  md:w-1/2 p-8 md:p-12 lg:p-16 flex  justify-center">
        <div className="w-full max-w-[420px] h-100">
          {/* Header */}
          <div className="mb-8 flex flex-col items-center">
            <img
              src={imgNis}
              alt="NIS Logo"
              className="w-50 h-16 mb-6 hover:cursor-pointer"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              Create Your NIS Account
            </h1>
            <p className="text-gray-600 text-sm mt-2">
              Join thousands of users accessing Nigeria’s immigration services
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded">
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="mb-4 text-sm text-green-600 bg-green-50 p-3 rounded">
              {success}
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
                className="w-full p-3 border bored-gray-200 rounded-md pl-10 bg-gray-100"
              />
              <img
                src={iconUser}
                alt=""
                className="absolute top-3 left-3 w-5"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-md pl-10 bg-gray-100"
              />
              <img
                src={iconEmail}
                alt=""
                className="absolute top-3 left-3 w-5"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-11 bg-gray-100 p-3 border rounded-md pl-10 pr-10"
              />
              <img
                src={iconLock}
                alt=""
                className="absolute top-3 left-3 w-5"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full h-11 bg-gray-100 p-3 border rounded-md pl-10 pr-10"
              />
              <img
                src={iconLock}
                alt=""
                className="absolute top-3 left-3 w-5"
              />
              <img
                src={showPassword ? iconEyeOpen : iconEye}
                alt="toggle password"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 w-5 cursor-pointer"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00a840] text-white py-3 rounded-md font-semibold disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            {/* OR DIVIDER */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-300" />
              <span className="text-xs text-gray-500">or</span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Google (UI only) */}
            <button
              type="button"
              className="w-full h-11 border border-gray-300  gap-2 rounded text-sm font-semibold flex items-center justify-center hover:bg-gray-50 mt-10"
            >
              <img src={googleLogo} alt="" className="w-5 h-5 mr-3" />
              Sign up with Google
            </button>
          </form>

          {/* Login */}
          <p className="text-xs text-center text-gray-500 mt-20">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00a840] font-semibold">
              Log in
            </Link>
          </p>
          <p className="w-15 text-xs text-center text-gray-500 mt-4">
            This is a secured goverment portal, unauthorized access is
            prohibited
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
