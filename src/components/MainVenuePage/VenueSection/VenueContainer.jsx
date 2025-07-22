// App.js or Home.js

import React from "react";
import styled from "styled-components";
import VenueCard from "./VenueCard";

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const sampleVenues = [
  {
    title: "Kumarakom Lake Resort, Kerala",
    location: "Kottayam City, Kottayam",
    price: "₹500",
    capacity: "10 to 100",
    images: [
      "/images/kumarakom1.jpg",
      "/images/kumarakom2.jpg",
      "/images/kumarakom3.jpg",
    ],
  },
  {
    title: "Sterling Lake Palace Alleppey",
    location: "Alappuzha City, Alappuzha",
    price: "₹500",
    capacity: "10 to 100",
    images: ["/images/alleppey1.jpg", "/images/alleppey2.jpg"],
  },
  {
    title: "Kumarakom Lake Resort, Kerala",
    location: "Kottayam City, Kottayam",
    price: "₹500",
    capacity: "10 to 100",
    images: [
      "/images/kumarakom1.jpg",
      "/images/kumarakom2.jpg",
      "/images/kumarakom3.jpg",
    ],
  },
  {
    title: "Sterling Lake Palace Alleppey",
    location: "Alappuzha City, Alappuzha",
    price: "₹500",
    capacity: "10 to 100",
    images: ["/images/alleppey1.jpg", "/images/alleppey2.jpg"],
  },
];

export default function VenueContainer() {
  return (
    <Container>
      <h2>Other options near Thiruvananthapuram:</h2>
      <CardGrid>
        {sampleVenues.map((venue, index) => (
          <VenueCard key={index} {...venue} />
        ))}
      </CardGrid>
    </Container>
  );
}
