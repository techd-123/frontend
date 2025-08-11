import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 flex items-center justify-center py-16 px-6 text-center gap-6">
      <div className="max-w-2xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white mt-4  ">
          Are You Planning To Tie The Knot?
        </h1>
        <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6">
          Give us a missed call, sit back, and enjoy — We handle the plans, so
          you can focus on your preparation
        </p>
        <button className="px-6 py-3 rounded-full bg-[#ff6b6b] text-white hover:bg-[#e45b5b] transition font-medium">
          CONNECT WITH US
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
