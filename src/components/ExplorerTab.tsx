import React from "react";
import ChevronRight from "../icons/chevron-right";

const ExplorerTab = ({ text }) => {
  return (
    <div className="flex flex-row justify-start items-center hover:border-[#36394a] hover:border-b-1 hover:border hover:rounded-none p-[2px] rounded-md border-b-2 border-[#1b1e2e] mx-[1px] mt-1 pb-2">
      <div>
        <ChevronRight />
      </div>
      <span className="text-xs uppercase font-extrabold ml-1">{text}</span>
    </div>
  );
};

export default ExplorerTab;
