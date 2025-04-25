"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
// import lpIconArrow from "@/assets/svg/learnpally_arrows.svg";
// import ImageSkillBuilding from "@/assets/img/use-case/skill-building.png";
// import ImageForTeams from "@/assets/img/use-case/teams-and-large.png";
import ekopages from "./../app/assets/images/Projects/ekopages.png";
import Mctechy from "./../app/assets/images/Projects/Mctechy.png";
import misfit from "./../app/assets/images/Projects/Misfit.png";
import nerdy from "./../app/assets/images/Projects/Nerdy.png";
import matacare from "./../app/assets/images/Projects/matacare.png";
import dogify from "./../app/assets/images/Projects/Dogify.png";
import shibayc from "./../app/assets/images/Projects/shibayc.png";

import { GiArrowCluster } from "react-icons/gi";

const useCase = [
  {
    title: "Ekopages (An SDG Website )",
    description:
      "Gain recognized credentials and specialized knowledge through comprehensive programs offered by leading African universities, designed to advance your career and expertise.",
    image: ekopages,
    url: "https://ekopages.com",
    github: "https://github.com/ayoeze191/Ekopages",
  },
  {
    title:
      "Dogify (A Dog website with various features like lazy loading and co)",
    description:
      "Develop essential skills and knowledge for aspiring entrepreneurs, equipping them with the tools and insights needed to start and grow successful businesses.",
    image: dogify,
    url: "https://dogifii.netlify.app/",
    github: "https://github.com/ayoeze191/dogify",
  },
  {
    title: "Mktechy (A landing page for an Edtech)",
    description:
      "Develop essential skills and knowledge for aspiring entrepreneurs, equipping them with the tools and insights needed to start and grow successful businesses.",
    image: Mctechy,
    url: "https://mktechy.netlify.app/ ",
    github: "https://github.com/ayoeze191/mctechy",
  },
  {
    title: "Misfit (An Ecommerce Platform)",
    description:
      "Tailor your learning experience to meet the needs of your team or organization, with access to a wide range of courses and resources designed for corporate and professional development.",
    image: misfit,
    url: "https://ekopages.com",
    github: "https://git@github.com:ayoeze191/Ekopages.git",
  },
  {
    title: "Matacare Landing Page(A landing page for an hospital)",
    description:
      "Enhance your skills and knowledge to stay competitive in the job market or start a successful business, with access to a wide range of courses and resources designed for personal and professional development.",
    image: matacare,
    url: "https://ekopages.com",
    github: "https://git@github.com:ayoeze191/Ekopages.git",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute",
    top: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: "relative",
    top: 0,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    position: "absolute",
    top: 0,
  }),
};

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [direction, setDirection] = useState(0);
  const titleRefs = useRef([]);

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prevIndex) => (prevIndex + 1) % useCase.length);
      }, 5000); // Switch every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const activeTitle = titleRefs.current[activeIndex];
    if (activeTitle) {
      const parentTop =
        activeTitle.offsetParent?.getBoundingClientRect().top ?? 0;
      const titleTop = activeTitle.getBoundingClientRect().top - parentTop;
      setIndicatorTop(titleTop + activeTitle.offsetHeight / 2 - 10);
    }
  }, [activeIndex]);

  const handleUseCaseClick = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setIsAutoPlaying(false);
    setActiveIndex(index);

    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  const setTitleRef = (index) => (el) => {
    titleRefs.current[index] = el;
  };
  return (
    <div className="py-[40px] md:py-[85px] px-[20px] ">
      <div className="max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <h2 className="text-white text-[20px] md:text-[30px] font-bold mx-auto">
          Live <span className="text-indigo-600">Projects</span>
        </h2>

        <div className="mt-8 lg:hidden">
          <div className="relative">
            <div className="absolute bottom-0 px-5 py-6 bg-gradient-to-t from-black to-transparent rounded-3xl">
              <p className="text-xl text-[#FAFAFA] font-semibold">
                {useCase[activeIndex].title}
              </p>
              <p className="mt-4 text-sm text-[#D0D1DA]">
                {useCase[activeIndex].description}
              </p>
            </div>
            <Image
              className="rounded-3xl shadow-lg"
              src={useCase[activeIndex].image}
              alt="Use Case Side Image"
            />
          </div>
        </div>
        <div className="mt-8 hidden items-center justify-between lg:flex">
          <div className="max-w-[350px] w-full">
            <div className="relative">
              <motion.div
                layoutId="activeIndicator"
                className="absolute -left-7"
                animate={{
                  top: indicatorTop,
                }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <FaExpandArrowsAlt size={20} color="#6366f1" />
              </motion.div>
              {useCase.map((item, index) => (
                <motion.div
                  key={index}
                  ref={setTitleRef(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex cursor-pointer items-center gap-x-4 px-2 py-4 ${
                    index === 0 ? "" : "mt-4"
                  } `}
                  onClick={() => handleUseCaseClick(index)}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      color: index === activeIndex ? "#6366f1" : "#D0D1DA",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-[18px] font-medium">{item.title}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="relative after:bg-[black] after:opacity-[0.5] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full rounded-2xl shadow-lg"
              >
                <Image
                  src={useCase[activeIndex].image}
                  alt="Use Case Side Image"
                  className="rounded-2xl"
                />
                <motion.div
                  className="absolute bottom-0 px-10 py-6 gap-4 bg-gradient-to-t from-black to-transparent rounded-b-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex gap-4">
                    <a
                      className="bg-[#6366f1] hover:bg-[#4F51D1] cursor-pointer z-10 shadow px-4 py-2 text-[16px] rounded-[8px] text-white font-medium"
                      href={useCase[activeIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <a
                      className="bg-[#6366f1] hover:bg-[#4F51D1] cursor-pointer z-10 shadow px-4 py-2 text-[16px] rounded-[8px] text-white font-medium"
                      href={useCase[activeIndex].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-[#D0D1DA] z-10">
                    {useCase[activeIndex].description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
