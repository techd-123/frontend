import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const HeroSearch = () => {
  return (
    <section
      className="p-5 relative w-full min-h-[70vh] bg-cover bg-center flex items-center justify-center sm:justify-start px-4 sm:px-12 pt-24"
      style={{
        backgroundImage: "url('/img/bgimages.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[url('/images/nested/overlay.svg')] bg-cover bg-center opacity-70"></div>

      {/* Search Box */}
      <div
        className=" relative z-10 w-[90%] sm:w-[500px] md:w-[600px] 
        bg-gradient-to-r from-purple-900/90 to-pink-800/90 
        rounded-lg shadow-lg p-8 sm:p-6 text-white 
        flex flex-col items-center sm:items-start"
      >
        {/* Heading */}
        <h2 className="p-4 text-center sm:text-left text-sm sm:text-lg md:text-2xl font-medium mb-4 leading-snug">
          Find top-rated vendors for every vibe
        </h2>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-3 w-full">
          {/* Vendors Dropdown */}
          <select className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option className="text-black">Vendors</option>
            <option className="text-black">Photographers</option>
            <option className="text-black">Caterers</option>
            <option className="text-black">Planners</option>
          </select>

          {/* Locations Dropdown */}
          <select className="w-full sm:flex-1 px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option className="text-black">Locations</option>
            <option className="text-black">New York</option>
            <option className="text-black">Los Angeles</option>
            <option className="text-black">Chicago</option>
          </select>

          {/* Search Button */}
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-md transition text-sm sm:text-base"
          >
            <FiSearch className="mr-2" /> Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSearch;
