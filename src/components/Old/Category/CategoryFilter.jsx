import React, { useState } from "react";
import styled from "styled-components";

// Category buttons
const categories = ["Photography", "Wedding", "Food", "Lights"];

// Card data
const allCards = {
  Photography: [
    { title: "Candid Moments", img: "https://picsum.photos/id/1011/300/200" },
    { title: "Pre-Wedding", img: "https://picsum.photos/id/1012/300/200" }
  ],
  Wedding: [
    { title: "Mandap Decor", img: "https://picsum.photos/id/1013/300/200" },
    { title: "Bride Entry", img: "https://picsum.photos/id/1015/300/200" }
  ],
  Food: [
    { title: "Buffet", img: "https://picsum.photos/id/1025/300/200" },
    { title: "Live Counters", img: "https://picsum.photos/id/1035/300/200" }
  ],
  Lights: [
    { title: "Fairy Lights", img: "https://picsum.photos/id/1045/300/200" },
    { title: "LED Setup", img: "https://picsum.photos/id/1050/300/200" }
  ]
};

// Styled components
const Wrapper = styled.div`
  padding: 40px;
  background: #fff8e7;
  min-height: 100vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => (props.active ? "#ff7a7a" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 1px solid #ccc;
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #ff7a7a;
    color: #fff;
  }
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  width: 300px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  margin: 10px;
  font-size: 18px;
  color: #333;
`;

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Photography");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const cardsToShow = allCards[activeCategory];

  return (
    <Wrapper>
      <ButtonGroup>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            active={cat === activeCategory}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </ButtonGroup>

      <CardGrid>
        {cardsToShow.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.img} alt={card.title} />
            <CardTitle>{card.title}</CardTitle>
          </Card>
        ))}
      </CardGrid>
    </Wrapper>
  );
};

export default CategoryFilter;
