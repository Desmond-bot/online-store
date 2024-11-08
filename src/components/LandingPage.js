import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const WelcomeMessage = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const LandingPage = () => {
  const navigate = useNavigate();

  // Handle navigation to the store page
  const handleContinueAsGuest = () => {
    navigate("/store");
  };

  return (
    <Container>
      {/* Display the cover image */}
      <CoverImage src={"./images/home-page.jpg"} alt="Book Store Cover" />
      <h1>Welcome!</h1>
      <WelcomeMessage>
        Welcome to X-Klusive Book Store, where you can find any and all books
        related to computer science. Whether you're a novice or an experienced
        developer looking to brush up on the latest technology, we've got
        something for you. From material covering the basics, such as data
        structures and algorithms all the way through to complex topics such as
        solution architecture and design patterns.
      </WelcomeMessage>
      <ButtonContainer>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Button onClick={handleContinueAsGuest}>Continue as Guest</Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingPage;
