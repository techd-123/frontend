import React from "react";
import {
  FaUser,
  FaWallet,
  FaCalendarAlt,
  FaListAlt,
  FaGlobe,
  FaComments,
} from "react-icons/fa";
import Header from "../common/Header";

const WhyPlanHere = () => {
  const features = [
    {
      icon: <FaUser size={28} />,
      title: "Personalized Dashboard",
      desc: "Organize every wedding detail",
      bgColor: "bg-[#905BA3]",
    },
    {
      icon: <FaWallet size={28} />,
      title: "Budget & Expense Tracker",
      desc: "Organize every wedding detail",
      bgColor: "bg-[#E783B5]",
    },
    {
      icon: <FaCalendarAlt size={28} />,
      title: "Vendor Booking System",
      desc: "Find top-rated vendors to bring your vision to life.",
      bgColor: "bg-[#E783B5]",
    },
    {
      icon: <FaListAlt size={28} />,
      title: "Guest List & RSVP Manager",
      desc: "Streamline invitations, track responses, and many more.",
      bgColor: "bg-[#905BA3]",
    },
    {
      icon: <FaGlobe size={28} />,
      title: "Live Tracking & Updates",
      desc: "Organize every wedding detail",
      bgColor: "bg-[#E783B5]",
    },
    {
      icon: <FaComments size={28} />,
      title: "Live Chat & Notifications",
      desc: "Get instant updates, important notifications in your fingertips.",
      bgColor: "bg-[#905BA3]",
    },
  ];

  return (
    <>
    <Header/>
    <section className="bg-[#F0F0FC] py-12 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold pb-10">
            Why Plan IT Here ?
          </h2>
          {/* <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Feugiat dictumst erat turpis
            libero diam lectus urna pulvinar metus. Arcu euismod semper sed
            donec morbi integer. Dui massa porttitor arcu amet nisl mauris
            tincidunt nisi at. Vestibulum sit vel amet sed aliquet consectetur
            in.
          </p> */}

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-lg p-4 hover:shadow-lg transition"
              >
                <div className={`p-3 ${feature.bgColor} text-white rounded-lg`}>
                  {feature.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/third.svg"
            alt="Why Plan Here"
            className="rounded-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyPlanHere;
