import React from "react";
import TabsContainer from "../components/home/TabsContainer";
import GridPattern from "../components/GridPattern";
import Introduction from "../components/home/Introduction";
const Home = () => {
  return (
    <div className="w-full h-full overflow-y-scroll overflow-x-hidden">
      <GridPattern />
      <Introduction />
    </div>
  );
};

export default Home;
