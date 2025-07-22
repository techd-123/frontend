import React, { useState } from "react";
import styled from "styled-components";
import { registerUser } from '../Api/Axios'; // adjust path if needed

// Styled-components (same as yours)...

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffe2e2, #fad4c0);
  padding: 20px;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-width: 420px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #1f1f4e;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  margin-bottom: 20px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e45757;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  font-size: 14px;
  text-align: center;
  color: ${props => (props.success ? "green" : "red")};
`;

const MobileForm = () => {
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // digits only
    setMobile(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      setMessage("Please enter a valid 10-digit mobile number.");
      setSuccess(false);
      return;
    }

    try {
      const response = await registerUser({ phone: mobile });
      setMessage(response.message || "Registered successfully!");
      setSuccess(true);
    } catch (error) {
      setMessage("Registration failed. Please try again.",error);
      setSuccess(false);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Enter Mobile Number</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            type="text"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={handleChange}
            maxLength={10}
          />
          <Button type="submit">Submit</Button>
        </Form>
        {message && <Message success={success}>{message}</Message>}
      </FormWrapper>
    </Container>
  );
};

export default MobileForm;
