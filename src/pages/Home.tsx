import GridPattern from "../components/GridPattern";
import Introduction from "../components/home/Introduction";
import AboutMe from "../components/home/AboutMe";
import Skill from "../components/home/Skill";
import MyWork from "../components/home/MyWork";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <div className="w-fit lg:w-[100%] h-full overflow-y-scroll overflow-x-hidden text-[white]">
      <GridPattern />
      <Introduction />
      <GridPattern />
      <AboutMe />
      <Skill />
      <MyWork />
      <Contact />
    </div>
  );
};

export default Home;
