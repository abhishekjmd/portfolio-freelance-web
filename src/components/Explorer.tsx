import React, { useState } from "react";
import Ellipsis from "../icons/ellipses";
import Editor from "./Editor";
import ExplorerTab from "./ExplorerTab";
import Portfolio from "./Portfolio";

const Explorer = () => {
  const [toggleEditor, setToggleEditor] = useState(false);
  const [togglePortfolio, setTogglePortfolio] = useState(false);

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
    <div className="flex flex-col text-[#a9b1d6] w-full gap-1 ml-1">
      {/* the top section with text explorer */}
      <div className="flex justify-between items-center">
        <div className="flex uppercase text-xs ml-5 mr-3 my-2 select-none items-center justify-between">
          <h1>explorer</h1>
        </div>
        <div className="p-1 hover:bg-[#36394a] rounded-md">
          <Ellipsis />
        </div>
      </div>
      <div className="flex flex-col select-none">
        {/* editor section this is toggable */}
        <Editor onClick={handleEditor} toggleEditor={toggleEditor} />

        <Portfolio
          onClick={handlePortfolio}
          togglePortfolio={togglePortfolio}
        />

        {inActiveTabs.map((item, index) => (
          <ExplorerTab key={item.id} text={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Explorer;
