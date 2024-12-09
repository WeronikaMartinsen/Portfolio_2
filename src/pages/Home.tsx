import React from "react";
import MainLayout from "../layout/MainLayout";
import TechIcons from "../TechIcons";
import HeroSection from "../HeroSection";
import ProjectList from "../ProjectList";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <ProjectList />
        <TechIcons />
      </MainLayout>
    </>
  );
};

export default Home;
