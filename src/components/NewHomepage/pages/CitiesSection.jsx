import React from "react";

const cities = [
  {
    name: "Kochi",
    image: "/images/nested/Rectangle 6480 (2).svg",
  },
  {
    name: "Thiruvananthapuram",
    image: "/images/nested/Rectangle 6480 (3).svg",
  },
  {
    name: "Kozhikode",
    image: "/images/nested/Rectangle 6480 (4).svg",
  },
  {
    name: "Alapuzha",
    image: "/images/nested/Rectangle 6480 (5).svg",
  },
];

const CitiesSection = () => {
  return (
    <section
      className="relative py-16 px-6 md:px-12 lg:px-20 bg-cover bg-center flex justify-center"
      style={{ backgroundImage: "url('/images/Rectangle 6480.png')" }} // 🔹 replace with your background
    >
      {/* Overlay */}

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 p-5">
          Cities We Serve
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto ">
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {city.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-gray-200 font-medium">
          We Are Coming To Your Place Soon
        </p>
      </div>
    </section>
  );
};

export default CitiesSection;
