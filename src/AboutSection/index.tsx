import React from "react";
import { Particles } from "react-tsparticles";
import aboutMe from "../images/aboutMe.png";

const AboutSection: React.FC = () => {
  return (
    <div className="relative h-full text-white mt-10">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Particles
          options={{
            particles: {
              color: { value: "#59D9C1" },
              links: { enable: true, color: "#59D9C1" },
              move: { enable: true, speed: 2 },
            },
          }}
        />
      </div>

      {/* Content Layout */}
      <div className="relative z-10 grid grid-cols-2 grid-rows-2 gap-8 h-full px-4 md:px-16">
        {/* Top-Left: Profile Image and Basic Info */}
        <div className="flex flex-col items-start justify-center space-y-4">
          <img
            className="border-4 border-accent rounded-full w-32 h-32 md:w-48 md:h-48 object-cover"
            src={aboutMe}
            alt="Profile picture of Weronika Martinsen"
          />
          <h3 className="text-xl md:text-2xl font-bold">Weronika Martinsen</h3>
          <p>
            <i className="fa-regular fa-calendar"></i> 23.07.92 <br />
            <i className="fa-solid fa-location-dot"></i> Stord, Norway
          </p>
        </div>

        {/* Top-Right: About Me */}
        <div className="flex flex-col items-end justify-center text-right space-y-4">
          <h4 className="text-xl font-bold border-b-2 border-accent pb-2">
            ABOUT ME
          </h4>
          <p>
            I am a passionate Frontend Developer with a keen eye for design and
            clean, semantic code. Currently in my second year at Noroff
            University, I love creating intuitive and engaging user experiences
            that make a difference.
          </p>
        </div>

        {/* Bottom-Left: Projects */}
        <div className="flex flex-col items-start justify-center space-y-4">
          <h4 className="text-xl font-bold border-b-2 border-accent pb-2">
            PROJECTS
          </h4>
          <ul className="list-disc pl-4">
            <li>
              <a
                href="https://weronikamartinsen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Portfolio Website
              </a>{" "}
              - A custom-designed portfolio showcasing my work.
            </li>
            <li>
              <a
                href="https://github.com/weronikamartinsen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                GitHub Repository
              </a>{" "}
              - Collection of my frontend projects.
            </li>
            <li>
              <a
                href="https://github.com/weronikamartinsen/WeatherApp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Weather App
              </a>{" "}
              - A React-based weather app.
            </li>
          </ul>
        </div>

        {/* Bottom-Right: Education */}
        <div className="flex flex-col items-end justify-center text-right space-y-4">
          <h4 className="text-xl font-bold border-b-2 border-accent pb-2">
            EDUCATION
          </h4>
          <p>
            <strong>Noroff University College</strong> - Bachelor’s in Frontend
            Development (2023–Present)
          </p>
          <p>
            <strong>Stord High School</strong> - General Studies, completed in
            2011
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
