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
      <div className="lg:w-screen  flex lg:flex-row">
        <div className="w-[20%] lg:w-[30%] flex-shrink-0  lg:flex-shrink  border-r border-[#a9b1d6] border-opacity-10 ">
          <Explorer />
        </div>
        <div className="w-[80%] lg:w-[100%]">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
