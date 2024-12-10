import React from "react";
import { FaDownload } from "react-icons/fa";
import { Particles } from "react-tsparticles";
import imageOfMe from "../images/imageOfMe.png";

const HeroSection: React.FC = () => {
  return (
    <div className="relative mt-10 mb-10 pt-10 pb-10 text-white">
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Image with smooth fade-in */}
        <img
          src={imageOfMe}
          alt="Your Name"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full border-4 border-accent shadow-lg opacity-0 animate-fadeIn object-cover"
        />

        <h1 className="text-5xl md:text-7xl font-bold mt-6 opacity-0 animate-fadeIn animate-delay-1000">
          Hello! I’m Weronika
        </h1>
        <p className="mt-4 text-lg md:text-xl opacity-0 animate-fadeIn animate-delay-1500">
          A passionate Frontend Developer who loves crafting beautiful user
          experiences.
        </p>
        <div className="mt-6">
          <a
            href="../images/Weronika_Martinsen_CV.pdf"
            download="Weronika_Martinsen_CV.pdf"
            className="relative px-6 py-3 mx-2 bg-accent text-black rounded-lg overflow-hidden group transform transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            {/* Button Background Transition */}
            <span className="absolute inset-0 w-full h-full bg-accent transform transition-all duration-300 group-hover:bg-primary"></span>

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <FaDownload className="w-4 h-4" />
            </span>
          </a>

          <button className="px-6 py-3 mx-2 border border-accent text-white rounded-lg hover:bg-accent hover:text-black transition-all">
            Get in Touch
          </button>
        </div>
        <p className="mt-8 italic text-gray-400">
          "Code is like humor. When you have to explain it, it’s bad." — Cory
          House
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
