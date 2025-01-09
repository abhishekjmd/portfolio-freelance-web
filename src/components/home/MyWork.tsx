import React, { useEffect, useRef } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Archive from "../../icons/archive";
import ProjectsInfoComp from "../ProjectsInfoComp";
import { useGlobalContext } from "../../context/ContextProvider";
import { section } from "framer-motion/client";
import Border from "./Border";

const MyWork = () => {
  const { sectionRef } = useGlobalContext();
  const myWorkRef = useRef();
  useEffect(() => {
    sectionRef.current["myWork"] = myWorkRef.current;
  }, []);
  return (
    <div ref={myWorkRef} className="flex text-[white]">
      <Container className="flex flex-col gap-20">
        <div className="relative lg:mt-16 flex flex-col gap-6 z-10">
          <div>
            <Border />
          </div>
          <SectionHeader
            className="relative"
            icon={
              <>
                <Archive height={28} width={28} />
                <span className="bg-[#ffdc8b] icon-blur absolute inset-0 -z-10"></span>
              </>
            }
            title="Projects"
            description={
              <div className="mt-2">
                <span className="text-[#ffdc8b]">My Journey</span> Through
                Projects:{" "}
                <span className="text-[#ffdc8b]">Hackathons, Freelance</span>,
                and Beyond
              </div>
            }
          />
        </div>
        <div>
          <ProjectsInfoComp />
        </div>
      </Container>
    </div>
  );
};

export default MyWork;
