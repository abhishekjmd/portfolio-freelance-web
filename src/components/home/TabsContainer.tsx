import React from "react";
import FavIcon from "../../icons/fav-icon";
import ChromeClose from "../../icons/chrome-close";

const TabsContainer = () => {
  return (
    <div className="border-b-2 bg-[#1e2336 ] border-[#1b1e2e] sticky top-0 z-20 flex text-gray-500 overflow-y-hidden slim flex-none">
      <div>
        <div className="flex flex-row justify-center items-center w-[130px] bg-red-400">
          <div>
            <FavIcon />
          </div>
          <p className="text-[#3db9c9] ">about us</p>
          <div>
            <ChromeClose />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsContainer;
