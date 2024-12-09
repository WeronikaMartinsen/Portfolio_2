// src/components/Header.tsx
import React from "react";
import SocialMedia from "../../SocialMedia";

const Header: React.FC = () => {
  return (
    <header className="container text-white max-w-4xl mx-auto p-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="mr-auto">
            <a href="/" className=" hover:underline">
              Weronika Martinsen
            </a>
          </li>
          <div className="flex space-x-4">
            <li>
              <SocialMedia />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
