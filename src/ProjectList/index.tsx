import React from "react";
import ProjectCard from "../ProjectCard";

const projects = [
  {
    image: "https://via.placeholder.com/600", // Replace with real project image
    title: "Project One",
    description: "A brief description of the project.",
    technologies: ["React", "Tailwind CSS", "API"],
    githubLink: "https://github.com/example/project-one",
    liveLink: "https://example.com/project-one",
  },
  {
    image: "https://via.placeholder.com/600", // Replace with real project image
    title: "Project Two",
    description: "Another project description goes here.",
    technologies: ["JavaScript", "Bootstrap", "Node.js"],
    githubLink: "https://github.com/example/project-two",
    liveLink: "https://example.com/project-two",
  },
  // Add more projects as needed
];

const ProjectList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
      ))}
    </div>
  );
};

export default ProjectList;
