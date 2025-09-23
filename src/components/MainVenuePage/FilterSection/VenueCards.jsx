import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VenueCard from "./VenueCard";
import FilterPanel from "./FilterPanel";
import VendorFilterPanel from "./VendorFilterPanel";

const VenueCards = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("venues");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const location = useLocation();

  // Venues
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

  // Vendors
  const vendors = {
    photography: [
      {
        title: "Pixel Perfect Studios",
        location: "Thiruvananthapuram",
        price: "₹25,000 per event",
        capacity: "Wedding, Pre-wedding, Candid",
        image:
          "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
      },
    ],
    makeup: [
      {
        title: "Glam & Glow",
        location: "Kochi",
        price: "₹10,000 per bride",
        capacity: "Bridal, Party, HD Makeup",
        image:
          "https://images.pexels.com/photos/3762877/pexels-photo-3762877.jpeg",
      },
    ],
    catering: [
      {
        title: "Taste Buds Caterers",
        location: "Kochi",
        price: "₹500 per plate",
        capacity: "100 to 500",
        image:
          "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
      },
    ],
    cars: [
      {
        title: "Royal Cars",
        location: "Thiruvananthapuram",
        price: "₹5,000 per day",
        capacity: "Audi, BMW, Mercedes",
        image:
          "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      },
    ],
  };

  // Read category from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    if (category && vendors[category]) {
      setActiveTab("vendors"); // switch to Vendors tab automatically
      setSelectedCategory(category); // show only this category
    } else {
      setActiveTab("venues");
      setSelectedCategory(null);
    }
  }, [location.search]);

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto flex">
      {/* Conditionally Render Filter Panels */}
      {activeTab === "venues" ? (
        <FilterPanel isOpen={showFilter} onClose={() => setShowFilter(false)} />
      ) : (
        <VendorFilterPanel isOpen={showFilter} onClose={() => setShowFilter(false)} />
      )}

      <div className="flex-1">
        {/* Tabs */}
        <div className="mb-5 flex items-center gap-5 pb-4">
          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "venues"
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-500"
            }`}
            onClick={() => {
              setActiveTab("venues");
              setSelectedCategory(null);
            }}
          >
            Venues
          </span>
          <span
            className={`cursor-pointer pb-1 ${
              activeTab === "vendors"
                ? "border-b-2 border-black"
                : "hover:border-b-2 hover:border-gray-500"
            }`}
            onClick={() => {
              setActiveTab("vendors");
              setSelectedCategory(null);
            }}
          >
            Vendors
          </span>

          {/* Filter Button for Mobile */}
          <button
            className="ml-auto bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition sm:hidden"
            onClick={() => setShowFilter(true)}
          >
            Filter
          </button>
        </div>

        {/* Cards Grid */}
        {activeTab === "venues" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {venues.map((item, index) => (
              <VenueCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {selectedCategory
              ? vendors[selectedCategory].map((item, index) => (
                  <VenueCard key={`${selectedCategory}-${index}`} {...item} />
                ))
              : Object.keys(vendors).map((category) =>
                  vendors[category].map((item, index) => (
                    <VenueCard key={`${category}-${index}`} {...item} />
                  ))
                )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueCards;
