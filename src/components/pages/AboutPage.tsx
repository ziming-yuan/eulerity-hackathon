import React from "react";
import styled from "styled-components";
import ProfileSection from "../aboutme/ProfileSection";
import ProjectsSection from "../aboutme/ProjectsSection";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 80px);
  max-width: 1350px;
  margin: 20px auto;
  @media (max-width: 576px) {
    width: calc(100% - 40px);
  }
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <ProfileSection />
      <ProjectsSection />
    </AboutContainer>
  );
};

export default AboutPage;
