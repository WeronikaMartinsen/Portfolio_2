import React from "react";

import martinsen from "../images/martinsen.png";

const BreakSection: React.FC = () => {
  return (
    <div
      className="relative mb-10 pt-10 pb-10 h-screen w-full text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${martinsen})`,
        clipPath: "polygon(15% 0%, 100% 0%, 90% 100%, 0% 100%)",
        opacity: 0.3,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
    </div>
  );
};

export default BreakSection;
