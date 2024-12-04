// src/pages/Home.tsx
import React from "react";
import MainLayout from "../layout/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is where your main content will go.</p>
      </div>
    </MainLayout>
  );
};

export default Home;
