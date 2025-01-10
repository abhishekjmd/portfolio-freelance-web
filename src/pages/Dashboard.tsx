import React, { useState } from "react";
import ActivitySideBar from "../components/ActivitySideBar";
import Explorer from "../components/Explorer";
import Home from "./Home";
import TabsContainer from "../components/home/TabsContainer";
import { useGlobalContext } from "../context/ContextProvider";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Explorer");
  const { toggleExplorer, setToggleExplorer } = useGlobalContext();

  const handleToggleExplorer = () => {
    setActiveTab("Explorer");
    setToggleExplorer(!toggleExplorer);
  };
  const handleToggleRemaining = (tabname) => {
    setActiveTab(tabname);
    setToggleExplorer(false);
  };
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="sticky top-0 z-[10000]">
        <ActivitySideBar
          handleExplorerClick={handleToggleExplorer}
          handleRemainingTabs={handleToggleRemaining}
          activeTab={activeTab}
        />
      </div>
      <div className="lg:w-screen  flex lg:flex-row">
        {toggleExplorer && (
          <div className="lg:w-[30%] flex-shrink-0 lg:flex-shrink w-[calc(100%-10%)] lg:border-r-2 lg:border-[#1b1e2e]">
            <Explorer />
          </div>
        )}
        <div className="lg:w-[100%]">
          <div className="sticky top-0 z-[10000] bg-[#1e2336]">
            <TabsContainer />
          </div>
          {/* <TabsContainer /> */}
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
