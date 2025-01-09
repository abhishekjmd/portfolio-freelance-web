import React, { useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import Accounts from "../../icons/accounts";
import Stars from "../Stars";
import meImage from "../../assets/meImage.jpg";
import Socials from "../Socials";
import { FadeIn } from "../FadeIn";
import Container from "../Container";
import { useGlobalContext } from "../../context/ContextProvider";
import Border from "./Border";

const AboutMe = () => {
  const { sectionRef } = useGlobalContext();
  const aboutRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current["aboutMe"] = aboutRef.current;
    }
  }, [sectionRef]);
  return (
    <>
      <div ref={aboutRef} className="flex text-[white]">
        <Container>
          <div className="flex lg:mt-16 flex-col gap-6 relative z-10">
            <div>
              <Border />
            </div>
            <SectionHeader
              icon={
                <>
                  <Accounts height={28} width={28} />
                  <span className="bg-[#7ee787] icon-blur absolute inset-0 -z-10 "></span>
                </>
              }
              title="About Me"
              description={
                <div>
                  I&apos;m a{" "}
                  <span className="text-[#7ee787]">software developer</span>{" "}
                  specialized on{" "}
                  <span className="text-[#7ee787]">Frontend development</span>
                </div>
              }
            />
            {/* <Stars id="about-me" /> */}
            <div className="text-[#a9b1d6]">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                Abhishek Tiwari
              </h3>
              <p className="text-base leading-7 text-[#7ee787]">
                Full-stack Developer
              </p>
              <p className="mt-4 text-lg pr-2 ">
                I&apos;m a passionate software developer with hands-on
                experience in internships, freelance projects, and hackathons. I
                thrive on solving real-world problems and delivering impactful
                solutions.
              </p>
              <p className="mt-4 text-lg pr-2 ">
                During my internships with innovative startups, I collaborated
                with talented teams to build and deploy impactful features,
                enhancing user experiences and contributing to business growth.
              </p>
              <p className="mt-4 text-lg pr-2 ">
                My experience spans multiple front-end and back-end
                technologies, equipping me with the skills to tackle diverse
                development challenges effectively.
              </p>
            </div>
            <div className="w-full flex lg:hidden">
              <img
                src={meImage}
                className="rounded-full w-64 object-center"
                // height={108}
                // width={150}
              />
            </div>
            <div className="hidden lg:flex flex-row gap-60 items-center">
              <div className="flex flex-col">
                <FadeIn
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className=" flex flex-col  gap-2 w-64">
                    <p className="text-[#7ee787] border-b pb-2  border-b-gray-500 font-bold">
                      | Languages
                    </p>
                    <p className="font-bold">
                      Hindi - <span className="text-gray-500">Native</span>
                    </p>
                    <p className="font-bold">
                      Gujarati - <span className="text-gray-500">Native</span>
                    </p>
                    <p className="border-b  pb-2 border-b-gray-500 font-bold">
                      English - <span className="text-gray-500">Advance</span>
                    </p>
                  </div>
                </FadeIn>
                {/* <Socials className="mt-2 lg:hidden" /> */}
              </div>
              <div className="w-auto">
                <img
                  src={meImage}
                  className="w-64 h-64 object-contain bg-[black] rounded-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
