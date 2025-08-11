import React from "react";
import { FiMapPin, FiUsers } from "react-icons/fi";

const VenueCard = ({ title, location, price, capacity, image }) => {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden bg-white flex flex-col shadow-sm hover:shadow-md transition">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 object-cover"
      />

      {/* Info */}
      <div className="p-4 flex-1">
        {/* Title */}
        <h4 className="text-base sm:text-lg font-semibold mb-1">{title}</h4>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-3">{location}</p>

        {/* Meta */}
        <div className="text-sm flex flex-wrap gap-4 text-gray-800">
          <span className="flex items-center">
            <FiMapPin className="mr-1 text-gray-500" /> From {price}
          </span>
          <span className="flex items-center">
            <FiUsers className="mr-1 text-gray-500" /> {capacity}
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="border-2 border-[#fc5c65] text-[#fc5c65] rounded-full px-5 py-2 mx-4 mb-4 font-semibold hover:bg-[#fc5c65] hover:text-white transition">
        Request Pricing
      </button>
    </div>
  );
};

export default VenueCard;
