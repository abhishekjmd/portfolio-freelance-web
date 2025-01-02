import React from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Archive from "../../icons/archive";
import ProjectsInfoComp from "../ProjectsInfoComp";

const MyWork = () => {
  return (
    <div className="flex text-[white]">
      <Container className="flex flex-col gap-20">
        <div className="relative flex flex-col gap-6 z-10">
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
