import React from "react";

const FilterPanel = () => {
  return (
    <aside className="w-full sm:w-64 p-5 border-r border-gray-200 overflow-y-auto bg-white">
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
            <input
              type="checkbox"
              className="mr-2 accent-pink-500"
            />
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
            <input
              type="checkbox"
              className="mr-2 accent-pink-500"
            />
            {item}
          </label>
        ))}
      </div>

      {/* Seating Capacity */}
      <div className="mb-8">
        <h4 className="text-base font-semibold mb-3">Seating Capacity</h4>
        {[
          "0-100",
          "100-250",
          "250-500",
          "500-1000",
          "1000 & more",
        ].map((item, i) => (
          <label key={i} className="block mb-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="mr-2 accent-pink-500"
            />
            {item}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default FilterPanel;
