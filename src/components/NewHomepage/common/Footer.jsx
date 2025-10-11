import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#25113D] text-white py-12 px-6 md:px-16">
      <div className="    max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start pb-8">
        {/* Left Section */}
        <div className="flex flex-col gap-5">
          <img
            src="/images/logo.svg"
            alt="Plan IT Here Logo"
            className="w-24 h-auto"
          />
          <p className="text-sm text-gray-300 leading-snug max-w-xs">
            Plan IT Here is an organization that helps you plan and manage
            events seamlessly with trusted vendors and smart tools.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-blue-500 hover:bg-pink-600 flex items-center justify-center transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-red-500 hover:bg-pink-600 flex items-center justify-center transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-black hover:bg-pink-600 flex items-center justify-center transition"
            >
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>

        {/* Middle Section - Company */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Vendor Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section - Support */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center text-sm text-gray-400 pt-5">
        © {new Date().getFullYear()} Plan IT Here. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
