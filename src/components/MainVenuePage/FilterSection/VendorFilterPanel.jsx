import React from "react";
import { FaTimes } from "react-icons/fa";

const VendorFilterPanel = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-full w-64 bg-white border-r border-gray-200 p-5
          transform transition-transform duration-300 ease-in-out z-40
          overflow-y-auto
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:relative sm:block
        `}
      >
        {/* Close Button (Mobile only) */}
        <button
          className="absolute top-4 right-4 text-gray-600 sm:hidden"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Vendor Categories */}
        <div className="mb-6 pb-4 border-b border-gray-300">
          <h4 className="text-base font-semibold mb-3">Vendor Categories</h4>
          {[
            "Event Planners",
            "Photography & Videos",
            "Car Rentals",
            "Catering",
            "Jewelry Rentals",
            "DJ",
          ].map((item, i) => (
            <label key={i} className="block mb-2 text-sm text-gray-700">
              <input type="checkbox" className="mr-2 accent-pink-500" />
              {item}
            </label>
          ))}
        </div>

       

       
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default VendorFilterPanel;
