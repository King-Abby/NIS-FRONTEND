import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import imgNis from "../assets/logo/image 7.png";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full md:h-full flex justify-between items-center px-6 py-4 relative">
        {/* Logo */}
        <div>
          <img src={imgNis} alt="Logo" className="md:w-100 h-100" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium hover:cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/information"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Information center
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-green-500" : "hover:text-green-500"
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        {/* Apply */}
        <Link
          to="/signup"
          className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Apply now
        </Link>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </nav>

      
      {open && (
        <div className="fixed inset-0 bg-green-800 text-white z-50 p-10 flex flex-col gap-10">
          {/* CLOSE BUTTON */}
          <button
            className="text-3xl font-bold self-end"
            onClick={() => setOpen(false)}
          >
            ×
          </button>

          <img src={imgNis} className="w-20" />

          <ul className="flex flex-col gap-8 text-lg font-medium">
            <li className="flex justify-between">
              About us <span>›</span>
            </li>
            <li className="flex justify-between">
              Services <span>›</span>
            </li>
            <li className="flex justify-between">
              Information center <span>›</span>
            </li>
            <li className="flex justify-between">
              Contact us <span>›</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;
