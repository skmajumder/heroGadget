import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Header />
      <main className="main min-h-[calc(100vh-137px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
