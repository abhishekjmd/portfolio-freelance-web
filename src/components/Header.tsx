import React from "react";
import VSCode from "../icons/vscode";
import ChromeMenu from "../icons/chrome-menu";
import { HeaderMenu, headerRightIcons } from "../constant/data";

function Header() {
  return (
    <div className="w-full flex overflow-hidden justify-between text-[#a9b1d6] items-center border-b-2 border-[#1b1e2e] overflow-x-hidden">
      <div className="flex lg:py-1  justify-center items-center gap-2">
        <div className="p-2">
          <VSCode />
        </div>
        <div className="lg:hidden p-2 hover:bg-[#36394a] rounded-md transform duration-300">
          <ChromeMenu />
        </div>
        <div className="hidden lg:flex lg:gap-3 ">
          {HeaderMenu.map((item, index) => (
            <span
              key={index}
              className="hover:bg-[#36394a] py-1 px-1 rounded-md transform duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex">
        <h3 className="text-sm">Abhishek Tiwari - Portfoilo</h3>
      </div>
      <div className="lg:hidden flex pl-12">
        {headerRightIcons?.leftPortionIcons?.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
              <IconComponent />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-1">
        {headerRightIcons?.leftPortionIcons?.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div className="hidden lg:flex  hover:bg-[#36394a] p-1 rounded-md transform duration-300">
              <IconComponent />
            </div>
          );
        })}
        {headerRightIcons.rightPortionIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div className={item.className}>
              <IconComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
