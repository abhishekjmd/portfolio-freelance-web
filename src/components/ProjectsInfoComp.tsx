import React from "react";
import Medellin from "../assets/medellin.jpg";

const projectsData = [
  {
    title: "Medellin Outsourcing Solutions",
    description:
      "Developed a responsive WordPress website for a client in the outsourcing industry, showcasing their services and expertise. This freelance project emphasizes professional design and seamless functionality.",
    url: "../assets/medellin.jpg",
  },
];

const ProjectsInfoComp = () => {
  return (
    <>
      {projectsData.map((item, index) => (
        <div className="flex flex-col text-white border rounded-lg border-gray-500/20 bg-gray-900/20">
          <div className="flex flex-col p-6 gap-2">
            <p className="text-3xl text-[#ffdc8b]">{item.title}</p>
            <p className="text-lg">{item.description}</p>
          </div>
          <div>
            <p className="font-semibold text-2xl px-6">Learn More</p>
          </div>
          <div className="flex justify-end items-end mt-12">
            <img
              src={item.url}
              className="rounded-b-lg my-work-img-shadow z-10  w-[90%] right-0 bottom-0"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsInfoComp;
