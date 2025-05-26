import React from "react";
import { motion } from "motion/react";
const SideBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-black border-t-[1px] w-full border-t-white/20 fixed bottom-0 left-0 px-[10px] md:px-[20px]"
      style={{ height: "calc(100% - 64px)" }}
    >
      <div className="p-[20px] h-full flex gap-[20px] flex-col mt-[20px] border-solid border-white/20 border-[0.5px] rounded-[8px]">
        <Navitem text="Home" secs={1} />
        <Navitem text="About" secs={2} />
        <Navitem text="Experience" secs={3} />
        <Navitem text="Projects" secs={4} />
      </div>
    </motion.div>
  );
};

export default SideBar;

const Navitem = ({ text, secs }) => {
  return (
    <motion.li
      className="hover:text-[#3730A3] list-none font-semibold cursor-pointer text-[18px]"
      style={{
        textUnderlineOffset: "10px",
        transition: "color 0.3s ease, transform 0.3s ease",
      }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ delay: secs * 0.1 }}
    >
      {text}
    </motion.li>
  );
};
