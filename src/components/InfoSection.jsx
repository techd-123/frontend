import React from "react";

const InfoSection = () => {
  const stats = [
    { value: "11,500+", label: "Weddings" },
    { value: "100+", label: "Locations" },
    { value: "200+", label: "Sessions" },
    { value: "8HR", label: "Workshops" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center max-w-[1190px] mx-auto p-4 flex-col md:flex-row items-center gap-6 mt-8  lg:bg-transparent">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Box */}
            <div className="text-center">
              <h1 className="text-[3.5rem] font-bold leading-tight">
                {stat.value}
              </h1>
              <p className="text-sm sm:text-base text-[#b0b0b0] mt-2">
                {stat.label}
              </p>
            </div>

            {/* Divider (hidden on last item & on mobile) */}
            {index < stats.length - 1 && (
              <div className="hidden sm:block w-px h-14 bg-[#4b4b4b]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
