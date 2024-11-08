import React from "react";
import styled from "styled-components";

const HelpContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const HelpSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #007bff;
`;

const Help = () => {
  return (
    <HelpContainer>
      <h1>Help</h1>
      <HelpSection>
        <SectionTitle>Shipping Options</SectionTitle>
        <p>We offer the following shipping options:</p>
        <ul>
          <li>
            <strong>Standard Shipping:</strong> Takes 5-7 business days.
          </li>
          <li>
            <strong>Express Shipping:</strong> Takes 1-2 business days.
          </li>
        </ul>
      </HelpSection>
      <HelpSection>
        <SectionTitle>Contact Us</SectionTitle>
        <p>If you have any questions, please contact our support team:</p>
        <ul>
          <li>Email: support@webber.com</li>
          <li>Phone: 1-800-123-4567</li>
        </ul>
      </HelpSection>
    </HelpContainer>
  );
};

export default Help;
