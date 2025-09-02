import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import HeroSearch from "./VendorPage/HeroSearch";
import FilterFlex from "../../MainVenuePage/FilterSection/FilterFlex";
import Accordion from "../pages/Accordion";
import ConfusedSection from "../pages/ConfusedSection";

const FilterPage = () => {
  return (
    <>
      <Header />
      <HeroSearch />
      <FilterFlex />
      <Accordion />
      <ConfusedSection />
      <Footer />
    </>
  );
};

export default FilterPage;
