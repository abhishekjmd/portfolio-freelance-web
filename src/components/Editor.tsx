import React from "react";
import ChevronDown from "../icons/chevron-down";
import NewFile from "../icons/new-file";
import SaveAll from "../icons/save-all";
import CloseAll from "../icons/close-all";
import ChevronRight from "../icons/chevron-right";

const Editor = ({ onClick, toggleEditor }) => {
  return (
    <div className="flex flex-row justify-between items-center hover:border-[#36394a] p-[2px] hover:border-b-1 hover:border hover:rounded-none border-b-2 border-[#1b1e2e] mx-[1px] mt-1 pb-2">
      <div
        onClick={onClick}
        className="flex flex-row justify-center items-center"
      >
        {toggleEditor ? (
          <div>
            <ChevronDown />
          </div>
        ) : (
          <ChevronRight />
        )}
        <span className="text-xs uppercase font-extrabold ml-1">
          open editors
        </span>
      </div>
      {toggleEditor && (
        <div className="flex items-center">
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <NewFile />
          </div>
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <SaveAll />
          </div>
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <CloseAll />
          </div>
        </div>
      )}
    </div>
  );
};

export default Editor;
