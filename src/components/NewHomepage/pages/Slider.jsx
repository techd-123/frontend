import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "/images/nested/slider1.jpg";
import img2 from "/img/kcouples.jpg";
import img3 from "/images/nested/slider3.jpg";
import img4 from "/images/nested/slider4.jpg";
import img5 from "/img/kathkali.jpg";

const cards = [
  { image: img1, buttonText: "Wedding Celebrations" },
  { image: img2, buttonText: "Kerala Weddings" },
  { image: img3, buttonText: "Birthday Parties" },
  { image: img4, buttonText: "Baptism" },
  { image: img5, buttonText: "Cultural Gatherings" },
];

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 2000 }}
      pagination={{ clickable: true }}
    >
      {cards.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px]">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
            />

            {/* Black overlay for readability */}
            <div className="absolute inset-0 bg-[url('/images/nested/overlay.svg')] bg-cover bg-center opacity-70"></div>

            {/* 🔹 Text + Button */}
            <div className="absolute bottom-5 left-5 text-white text-lg sm:text-xl font-bold drop-shadow-lg z-10">
              <button className="flex backdrop-blur-md text-white px-4 py-2 rounded-md text-lg font-semibold">
                {slide.buttonText} {/* ✅ FIXED */}
                <span className="text-[#C2639D] text-xl ml-2">➔</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
