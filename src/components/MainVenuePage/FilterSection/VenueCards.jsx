import React, { useState, useEffect } from "react";
import VenueCard from "./VenueCard";
import FilterPanel from "./FilterPanel";
import VendorFilterPanel from "./VendorFilterPanel";
import { useSearchParams } from "react-router-dom";
import ComingSoon from "../../Mesages/CommingSoon";
const VenueCards = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeTab, setActiveTab] = useState("venues");
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); // e.g. "photography"

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

  // Vendors grouped by category
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
    planners: [
      {
        title: "Elite Planners",
        location: "Trivandrum",
        price: "₹50,000 onwards",
        capacity: "Corporate, Weddings",
        image:
          "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      },
    ],
    entertainments: [
      {
        title: "Stage Beats",
        location: "Kochi",
        price: "₹15,000 per event",
        capacity: "DJ, Dance, Music",
        image:
          "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
      },
    ],
    tailorings: [
      {
        title: "Fashion Tailors",
        location: "Trivandrum",
        price: "₹2,000 per outfit",
        capacity: "Suits, Sarees, Custom Wear",
        image: "https://images.pexels.com/photos/44805/pexels-photo-44805.jpeg",
      },
    ],
  };

  // ✅ Switch to vendors tab if category is passed
  useEffect(() => {
    if (category && category !== "venues") {
      setActiveTab("vendors");
    }
  }, [category]);

  // ✅ Filter vendors by category
  const filteredVendors =
    category && category !== "venues"
      ? vendors[category] || []
      : Object.values(vendors).flat();

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto flex">
      {/* Conditionally Render Filter Panels */}
      {activeTab === "venues" ? (
        <FilterPanel isOpen={showFilter} onClose={() => setShowFilter(false)} />
      ) : (
        <VendorFilterPanel
          isOpen={showFilter}
          onClose={() => setShowFilter(false)}
        />
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

          {/* Filter Button for Mobile */}
          <button
            className="ml-auto bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition sm:hidden"
            onClick={() => setShowFilter(true)}
          >
            Filter
          </button>
        </div>
                  <ComingSoon/>

        {/* Cards Grid */}
        {activeTab === "venues" ? (
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

            {venues.map((item, index) => (
              <VenueCard key={index} {...item} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {filteredVendors.map((item, index) => (
              <VenueCard key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VenueCards;
  