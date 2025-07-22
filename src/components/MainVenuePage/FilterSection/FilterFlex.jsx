import React from "react";
import styled from "styled-components";
import FilterPanel from "./FilterPanel";
import VenueCards from "./VenueCards";

const Container = styled.div`
  display: flex;
`;
const FilterFlex = () => {
  return (
    <Container>
      <FilterPanel />
      <VenueCards />
    </Container>
  );
};

export default FilterFlex;
