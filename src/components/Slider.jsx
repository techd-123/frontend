import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../assets/photos/culture1.jpg";
import image2 from "../assets/photos/culture2.jpg";
import image3 from "../assets/photos/culture3.jpg";
const images = [
  { src: image1, text: "Discover the Rich Culture" },
  { src: image2, text: "A Journey Through Tradition" },
  { src: image3, text: "Celebrating Heritage" },
];
const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]} // removed Navigation
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {images.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px]">
            {/* Background Image */}
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
            />

            {/* Black overlay for readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl sm:text-4xl font-bold text-center px-4">
                {slide.text}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
