import styled from "styled-components";
import { Link } from "react-router-dom";
import AdventCalendar from "../../assets/advent-calendar.png";
import SpringAPI from "../../assets/spring-api.png";
import AIHarms from "../../assets/ai-harms.png";
import rsdPosts from "../../assets/RSD-Post.png";

const ProjectsSectionContainer = styled.section`
  width: 100%;
`;

const ProjectSectionTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-left: 10px;
  font-size: 2em;
  margin-bottom: 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: ${(props) => props.theme.borderRadius};
  text-decoration: none;
  color: inherit;
  margin: 10px;
  padding: 15px;
  width: 300px;
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
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  padding: 10px;
  margin: 0;
`;

const projects = [
  {
    title: "Advent Calendar",
    image: AdventCalendar,
    repo: "https://github.com/ziming-yuan/alignment-calendar",
    techstack:
      "React.js, Next.js, JavaScript, Figma, Next-Auth, Tailwind CSS, MongoDB, Vercel",
  },
  {
    title: "Spring Boot RESTful API",
    image: SpringAPI,
    repo: "https://github.com/ziming-yuan/spring-boot-proj",
    techstack: "Spring Boot, Java, Maven, Restful API, Swagger 3, MyBatis Plus",
  },
  {
    title: "Flask Repo",
    image: AIHarms,
    repo: "https://github.com/ziming-yuan/ai-harms-repository",
    techstack: "Flask, Python, SQLite, SQLAlchemy, Bootstrap, Reddit APIs",
  },
  {
    title: "Revamp RSD website",
    image: rsdPosts,
    repo: "https://rsd2.sccs.swarthmore.edu/",
    techstack: "React.js, Next.js, TypeScript, Docker",
  },
];

const ProjectsSection = () => {
  return (
    <ProjectsSectionContainer>
      <ProjectSectionTitle>Projects</ProjectSectionTitle>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard to={project.repo} key={index} target="_blank">
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>
              <strong>Tech stack:</strong> {project.techstack}
            </Description>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
