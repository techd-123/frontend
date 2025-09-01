import React from "react";

const ConfusedSection = () => {
  return (
    <section className="bg-[#f9efe9] py-12 px-4 flex justify-center items-center  ">
      <div className="max-w-5xl w-full text-center border border-purple-400 rounded-lg p-8 flex flex-col gap-5 ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#3b0b3e] mb-2">
          Still Confused On Your Decision ?
        </h2>
        <p className="text-gray-600 mb-6">
          One of our team members will give you a quick call to understand what
          you’re looking for and connect you with trusted vendors who fit your
          needs.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select className="w-full md:w-1/4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
            <option>Select your vendors</option>
            <option>Photographers</option>
            <option>Caterers</option>
            <option>Planners</option>
            <option>Venues</option>
          </select>
          <button
            type="submit"
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-2 rounded-md"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConfusedSection;
