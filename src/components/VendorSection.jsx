import React from "react";

const VendorSection = () => {
  const vendorTypes = [
    "Rentals",
    "Beauty",
    "Bridal Salons",
    "Videographers",
    "Florists",
    "Venues",
    "Wedding Planners",
    "Florists",
    "View all",
  ];

  return (
    <div className="bg-[#fff5e1] flex flex-col justify-center items-center gap-3">
      <section className=" mx-auto px-4 py-16 text-center ">
        <h2 className="text-8xl sm:text-3xl font-semibold mb-10">
          Build your vendor team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center ">
          {vendorTypes.map((type, index) => (
            <button
              key={index}
              className="bg-black text-white px-6 py-3 rounded-xl text-base min-w-[130px] hover:opacity-85 transition"
            >
              {type}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorSection;
