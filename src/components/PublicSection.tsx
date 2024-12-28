import React from "react";
import ChevronRight from "../icons/chevron-right";
import Src from "../icons/src";
import FavIcon from "../icons/fav-icon";
import AboutMe from "../icons/about-me";
import WorkExperience from "../icons/work-experience";
import Technologies from "../icons/technologies";
import Projects from "../icons/projects";
import ContactMe from "../icons/contact-me";
import '../index.css';
const PublicSection = () => {
  return (
    <div className="content">
      <div className="flex flex-col w-full  p-0.5 folder-container">
        <div className="flex flex-row items-center mx-9 hover:bg-[#36394a] hover:rounded-none p-[2px] transform duration-300 gap-1">
          <FavIcon />
          <span className="text-base font-normal ml-1 opacity-100">
            about_me.ts
          </span>
        </div>
        <div className="mx-12">
          <div className="flex flex-row items-center gap-1">
            <AboutMe />
            <span className="text-base font-normal ml-1 opacity-100">
              About Me
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <WorkExperience />
            <span className="text-base font-normal ml-1 opacity-100">
              Work Experience
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Technologies />
            <span className="text-base font-normal ml-1 opacity-100">
              Skills
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <Projects />
            <span className="text-base font-normal ml-1 opacity-100">
              My Work
            </span>
          </div>

          <div className="flex flex-row items-center gap-1">
            <ContactMe />
            <span className="text-base font-normal ml-1 opacity-100">
              Contact Me
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicSection;
