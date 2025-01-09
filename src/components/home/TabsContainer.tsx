import React, { useEffect, useRef } from "react";
import FavIcon from "../../icons/fav-icon";
import ChromeClose from "../../icons/chrome-close";
import GitCompare from "../../icons/git-compare";
import UntoggledSidebar from "../../icons/untoggled-sidebar";
import Ellipsis from "../../icons/ellipses";
import { useGlobalContext } from "../../context/ContextProvider";
// import { useScroll } from "../../context/ContextProvider";

const TabsContainer = () => {
  const { sectionRef } = useGlobalContext();
  const topRef = useRef();
  useEffect(() => {
    sectionRef.current["scrollToTop"] = topRef.current;
  }, [sectionRef]);
  return (
    <div
      ref={topRef}
      className="border-b-2  bg-[#1e2336 ] sticky border-[#1b1e2e] bg-[#1e2336] z-50 flex text-[#a9b1d6] overflow-y-hidden"
    >
      <div className="w-full flex items-center lg:justify-between">
        <div className="flex flex-row justify-center items-center gap-3 lg:gap-2 w-[50%] lg:w-fit capitalize border-r-2 border-[#1b1e2e] p-2 lg:px-2">
          <div>
            <FavIcon />
          </div>
          <div>
            <p className="text-[#3db9c9] ">about Me</p>
          </div>
          <div>
            <ChromeClose />
          </div>
        </div>
        <div className="flex justify-end items-center w-[50%] p-2 mr-5 lg:mr-2">
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <GitCompare />
          </div>
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <UntoggledSidebar />
          </div>
          <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
            <Ellipsis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
