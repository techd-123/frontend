import React from "react";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext"; // 👈 import cart hook

const VenueCard = ({ title, location, price, capacity, image }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleLikeClick = () => {
    const item = { title, location, price, capacity, image };
    addToCart(item);
    navigate("/cart"); // 👈 redirect to cart page
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      {/* ❤️ Like Button */}
      <button
        onClick={handleLikeClick}
        className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
      >
        <FaHeart className="text-xl text-gray-400 hover:text-red-500 transition" />
      </button>

      {/* Card Image */}
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <FiMapPin className="text-pink-500" /> {location}
        </p>

        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>From {price}</span>
          <span className="flex items-center gap-1">
            <FiUsers /> {capacity}
          </span>
        </div>
        <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          add to enquiry{" "}
        </button>
      </div>
    </div>
  );
};

export default VenueCard;
