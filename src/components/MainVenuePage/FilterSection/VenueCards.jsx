import React from "react";
import VenueCard from "./VenueCard";

const VenueCards = () => {
  // Sample data
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
    {
      title: "Ambara Suites",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
    },
    {
      title: "O by Tamara",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹1600",
      capacity: "10 to 1000",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    },
    {
      title: "The Leela Kovalam",
      location: "Kovalam, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image:
        "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
    },
    {
      title: "Ambara Suites",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
    },
    {
      title: "O by Tamara",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹1600",
      capacity: "10 to 1000",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    },
    {
      title: "The Leela Kovalam",
      location: "Kovalam, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image:
        "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg",
    },
  ];

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
      {/* Header */}
      <div className="mb-5">
        {/* Tabs */}
        <div className="flex gap-5 text-lg md:text-xl font-semibold">
          <span className="cursor-pointer pb-1 border-b-2 border-black">
            Venues
          </span>
          <span className="cursor-pointer pb-1 hover:border-b-2 hover:border-gray-500">
            Vendors
          </span>
        </div>

        {/* Subtext */}
        <div className="mt-3 text-sm text-gray-700 bg-[#eaf8f6] px-4 py-2 rounded-md w-fit">
          Find your kind of place for the celebration to go down.
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </div>
    </div>
  );
};

export default VenueCards;
