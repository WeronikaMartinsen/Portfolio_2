import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import SocialMedia from "../../SocialMedia";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="container text-white max-w-8xl mx-auto p-4">
      <nav>
        <ul className="flex justify-between items-center">
          {/* Left Section: Menu Icon */}
          <li className="mr-auto">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl hover:text-accent focus:outline-none"
              aria-label="Menu"
            >
              <FaBars />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-2 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-lg w-64"
              >
                <ul className="flex flex-col space-y-4 p-4">
                  <li className="hover:bg-gray-700 rounded-lg p-2">
                    <button
                      onClick={() => handleScroll("projects")}
                      className="w-full text-left text-lg font-semibold"
                    >
                      Projects
                    </button>
                  </li>
                  <li className="hover:bg-gray-700 rounded-lg p-2">
                    <button
                      onClick={() => handleScroll("about-me")}
                      className="w-full text-left text-lg font-semibold"
                    >
                      About Me
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Right Section: Social Media */}
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
