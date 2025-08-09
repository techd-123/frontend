import React from "react";
import slider1 from "../assets/photos/slider1.jpg"; // import image

const VendorSection = () => {
  // Import images for all vendors (you can replace with different ones later)
  const vendorTypes = [
    { name: "Rentals", img: slider1 },
    { name: "Beauty", img: slider1 },
    { name: "Bridal Salons", img: slider1 },
    { name: "Videographers", img: slider1 },
    { name: "Florists", img: slider1 },
    { name: "Venues", img: slider1 },
    { name: "Wedding Planners", img: slider1 },
    { name: "Florists", img: slider1 },
    { name: "View all", img: slider1 },
  ];

  return (
    <div className="bg-[#fff5e1] flex flex-col justify-center items-center gap-5">
      <section className="px-4 py-16 text-center">
        <h2 className="text-5xl sm:text-3xl font-semibold p-5">
          Build your vendor team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
          {vendorTypes.map((vendor, index) => (
            <button
              key={index}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${vendor.img})`,
              }}
              className="bg-center bg-cover bg-no-repeat rounded-xl min-w-[130px] h-32 sm:h-40 w-full flex items-center justify-center text-white font-semibold hover:opacity-85 transition"
            >
              {/* Overlay for readability */}
              <div className="text-[19px] bg-opacity-50 px-2 py-1 rounded">
                {vendor.name}
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorSection;
