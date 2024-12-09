import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";

const SocialMedia = () => (
  <div className="flex justify-center gap-4 text-tertiary w-full">
    <div className="flex flex-col items-center">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-8 h-8 hover:text-primary transition-colors" />
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-8 h-8 hover:text-primary transition-colors" />
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="w-8 h-8 hover:text-primary transition-colors" />
      </a>
    </div>
    <div className="flex flex-col items-center">
      <a
        href="https://discord.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDiscord className="w-8 h-8 hover:text-primary transition-colors" />
      </a>
    </div>
  </div>
);

export default SocialMedia;
