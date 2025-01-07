import ChromeClose from "../icons/chrome-close";
import ChromeMinimize from "../icons/chrome-minimize";
import ChromeRestore from "../icons/chrome-restore";
import SplitHorizontal from "../icons/split-horizontal";
import SplitVerticalUntoggled from "../icons/split-vertical-untoggle";
import ToggleSidebar from "../icons/toggled-sidebar";
export const HeaderMenu = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

export const headerRightIcons = {
  leftPortionIcons: [
    {
      icon: ToggleSidebar,
    },
    {
      icon: SplitVerticalUntoggled,
    },
    {
      icon: SplitHorizontal,
    },
  ],
  rightPortionIcons: [
    {
      icon: ChromeMinimize,
      className:'hover:bg-[#36394a] p-2.5  transform duration-300'
    },
    {
      icon: ChromeRestore,
      className:'hover:bg-[#36394a] p-2.5  transform duration-300'
    },
    {
      icon: ChromeClose,
      className:'hover:bg-red-500 p-2.5 hover:text-white  transform duration-300'
    },
  ],
};
