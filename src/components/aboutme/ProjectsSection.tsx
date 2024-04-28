import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectsSectionContainer = styled.section`
  width: 100%;
`;

const ProjectCard = styled(Link)`
  display: block;
  background-color: #f9f9f9;
  border-radius: ${(props) => props.theme.borderRadius};
  text-decoration: none;
  color: inherit;
  margin: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${(props) => props.theme.borderRadius};
  object-fit: cover;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 10px;
`;

const projects = [
  {
    title: "Project One",
    image: "",
    repo: "",
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer>
      {projects.map((project, index) => (
        <ProjectCard to={project.repo} key={index}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectCard>
      ))}
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
