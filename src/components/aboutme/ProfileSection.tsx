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
          <a
            href="https://www.linkedin.com/in/ziming-yuan"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.github.com/ziming-yuan"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <Link to={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank">
            <LinkIcon />
          </Link>
        </Title>
        <Description>
          I am a full-stack web developer nearing completion of a double major
          in computer science and mathematics at Swarthmore College, with plans
          to continue my studies at Carnegie Mellon University. My technical
          proficiency spans React, Next.js, Spring Boot, and Flask. I love
          crafting creative and effective solutions, focusing on user-friendly
          and visually appealing interfaces.
        </Description>
        <Description>
          As a teaching assistant and research assistant at Swarthmore College,
          I've deepened my expertise in algorithms, parallel computing, and
          human-computer interaction. I'm also an active member of the
          Swarthmore College Computer Society, enhancing our community's digital
          infrastructure. These roles have sharpened my skills in teamwork and
          user-centered design.
        </Description>
        <Description>
          I am excited to apply my passion for software engineering at Eulerity,
          where I look forward to developing innovative features and supporting
          small businesses with advanced technology solutions.
        </Description>
      </ProfileDetails>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
