// src/components/MainLayout.tsx
import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
