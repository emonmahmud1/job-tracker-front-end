import React from "react";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import AllJobs from "./AllJobs";

const Dashboard = () => {
  return (
    <div className="bg-[#f2f2fa] min-h-screen px-5 py-2">
      <h1>user Dashboard</h1>
      <div>
        <Title title="All Jobs" />
        <AllJobs />
      </div>
    </div>
  );
};

export default Dashboard;
