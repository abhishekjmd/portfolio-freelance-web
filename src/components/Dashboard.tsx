import React, { useState } from "react";
import ActivitySideBar from "./ActivitySideBar";
import Scroller from "./scroller";
import Explorer from "./Explorer";

const Dashboard = () => {
  const [toggleExplorer, setToggleExplorer] = useState(false);
  const handleToggleExplorer = () => {
    setToggleExplorer(!toggleExplorer);
  };
  const handleExplorerClose=()=>{
    setToggleExplorer(false);
  }
  return (
    <div className="flex flex-row h-full w-full">
      <ActivitySideBar handleExplorerClick={handleToggleExplorer} handleRemainingTabs={handleExplorerClose} />
      <div className="flex-grow ">{toggleExplorer && <Explorer />}</div>
      <Scroller />
    </div>
  );
};

export default Dashboard;
