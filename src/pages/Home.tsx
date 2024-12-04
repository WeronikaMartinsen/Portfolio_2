import React from "react";
import MainLayout from "../layout/MainLayout";
import TechIcons from "../TechIcons";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout>
        {/* Background Section */}
        <div className="flex">
          <div
            className="h-screen bg-cover bg-center bg-no-repeat border-8  border-primary"
            style={{
              backgroundImage: "url('/src/images/tryIt.png')",
            }}
          >
            <h1 className="text-white text-center pt-20 text-7xl">
              Welcome to My Page
            </h1>
          </div>
          <div></div>
        </div>

        {/* Tech Icons Section */}
        <TechIcons />
      </MainLayout>
    </>
  );
};

export default Home;
