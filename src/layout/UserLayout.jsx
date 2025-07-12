import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const UserLayout = () => {
  return (
    <div className="bg-[#f2f2fa] min-h-screen px-5 py-2 max-w-[1120px] mx-auto">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
