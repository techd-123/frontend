import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import

const cards = [
  {
    title: "Creative Themes for Unforgettable Memories",
    desc: "Discover expert advice and creative ideas to help you plan unforgettable Events",
    image: "/images/nested/slider1.jpg",
    buttonText: "See More",
  },
  {
    image: "/img/kcouples.jpg",
    buttonText: "Kerala Weddings",
  },
  {
    image: "/images/nested/slider3.jpg",
    buttonText: "Birthday Parties",
  },
  {
    image: "/images/nested/slider4.jpg",
    buttonText: "Baptism",
  },
  {
    image: "/img/kathkali.jpg",
    buttonText: "Cultural Gatherings",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // ✅ hook

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
                ? "lg:w-[615px]"
                : index === 0
                ? "lg:w-[615px]"
                : "lg:w-[300px]"
            }
            h-[400px] sm:h-[450px] lg:h-[500px] w-full
          `}
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div
            className="absolute inset-0 transition duration-300"
            style={{
              background:
                "linear-gradient(to bottom, #E783B52E 18%, #261539 100%)",
            }}
          ></div>

          <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl font-bold drop-shadow-lg z-10">
            <div className="flex flex-col gap-2">
              <h2>{card.title}</h2>
              <p className="text-[12px] text-gray-200">{card.desc}</p>
            </div>

            {/* ✅ Button takes you to /filter always */}
            <button
              onClick={() => navigate("/filter")}
              className="flex backdrop-blur-md text-white px-4 py-2 rounded-md text-lg font-semibold"
            >
              {card.buttonText}
              <span className="text-[#C2639D] text-xl ml-2">➔</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
