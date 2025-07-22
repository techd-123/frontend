import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const Card = styled.div`
  background-color: #fff;
  border-radius: 30px;
  padding: 40px;
  max-width: 600px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
  line-height: 1.3;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  cursor: pointer;
  color: #444;

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #fc5c65;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    position: relative;
  }

  input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 10px;
    height: 10px;
    background-color: #fc5c65;
    border-radius: 50%;
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border-radius: 50px;
  border: 2px solid #333;
  appearance: none;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 18px;
  color: #555;
`;

const SearchButton = styled.button`
  background-color: #fc5c65;
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &:hover {
    background-color: #ff6f71;
  }

  svg {
    font-size: 18px;
  }
`;

const SearchCard = () => {
  const [category, setCategory] = useState("venues");

  return (
    <Card>
      <Heading>
        Find top-rated venues
        <br />& vendors for every vibe
      </Heading>

      <RadioGroup>
        <RadioLabel>
          <input
            type="radio"
            value="venues"
            checked={category === "venues"}
            onChange={() => setCategory("venues")}
          />
          Venues
        </RadioLabel>
        <RadioLabel>
          <input
            type="radio"
            value="vendors"
            checked={category === "vendors"}
            onChange={() => setCategory("vendors")}
          />
          Vendors
        </RadioLabel>
      </RadioGroup>

      <FormRow>
        <SelectWrapper>
          <Select>
            <option>Locations</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </Select>
          <IconWrapper>
            <FiChevronDown />
          </IconWrapper>
        </SelectWrapper>

        <SearchButton>
          <FiSearch />
          Search
        </SearchButton>
      </FormRow>
    </Card>
  );
};

export default SearchCard;
