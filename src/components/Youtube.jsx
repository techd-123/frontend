import React from "react";
import youtubeIcon from "../assets/images/youtube.svg";
import listImage1 from "../assets/images/youlist.svg";
import listImage2 from "../assets/images/Listitem.svg";

const Youtube = () => {
  return (
    <div className="max-w-[1800px] mx-auto py-16 p-3">
      <div className="flex flex-col md:flex-row">
        {/* First Section */}
        <div
          className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url(${listImage1})` }}
        >
          <img
            src={youtubeIcon}
            alt="YouTube 1"
            className="absolute top-1/2 left-1/2 w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          />
        </div>

        {/* Second Section */}
        <div
          className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[700px] bg-cover bg-center"
          style={{ backgroundImage: `url(${listImage2})` }}
        >
          <img
            src={youtubeIcon}
            alt="YouTube 2"
            className="absolute top-1/2 left-1/2 w-[70px] sm:w-[100px] h-[70px] sm:h-[100px] -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
