import React from "react";
import ActivitySideBar from "./ActivitySideBar";
import Scroller from "./scroller";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-full w-full">
      <ActivitySideBar />
      <div className="flex-grow"></div>
      <Scroller />
    </div>
  );
};

export default Dashboard;
