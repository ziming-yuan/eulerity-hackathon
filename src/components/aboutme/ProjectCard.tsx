import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ProjectType } from "../../types/project";

const fadeIn = keyframes`
  from {
    scale: 0.9;
    opacity: 0;
  }
  to {
    scale: 1;
    opacity: 1;
  };
`;

const ProjectCardStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: ${(props) => props.theme.borderRadius};
  text-decoration: none;
  color: inherit;
  margin: 10px;
  padding: 15px;
  width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  animation: ${fadeIn} ease-in;
  animation-timeline: view();
  animation-range-start: cover;
  animation-range-end: 300px;
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    width: 400px;
  }
`;

const CarouselButtonStyled = styled.button`
  position: absolute;
  top: 185px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  &:hover {
    opacity: 0.7;
  }
  @media (max-width: 768px) {
    top: 135px;
  }
`;

const ProjectImageStyled = styled.img`
  width: 100%;
  height: 400px;
  border-radius: ${(props) => props.theme.borderRadius};
  object-fit: cover;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const ProjectTitleStyled = styled.h3`
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 0;
`;

const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const ParagraphStyled = styled.p`
  font-size: 1rem;
  margin: 5px 10px;
`;

const LinkStyled = styled.a`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.darker};
  text-decoration: underline;
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((current) => (current + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? project.images.length - 1 : current - 1
    );
  };

  return (
    <ProjectCardStyled>
      {project.images.length > 1 && (
        <>
          <CarouselButtonStyled onClick={prevImage} style={{ left: "10px" }}>
            &lsaquo;
          </CarouselButtonStyled>
          <CarouselButtonStyled onClick={nextImage} style={{ right: "10px" }}>
            &rsaquo;
          </CarouselButtonStyled>
        </>
      )}
      <ProjectImageStyled
        src={project.images[currentImageIndex]}
        alt={project.title}
      />
      <ProjectTitleStyled>{project.title}</ProjectTitleStyled>
      <DescriptionStyled>
        <ParagraphStyled>
          <strong>Description</strong>
        </ParagraphStyled>
        <ParagraphStyled>{project.description}</ParagraphStyled>
        <ParagraphStyled>
          <strong>Tech stack</strong>
        </ParagraphStyled>
        <ParagraphStyled>{project.techstack}</ParagraphStyled>
      </DescriptionStyled>
      {project.github ? (
        <LinkStyled
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </LinkStyled>
      ) : (
        <LinkStyled
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the website
        </LinkStyled>
      )}
    </ProjectCardStyled>
  );
};

export default ProjectCard;
