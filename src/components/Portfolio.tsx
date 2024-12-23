import React from "react";
import ChevronDown from "../icons/chevron-down";
import ChevronRight from "../icons/chevron-right";

const Portfolio = ({ onClick, togglePortfolio }) => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-[#1b1e2e] mx-[1px] mt-1 pb-2">
      <div
        onClick={onClick}
        className="flex flex-row justify-center items-center"
      >
        {togglePortfolio ? (
          <div>
            <ChevronDown />
          </div>
        ) : (
          <ChevronRight />
        )}
        <span className="text-xs uppercase font-extrabold ml-1">
          portfolio
        </span>
      </div>
      {togglePortfolio && (
        <div className="flex items-center">
          <p>hellow</p>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
