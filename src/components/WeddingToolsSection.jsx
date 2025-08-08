import React from "react";
import {
  FaClipboardList,
  FaDollarSign,
  FaMapMarkerAlt,
  FaUserFriends,
  FaBell,
  FaHandshake,
} from "react-icons/fa";
import GroupImage from "../assets/img/Group 32 1.svg";

const WeddingToolsSection = () => {
  const features = [
    {
      icon: <FaClipboardList />,
      bg: "bg-[#ff6b6b]",
      title: "Personalized Dashboard",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaDollarSign />,
      bg: "bg-[#ff6b6b]",
      title: "Budget & Expense Tracker",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaMapMarkerAlt />,
      bg: "bg-[#ff6b6b]",
      title: "Live Tracking & Updates",
      desc: "Organize every wedding detail",
    },
    {
      icon: <FaHandshake />,
      bg: "bg-[#f4c542]",
      title: "Vendor Booking System",
      desc: "Find top-rated vendors to bring your vision to life.",
    },
    {
      icon: <FaUserFriends />,
      bg: "bg-[#f4c542]",
      title: "Guest List & RSVP Manager",
      desc: "Streamline invitations, track responses, and more.",
    },
    {
      icon: <FaBell />,
      bg: "bg-[#f4c542]",
      title: "Live Chat & Notifications",
      desc: "Get instant updates and manage guests on the go.",
    },
  ];

  return (
    <div className="bg-[#fff8f2] flex  justify-center">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Section Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="flex-1 gap-3 flex flex-col">
            <h2 className="text-[32px] text-[#1f1f4e] font-bold mb-4">
              The Only Wedding Planning Tool You’ll Ever Need
            </h2>
            <p className="text-[16px] text-[#444] leading-relaxed">
              Plan, organize, and track your wedding stress-free with our
              all-in-one dashboard. Manage vendors, guests, and your budget—all
              in one place!
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 mt-10  sm:grid-cols-2 gap-6  ">
              {features.map((f, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div
                    className={`${f.bg} p-3 rounded-lg text-white text-lg flex items-center justify-center`}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[16px] font-semibold text-[#1f1f4e]">
                      {f.title}
                    </h4>
                    <p className="text-[14px] text-[#666]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <img
              src={GroupImage}
              alt="Wedding"
              className="w-full max-w-[400px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingToolsSection;
