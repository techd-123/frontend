import React, { useState } from "react";
import Header from "../common/Header";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import VendorPage from "../pages/VendorPage";
import WhyPlanHere from "../pages/WhyPlanHere";
import CitiesSection from "../pages/CitiesSection";
import Accordion from "../pages/Accordion";
import ConfusedSection from "../pages/ConfusedSection";
import Footer from "../common/Footer";
import Slider from "../pages/Slider";

const HomePage = () => {
  const [vendor, setVendor] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Vendor:", vendor);
    console.log("Location:", location);
    // 👉 you can navigate or fetch filtered data here
  };
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-[#261539F5] via-[#511F5A] to-[#C2639D] text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col justify-center h-full px-6 gap-20 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 space-y-6 sm:space-y-8">
            <h1 className="text-[30px] pt-7 sm:text-7xl md:text-5xl lg:text-6xl font-bold leading-tight">
              One platform. Many Events <br /> Endless Possibilities.
            </h1>

            {/* Search Form */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col gap-8 backdrop-blur-md rounded-lg p-4 sm:p-6 max-w-2xl border-2 border-[#C2639D]"
            >
              <p className="text-xs sm:text-sm text-purple-200 mb-3 sm:mb-4">
                Find top-rated vendors for every vibe
              </p>

              <div className="flex flex-col md:flex-row items-stretch gap-3">
                {/* Vendors Dropdown */}
                <div className="relative w-full md:w-40">
                  <select
                    value={vendor}
                    onChange={(e) => setVendor(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C2639D] rounded-2xl bg-transparent text-white focus:outline-none appearance-none"
                  >
                    <option value="" className="text-gray-900">
                      Select Vendor
                    </option>
                    <option value="catering" className="text-gray-900">
                      Catering
                    </option>
                    <option value="decor" className="text-gray-900">
                      Decoration
                    </option>
                    <option value="photography" className="text-gray-900">
                      Photography
                    </option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-4 text-white pointer-events-none" />
                </div>

                {/* Locations Dropdown */}
                <div className="relative w-full md:w-40">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-[#C2639D] rounded-2xl bg-transparent text-white focus:outline-none appearance-none"
                  >
                    <option value="" className="text-gray-900">
                      Select Location
                    </option>
                    <option value="kochi" className="text-gray-900">
                      Kochi
                    </option>
                    <option value="trivandrum" className="text-gray-900">
                      Trivandrum
                    </option>
                    <option value="calicut" className="text-gray-900">
                      Calicut
                    </option>
                  </select>
                  <FiChevronDown className="absolute right-4 top-4 text-white pointer-events-none" />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex items-center gap-3 justify-center px-6 py-3 bg-[#C2639D] hover:bg-pink-600 rounded-md text-white font-semibold transition"
                >
                  <FiSearch className="mr-2" /> Search
                </button>
              </div>
            </form>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full flex items-center justify-center px-6 lg:px-0">
            <img
              src="/images/heroimage.svg"
              alt="Event Showcase"
              className="hidden lg:block w-full max-w-md lg:max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <VendorPage />
      {/* <WhyPlanHere className="hidden md:block" /> */}
      <CitiesSection />

      {/* Accordion for desktop only */}
      <div className="hidden md:block">
        <Accordion />
      </div>

      {/* Slider for mobile only */}
      <div className="block md:hidden">
        <Slider />
      </div>

      <ConfusedSection />
      <Footer />
    </>
  );
};

export default HomePage;
