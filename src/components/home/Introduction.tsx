import React, { useEffect, useRef } from "react";
import "../../index.css";
import AnimatedTitle from "../AnimatedTitle";
import Container from "../Container";
import Socials from "../Socials";
import { FadeIn } from "../FadeIn";
import { useGlobalContext } from "../../context/ContextProvider";
const Introduction = () => {
  const { sectionRef } = useGlobalContext();
  const introductionRef = useRef();
  useEffect(() => {
    sectionRef.current["introduction"] = introductionRef.current;
  }, [sectionRef]);

  return (
    <div
      ref={introductionRef}
      className="w-full relative z-[1000] overflow-y-auto overflow-x-hidden text-[white]"
    >
      <Container>
        <div className="h-full relative">
          <FadeIn className="max-w-5xl pt-40 md:pt-[20vh] 2xl:pt-[30vh]">
            <div className="flex flex-col gap-2.5">
              <div>
                <h1 className="font-display text-5xl font-medium tracking-normal [text-wrap:balance] sm:text-6xl">
                  Abhishek Tiwari <span className="wave">👋</span>
                </h1>
              </div>
              <div className="flex mt-3 mb-1">
                Ready to collaborate{" "}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>{" "}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">
                I’m a Full-Stack Developer working full-time as a freelancer,
                helping startups and businesses build fast, scalable, and
                user-centric applications. With experience in React, Node.js,
                React Native, NestJS, WordPress, and UI/UX, I deliver
                production-ready digital solutions tailored to client goals.
              </p>
            </div>
            <Socials className="mt-5" />
            <div className="scroll-down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
};

export default Introduction;
