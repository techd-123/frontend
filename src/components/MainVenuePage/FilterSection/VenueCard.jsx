import React from "react";
import styled from "styled-components";
import { FiMapPin, FiUsers } from "react-icons/fi";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 16px;
  flex: 1;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
`;

const Location = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const Meta = styled.div`
  font-size: 14px;
  display: flex;
  gap: 16px;
  color: #333;

  svg {
    margin-right: 4px;
  }
`;

const Button = styled.button`
  border: 2px solid #fc5c65;
  color: #fc5c65;
  background: transparent;
  border-radius: 999px;
  padding: 10px;
  margin: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #fc5c65;
    color: #fff;
  }
`;

const VenueCard = ({ title, location, price, capacity, image }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Info>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Meta>
          <span>
            <FiMapPin /> From {price}
          </span>
          <span>
            <FiUsers /> {capacity}
          </span>
        </Meta>
      </Info>
      <Button>Request Pricing</Button>
    </Card>
  );
};

export default VenueCard;
