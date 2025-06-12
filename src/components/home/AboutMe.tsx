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
import { ArrowIcon } from "../../icons/arrow-icons";
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
      <span className="text-[#7ee787]">full-stack{" "}</span>
      developer{" "}
      crafting <span className="text-[#7ee787]">web</span> and{" "}
      <span className="text-[#7ee787]">mobile apps</span> that are fast, scalable, and <span className="text-[#7ee787]"> user-focused.</span>
    </div>
  }
            />
            {/* <Stars id="about-me" /> */}
            <div className="text-[#a9b1d6]">
              <p className="mt-4 text-lg pr-2">
                I offer a range of services including Web Development, Mobile
                App Development, UI/UX Implementation, API Integrations, Backend
                Architecture, and WordPress Development. Each project is crafted
                to meet your specific goals with performance and scalability in
                mind.
              </p>

              <p className="mt-4 text-lg pr-2">
                My stack includes React, Next.js, React Native, Node.js,
                Express, NestJS, MongoDB, and WordPress. I focus on writing
                clean, maintainable code and delivering on time — ensuring
                smooth collaboration from start to finish.
              </p>

              <p className="mt-4 text-lg pr-2">
                If you’re looking for someone reliable to bring your project to
                life — I’m here to help.
              </p>
            </div>

            <div className=" lg:flex lg:flex-row lg:gap-60 flex flex-col gap-5 items-center">
              <div className="w-auto">
                <img
                  src={meImage}
                  className="w-auto h-auto object-center  rounded-[100%]"
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
