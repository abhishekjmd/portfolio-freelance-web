import React from "react";
import Explorer from "../icons/explorer";
import Search from "../icons/search";
import SourceControl from "../icons/source-control";
import Debug from "../icons/debug";
import Extensions from "../icons/extenstions";
import Accounts from "../icons/accounts";
import Gear from "../icons/gear";
// this contain the left side bar
const ActivitySideBar = ({ handleExplorerClick, handleRemainingTabs }) => {
  return (
    <div className="flex flex-col justify-between items-center text-[#a9b1d6]  h-[88vh] overscroll-none">
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={handleExplorerClick}
          className="p-3 hover:border-l-2  hover:border-[#a9b1d6] opacity-50 hover:opacity-90 "
        >
          <Explorer />
        </div>
        <div
          onClick={handleRemainingTabs}
          className="p-3 hover:border-l-2 hover:border-[#a9b1d6] opacity-50 hover:opacity-90"
        >
          <Search />
        </div>
        <div
          onClick={handleRemainingTabs}
          className="p-3 hover:border-l-2 hover:border-[#a9b1d6] opacity-50 hover:opacity-90"
        >
          <SourceControl height={32} width={32} />
        </div>
        <div
          onClick={handleRemainingTabs}
          className="p-3 hover:border-l-2 hover:border-[#a9b1d6] opacity-50 hover:opacity-90"
        >
          <Debug />
        </div>
        <div
          onClick={handleRemainingTabs}
          className="p-3 hover:border-l-2 hover:border-[#a9b1d6] opacity-50 hover:opacity-90"
        >
          <Extensions />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={handleRemainingTabs}
          className="p-3 opacity-50 hover:opacity-90"
        >
          <Accounts height={32} width={32} />
        </div>
        <div
          onClick={handleRemainingTabs}
          className="p-3 opacity-50 hover:opacity-90"
        >
          <Gear />
        </div>
      </div>
    </div>
  );
};

export default ActivitySideBar;
