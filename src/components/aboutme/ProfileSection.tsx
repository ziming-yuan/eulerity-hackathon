import styled from "styled-components";
import Profile from "../../assets/profile.png";
import { Link } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../icons/linkedin.svg";
import { ReactComponent as LinkIcon } from "../../icons/link.svg";

const ProfileSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileDetails = styled.div`
  max-width: 60%;
  padding: 30px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  svg {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    transition: transform 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
      transform: translateY(-3px);
    }
  }
`;

const Description = styled.p`
  font-size: 1rem;
`;

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
      <ProfileImage src={Profile} />
      <ProfileDetails>
        <Title>
          Ziming Yuan{" "}
          <a href="https://www.linkedin.com/in/ziming-yuan">
            <LinkedInIcon />
          </a>
          <a href="https://www.github.com/ziming-yuan">
            <GithubIcon />
          </a>
          <Link to={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank">
            <LinkIcon />
          </Link>
        </Title>
        <Description>
          I am a full-stack web developer with a strong foundation in computer
          science and mathematics, currently pursuing a double major at
          Swarthmore College and preparing to further my education in computer
          science at Carnegie Mellon University. I am proficient in a diverse
          set of programming languages and frameworks including React, Next.js,
          Spring Boot, and Flask, making me well-equipped to tackle complex
          software challenges.
        </Description>
        <Description>
          Eager to bring my expertise in web technologies and my passion for
          learning to Eulerity, I am excited about the opportunity to develop
          new features and maintain a robust codebase, contributing to the
          company's mission of empowering small businesses with cutting-edge
          technology.
        </Description>
      </ProfileDetails>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
