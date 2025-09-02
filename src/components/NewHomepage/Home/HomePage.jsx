import React from "react";
import Header from "../common/Header";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import VendorPage from "../pages/VendorPage";
import WhyPlanHere from "../pages/WhyPlanHere";
import CitiesSection from "../pages/CitiesSection";
import Accordion from "../pages/Accordion";
import ConfusedSection from "../pages/ConfusedSection";
import Footer from "../common/footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // You can also pass query params if needed
    navigate("/filter");
  };
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-[#261539F5] via-[#511F5A] to-[#C2639D] text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
          {/* Left Content */}
          <div className=" flex flex-col justify-center  px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 space-y-6 sm:space-y-8 gap-5">
            <h1 className="text-[30px] pt-7 sm:text-7xl md:text-5xl lg:text-6xl font-bold leading-tight">
              One platform. Many Events <br /> Endless Possibilities.
            </h1>

            {/* Search Box */}
            <div></div>
            <div className=" flex  flex-col  gap-8  backdrop-blur-md rounded-lg p-4 sm:p-6 max-w-2xl border-2 border-[#C2639D] ">
              <p className="text-xs sm:text-sm text-purple-200 mb-3 sm:mb-4">
                Find top-rated vendors for every vibe
              </p>
              <div className="flex flex-col md:flex-row items-stretch gap-3">
                {/* Vendors Dropdown */}
                <div className="relative w-full md:w-40">
                  <button className="w-full flex items-center justify-between px-4 py-3 border-2 rounded-2xl text-white focus:outline-none">
                    Vendors <FiChevronDown />
                  </button>
                </div>

                {/* Locations Dropdown */}
                <div className="relative w-full md:w-40">
                  <button className="w-full flex items-center justify-between px-4 py-3 border-2 rounded-2xl text-white focus:outline-none">
                    Locations <FiChevronDown />
                  </button>
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  className="flex items-center  gap-3 justify-center px-6 py-3 bg-[#C2639D] hover:bg-pink-600 rounded-md text-white font-semibold transition"
                >
                  <FiSearch className="mr-2" /> Search
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full flex items-center justify-center px-6 lg:px-0 mt-8 lg:mt-0">
            <img
              src="/images/heroimage.svg"
              alt="Event Showcase"
              className="hidden lg:block w-full max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <VendorPage />
      <WhyPlanHere />
      <CitiesSection />
      <Accordion />
      <ConfusedSection />
      <Footer />
    </>
  );
};

export default HomePage;
