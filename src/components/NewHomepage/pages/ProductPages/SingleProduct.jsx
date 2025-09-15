import React from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

const SingleProduct = () => {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 px-2 sm:px-4 lg:px-6 py-6">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-4 sm:p-6 lg:p-8">
        {/* ============== Top Section: Venue + Images + Request Pricing ============== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Image slider */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row gap-2">
              {/* Main Image */}
              <div className="w-full sm:w-2/3">
                <img
                  src="/images/nested/slider1.jpg"
                  alt="Venue"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>

              {/* Side Images */}
              <div className="w-full sm:w-1/3 flex sm:flex-col gap-2">
                <img
                  src="/images/nested/slider3.jpg"
                  alt="Venue Side"
                  className="w-full h-40 sm:h-48 lg:h-44 object-cover rounded-lg"
                />
                <img
                  src="/images/nested/slider4.jpg"
                  alt="Venue Side"
                  className="w-full h-40 sm:h-48 lg:h-44 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right: Venue Details */}
          <div className="lg:col-span-1 bg-pink-50 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Cocktail Venues",
                "Banquet Halls",
                "Party Halls",
                "Marriage Halls",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-green-600 mb-4">
              <FaWhatsapp />
              <span className="text-sm">Need Contact Number ?</span>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md shadow">
              Request Pricing
            </button>
          </div>
        </div>

        {/* Venue Info */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-center sm:text-left">
            Ambara Suites
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mt-2 text-center sm:text-left">
            <span className="flex items-center justify-center sm:justify-start bg-green-100 text-green-700 px-2 py-1 rounded-md text-sm font-medium">
              <FaStar className="mr-1" /> 4.5/5
            </span>
            <span className="text-sm text-gray-600 mt-1 sm:mt-0">
              134 Reviews
            </span>
          </div>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed text-center sm:text-left">
            For all your king-sized celebrations, Ambara Suites gives you a
            magnificent and humongous party area at budget-friendly prices and
            lets you steal all the spotlight for the day!
            <button className="text-blue-600 font-semibold ml-2">
              Show More
            </button>
          </p>

          <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-blue-600 bg-blue-50 border border-blue-300 px-3 py-2 rounded-md text-sm font-medium">
            <span>Hurry Up! This Venue Is In High Demand</span>
          </div>
        </div>

        {/* Availability Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-center sm:text-left">
            Check live availability
          </h3>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-pink-600 text-sm">
            <MdCalendarToday />
            <span>We have live availability for this venue</span>
          </div>

          <input
            type="date"
            className="mt-3 w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* ============== Photos + Features + Policies ============== */}
        <div className="mt-10 border-t pt-6 space-y-8">
          {/* Photos */}
          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h3 className="text-xl font-semibold text-center sm:text-left">
                Ambara Suites Photos
              </h3>
              <button className="text-blue-600 text-sm font-medium mt-2 sm:mt-0">
                View all
              </button>
            </div>

            <h4 className="text-sm font-medium mb-2">Images</h4>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {[
                "/images/nested/slider1.jpg",
                "/images/nested/slider3.jpg",
                "/images/nested/slider4.jpg",
                "/img/kcouples.jpg",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Venue ${i}`}
                  className="w-40 h-28 sm:w-52 sm:h-32 object-cover rounded-lg flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Features of venue</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
              <li>Ample parking space and valet services</li>
              <li>Serves both vegetarian and non-vegetarian food</li>
              <li>
                Affordable Banquet Hall in Thane for grand weddings and events
              </li>
              <li>In-house decorators and caterers take care of event needs</li>
            </ul>
          </div>

          {/* Venue Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Venue policies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold">Timings & Slots</h4>
                <p>Morning - 7:30 AM - 3:30 PM</p>
                <p>Evening - 6:30 PM - 12:00 AM</p>
                <p className="text-xs text-gray-500">
                  (Venue closes at 12:00 AM)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Advance</h4>
                <p>25% at the time of booking</p>
              </div>
              <div>
                <h4 className="font-semibold">Cancellation</h4>
                <p>Non cancellable</p>
              </div>
              <div>
                <h4 className="font-semibold">Parking At</h4>
                <p>Valet provided by venue</p>
                <p>Parking space available for 20 vehicles</p>
              </div>
            </div>
            <button className="text-blue-600 text-sm font-medium mt-3">
              Show More
            </button>
          </div>
        </div>

        {/* Ratings & Reviews Section */}
        <div className="mt-10 border-t pt-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 mb-6">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">Ratings & Reviews</h2>
              <div className="flex flex-col sm:flex-row sm:items-center sm:mt-2 text-sm sm:text-base">
                <div className="flex justify-center sm:justify-start items-center">
                  <span className="text-3xl font-bold text-pink-600">4.5</span>
                  <span className="text-gray-500 text-lg ml-1">/5</span>
                  <div className="flex ml-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < 4 ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-gray-500 mt-2 sm:mt-0 sm:ml-3">
                  134 Ratings & Reviews
                </span>
              </div>
            </div>
            <button className="text-pink-600 font-medium hover:underline mt-3 sm:mt-0">
              See All Verified Reviews
            </button>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: "Verified User",
                date: "29 Mar 2023",
                pax: 500,
                text: "Aakash Kawde Event Date 18 March, 2023 Book for full day, | PAX 500 + All arrangements was...",
                more: true,
              },
              {
                name: "Akshay Nevrekor",
                date: "22 Feb 2023",
                pax: 500,
                text: "Great experience! Everything was perfectly arranged.",
                more: false,
              },
              {
                name: "Pooja G",
                date: "17 Feb 2023",
                pax: 250,
                text: "Really well managed and beautiful arrangements.",
                more: false,
              },
              {
                name: "Vishal Gohil",
                date: "18 Feb 2023",
                pax: 180,
                text: "Excellent arrangements, excellent food, excellent lights, excellent space , well behaved team...",
                more: true,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 hover:shadow-sm transition bg-white"
              >
                <h3 className="font-semibold flex items-center gap-2">
                  {review.name}
                  <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-md text-xs">
                    ⭐ 5/5
                  </span>
                </h3>
                <p className="text-xs text-gray-500">
                  Event Date: {review.date} | PAX: {review.pax}
                </p>
                <p className="mt-2 text-gray-700 text-sm">
                  {review.text}{" "}
                  {review.more && (
                    <span className="text-pink-600 cursor-pointer">
                      Read more
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Write Review */}
          <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-0">
              Have something to share about the venue?
            </span>
            <button className="px-4 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 text-sm sm:text-base">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
