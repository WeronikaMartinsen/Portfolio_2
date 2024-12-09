import React from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="relative group overflow-hidden bg-neutral rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Project Image */}
      <div className="relative w-full h-60 md:h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-dark rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-center">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 m-2 text-sm bg-primary text-black rounded-lg hover:bg-accent transition-all"
          >
            GitHub Repo
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 m-2 text-sm border border-accent text-white rounded-lg hover:bg-accent hover:text-black transition-all"
          >
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
