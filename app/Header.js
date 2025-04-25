"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import motion from "motion/react";
import SideBar from "./SideBar";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div
      className={`bg-[#6B7280] fixed top-0 flex left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-16" : "h-18"
      }`}
    >
      {showSideBar && <SideBar />}
      <div className="flex justify-between w-full px-[10px]  md:px-[20px] max-w-7xl mx-auto items-center ">
        <div className="text-[14px] md:text-[20px]">&lt;Eazy/&gt;</div>

        <div className="md:flex w-fit hidden gap-12 items-center text-[1rem]">
          <nav className="list-none flex gap-8 items-center">
            <Navitem text={"Home"} />
            <Navitem text={"About"} />
            <Navitem text={"Experience"} />
            <Navitem text={"Projects"} />
          </nav>
          {/* <button className="bg-[#05df72] rounded-3xl p-5 text-[1rem] font-semibold">
                            Download Resume
                    </button> */}
        </div>
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="nav:hidden cursor-pointer text-2xl px-2 flex items-center rounded-sm h-[30px] nav-sm:h-[35px] text-white bg-white/10"
        >
          {!showSideBar ? (
            <GiHamburgerMenu
              className="md:hidden"
              fontSize={20}
              color="white"
            />
          ) : (
            <IoCloseSharp className="md:hidden" fontSize={20} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;

const Navitem = ({ text }) => {
  return (
    <li
      className="hover:text-[#3730A3] cursor-pointer hover:underline"
      style={{
        textUnderlineOffset: "10px",
        transition: "color 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
    >
      {text}
    </li>
  );
};
