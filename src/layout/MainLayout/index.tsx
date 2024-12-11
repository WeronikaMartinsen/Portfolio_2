// src/components/MainLayout.tsx
import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container bg-gradient-to-r from-blue-900 via-gray-900 to-black w-full max-w-8xl">
      <Header />
      <main className="content max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
