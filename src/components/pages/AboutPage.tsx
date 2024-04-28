import React from "react";
import styled from "styled-components";
import ProfileSection from "../aboutme/ProfileSection";
import ProjectsSection from "../aboutme/ProjectsSection";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
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
