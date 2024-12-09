import React from "react";
import MainLayout from "../layout/MainLayout";
import TechIcons from "../TechIcons";
import HeroSection from "../HeroSection";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />

        {/* Tech Icons Section */}
        <TechIcons />
      </MainLayout>
    </>
  );
};

export default Home;
