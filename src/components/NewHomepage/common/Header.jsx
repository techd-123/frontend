import React, { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle
  const [openDropdown, setOpenDropdown] = useState(null); // track open dropdown

  // Toggle dropdowns
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4  relative">
      {/* Logo */}
      <div className="text-2xl font-bold font-serif">
        plan<span className="italic">&</span>here
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>

        {/* Events Dropdown */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center space-x-1 hover:text-purple-600">
            <span>Events</span>
            <FiChevronDown />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
            <li className="px-4 py-2 hover:bg-purple-100">Weddings</li>
            <li className="px-4 py-2 hover:bg-purple-100">Birthdays</li>
            <li className="px-4 py-2 hover:bg-purple-100">Corporate</li>
          </ul>
        </li>

        {/* Vendors Dropdown */}
        <li className="relative group cursor-pointer">
          <div className="flex items-center space-x-1 hover:text-purple-600">
            <span>Vendors</span>
            <FiChevronDown />
          </div>
          <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded-md w-40">
            <li className="px-4 py-2 hover:bg-purple-100">Caterers</li>
            <li className="px-4 py-2 hover:bg-purple-100">Decorators</li>
            <li className="px-4 py-2 hover:bg-purple-100">Photographers</li>
          </ul>
        </li>

        <li className="hover:text-purple-600 cursor-pointer">Services</li>
        <li className="hover:text-purple-600 cursor-pointer">About</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact</li>
      </ul>

      {/* Right Side (Desktop) */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="border border-purple-500 text-purple-600 px-4 py-1 rounded-md hover:bg-purple-50">
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
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
<ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium text-left">
            <li className="hover:text-purple-600 cursor-pointer">Home</li>

            {/* Events (Mobile Dropdown) */}
            <li>
              <button
                onClick={() => toggleDropdown("events")}
                className="flex items-center space-x-2 w-full hover:text-purple-600"
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
                className="flex items-center space-x-2 w-full hover:text-purple-600"
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
            <button className="border border-purple-500 text-purple-600 px-4 py-2 rounded-md hover:bg-purple-50">
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
      )}
    </nav>
  );
};

export default Header;
