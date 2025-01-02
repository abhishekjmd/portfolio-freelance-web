import React from "react";
import GridPattern from "../components/GridPattern";
import Introduction from "../components/home/Introduction";
import Border from "../components/home/Border";
import AboutMe from "../components/home/AboutMe";
import WorkExperience from "../components/home/WorkExperience";
import Skill from "../components/home/Skill";
import MyWork from "../components/home/MyWork";
import Contact from "../components/home/Contact";
const Home = () => {
  return (
    <div className="w-fit h-full overflow-y-scroll overflow-x-hidden text-[white]">
      <GridPattern />
      <Introduction />
      <div className="mt-24 p-4">
        <Border />
      </div>
      <AboutMe />
      <div className="mt-24 p-4">
        <Border />
      </div>
      <WorkExperience />
      <Skill />
      <div className="mt-24 p-4">
        <Border />
      </div>
      <MyWork />
      <div className="mt-24 p-4">
        <Border />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
