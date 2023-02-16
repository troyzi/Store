import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  return (
    <div style={{
backgroundColor:"rgba(201, 201, 201, 1)"  
 }}>
      <ToastContainer />
      <Nav />
      <div style={{ minHeight: `calc(100vh - 210px)`,}} >
        <Outlet />
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;
