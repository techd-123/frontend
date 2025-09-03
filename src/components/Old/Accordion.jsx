import React, { useState } from "react";

import img1 from "../assets/photos/slider1.jpg";
import img2 from "../assets/photos/slider2.jpg";
import img3 from "../assets/photos/slider3.jpg";
import img4 from "../assets/photos/slider4.jpg";

const images = [img1, img2, img3, img4];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:flex 
        w-full h-auto lg:h-[300px] 
        overflow-hidden rounded-2xl gap-4 p-3
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`
            relative bg-center bg-cover cursor-pointer transition-all duration-500
            ${
              activeIndex === index && window.innerWidth >= 1024
                ? "flex-[4]"
                : "flex-1"
            }
            h-[200px] sm:h-[250px] lg:h-auto
          `}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl font-bold drop-shadow-lg">
            {`Card ${index + 1}`}

          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
