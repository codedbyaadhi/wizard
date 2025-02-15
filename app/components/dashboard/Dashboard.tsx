"use client";
import DashboardRays from "@/svg/dashboard/DashboardRays";
import React from "react";
import DashboardHeader from "./header/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center w-full h-[4000px] bg-[#02021A]">
      <div className="flex w-full h-[600px]">
        <DashboardRays />
      </div>
      <DashboardHeader />
    </div>
  );
};

export default Dashboard;
