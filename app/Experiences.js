import React from "react";

const Experiences = () => {
  return (
    <div className="py-[85px] px-[20px]">
      <div className="max-w-7xl mx-auto flex flex-col gap-[40px] items-center">
        <h2 className="text-white text-[30px] font-bold mx-auto">
          Professional <span className="text-indigo-600"> Experience</span>
        </h2>
        <div className="flex flex-col gap-[40px]">
          <Experience />
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Experiences;

const Experience = () => {
  return (
    <div className="flex flex-col md:flex-row text-[14px] md:text-[16px] text-[#6B7280] gap-6 md:gap-8">
      <p className="md:sticky md:top-18 md:w-[250px] self-start font-medium">
        Sept 2024 - Present
      </p>
      <div className="flex-1 bg-[#1F2937] p-6 md:p-8 rounded-lg text-[13px] md:text-[15px] shadow-lg">
        <p className="text-white font-semibold mb-3 md:mb-4">
          Front-End Developer (remote){" "}
          <span className="text-indigo-500">Ekopages</span>
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            Transformed Figma designs into pixel-perfect, responsive interfaces
            for SellCrea8, reducing revision cycles and improving collaboration.
          </li>
          <li>
            Developed custom skeleton loading states, enhancing perceived
            performance and user experience during data fetching.
          </li>
          <li>
            Integrated RESTful APIs for seamless data flow, using Postman for
            testing and validation.
          </li>
        </ul>
        <div className="w-fit flex flex-wrap items-center gap-3 md:gap-5 mt-5">
          <div className="text-indigo-500 rounded-[20px] border-solid border-1 bg-[#3730A3] px-3 md:px-5 py-1">
            Nextjs
          </div>
          <div className="text-indigo-500 rounded-[20px] border-solid border-1 bg-[#3730A3] px-3 md:px-5 py-1">
            ReactJs
          </div>
          <div className="text-indigo-500 rounded-[20px] border-solid border-1 bg-[#3730A3] px-3 md:px-5 py-1">
            TypeScript
          </div>
          <div className="text-indigo-500 rounded-[20px] border-solid border-1 bg-[#3730A3] px-3 md:px-5 py-1">
            MongoDb
          </div>
        </div>
      </div>
    </div>
  );
};
