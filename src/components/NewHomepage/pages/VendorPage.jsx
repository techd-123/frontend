import React from "react";
import { Link } from "react-router-dom";

const vendors = [
  {
    name: "Venues",
    image: "/images/first.svg",
    categoryKey: "venues",
  },
  {
    name: "Photographers",
    image: "/images/Rectangle 6469.svg",
    categoryKey: "photography",
  },
  {
    name: "Planners",
    image: "/images/Rectangle 6470.svg",
    categoryKey: "planners",
  },
  {
    name: "Caterers",
    image: "/images/Rectangle 6471.svg",
    categoryKey: "catering",
  },
  {
    name: "Car Rentals",
    image: "/images/Rectangle 6472.svg",
    categoryKey: "cars",
  },
  {
    name: "Makeup Artist",
    image: "/images/Rectangle 6473.svg",
    categoryKey: "makeup",
  },
  {
    name: "Entertainments",
    image: "/images/Rectangle 6474.svg",
    categoryKey: "entertainments",
  },
  {
    name: "Tailorings",
    image: "/images/Rectangle 6475.svg",
    categoryKey: "tailorings",
  },
];

const VendorPage = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-[20px] mb-5 md:text-3xl font-bold text-center p-8">
        Build Your Vendor Team
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {vendors.map((vendor, idx) => (
          <Link
            key={idx}
            to={`/filter?category=${vendor.categoryKey}`}
            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-50 transition" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="backdrop-blur-md text-white px-4 py-2 rounded-md text-lg font-semibold">
                {vendor.name}
              </span>
            </span>
          </Link>
        ))}
      </div>

      {/* Explore more */}
      <div className="text-center pt-12">
        <a
          href="/vendors"
          className="p-3 inline-flex items-center gap-3 border-2 border-[#C2639D] text-gray-700 rounded-3xl hover:text-pink-600 font-medium "
        >
          <a href="/filter">
            <span>Explore more</span>
          </a>
          <span className="text-[#C2639D] text-xl">➔</span>
        </a>
      </div>
    </section>
  );
};

export default VendorPage;
