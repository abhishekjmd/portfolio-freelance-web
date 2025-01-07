import React, { useState } from "react";
import ChevronDown from "../icons/chevron-down";
import ChevronRight from "../icons/chevron-right";
import NewFile from "../icons/new-file";
import NewFolder from "../icons/new-folder";
import Refresh from "../icons/refresh";
import CollapseAll from "../icons/collapseAll";
import Next from "../icons/next";
import NodeModules from "../icons/node-modules";
import Public from "../icons/public";
import Src from "../icons/src";
import Eslint from "../icons/eslint";
import Git from "../icons/git";
import NextConfig from "../icons/next-config";
import NodeJs from "../icons/nodejs";
import TailwindCSS from "../icons/tailwindcss";
import TsConfig from "../icons/tsconfig";
import { AnimatePresence, motion } from "framer-motion";
import PublicSection from "./PublicSection";
import "../index.css";
import SrcSection from "./SrcSection";
import { useGlobalContext } from "../context/ContextProvider";

const Portfolio = ({ onClick, togglePortfolio }) => {
  // const [togglePublic, setTogglePublic] = useState(false);
  // const [toggleSrc, setToggleSrc] = useState(false);

  const { handleTogglePublic, togglePublic, toggleSrc, handleToggleSrc } =
    useGlobalContext();

  // const handleTogglePublic = () => {
  //   setTogglePublic(!togglePublic);
  // };

  // const handleSrc = () => {
  //   setToggleSrc(!toggleSrc);
  // };

  return (
    <div
      className={`flex flex-col  ${
        !togglePortfolio ? "border-b-2" : ""
      } border-[#1b1e2e] mx-[1px] mt-1 pb-2`}
    >
      <div className="flex flex-row w-full justify-between items-center mx-[1px] ">
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
            <div className="flex items-center mr-3">
              <div className="hover:bg-[#36394a] p-0.5 rounded-md transform duration-300">
                <NewFile />
              </div>
              <div className="hover:bg-[#36394a] p-0.5 rounded-md transform duration-300">
                <NewFolder />
              </div>
              <div className="hover:bg-[#36394a] p-0.5 rounded-md transform duration-300">
                <Refresh />
              </div>
              <div className="hover:bg-[#36394a] p-0.5 rounded-md transform duration-300">
                <CollapseAll />
              </div>
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {togglePortfolio && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div className="max-h-[55vh] overflow-x-hidden overflow-y-scroll">
              {/* nextjs */}
              <div className="flex flex-row w-full items-center mx-[6px] p-0.5">
                <div className="flex flex-row gap-1 items-center ">
                  <ChevronRight />
                  <Next />
                  <span className="text-base font-normal ml-1 opacity-40">
                    .next
                  </span>
                </div>
              </div>

              {/* node modules */}
              <div className="flex flex-row w-full items-center mx-[6px] p-0.5">
                <div className="flex flex-row gap-1 items-center ">
                  <ChevronRight />
                  <NodeModules />
                  <span className="text-base font-normal ml-1 opacity-40">
                    node_modules
                  </span>
                </div>
              </div>

              {/* public */}
              <div className="flex flex-col w-full mx-[6px] p-0.5">
                <div
                  onClick={handleTogglePublic}
                  className="flex flex-row gap-1 items-center "
                >
                  {togglePublic ? (
                    <div>
                      <ChevronDown />
                    </div>
                  ) : (
                    <ChevronRight />
                  )}
                  <Public />
                  <span className="text-base font-normal ml-1 opacity-100">
                    public
                  </span>
                </div>
                {togglePublic && <PublicSection />}
              </div>

              {/* src */}
              <div className="flex flex-col w-full mx-[6px] p-0.5">
                <div
                  onClick={handleToggleSrc}
                  className="flex flex-row gap-1 items-center "
                >
                  {toggleSrc ? <ChevronDown /> : <ChevronRight />}
                  <Src />
                  <span className="text-base font-normal ml-1 opacity-100">
                    src
                  </span>
                </div>
                {toggleSrc && <SrcSection />}
              </div>

              <div className="ml-7">
                <div className="flex flex-row gap-1 items-center py-0.5">
                  <Eslint />
                  <span className="text-base font-normal ml-1 opacity-100">
                    .eslintrc.json
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <Git />
                  <span className="text-base font-normal ml-1 opacity-100">
                    .gitignore
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <NextConfig />
                  <span className="text-base font-normal ml-1 opacity-100">
                    .next.config.js
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <NodeJs />
                  <span className="text-base font-normal ml-1 opacity-100">
                    package-lock.json
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <NodeJs />
                  <span className="text-base font-normal ml-1 opacity-100">
                    package.json
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <TailwindCSS />
                  <span className="text-base font-normal ml-1 opacity-100">
                    tailwind.config.ts
                  </span>
                </div>

                <div className="flex flex-row gap-1 items-center py-0.5">
                  <TsConfig />
                  <span className="text-base font-normal ml-1 opacity-100">
                    tsconfig.json
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
