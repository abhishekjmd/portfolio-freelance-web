import React, { useState } from "react";
import ActivitySideBar from "../components/ActivitySideBar";
import Explorer from "../components/Explorer";
import Home from "./Home";
import TabsContainer from "../components/home/TabsContainer";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Explorer");
  const [toggleExplorer, setToggleExplorer] = useState(true);
  const handleToggleExplorer = () => {
    setActiveTab("Explorer");
    setToggleExplorer(!toggleExplorer);
  };
  const handleToggleRemaining = (tabname) => {
    setActiveTab(tabname);
    setToggleExplorer(false)
  };
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <ActivitySideBar
        handleExplorerClick={handleToggleExplorer}
        handleRemainingTabs={handleToggleRemaining}
        activeTab={activeTab}
      />
      <div className="lg:w-screen  flex lg:flex-row">
        {toggleExplorer && (
          <div className="lg:w-[30%] lg:border-r-2 lg:border-[#1b1e2e]">
            <Explorer />
          </div>
        )}
        <div className="lg:w-[100%]">
          <TabsContainer />
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
