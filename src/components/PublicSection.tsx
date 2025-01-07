import React from "react";
import FavIcon from "../icons/fav-icon";
import AboutMe from "../icons/about-me";
import WorkExperience from "../icons/work-experience";
import Technologies from "../icons/technologies";
import Projects from "../icons/projects";
import ContactMe from "../icons/contact-me";
import "../index.css";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../context/ContextProvider";
const PublicSection = () => {
  const { scrollToSection } = useGlobalContext();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="flex flex-col w-full  p-0.5 border-l-[2px] ml-[9px] border-[#36394a] border-opacity-40 overflow-y-auto scroll-smooth">
          <div className="flex flex-row items-center mx-6 hover:bg-[#36394a] hover:rounded-none p-[2px] transform duration-300 gap-1 ">
            <FavIcon />
            <span className="text-base font-normal ml-1 opacity-100">
              about_me.ts
            </span>
          </div>
          <div className="mx-10">
            <div
              onClick={() => scrollToSection("aboutMe")}
              className="flex flex-row items-center gap-1 hover:bg-[#36394a] hover:rounded-none"
            >
              <AboutMe />
              <span className="text-base font-normal ml-1 opacity-100">
                About Me
              </span>
            </div>

            <div className="flex flex-row items-center gap-1 hover:bg-[#36394a] hover:rounded-none">
              <WorkExperience />
              <span className="text-base font-normal ml-1 opacity-100">
                Work Experience
              </span>
            </div>

            <div className="flex flex-row items-center gap-1 hover:bg-[#36394a] hover:rounded-none">
              <Technologies />
              <span className="text-base font-normal ml-1 opacity-100">
                Skills
              </span>
            </div>

            <div className="flex flex-row items-center gap-1 hover:bg-[#36394a] hover:rounded-none">
              <Projects />
              <span className="text-base font-normal ml-1 opacity-100">
                My Work
              </span>
            </div>

            <div className="flex flex-row items-center gap-1 hover:bg-[#36394a] hover:rounded-none">
              <ContactMe />
              <span className="text-base font-normal ml-1 opacity-100">
                Contact Me
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PublicSection;
