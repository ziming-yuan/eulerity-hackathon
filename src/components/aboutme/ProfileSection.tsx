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
          I am a full-stack web developer with a passion for building
          user-friendly websites. I have experience working with React, Next.js,
          and other web frameworks including Spring Boot and Flask. I am always
          eager to learn new things and improve my skills.
        </Description>
        <Description>
          I will be graduating from Swarthmore College in May 2024 with a double
          major in computer science and math. I will be joining Carnegie Mellon
          University for its MSCS program this fall to further my skills.
        </Description>
      </ProfileDetails>
    </ProfileSectionContainer>
  );
};

export default ProfileSection;
