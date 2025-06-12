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
        <div className="flex flex-col  lg:border-l-[2px]  border-[#36394a] border-opacity-40 overflow-y-auto scroll-smooth">
          <div className="space-y-1">
            <div
              onClick={() => scrollToSection("introduction")}
              className="flex flex-row px-2 py-3 items-center hover:border-[#ffd54f] hover:border-l-2 hover:rounded-none   transform duration-300 gap-1 "
            >
              <FavIcon />
            </div>
            <div
              onClick={() => scrollToSection("aboutMe")}
              className="flex flex-row px-2 py-3 items-center gap-1 hover:border-[#afb42b] hover:border-l-2 hover:rounded-none"
            >
              <AboutMe height={32} width={32} />
              {/* <span className="hidden lg-flex text-base font-normal ml-1 opacity-100">
                About Me
              </span> */}
            </div>

            <div
              onClick={() => scrollToSection("skills")}
              className="flex flex-row px-2 py-3 items-center gap-1 hover:border-[#ff6e40] hover:border-l-2 hover:rounded-none"
            >
              <Technologies />
              {/* <span className="text-base font-normal ml-1 opacity-100">
                Skills
              </span> */}
            </div>

            <div
              onClick={() => scrollToSection("myWork")}
              className="flex flex-row items-center px-2 py-3 gap-1 hover:border-[#ffce00] hover:border-l-2 hover:rounded-none"
            >
              <Projects />
              {/* <span className="text-base font-normal ml-1 opacity-100">
                My Work
              </span> */}
            </div>

            <div
              onClick={() => scrollToSection("contactMe")}
              className="flex flex-row items-center px-2 py-3 gap-1 hover:border-[#42a5f5] hover:border-l-2 hover:rounded-none"
            >
              <ContactMe />
              {/* <span className="text-base font-normal ml-1 opacity-100">
                Contact Me
              </span> */}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PublicSection;
