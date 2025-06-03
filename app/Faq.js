"use client";
import React from "react";
import Fade from "./components/Fade";
import { useTheme } from "next-themes";
import { FaAngleDown } from "react-icons/fa6";
const Faq = () => {
  const { theme } = useTheme();
  return (
    <section
      id="Faq"
      className="py-[40px] md:py-[85px] px-[20px] min-h-screen"
      style={{
        backgroundColor: theme === "dark" ? "" : "white",
        color: theme === "dark" ? "#e5e7eb" : "#111827",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <Fade delay={0.005} inView>
          <h2
            className={`${
              theme == "dark" ? "text-white" : "text-gray-800"
            } text-[20px] md:text-[30px] font-bold mx-auto`}
          >
            Frequently{" "}
            <span className="text-indigo-600"> Asked Questions </span>
          </h2>
        </Fade>
        <div>
          <Questions />
        </div>
      </div>
    </section>
  );
};

const Questions = () => {
  return (
    <button className="bg-[#1F2937] rounded-lg border border-gray-600/30 overflow-hidden hover:border-gray-500/50 transition-all duration-300">
      <button className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#374151] transition-colors duration-200">
        <h3 class="text-lg font-semibold text-white pr-4">
          How much does professional web development cost?
        </h3>
        <FaAngleDown size={20} color="white" />
      </button>
      <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-96 opacity-100">
        <div className="px-6 pb-5">
          <div className="h-px bg-gradient-to-r from-gray-600/50 to-transparent mb-4"></div>
          <p className="text-gray-300 leading-relaxed">
            Professional web development costs vary based on project complexity,
            features, and timeline. Factors affecting pricing include design
            complexity, functionality requirements, number of pages, and
            integration needs. I provide transparent pricing and detailed quotes
            for all web development projects. Contact me for a personalized
            estimate based on your specific business requirements and budget.
          </p>
        </div>
      </div>
    </button>
  );
};
export default Faq;
