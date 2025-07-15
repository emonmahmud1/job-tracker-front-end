import React from "react";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import AllJobs from "./AllJobs";

const Dashboard = () => {
  return (
    <div className="px-5 py-2">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
        <p className="text-gray-600 mt-2">
          Here are the latest jobs posted. Find your dream job today!
        </p>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <Title title="All Jobs" />
      </div>

      {/* Job Listings */}
      <div className="p-2 md:p-6">
        <AllJobs />
      </div>
    </div>
  );
};

export default Dashboard;
