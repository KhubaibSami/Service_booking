import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../modules/nav & foter/components/navbar/navbar";
import Footer from "../modules/nav & foter/components/footer/footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
