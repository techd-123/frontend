import React from "react";

const HeroSearch = () => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-start px-6 sm:px-12"
      style={{
        backgroundImage: "url('/img/bgimages.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[url('/images/nested/overlay.svg')] bg-cover bg-center opacity-70"></div>

      {/* Search Box */}
      <div className="relative z-10 max-w-2xl w-full sm:w-[500px] bg-gradient-to-r from-purple-900/90 to-pink-800/90 rounded-lg shadow-lg p-6 text-white">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4">
          Find top-rated vendors for every vibe
        </h2>

        {/* Form */}
        <form className="flex flex-col sm:flex-row gap-3 ">
          {/* Vendors Dropdown */}
          <select className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option className="text-black">Vendors</option>
            <option className="text-black">Photographers</option>
            <option className="text-black">Caterers</option>
            <option className="text-black">Planners</option>
          </select>

          {/* Locations Dropdown */}
          <select className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-400 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option className="text-black">Locations</option>
            <option className="text-black">New York</option>
            <option className="text-black">Los Angeles</option>
            <option className="text-black">Chicago</option>
          </select>

          {/* Search Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-md transition"
          >
            🔍 Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSearch;
