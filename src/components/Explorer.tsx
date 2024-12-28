import React, { useState } from "react";
import Ellipsis from "../icons/ellipses";
import Editor from "./Editor";
import ExplorerTab from "./ExplorerTab";
import Portfolio from "./Portfolio";
import { motion } from "framer-motion";

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
    <div className="flex flex-col  text-[#a9b1d6] h-full gap-1 ml-1 overflow-hidden">
      {/* the top section with text explorer */}
      <div className="flex justify-between items-center px-7">
        <div className="flex uppercase text-xs  my-2 select-none items-center justify-between">
          <h1>explorer</h1>
        </div>
        <div className="p-1 hover:bg-[#36394a] rounded-md ">
          <Ellipsis />
        </div>
      </div>
      <div
        style={togglePortfolio ? { flexGrow: 1 } : { flexGrow: 0 }}
        className={`flex flex-col select-none flex-1 ${
          togglePortfolio ? "justify-between" : "justify-center"
        }`}
      >
        {/* editor section this is toggable */}
        <div>
          <Editor onClick={handleEditor} toggleEditor={toggleEditor} />
          {/* <div className={`${togglePortfolio ? 'overflow-visible':'overflow-hidden'}`}> */}
            <Portfolio
              onClick={handlePortfolio}
              togglePortfolio={togglePortfolio}
            />
          {/* </div> */}
        </div>

        <div>
          {inActiveTabs.map((item, index) => (
            <ExplorerTab key={item.id} text={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
