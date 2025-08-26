import React from "react";
import Header from "../common/Header";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import VendorPage from "../pages/VendorPage";
import WhyPlanHere from "../pages/WhyPlanHere";
import CitiesSection from "../pages/CitiesSection";
import Accordion from "../pages/Accordion";
import ConfusedSection from "../pages/ConfusedSection";
import Footer from "../common/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-[#261539F5] via-[#511F5A] to-[#C2639D] text-white min-h-screen w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12 space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              One platform. Many Events <br /> Endless Possibilities.
            </h1>

            <p className="text-lg text-purple-200">
              Find top-rated vendors for every vibe
            </p>

            {/* Search Box */}
            <div className="bg-opacity-60 rounded-lg p-6 max-w-2xl border-2 border-[#C2639D]">
              <p className="text-sm text-purple-200 mb-4">
                Find top-rated vendors for every vibe
              </p>
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                {/* Vendors Dropdown */}
                <div className="relative w-full md:w-auto">
                  <button className="w-full md:w-40 flex items-center justify-between px-4 py-3 bg-purple-900 rounded-md text-white focus:outline-none">
                    Vendors <FiChevronDown />
                  </button>
                </div>

                {/* Locations Dropdown */}
                <div className="relative w-full md:w-auto">
                  <button className="w-full md:w-40 flex items-center justify-between px-4 py-3 bg-purple-900 rounded-md text-white focus:outline-none">
                    Locations <FiChevronDown />
                  </button>
                </div>

                {/* Search Button */}
                <button className="flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-md text-white font-semibold">
                  <FiSearch className="mr-2" /> Search
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Single Image */}
          <div className="relative w-full  ">
            <img
              src="/images/heroimage.svg" // Replace with your image
              alt="Event Showcase"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </section>
      <VendorPage />
      <WhyPlanHere />
      <CitiesSection />
      <Accordion />
      <ConfusedSection />
      <Footer/>
    </>
  );
};

export default HomePage;
