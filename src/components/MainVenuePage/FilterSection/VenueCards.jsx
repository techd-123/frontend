import React from "react";
import styled from "styled-components";
import VenueCard from "./VenueCard";

const VenueWrapper = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const TitleTabs = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;

  span {
    cursor: pointer;
    padding-bottom: 4px;
  }

  span.active {
    border-bottom: 3px solid black;
  }
`;

const SubText = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  background-color: #eaf8f6;
  padding: 8px 14px;
  border-radius: 6px;
  width: fit-content;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const VenueCards = () => {
  // Sample data
  const venues = [
    {
      title: "Ambara Suites",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://source.unsplash.com/400x300/?wedding",
    },
    {
      title: "O by Tamara",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹1600",
      capacity: "10 to 1000",
      image: "https://source.unsplash.com/400x300/?hotel",
    },
    {
      title: "The Leela Kovalam",
      location: "Kovalam, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://source.unsplash.com/400x300/?resort",
    },
    {
      title: "Ambara Suites",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://source.unsplash.com/400x300/?wedding",
    },
    {
      title: "O by Tamara",
      location: "Ambalamukku, Thiruvananthapuram",
      price: "₹1600",
      capacity: "10 to 1000",
      image: "https://source.unsplash.com/400x300/?hotel",
    },
    {
      title: "The Leela Kovalam",
      location: "Kovalam, Thiruvananthapuram",
      price: "₹500",
      capacity: "10 to 100",
      image: "https://source.unsplash.com/400x300/?resort",
    },
  ];

  return (
    <VenueWrapper>
      <Header>
        <TitleTabs>
          <span className="active">Venues</span>
          <span>Vendors</span>
        </TitleTabs>
        <SubText>
          Find your kind of place for the celebration to go down.
        </SubText>
      </Header>

      <Grid>
        {venues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </Grid>
    </VenueWrapper>
  );
};

export default VenueCards;
