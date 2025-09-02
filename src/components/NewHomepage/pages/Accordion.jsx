import React, { useState } from "react";

import img1 from "/images/nested/slider1.jpg";
import img2 from "/img/kcouples.jpg";
import img3 from "/images/nested/slider3.jpg";
import img4 from "/images/nested/slider4.jpg";
import img5 from "/img/kathkali.jpg";

// 🔹 Array of card data (image + text + button)
const cards = [
  {
    image: img1,
    buttonText: "Wedding Celebrations",
  },
  {
    image: img2,
    title: "Kerala  Weddings",
    buttonText: "Kerala  Weddings",
  },
  {
    image: img3,
    buttonText: "Birthday Parties",
  },
  {
    image: img4,
    buttonText: "Baptism",
  },
  {
    image: img5,
    buttonText: "Cultural Gatherings",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // 🔹 First card enlarged by default

  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:flex 
        w-full h-auto lg:h-[500px]   
        overflow-hidden rounded-2xl p-3 gap-4
      "
    >
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`
            relative bg-center bg-cover cursor-pointer transition-all duration-500
            ${
              activeIndex === index
                ? "w-[615px]"
                : index === 0
                ? "w-[615px]" /* First one always bigger */
                : "w-[300px]"
            }
            h-[500px]
          `}
          style={{ backgroundImage: `url(${card.image})` }}
        >
          {/* 🔹 Overlay */}
          <div
            className="absolute inset-0 transition duration-300"
            style={{
              background:
                "linear-gradient(to bottom, #E783B52E 18%, #261539 100%)",
            }}
          ></div>

          {/* 🔹 Text + Button */}
          <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl font-bold drop-shadow-lg z-10">
            <button className=" flex backdrop-blur-md text-white px-4 py-2 rounded-md text-lg font-semibold">
              {card.buttonText}
              <span className="text-[#C2639D] text-xl">➔</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
