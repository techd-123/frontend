import Star from "../assets/images/star.png";
import LightBox from "../assets/images/lightbox.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/mobile");
  };

  return (
    <div
      className="bg-[#ffd16630] bg-repeat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Ccircle cx='5' cy='5' r='2' fill='%23e6b85c' fill-opacity='0.15'/%3E%3C/svg%3E")`,
      }}
    >
      {/* Top Hero Section */}
      <div
        className="bg-[#feef79] mt-5 rounded-b-[80px] flex justify-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30 Q15 0 30 30 T60 30 V60 H0 Z' fill='%23e6b85c' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="flex flex-col justify-center items-center text-center min-h-[60vh] max-w-[1000px] mx-auto gap-5 p-4 relative">
          {/* Star Image & Heading */}
          <div className="relative inline-block">
            <h1 className="m-0 pl-4 inline-block text-[35px] sm:text-[50px] md:text-[65px] text-[#211f54] font-bold leading-tight">
              Weddings, Events, Meetups & <br /> Conferences
            </h1>
          </div>

          {/* Description */}
          <p className="text-[#6e7191] text-lg md:text-xl font-semibold">
            "Bringing Your Dream Wedding to Life – Anywhere in the World! ✨💍
            We specialize in planning, designing, and crafting unforgettable
            weddings for global clients. Whether it's an intimate ceremony or a
            grand celebration, we make your special day magical—no matter where
            you are!"
          </p>

          {/* Button */}
          <div>
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-full bg-[#ff6b6b] text-white hover:bg-[#e45b5b] transition font-medium"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col  items-center">
        <div className="max-w-[1200px] w-full m-auto p-4 flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={LightBox}
              alt="LightBox"
              className="w-full max-w-[400px]"
            />
          </div>

          {/* Text Content */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-[28px] sm:text-[35px] md:text-[42px] font-bold text-[#211f54]">
              Crafting Unforgettable wedding Parties with Creativity and Fun!
            </h2>
            <p className="text-[#6e7191] text-lg md:text-xl font-semibold mt-3">
              Join us in creating a celebration your child will remember
              forever. From themed parties to enchanting decorations, we bring
              dreams to life!
            </p>

            {/* Buttons */}
            <div className="flex flex-col   sm:flex-row items-start sm:items-center gap-4 mt-5">
              <button className="px-6 py-3 rounded-full bg-[#2f1d41] text-white hover:bg-[#241330] transition font-medium">
                CONNECT US
              </button>

              <div className="flex items-center gap-2 cursor-pointer">
                <button className="bg-transparent text-[#2f1d41] font-bold text-sm">
                  CONNECT US
                </button>
                <ArrowForwardIcon className="text-[#2f1d41]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom WEDDING Text */}
      <div className="flex justify-center items-center   md:bg-transparent">
        <h1 className="text-[62px] sm:text-[64px] md:text-[120px] lg:text-[200px] font-bold text-[#b0babf]">
          WEDDING
        </h1>
      </div>
    </div>
  );
};

export default HeroPage;
