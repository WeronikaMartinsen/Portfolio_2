// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;