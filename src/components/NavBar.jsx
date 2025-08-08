import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Group from "../assets/images/Group.png";
import RegisterPage from "../components/authPage/RegisterPage";
import LoginPage from "../components/authPage/LoginPage";

const NavBar = () => {
  const [showRegisterPage, setShowRegisterPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignUpClick = () => setShowRegisterPage(true);
  const handleLoginClick = () => setShowLoginPage(true);
  const handleCloseRegisterPage = () => setShowRegisterPage(false);
  const handleCloseLoginPage = () => setShowLoginPage(false);

  return (
    <div className="w-full">
      <div className="max-w-[1600px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between flex-wrap mt-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={Group} alt="Logo" className="w-10" />
            <h2 className="text-lg font-bold">PLAN A</h2>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Navigation */}
          <ul
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-6 md:gap-8 font-semibold md:items-center w-full md:w-auto bg-white md:bg-transparent mt-4 md:mt-0 p-4 md:p-0 border-t md:border-none`}
          >
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">Events</li>
            <li className="hover:text-red-500 cursor-pointer">Vendors</li>
            <li className="hover:text-red-500 cursor-pointer">Services</li>
            <li className="hover:text-red-500 cursor-pointer">About Us</li>

            {/* Buttons */}
            <div className="flex gap-3 mt-3 md:mt-0">
              <button
                onClick={handleSignUpClick}
                className="px-5 py-2 rounded-full bg-[#2f1d41] text-white hover:bg-[#241330] transition"
              >
                Sign up
              </button>
              <button
                onClick={handleLoginClick}
                className="px-5 py-2 rounded-full bg-[#ff6b6b] text-white hover:bg-[#e45b5b] transition"
              >
                Login
              </button>
            </div>
          </ul>
        </div>
      </div>

      {/* Modal Components */}
      {showRegisterPage && <RegisterPage onClose={handleCloseRegisterPage} />}
      {showLoginPage && <LoginPage onClose={handleCloseLoginPage} />}
    </div>
  );
};

export default NavBar;
