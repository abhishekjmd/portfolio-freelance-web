import React from "react";
import VSCode from "../icons/vscode";
import ChromeMenu from "../icons/chrome-menu";
import ToggleSidebar from "../icons/toggled-sidebar";
import SplitVerticalUntoggled from "../icons/split-vertical-untoggle";
import SplitHorizontal from "../icons/split-horizontal";
import ChromeMinimize from "../icons/chrome-minimize";
import ChromeRestore from "../icons/chrome-restore";
import ChromeClose from "../icons/chrome-close";
function Header() {
  return (
    <div className="flex overscroll-y-none justify-between text-[#a9b1d6] items-center border-b-2 border-[#1b1e2e]">
      <div className="flex  justify-center items-center gap-5">
        <div className="p-2">
          <VSCode />
        </div>
        <div className="p-2 hover:bg-[#36394a] rounded-md transform duration-300">
          <ChromeMenu />
        </div>
      </div>
      <div className="flex pl-12">
        <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
          <ToggleSidebar />
        </div>
        <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
          <SplitVerticalUntoggled />
        </div>
        <div className="hover:bg-[#36394a] p-1 rounded-md transform duration-300">
          <SplitHorizontal />
        </div>
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="hover:bg-[#36394a] p-2.5  transform duration-300">
          <ChromeMinimize />
        </div>
        <div className="hover:bg-[#36394a] p-2.5  transform duration-300">
          <ChromeRestore />
        </div>
        <div className="hover:bg-red-500 p-2.5 hover:text-white  transform duration-300">
          <ChromeClose />
        </div>
      </div>
    </div>
  );
}

export default Header;
