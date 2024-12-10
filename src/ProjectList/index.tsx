import React from "react";
import ProjectCard from "../ProjectCard";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

const projects = [
  {
    image: project1,
    title: "Auction House",
    description:
      "This project is the frontend application for an auction site where users can add items to be bid on and bid on items other users have put up for auction. The frontend interacts with an existing API to manage all functionality related to users, listings, and bids.",
    technologies: ["JavaScript", "Bootstrap", "API"],
    githubLink: "https://github.com/WeronikaMartinsen/SP2-Auction-House",
    liveLink: "https://bidme-auctionhouse.netlify.app/",
  },
  {
    image: project2,
    title: "Fashion Store",
    description:
      "This is an eCommerce store built with React. The application allows users to browse products, search for specific items, view individual product details, add items to a cart, and complete a checkout process. It also includes a contact form with validation.",
    technologies: ["React", "JavaScript", "Tailwind", "API"],
    githubLink: "https://github.com/WeronikaMartinsen/eCom",
    liveLink: "https://martinsen-react-app.netlify.app/",
  },
  {
    image: project3,
    title: "Holidaze",
    description:
      "A modern front-end application for Holidaze, an accommodation booking platform. This app enables customers to explore and book accommodations, while venue managers can manage their listings and bookings. Built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind", "API"],
    githubLink: "https://github.com/WeronikaMartinsen/projectExam2",
    liveLink: "https://holidaze-martinsen.netlify.app/",
  },
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
