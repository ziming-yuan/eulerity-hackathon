import styled from "styled-components";
import ProjectCard from "./ProjectCard";

import calendar1 from "../../assets/calendar/login.png";
import calendar2 from "../../assets/calendar/dashboard.png";
import calendar3 from "../../assets/calendar/new-calendar.png";
import calendar4 from "../../assets/calendar/create-door.png";
import calendar5 from "../../assets/calendar/edit-styling.png";
import calendar6 from "../../assets/calendar/view-page.png";

import spring1 from "../../assets/spring/spring-api.png";

import flask1 from "../../assets/flask/login.png";
import flask2 from "../../assets/flask/dash.png";
import flask3 from "../../assets/flask/filter.png";
import flask4 from "../../assets/flask/add-entry.png";
import flask5 from "../../assets/flask/edit-note.png";

import rsd1 from "../../assets/rsd/RSD-Post.png";
import rsd2 from "../../assets/rsd/RSD.png";

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
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 20px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

const projects = [
  {
    title: "Advent Calendar",
    images: [calendar1, calendar2, calendar3, calendar4, calendar5, calendar6],
    repo: "https://github.com/ziming-yuan/alignment-calendar",
    techstack:
      "React.js, Next.js, JavaScript, Figma, Next-Auth, Tailwind CSS, MongoDB, Vercel",
  },
  {
    title: "Spring Boot RESTful API",
    images: [spring1],
    repo: "https://github.com/ziming-yuan/spring-boot-proj",
    techstack: "Spring Boot, Java, Maven, Restful API, Swagger 3, MyBatis Plus",
  },
  {
    title: "Flask Repo",
    images: [flask1, flask2, flask3, flask4, flask5],
    repo: "https://github.com/ziming-yuan/ai-harms-repository",
    techstack: "Flask, Python, SQLite, SQLAlchemy, Bootstrap, Reddit APIs",
  },
  {
    title: "Revamp RSD website",
    images: [rsd1, rsd2],
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
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectGrid>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;
