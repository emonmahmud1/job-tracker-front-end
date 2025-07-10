import React from "react";
import Navbar from "./../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const AdminLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
