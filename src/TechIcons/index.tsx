import React from "react";
import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiBlazor,
  SiTypescript,
} from "react-icons/si";

const TechIcons: React.FC = () => (
  <div className=" text-center py-8">
    {/* Heading */}
    <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
      Technologies
    </h2>

    {/* Icon Scroller */}
    <div className="flex justify-center flex-wrap w-full h-24 mt-10 mb-10">
      <div className="flex flex-wrap justify-center gap-12 text-white p-2">
        {/* Each Icon with Name */}
        <div className="flex flex-col items-center">
          <FaReact className="w-10 h-10 text-cyan-400" />
          <span className="text-xs mt-1">React</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="w-10 h-10 text-blue-600" />
          <span className="text-xs mt-1">TypeScript</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJs className="w-10 h-10 text-yellow-400" />
          <span className="text-xs mt-1">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="w-10 h-10 text-blue-500" />
          <span className="text-xs mt-1">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <SiBootstrap className="w-10 h-10 text-purple-500" />
          <span className="text-xs mt-1">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="w-10 h-10 text-orange-500" />
          <span className="text-xs mt-1">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <SiFigma className="w-10 h-10 text-pink-500" />
          <span className="text-xs mt-1">Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="w-10 h-10 text-red-500" />
          <span className="text-xs mt-1">HTML5</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="w-10 h-10 text-blue-400" />
          <span className="text-xs mt-1">CSS3</span>
        </div>
        <div className="flex flex-col items-center">
          <SiBlazor className="w-10 h-10 text-indigo-600" />
          <span className="text-xs mt-1">Blazor</span>
        </div>
      </div>
    </div>
  </div>
);

export default TechIcons;
