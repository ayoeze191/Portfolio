import Image from "next/image";
import React from "react";
import ekopages from "./assets/images/Projects/ekopages.png";
import Mctechy from "./assets/images/Projects/Mctechy.png";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div className="py-[85px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[40px] items-center">
        <h2 className="text-white text-[30px] font-bold mx-auto">
          Live/Personal <span className="text-indigo-600"> Projects </span>
        </h2>
        <div className="grid grid-cols-3 gap-[40px] gap-x-[40px]">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
};
export default Projects;

const Project = () => {
  return (
    <div className="flex flex-col border-solid border-1 md:flex-row gap-4 items-center rounded-2xl bg-gray-800 h-[250px] pl-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-1">
        <h3 className="text-white text-xl font-semibold mb-2">Mktechy</h3>
        <div className="flex gap-4 items-center text-[18px] mb-2">
          <a
            href="https://github.com/your-repo-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-indigo-500 transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
            <span>Github</span>
          </a>
        </div>
        <div className="flex gap-4 items-center text-[18px]">
          <a
            href="https://your-live-project-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-indigo-500 transition-colors duration-300"
          >
            <span className="text-2xl">🔗</span>
            <span>Live</span>
          </a>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full ">
        <Image
          src={Mctechy}
          alt="Project Thumbnail"
          className="rounded-tr-2xl  rounded-br-2xl h-full w-full "
        />
      </div>
    </div>
  );
};
