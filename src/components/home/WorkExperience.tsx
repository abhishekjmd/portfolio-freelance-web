import React from "react";
import SectionHeader from "../SectionHeader";
import BriefCase from "../../icons/brief-case";
import Container from "../Container";
import WorkRole from "../WorkRole";

const WorkExperience = () => {
  return (
    <div className="flex text-[white]">
      <Container>
        <div className="relative flex flex-col gap-6 z-10">
          <SectionHeader
          className="relative"
            icon={
              <>
                <BriefCase height={28} width={28} />
                <span className="bg-[#ffa28b] icon-blur absolute inset-0 -z-10"></span>
              </>
            }
            title="Work Experience"
            description={
              <div className="mt-2">
                <span className="text-[#ffa28b] ">Software Engineer</span> with{" "}
                Hands-On Experience
                in <span className="text-[#ffa28b]">Internships, Freelance Projects </span>, and Hackathons
              </div>
            }
          />
        </div>
        <div className="mt-10 ">
          <WorkRole />
        </div>
      </Container>
    </div>
  );
};

export default WorkExperience;
