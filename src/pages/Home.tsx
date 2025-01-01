import React from "react";
import TabsContainer from "../components/home/TabsContainer";
import GridPattern from "../components/GridPattern";
import Introduction from "../components/home/Introduction";
import Border from "../components/home/Border";
import AboutMe from "../components/home/AboutMe";
const Home = () => {
  return (
    <div className="w-fit h-full overflow-y-scroll overflow-x-hidden ">
      <GridPattern />
      <Introduction />
      <div className="mt-24 p-4">
      <Border />
      </div>
      <AboutMe />
      <div className="mt-32 p-4">
      <Border />
      </div>      
    </div>
  );
};

export default Home;
