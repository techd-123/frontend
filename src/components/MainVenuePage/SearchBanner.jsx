import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/images/searchbanner.jpg"; // your image path
import SearchCard from "./SearchCard";

const BannerWrapper = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 100px;
`;

const SearchBanner = () => {
  return (
    <BannerWrapper>
      <SearchCard />
    </BannerWrapper>
  );
};

export default SearchBanner;
