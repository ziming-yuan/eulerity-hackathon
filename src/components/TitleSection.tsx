import React from "react";
import styled from "styled-components";
import Background from "../assets/bg.jpg";

const TitleSectionContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Background});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: left;
  padding: 20px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  height: 400px;
  /* Small screens */
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
`;

const TitleSection = () => {
  return (
    <TitleSectionContainer>
      <Title>Find your favorite pet pictures</Title>
    </TitleSectionContainer>
  );
};

export default TitleSection;
