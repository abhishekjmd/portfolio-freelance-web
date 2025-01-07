import React, { useState } from "react";
import ActivitySideBar from "../components/ActivitySideBar";
import Explorer from "../components/Explorer";
import Home from "./Home";
import TabsContainer from "../components/home/TabsContainer";

const Dashboard = () => {
  const [toggleExplorer, setToggleExplorer] = useState(false);
  const [toggleRemaining, setToggleRemaining] = useState(false);

  const handleToggleExplorer = () => {
    setToggleExplorer(!toggleExplorer);
  };
  const handleToggleRemaining = () => {
    setToggleRemaining(!toggleRemaining);
  };
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <ActivitySideBar
        handleExplorerClick={handleToggleExplorer}
        handleRemainingTabs={handleToggleRemaining}
      />
      <div className={`flex-grow`}>
        {toggleExplorer ? (
          <Explorer />
        ) : !toggleRemaining ? (
          <>
            <div className="sticky top-0 z-[100]">
              <TabsContainer />
            </div>
            <Home />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
