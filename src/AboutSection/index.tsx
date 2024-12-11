import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Particles } from "react-tsparticles";
import aboutMe from "../images/aboutMe.png";

const AboutSection: React.FC = () => {
  return (
    <div id="about-me" className="relative text-white mt-10">
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
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-16 py-10">
        {/* Top-Left: Profile Image and Info */}
        <div className="flex flex-col items-start justify-start space-y-6">
          <img
            className="border-4 border-accent rounded-full w-40 h-40 md:w-56 md:h-56 object-cover shadow-lg"
            src={aboutMe}
            alt="Profile picture of Weronika Martinsen"
          />
          <div className="flex flex-col space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              Weronika Martinsen
            </h2>
            <div className="flex items-center text-sm text-gray-300 space-x-2">
              <FaCalendarAlt className="text-accent" />
              <span>23.07.92</span>
            </div>
            <div className="flex items-center text-sm text-gray-300 space-x-2">
              <FaMapMarkerAlt className="text-accent" />
              <a
                href="https://www.google.com/maps/place/Stord,+Norway"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent underline"
              >
                Stord, Norway
              </a>
            </div>
            <div className="flex items-center text-sm text-gray-300 space-x-2">
              <FaEnvelope className="text-accent" />
              <span>weronikamartinsen@gmail.com</span>
            </div>
            <div className="flex items-center text-sm text-gray-300 space-x-2">
              <FaPhoneAlt className="text-accent" />
              <span>(47) 92501177</span>
            </div>
          </div>
        </div>

        {/* Top-Right: About Me */}
        <div className="flex flex-col items-end justify-start space-y-6">
          <h4 className="text-xl md:text-2xl font-bold border-b-4 border-accent pb-2">
            ABOUT ME
          </h4>
          <p className="leading-relaxed text-gray-200 text-sm md:text-base">
            I’m a passionate Frontend Developer with a sharp eye for detail and
            design. Currently pursuing my degree at Noroff University, I
            specialize in crafting intuitive, accessible, and visually appealing
            web applications that solve real-world problems.
          </p>
          <p className="leading-relaxed text-gray-200 text-sm md:text-base">
            In my free time, I enjoy exploring creative design, contributing to
            open-source projects, and learning new technologies like Next.js and
            Tailwind CSS.
          </p>
        </div>

        {/* Bottom-Left: Projects */}
        <div className="flex flex-col items-start justify-start space-y-6">
          <h4 className="text-xl md:text-2xl font-bold border-b-4 border-accent pb-2">
            PROJECTS
          </h4>
          <ul className="list-disc pl-4 space-y-2">
            <li>
              <a
                href="https://weronikamartinsen.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                Portfolio Website
              </a>{" "}
              - Showcasing my work and personal projects.
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
              - Featuring frontend experiments and design prototypes.
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
              - Built with React and OpenWeather API.
            </li>
          </ul>
        </div>

        {/* Bottom-Right: Education & Skills */}
        <div className="flex flex-col items-end justify-start space-y-6">
          <h4 className="text-xl md:text-2xl font-bold border-b-4 border-accent pb-2">
            EDUCATION & SKILLS
          </h4>
          <p className="text-sm md:text-base text-gray-300 text-right">
            <strong>Noroff University College</strong> <br />
            Bachelor’s in Frontend Development <br />
            <em>2023–Present</em>
          </p>
          <p className="text-sm md:text-base text-gray-300 text-right">
            <strong>Stord High School</strong> <br />
            General Studies <br />
            <em>Graduated: 2011</em>
          </p>
          <h5 className="text-lg font-bold">Skills</h5>
          <ul className="list-disc pl-4 space-y-2 text-sm md:text-base text-gray-300 text-right">
            <li>HTML, CSS, JavaScript, React</li>
            <li>Tailwind CSS, Next.js, Git</li>
            <li>Responsive Design & Accessibility</li>
            <li>Figma & UI/UX Prototyping</li>
          </ul>
        </div>

        {/* Embedded Google Map */}
        <div className="col-span-1 md:col-span-2">
          <iframe
            title="Stord Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64130.229385432506!2d5.335765602348266!3d59.781847228204155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463a34d3695d9bb3%3A0xcfd88213302eb45e!2sStord%2C%20Norway!5e0!3m2!1sen!2sno!4v1234567890"
            width="100%"
            height="250"
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-md border-2 border-accent"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
