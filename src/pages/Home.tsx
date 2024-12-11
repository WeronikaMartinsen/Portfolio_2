import React from "react";
import MainLayout from "../layout/MainLayout";
import TechIcons from "../TechIcons";
import HeroSection from "../HeroSection";
import ProjectList from "../ProjectList";
import AboutSection from "../AboutSection";
import BreakSection from "../BreakSection";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <TechIcons />
        <BreakSection />
        <ProjectList />
        <AboutSection />
      </MainLayout>
    </>
  );
};

export default Home;
