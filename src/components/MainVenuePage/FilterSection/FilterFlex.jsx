import React from "react";
import styled from "styled-components";
import FilterPanel from "./FilterPanel";
import VenueCards from "./VenueCards";
import HeroSearch from "../../NewHomepage/Home/VendorPage/HeroSearch";
import VenueContainer from "../VenueSection/VenueContainer";

const Container = styled.div`
  display: flex;
`;
const FilterFlex = () => {
  return (
    <>
      <Container>
        <FilterPanel />
        <VenueCards />
      </Container>
      <VenueContainer />
    </>
  );
};

export default FilterFlex;
