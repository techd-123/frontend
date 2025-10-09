import React from "react";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

const reviews = [
  {
    name: "John Doe",
    date: "2025-09-24",
    pax: 200,
    text: "Amazing experience! The decorations and hospitality were exceptional. Highly recommended!",
    more: true,
  },
  {
    name: "Jane Smith",
    date: "2025-09-20",
    pax: 150,
    text: "The venue was beautiful and well-maintained. Perfect for weddings and parties.",
    more: false,
  },
];

const SingleProduct = () => {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-pink-50 via-white to-pink-50 px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl">
        {/* =================== Top Section =================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-3">
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <img
                src="/images/nested/slider1.jpg"
                alt="Venue"
                className="w-full h-64 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-pink-600 text-white px-3 py-1 text-xs rounded-full shadow-md">
                Trending
              </span>
            </div>
            <div className="flex gap-3 overflow-x-auto">
              {[
                "/images/nested/slider3.jpg",
                "/images/nested/slider4.jpg",
                "/img/kcouples.jpg",
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Venue ${i}`}
                  className="w-40 h-28 object-cover rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Venue Details Card */}
          <div className="bg-pink-50 rounded-xl shadow-md p-5 flex flex-col justify-between border border-pink-100">
            <div>
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
              <div className="flex items-center gap-2 text-green-600 mb-3 text-sm">
                <FaWhatsapp />
                <span>Need Contact Number?</span>
              </div>
            </div>

            <button className="mt-3 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition">
              Request Pricing
            </button>
          </div>
        </div>

        {/* =================== Venue Info =================== */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center sm:text-left">
            Ambara Suites
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:gap-3 mt-2">
            <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm font-medium">
              <FaStar className="mr-1" /> 4.5/5
            </span>
            <span className="text-gray-600 text-sm">134 Reviews</span>
          </div>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            For all your king-sized celebrations, Ambara Suites gives you a
            magnificent and humongous party area at budget-friendly prices and
            lets you steal all the spotlight for the day!{" "}
            <button className="text-pink-600 font-medium ml-1 hover:underline">
              Show More
            </button>
          </p>

          <div className="mt-5 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-blue-700 text-sm font-medium flex items-center justify-center sm:justify-start gap-2">
            <span>🎉 Hurry up! This venue is in high demand</span>
          </div>
        </div>

        {/* =================== Availability =================== */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Check live availability
          </h3>
          <div className="flex items-center text-pink-600 text-sm gap-2">
            <MdCalendarToday />
            <span>We have live availability for this venue</span>
          </div>
          <input
            type="date"
            className="mt-3 w-full border border-pink-200 rounded-md p-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
          />
        </div>

        {/* =================== Features & Policies =================== */}
        <div className="mt-10 border-t border-gray-100 pt-6 space-y-8">
          {/* Features */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              ✨ Features of Venue
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Ample parking space and valet services</li>
              <li>Serves both vegetarian and non-vegetarian food</li>
              <li>Affordable banquet hall for grand weddings and events</li>
              <li>In-house decorators and caterers for seamless planning</li>
            </ul>
          </section>

          {/* Policies */}
          <section>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              🏛 Venue Policies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-700 text-sm">
              <div>
                <h4 className="font-semibold">Timings & Slots</h4>
                <p>Morning - 7:30 AM - 3:30 PM</p>
                <p>Evening - 6:30 PM - 12:00 AM</p>
              </div>
              <div>
                <h4 className="font-semibold">Advance</h4>
                <p>25% at the time of booking</p>
              </div>
              <div>
                <h4 className="font-semibold">Cancellation</h4>
                <p>Non-cancellable</p>
              </div>
              <div>
                <h4 className="font-semibold">Parking</h4>
                <p>Valet provided by venue</p>
                <p>Space available for 20 vehicles</p>
              </div>
            </div>
          </section>
        </div>

        {/* =================== Ratings & Reviews =================== */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                ⭐ Ratings & Reviews
              </h2>
              <div className="flex items-center mt-1 text-sm">
                <span className="text-2xl font-bold text-pink-600">4.5</span>
                <span className="text-gray-500 ml-1">/5</span>
                <div className="flex ml-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500 ml-2">134 Ratings</span>
              </div>
            </div>
            <button className="text-pink-600 font-medium hover:underline text-sm">
              See All Reviews
            </button>
          </div>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-4 hover:shadow-md transition text-gray-700"
              >
                <h3 className="font-semibold flex items-center gap-2">
                  {review.name}
                  <span className="bg-pink-100 text-pink-600 px-2 py-0.5 rounded-md text-xs">
                    ⭐ 5/5
                  </span>
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Event Date: {review.date} | PAX: {review.pax}
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  {review.text}{" "}
                  {review.more && (
                    <span className="text-pink-600 cursor-pointer hover:underline">
                      Read more
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Write Review */}
          <div className="mt-8 border-t pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
            <span>Have something to share about the venue?</span>
            <button className="mt-3 sm:mt-0 px-4 py-2 border border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 font-medium">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
