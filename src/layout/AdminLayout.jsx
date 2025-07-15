import React from "react";
import Navbar from "./../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="my-5 min-h-[calc(100vh-50px)] md:px-5 px-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
