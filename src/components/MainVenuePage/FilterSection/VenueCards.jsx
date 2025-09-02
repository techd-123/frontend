import React, { useState } from "react";
import VenueCard from "./VenueCard";
import FilterPanel from "./FilterPanel";

const VenueCards = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("venues"); // 🔹 new state

  // Sample venue data
  const venues = [
    {
      title: "Ambara Suites",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg",
    },
    {
      title: "O by Tamara",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹1600",
      capacity: "10 to 1000",
      image:
        "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
    },
    {
      title: "The Leela Kovalam",
      location: "Kovalam, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    },
  ];

  // Sample vendor data (you can replace with real vendor cards later)
  const vendors = [
    {
      title: "Elite Caterers",
      location: "Kochi, Kerala",
      price: "₹700 per plate",
      capacity: "100 to 500",
      image:
        "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg",
    },
    {
      title: "Dream Decorators",
      location: "Trivandrum, Kerala",
      price: "₹50,000 onwards",
      capacity: "Custom packages",
      image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg",
    },
  ];

  // Decide which list to show
  const dataToShow = activeTab === "venues" ? venues : vendors;

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto flex">
      {/* Filter Sidebar */}
      <FilterPanel isOpen={showFilter} onClose={() => setShowFilter(false)} />

      <div className="flex-1">
        {/* Header Tabs */}
        <div className="mb-5 flex items-center gap-5 pb-4">
          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "venues"
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-500"
            }`}
            onClick={() => setActiveTab("venues")}
          >
            Venues
          </span>

          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "vendors"
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-500"
            }`}
            onClick={() => setActiveTab("vendors")}
          >
            Vendors
          </span>

          {/* Filter Button (only for mobile) */}
          <button
            className="ml-auto bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition sm:hidden"
            onClick={() => setShowFilter(true)}
          >
            Filter
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {dataToShow.map((item, index) => (
            <VenueCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueCards;
