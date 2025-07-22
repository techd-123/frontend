import React from "react";
import styled from "styled-components";

const Sidebar = styled.div`
  width: 260px;
  padding: 20px;
  border-right: 1px solid #eee;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h4`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Checkbox = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;

  input {
    margin-right: 8px;
  }
`;

const FilterPanel = () => (
  <Sidebar>
    <Section>
      <Title>Wedding Venues</Title>
      <Checkbox>
        <input type="checkbox" /> Banquet Halls
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> Hotels
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> Marriage Garden
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> Wedding Resorts
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> Farmhouses
      </Checkbox>
    </Section>

    <Section>
      <Title>Venue Budget</Title>
      <Checkbox>
        <input type="checkbox" /> ₹0 - ₹25,000
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> ₹25,000 - ₹75,000
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> ₹75,000 - ₹1,00,000
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> Above ₹1,00,000
      </Checkbox>
    </Section>

    <Section>
      <Title>Seating Capacity</Title>
      <Checkbox>
        <input type="checkbox" /> 0-100
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> 100-250
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> 250-500
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> 500-1000
      </Checkbox>
      <Checkbox>
        <input type="checkbox" /> 1000 & more
      </Checkbox>
    </Section>
  </Sidebar>
);

export default FilterPanel;
