import { FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiFigma, SiBlazor } from "react-icons/si";

const TechIcons = () => (
  <div className="flex justify-center gap-4 text-tertiary w-full">
    <div className="flex flex-col items-center">
      <FaReact className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <FaJs className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <SiTailwindcss className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <SiBootstrap className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <FaGitAlt className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <SiFigma className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <FaHtml5 className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <FaCss3Alt className="w-8 h-8" />
    </div>
    <div className="flex flex-col items-center">
      <SiBlazor className="w-8 h-8" />
    </div>
  </div>
);

export default TechIcons;
