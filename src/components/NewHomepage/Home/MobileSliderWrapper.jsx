import React, { useState, useEffect } from "react";
import Slider from "./Slider";

const MobileSliderWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobile && <Slider />}</>;
};

export default MobileSliderWrapper;
