import React from "react";

const vendors = [
  {
    name: "Venues",
    image: "/images/first.svg",
    link: "/filter",
  },
  {
    name: "Photographers",
    image: "/images/Rectangle 6469.svg",
    link: "/filter",
  },
  {
    name: "Planners",
    image: "/images/Rectangle 6470.svg",
    link: "/filter",
  },
  {
    name: "Caterers",
    image: "/images/Rectangle 6471.svg",
    link: "/filter",
  },
  {
    name: "Car Rentals",
    image: "/images/Rectangle 6472.svg",
    link: "/filter",
  },
  {
    name: "Makeup Artist",
    image: "/images/Rectangle 6473.svg",
    link: "/filter",
  },
  {
    name: "Entertainments",
    image: "/images/Rectangle 6474.svg",
    link: "/filter",
  },
  {
    name: "Tailorings",
    image: "/images/Rectangle 6475.svg",
    link: "/filter",
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
          <a
            key={idx}
            href={vendor.link}
            className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-40 group-hover:bg-opacity-50 transition" />

            {/* Label */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className=" backdrop-blur-md text-white px-4 py-2 rounded-md text-lg font-semibold">
                {vendor.name}
              </span>
            </span>
          </a>
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
