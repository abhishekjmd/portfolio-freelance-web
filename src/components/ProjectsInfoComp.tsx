import React from "react";
import Medellin from "../assets/medellin.jpg";
import Maya from "../assets/maya.jpg";
import Agriconnect from '../assets/2.png'
import Multiflex from  '../assets/Multiflex.jpg'

const projectsData = [
  {
    title: "Medellin Outsourcing Solutions",
    description:
      "Developed a responsive WordPress website for a client in the outsourcing industry, showcasing their services and expertise. This freelance project emphasizes professional design and seamless functionality.",
    url: Medellin,
  },
  {
    title: "MultiFlex",
    description:
      "MultiFlex: A full-stack React Native MERN application combining Spotify-like functionality with videos, built using Node.js, Express, MongoDB, and Redux. The app is deployed on Netlify with video songs stored in Cloudinary for seamless streaming",
    url: Multiflex,
  },
  {
    title: "Maya - Your friendly Baha'i",
    description:
      "An AI-powered chatbot with TTS, STT, and RAG knowledge base integration, deployed on AWS Lambda for scalable and cost-efficient performance. Seamlessly embedded into WordPress for an intuitive and interactive user experience",
    url: Maya,
  },
  {
    title: "Agriconnect - a farmer helper application",
    description:
      "AgriConnect is a React Native app enabling farmers to register, refresh their product catalogs, and sell directly to retailers, wholesalers, exporters, and FMCG industries. Users can purchase goods or post requirements, allowing farmers to connect for bulk sales efficiently",
    url: Agriconnect,
  },
];

const ProjectsInfoComp = () => {
  return (
    <div className="flex flex-col">
      {projectsData.map((item, index) => (
        <div className="flex flex-col text-white border rounded-lg border-gray-500/20 bg-gray-900/20 mb-10">
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
    </div>
  );
};

export default ProjectsInfoComp;
