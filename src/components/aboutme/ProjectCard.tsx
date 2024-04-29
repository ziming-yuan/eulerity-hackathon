import { useState } from "react";
import styled from "styled-components";

interface ProjectType {
  title: string;
  images: string[];
  repo: string;
  techstack: string;
}

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

const DescriptionStyled = styled.p`
  font-size: 1rem;
  padding: 10px;
  margin: 0;
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
        <strong>Tech stack:</strong> {project.techstack}
      </DescriptionStyled>
      <a href={project.repo} target="_blank">
        View on GitHub
      </a>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
