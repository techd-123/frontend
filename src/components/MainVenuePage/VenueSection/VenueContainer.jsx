// App.js or Home.js
import React from "react";
import VenueCard from "./VenueCard";

const sampleVenues = [
  {
    title: "Kumarakom Lake Resort, Kerala",
    location: "Kottayam City, Kottayam",
    price: "₹500",
    capacity: "10 to 100",
    images: [
      "https://images.pexels.com/photos/28700142/pexels-photo-28700142.jpeg",
      "https://images.pexels.com/photos/33249971/pexels-photo-33249971.jpeg",
      "https://images.pexels.com/photos/33329096/pexels-photo-33329096.jpeg",
    ],
  },
  {
    title: "Sterling Lake Palace Alleppey",
    location: "Alappuzha City, Alappuzha",
    price: "₹500",
    capacity: "10 to 100",
    images: ["https://images.pexels.com/photos/2845950/pexels-photo-2845950.jpeg", "https://images.pexels.com/photos/15698107/pexels-photo-15698107.jpeg"],
  },
  {
    title: "Kumarakom Lake Resort, Kerala",
    location: "Kottayam City, Kottayam",
    price: "₹500",
    capacity: "10 to 100",
    images: [
      "https://images.pexels.com/photos/11428111/pexels-photo-11428111.jpeg",
      "https://images.pexels.com/photos/2845950/pexels-photo-2845950.jpeg",
    ],
  },
  {
    title: "Sterling Lake Palace Alleppey",
    location: "Alappuzha City, Alappuzha",
    price: "₹500",
    capacity: "10 to 100",
    images: ["https://images.pexels.com/photos/27489411/pexels-photo-27489411.jpeg", "https://images.pexels.com/photos/11428111/pexels-photo-11428111.jpeg"],
  },
];

export default function VenueContainer() {
  return (
    <div className="flex flex-col items-center max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Other options near Thiruvananthapuram:
      </h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleVenues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </div>
    </div>
  );
}
