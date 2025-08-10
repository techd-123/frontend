import { useParams } from "react-router-dom";
import slider1 from "../../assets/photos/slider1.jpg";
import slider2 from "../../assets/photos/slider2.jpg";
import slider3 from "../../assets/photos/slider3.jpg";

export default function VendorDetail() {
  const { vendorName } = useParams();

  // Vendor data with headings, images, and details
  const vendorItems = {
    rentals: [
      {
        name: "Chairs",
        img: slider1,
        desc: "Elegant chairs for weddings and events.",
      },
      {
        name: "Tables",
        img: slider2,
        desc: "Round & rectangular tables in various sizes.",
      },
      {
        name: "Tents",
        img: slider3,
        desc: "Weatherproof tents for outdoor events.",
      },
    ],
    beauty: [
      {
        name: "Makeup",
        img: slider1,
        desc: "Professional bridal and party makeup.",
      },
      {
        name: "Hair Styling",
        img: slider2,
        desc: "Beautiful hairstyles for every occasion.",
      },
      {
        name: "Facials",
        img: slider3,
        desc: "Relaxing and refreshing facial treatments.",
      },
    ],
    "bridal-salons": [
      {
        name: "Gowns",
        img: slider1,
        desc: "Designer wedding gowns for your big day.",
      },
      { name: "Jewelry", img: slider2, desc: "Exquisite bridal jewelry sets." },
      {
        name: "Veils",
        img: slider3,
        desc: "Elegant veils to complete your bridal look.",
      },
    ],
    videographers: [
      {
        name: "Wedding Films",
        img: slider1,
        desc: "Full wedding films to cherish forever.",
      },
      {
        name: "Highlight Reels",
        img: slider2,
        desc: "Short, cinematic highlight videos.",
      },
      {
        name: "Drone Shots",
        img: slider3,
        desc: "Aerial shots of your special moments.",
      },
    ],
    florists: [
      {
        name: "Bouquets",
        img: slider1,
        desc: "Custom bridal and bridesmaid bouquets.",
      },
      {
        name: "Centerpieces",
        img: slider2,
        desc: "Beautiful floral centerpieces.",
      },
      {
        name: "Decor",
        img: slider3,
        desc: "Floral decorations for venues and stages.",
      },
    ],
    venues: [
      {
        name: "Beach Venue",
        img: slider1,
        desc: "Perfect beachside wedding location.",
      },
      {
        name: "Banquet Hall",
        img: slider2,
        desc: "Spacious hall for large celebrations.",
      },
      {
        name: "Garden Venue",
        img: slider3,
        desc: "Lush green gardens for outdoor events.",
      },
    ],
    "wedding-planners": [
      {
        name: "Full Service",
        img: slider1,
        desc: "We manage everything from start to end.",
      },
      {
        name: "Day-of Coordination",
        img: slider2,
        desc: "Smooth execution on your wedding day.",
      },
      {
        name: "Consulting",
        img: slider3,
        desc: "Expert advice for planning your wedding.",
      },
    ],
    "view-all": [
      {
        name: "All Vendors List",
        img: slider1,
        desc: "Browse all vendors in one place.",
      },
    ],
  };

  const items = vendorItems[vendorName] || [];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {vendorName.replace("-", " ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
