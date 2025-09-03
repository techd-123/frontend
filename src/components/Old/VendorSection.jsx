import React from "react";
import slider1 from "../assets/photos/makeup.jpg";
import slider2 from "../assets/photos/bridalwear.jpg"; // import image
import slider3 from "../assets/photos/groomwear.jpg"; // import image
import slider4 from "../assets/photos/mehendi.jpg"; // import image
import slider5 from "../assets/photos/decors.jpg"; // import image
import slider6 from "../assets/photos/photography.jpg"; // import image
import slider7 from "../assets/photos/cakes.jpg"; // import image

// import image
import { Link } from "react-router-dom";

const VendorSection = () => {
  const vendorTypes = [
    { name: "Decors", img: slider5 },
    { name: "Beauty", img: slider1 },
    { name: "Bridal wear", img: slider2 },
    { name: "Videographers", img: slider6 },
    { name: "Cakes and Drinks", img: slider7 },
    { name: "Groom Wear", img: slider3 },
    { name: "Mehendi", img: slider4 },
  ];

  return (
    <div className="bg-[#fff5e1] flex flex-col justify-center items-center gap-5">
      <section className="px-4 py-16 text-center">
        <h2 className="text-5xl sm:text-3xl font-semibold p-5">
          Build your vendor team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
          {vendorTypes.map((vendor, index) => (
            <Link key={index} to="filter" className="w-full">
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${vendor.img})`,
                }}
                className="bg-center bg-cover bg-no-repeat rounded-xl min-w-[130px] h-32 sm:h-40 w-full flex items-center justify-center text-white font-semibold hover:opacity-85 transition"
              >
                <div className="text-[19px] bg-opacity-50 px-2 py-1 rounded">
                  {vendor.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VendorSection;
