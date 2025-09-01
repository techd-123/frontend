import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const FilterPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:relative">
      {/* Mobile Toggle Button (inside flow now) */}
      <div className="sm:hidden p-4">
        <button
          className="bg-pink-500 text-white p-2 rounded-md shadow-md"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
    fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-5 
    transform transition-transform duration-300 ease-in-out z-40
    overflow-y-auto   /* 🔥 allows scrolling */
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    sm:relative sm:translate-x-0 sm:w-64 sm:block
  `}
      >
        {/* Close Button (Mobile only) */}
        <button
          className="sm:hidden absolute top-4 right-4 text-gray-600"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={20} />
        </button>

        {/* Wedding Venues */}
        <div className="mb-8">
          <h4 className="text-base font-semibold mb-3">Wedding Venues</h4>
          {[
            "Banquet Halls",
            "Hotels",
            "Marriage Garden",
            "Wedding Resorts",
            "Farmhouses",
          ].map((item, i) => (
            <label key={i} className="block mb-2 text-sm text-gray-700">
              <input type="checkbox" className="mr-2 accent-pink-500" />
              {item}
            </label>
          ))}
        </div>

        {/* Venue Budget */}
        <div className="mb-8">
          <h4 className="text-base font-semibold mb-3">Venue Budget</h4>
          {[
            "₹0 - ₹25,000",
            "₹25,000 - ₹75,000",
            "₹75,000 - ₹1,00,000",
            "Above ₹1,00,000",
          ].map((item, i) => (
            <label key={i} className="block mb-2 text-sm text-gray-700">
              <input type="checkbox" className="mr-2 accent-pink-500" />
              {item}
            </label>
          ))}
        </div>

        {/* Seating Capacity */}
        <div className="mb-8">
          <h4 className="text-base font-semibold mb-3">Seating Capacity</h4>
          {["0-100", "100-250", "250-500", "500-1000", "1000 & more"].map(
            (item, i) => (
              <label key={i} className="block mb-2 text-sm text-gray-700">
                <input type="checkbox" className="mr-2 accent-pink-500" />
                {item}
              </label>
            )
          )}
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FilterPanel;
