import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6"; // or use other Fa icons

const Footer = () => {
  return (
    <footer className="bg-[#25113D] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
              PItH
            </div>
            <span className="text-lg font-semibold">Plan IT Here</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-snug">
            Plan IT Here <br />
            organization that leverages.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-pink-400 flex items-center justify-center text-white">
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Vendor login</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
