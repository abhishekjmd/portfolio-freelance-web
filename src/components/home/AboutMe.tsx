import React from "react";
import SectionHeader from "../SectionHeader";
import Accounts from "../../icons/accounts";
import Stars from "../Stars";
import meImage from "../../assets/meImage.jpg";
import Socials from "../Socials";
import { FadeIn } from "../FadeIn";
import Container from "../Container";

const AboutMe = () => {
  return (
    <div className="flex  text-[white]">
      <Container>
        <div className="flex flex-col gap-6 relative z-10">
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
          <div className="">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
              Jose Alejandro Gomez Elizondo
            </h3>
            <p className="text-base leading-7 text-[#7ee787]">
              Full-stack Web Developer
            </p>
            <p className="mt-4 text-lg pr-2 text-gray-500">
              I&apos;m an experienced software engineer who constantly seeks out
              innovative solutions to everyday problems.
            </p>
            <p className="mt-4 text-lg pr-2 text-gray-500">
              After 4 years in this industry I have worked with multiple
              front-end and back-end technologies.
            </p>
          </div>
          <div className="w-full flex">
            <img
              src={meImage}
              className="rounded-[50px] object-center"
              height={108}
              width={250}
            />
          </div>
          <FadeIn
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className=" flex flex-col w-full gap-2 w-64 ">
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
          <Socials className="mt-2" />
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
