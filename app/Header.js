"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#6B7280] fixed top-0 flex left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "h-16" : "h-18"
      }`}
    >
      <div className="flex justify-between w-full  px-[20px] max-w-7xl mx-auto items-center ">
        <div className="text-[20px]">&lt;Eazy/&gt;</div>

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
        <GiHamburgerMenu className="md:hidden" fontSize={20} />
      </div>
    </div>
  );
};

export default Header;

const Navitem = ({ text }) => {
  return (
    <li
      className="hover:text-[#3730A3] cursor-pointer hover:underline cur"
      style={{ textUnderlineOffset: "10px" }}
    >
      {text}
    </li>
  );
};
