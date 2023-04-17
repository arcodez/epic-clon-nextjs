import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
