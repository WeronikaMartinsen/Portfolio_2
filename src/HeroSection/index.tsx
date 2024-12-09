import React from "react";
import TechIcons from "../TechIcons";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-fadeIn">
          {/* Replace this with a particle effect or coding animation */}
          <div className="absolute top-0 left-0 w-full h-full bg-hero-animation"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold">
          Crafting Intuitive User Experiences
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Hi, I’m [Your Name], a passionate Frontend Developer specializing in
          React, Tailwind CSS, and modern web technologies.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 mx-2 bg-primary text-black rounded-lg hover:bg-secondary">
            View My Work
          </button>
          <button className="px-6 py-3 mx-2 border border-white rounded-lg hover:bg-gray-800">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <div className="absolute bottom-8 w-full flex justify-center">
        <TechIcons />
      </div>
    </div>
  );
};

export default HeroSection;
