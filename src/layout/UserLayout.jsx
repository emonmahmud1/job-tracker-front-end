import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <div className="bg-white min-h-screen md:px-5 py-2 max-w-6xl mx-auto">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="my-5 min-h-[calc(100vh-150px)]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
