import React from "react";
import { FiMapPin, FiUsers } from "react-icons/fi";

const VenueCard = ({ title, location, price, capacity, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>From {price}</span>
          <span>{capacity}</span>
        </div>
        <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          Request Pricing
        </button>
      </div>
    </div>
  );
};

export default VenueCard;
