import React, { useState, useRef } from "react";
import styled from "styled-components";

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

const OTPForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OTPInputs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
`;

const OTPInput = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #ff6b6b;
  }
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e45757;
  }
`;

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    // You can add validation logic here
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Enter OTP</Title>
        <OTPForm onSubmit={handleSubmit}>
          <OTPInputs>
            {otp.map((digit, index) => (
              <OTPInput
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </OTPInputs>
          <Button type="submit">Verify OTP</Button>
        </OTPForm>
      </FormWrapper>
    </Container>
  );
};

export default OTPPage;
