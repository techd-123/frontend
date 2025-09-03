import React from "react";
import NavBar from "./NavBar";
import HeroPage from "./HeroPage";
import InfoSection from "./InfoSection";
import Slider from "./Slider";
import VendorSection from "./VendorSection";
import WeddingServices from "./WeddingServices";
import Accordion from "./Accordion";
import Youtube from "./Youtube";
import Connect from "./Connect";
import Footer from "./Footer";
import WeddingDestinationsSlider from "./WeddingDestinationsSlider";
import WeddingToolsSection from "./WeddingToolsSection";
import UnderMaintenance from "../Mesages/UnderMaintenance";
const Home = () => {
  return (
    <>
      <UnderMaintenance />
      <NavBar />
      <HeroPage />
      <div className="hidden sm:block">
        <InfoSection />
      </div>
      <Slider />
      <VendorSection />
      {/* <WeddingToolsSection /> */}
      <div className="hidden sm:block">
        <WeddingServices />
      </div>
      <WeddingDestinationsSlider />
      <div className="hidden sm:block">
        <Accordion />
      </div>

      <div className="hidden sm:block">
        <Youtube />
      </div>

      <Connect />

      <div className="hidden sm:block">
        <Footer />
      </div>
    </>
  );
};

export default Home;
