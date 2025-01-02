import React from "react";
import nyakul from "../assets/nyakul.png";
import cavitak from "../assets/Cavitak.png";
import Border from "./home/Border";
const WorkRole = () => {
  const workData = [
    {
      img: nyakul,
      name: "Nyakul",
      role: "Software Developer Intern",
      duration: "Jul 2023 - Feb 2024",
      description: [
        `Successfully migrated Nyakul's web platform from React Native Web to
            React.js, implementing Material-UI and Redux for enhanced e-commerce
            features, product management, and responsive user interfaces.`,
        `    Built comprehensive features for Nyakul's mobile app using React
            Native including Instagram-style feed system, product requirement
            specifications with image upload, and user connection management
            with audio recording capabilities.`,
        `Facilitated daily stand-ups and collaborated with backend developers, product managers, and UI designers to align development with business goals while maintaining detailed documentation and codebase standards.`,
      ],
    },
    {
      img: cavitak,
      name: "Cavitak",
      role: "Web Developer Intern",
      duration: "Aug 2024 - Oct 2024",
      description: [
        `Spearheaded the development of globalcommerce.co.in using WordPress, implementing custom themes, plugins, and e-commerce functionality while collaborating with the marketing team to ensure brand alignment and SEO optimization.`,
        `Managed and optimized WordPress and Shopify websites for major brands including Chuvi, Loop, Narwal, Yale, and Obsbot India, focusing on performance optimization, feature updates, and content management systems.`,
        `Demonstrated exceptional project ownership and communication skills by independently handling development workflows, maintaining regular client updates, and ensuring timely delivery of website enhancements and maintenance tasks.`,
      ],
    },
  ];

  return (
    <>
      {workData.map((item, index) => (
        <div
          key={index}
          className="text-gray-500 flex flex-col gap-2 border-l border-gray-500 px-4"
        >
          <div className="flex flex-row gap-4">
            <div>
              <img
                src={item.img}
                width={105}
                className="object-center rounded-lg"
              />
            </div>
            <div>
              <p className="text-[#ffa28b] text-start">
                {item.name} | <br /> {item.role}
                <span className="text-white">
                  <br /> {item.duration}
                </span>
              </p>
            </div>
          </div>
          <div className="pl-6 text-[#a9b1d6]">
            <ul className="flex flex-col gap-2 list-disc list-outside flex flex-col mt-3 mb-4">
              {item.description.map((text, index) => (
                <li>{text}</li>
              ))}
            </ul>
          </div>
          <Border className="pt-4 pb-4" />
        </div>
      ))}
    </>
  );
};

export default WorkRole;
