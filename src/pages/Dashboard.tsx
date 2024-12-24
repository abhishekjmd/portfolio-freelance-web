import React, { useState } from "react";
import ActivitySideBar from "../components/ActivitySideBar";
import Scroller from "../components/scroller";
import Explorer from "../components/Explorer";
import Home from "./Home";

const Dashboard = () => {
  const [toggleExplorer, setToggleExplorer] = useState(false);
  const [toggleHome, setToggleHome] = useState(true);
  const handleToggleExplorer = () => {
    setToggleExplorer(!toggleExplorer);
    setToggleHome(false);
  };
  const handleExplorerClose = () => {
    setToggleExplorer(false);
    setToggleHome(!toggleHome);
  };
  return (
    <div className="flex flex-row h-full w-full overscroll-none">
      <ActivitySideBar
        handleExplorerClick={handleToggleExplorer}
        handleRemainingTabs={handleExplorerClose}
      />
      <div className="flex-grow ">
        {toggleHome ? <Home /> : toggleExplorer && <Explorer />}
        {/* {toggleExplorer && <Explorer />} */}
      </div>
      <Scroller />
    </div>
  );
};

export default Dashboard;
