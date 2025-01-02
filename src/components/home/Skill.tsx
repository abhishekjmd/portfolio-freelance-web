import React, { useState } from "react";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import BookOpen from "../../icons/book-open";
import { useAnimationControls } from "framer-motion";
import clsx from "clsx";
import { FadeIn } from "../FadeIn";

const skills = [
  {
    skill: "Languages",
    buttonClassNames: "rounded-tl-full",
    textClassNames: "-translate-x-2",
  },
  {
    skill: "Front",
    buttonClassNames: "rounded-tr-full",
    textClassNames: "translate-x-3 translate-y-1",
  },
  {
    skill: "Back",
    buttonClassNames: "rounded-bl-full",
    textClassNames: "translate-x-8 -translate-y-3",
  },
  {
    skill: "Tools",
    buttonClassNames: "rounded-br-full",
    textClassNames: "translate-x-3 -translate-y-3",
  },
];

const skillsLogos = {
  ["Languages" as string]: [
    {
      name: "JavaScript",
      image: "../../../public/logos/js-logo.png",
    },
    {
      name: "TypeScript",
      image: "../../../public/logos/ts-logo.png",
    },
    {
      name: "Python",
      image: "../../../public/logos/python-logo.png",
    },
    {
      name: "C#",
      image: "../../../public/logos/csharp-logo.png",
    },
  ],
  ["Front" as string]: [
    {
      name: "HTML5",
      image: "../../../public/logos/html5-logo.png",
    },
    {
      name: "CSS3",
      image: "../../../public/logos/css-logo.png",
    },
    {
      name: "ReactJS",
      image: "../../../public/logos/react-logo.png",
    },
    {
      name: "NextJS",
      image: "../../../public/logos/nextjs-logo.png",
    },
    {
      name: "Native",
      image: "../../../public/logos/rnative-logo.png",
    },
    {
      name: "TailwindCSS",
      image: "../../../public/logos/tailwindcss-logo.jpg",
    },
    {
      name: "Shopify",
      image: "../../../public/logos/shopify.jpg",
    },
    {
      name: "MaterialUI",
      image: "../../../public/logos/materialui-logo.png",
    },
    {
      name: "WordPress",
      image: "../../../public/logos/wordpress.png",
    },
    { name: "", image: "" },
    { name: "", image: "" },
    { name: "", image: "" },
  ],
  ["Back" as string]: [
    {
      name: "NodeJS",
      image: "../../../public/logos/nodejs-logo.png",
    },
    {
      name: "ExpressJS",
      image: "../../../public/logos/express-logo.png",
    },
    {
      name: "NestJS",
      image: "../../../public/logos/nestjs-logo.png",
    },
    {
      name: "MongoDB",
      image: "../../../public/logos/mongodb-logo.webp",
    },
    {
      name: "PostgresSql",
      image: "../../../public/logos/postgres-logo.png",
    },
    {
      name: "Firebase",
      image: "../../../public/logos/firebase-logo.jpg",
    },
    {
      name: "Heroku",
      image: "../../../public/logos/heroku-logo.webp",
    },
    {
      name: "DigitalOcean",
      image: "../../../public/logos/digital-ocean-logo.svg",
    },
    {
      name: "awsS3",
      image: "../../../public/logos/s3-logo.png",
    },
  ],
  ["Tools" as string]: [
    {
      name: "Git",
      image: "../../../public/logos/git-logo.png",
    },
    {
      name: "Github",
      image: "../../../public/logos/github-logo.webp",
    },
    { name: "Docker", image: "../../../public/logos/docker-logo.png" },
    {
      name: "EsLint",
      image: "../../../public/logos/eslint-logo.png",
    },
    {
      name: "Redux",
      image: "../../../public/logos/redux-logo.png",
    },
    {
      name: "Bitbucket",
      image: "../../../public/logos/bitbucket.png",
    },
    {
      name: "Figma",
      image: "../../../public/logos/figma-logo.webp",
    },
    {
      name: "Mailchimp",
      image: "../../../public/logos/mailchimp-logo.webp",
    },
    { name: "", image: "" },
    { name: "", image: "" },
    { name: "", image: "" },
    { name: "", image: "" },
    { name: "", image: "" },
    { name: "", image: "" },
  ],
};

const skillsTitles = {
  ["Languages" as string]: "Programming Languages",
  ["Front" as string]: "Frontend",
  ["Back" as string]: "Backend",
  ["Tools" as string]: "Tools",
};

const Skill = () => {
  const [activeSkill, setActiveSkill] = useState("Languages");
  const controls = useAnimationControls();

  const handleChangeSkill: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    const skill = e.currentTarget.textContent;
    if (skill === activeSkill) return;
    if (skill) setActiveSkill(skill);
    await controls.start("hidden");
    await controls.start("visible");
  };

  return (
    <div className="flex text-[white]">
      <Container>
        <div className="relative flex flex-col gap-6 z-10">
          <SectionHeader
            className="relative"
            icon={
              <>
                <BookOpen height={28} width={28} />
                <span className="bg-[#939aff] icon-blur absolute inset-0 -z-10"></span>
              </>
            }
            title="Skills"
            description={
              <div className="mt-2">
                <span className="text-[#939aff]">Full Stack software</span>{" "}
                developer{" "}
                <span className="text-[#939aff]">with experience</span> in
                Front-End and <span className="text-[#939aff]">Back-End</span>{" "}
                technologies
              </div>
            }
          />
        </div>
        <div className="mt-10 ">
          <div className="skills-picker w-[250px] m-[10px] h-[250px] col-span-3 row-span-3 place-self-center isolate">
            <div className="rounded-full inset-6 absolute grid grid-cols-2  gap-2 rotate-45">
              {skills.map((skill) => (
                <button
                  onClick={handleChangeSkill}
                  key={skill.skill}
                  className={clsx(
                    "rounded-[500px] skills-buttons",
                    skill.buttonClassNames,
                    activeSkill === skill.skill && "skills-buttons-active"
                  )}
                >
                  <p
                    className={clsx(
                      "text-xl text-white font-semibold tracking-wide w-min -rotate-45",
                      skill.textClassNames
                    )}
                  >
                    {skill.skill}
                    <span
                      className={clsx(
                        "transition-all duration-300 -z-10 bg-[#525df3] absolute bottom-0 left-0 right-0 w-full",
                        activeSkill === skill.skill ? "h-[18px]" : "h-[2px]"
                      )}
                    ></span>
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3">
            {skillsLogos[activeSkill].map((skill, index) => {
              if (!skill.name)
                return <div key={index} className="h-[115px] w-24" />;

              return (
                <FadeIn
                  key={skill.name}
                  className="h-[115px] w-24 place-self-center flex flex-col"
                >
                  <div className="mt-auto">
                    <img
                      src={skill.image}
                      className="object-contain rounded-md m-auto"
                      alt=""
                      height={64}
                      width={64}
                      style={{
                        width: 64,
                        height: 64,
                      }}
                    />
                    <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto">
                      {skill.name}
                    </h3>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
