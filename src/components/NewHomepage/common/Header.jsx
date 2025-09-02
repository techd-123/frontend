import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // track open dropdown

  // Toggle dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* by aswin */}
        {/* by vishnu */}

        <div className="text-2xl font-bold font-serif">
          <img src="/images/logo.svg" alt="" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium gap-4">
          <li
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          {/* Events Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-purple-600">
              <span>Events</span>
              <FiChevronDown />
            </div>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-44">
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Weddings
              </li>
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Birthdays
              </li>
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Corporate
              </li>
            </ul>
          </li>
          {/* Vendors Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-purple-600">
              <span>Vendors</span>
              <FiChevronDown />
            </div>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-44">
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Caterers
              </li>
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Decorators
              </li>
              <li
                className="px-4 py-2 hover:bg-purple-100"
                onClick={() => navigate("/filter")}
              >
                Photographers
              </li>
            </ul>
          </li>
          <li
            className="hover:text-purple-600 cursor-pointer"
            onClick={() => navigate("/whyplan")}
          >
            Services
          </li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>
        </ul>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 gap-5">
          <button className="border border-purple-500 text-purple-600 px-4 py-1 rounded-md hover:bg-purple-50 transition">
            Login
          </button>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 text-sm font-medium"
          >
            Are you a vendor ?
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium text-left ">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>

          {/* Events (Mobile Dropdown) */}
          <li>
            <button
              onClick={() => toggleDropdown("events")}
              className="flex items-center justify-between w-full hover:text-purple-600"
            >
              <span>Events</span>
              <FiChevronDown
                className={`transform transition-transform ${
                  openDropdown === "events" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "events" && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                <li className="hover:text-purple-600">Weddings</li>
                <li className="hover:text-purple-600">Birthdays</li>
                <li className="hover:text-purple-600">Corporate</li>
              </ul>
            )}
          </li>

          {/* Vendors (Mobile Dropdown) */}
          <li>
            <button
              onClick={() => toggleDropdown("vendors")}
              className="flex items-center justify-between w-full hover:text-purple-600"
            >
              <span>Vendors</span>
              <FiChevronDown
                className={`transform transition-transform ${
                  openDropdown === "vendors" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "vendors" && (
              <ul className="mt-2 ml-4 space-y-2 text-sm">
                <li className="hover:text-purple-600">Caterers</li>
                <li className="hover:text-purple-600">Decorators</li>
                <li className="hover:text-purple-600">Photographers</li>
              </ul>
            )}
          </li>

          <li className="hover:text-purple-600 cursor-pointer">Services</li>
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact</li>

          {/* Buttons */}
          <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50 transition">
            Login
          </button>
          <a
            href="#"
            className="text-purple-500 hover:text-purple-700 text-sm font-medium"
          >
            Are you a vendor ?
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
