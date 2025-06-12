import React, { useState } from "react";
import Ellipsis from "../icons/ellipses";
import Editor from "./Editor";
import ExplorerTab from "./ExplorerTab";
import Portfolio from "./Portfolio";

const Explorer = () => {
  const [toggleEditor, setToggleEditor] = useState(false);
  const [togglePortfolio, setTogglePortfolio] = useState(true);

  const inActiveTabs = [
    {
      id: 3,
      title: "outline",
    },
    {
      id: 4,
      title: "timeline",
    },
    {
      id: 5,
      title: "scripts",
    },
  ];

  const handleEditor = () => {
    setToggleEditor(!toggleEditor);
  };

  const handlePortfolio = () => {
    setTogglePortfolio(!togglePortfolio);
  };

  return (
    <div className="flex flex-col w-full text-[#a9b1d6] h-full gap-1 lg:gap-0 overflow-hidden">
      <div className={`flex flex-col select-none  ${"justify-between"}`}>
        <div>
          <Portfolio togglePortfolio={togglePortfolio} />
        </div>
      </div>
    </div>
  );
};

export default Explorer;
