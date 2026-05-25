"use client";

import React from "react";
import Fade from "./components/Fade";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative px-[20px] py-[40px] border-t border-gray-700/40">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <Fade delay={0.01} inView>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <h2 className="text-[24px] font-bold text-white">
                Ezekiel<span className="text-indigo-600">.</span>
              </h2>

              <p className="text-[#9CA3AF] leading-relaxed text-[14px] md:text-[15px]">
                Full-Stack Engineer focused on building scalable web and mobile
                applications with modern technologies and exceptional user
                experiences.
              </p>

              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://github.com/ayoeze191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1F2937] hover:bg-indigo-600 transition-all duration-300 p-3 rounded-lg text-white"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://linkedin.com/in/ayoeze191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1F2937] hover:bg-indigo-600 transition-all duration-300 p-3 rounded-lg text-white"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="https://twitter.com/olabodeezekie11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1F2937] hover:bg-indigo-600 transition-all duration-300 p-3 rounded-lg text-white"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="https://instagram.com/olabodeezekie11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1F2937] hover:bg-indigo-600 transition-all duration-300 p-3 rounded-lg text-white"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[18px] font-semibold">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-[#9CA3AF] text-[14px] md:text-[15px]">
                <a
                  href="#Home"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Home
                </a>

                <a
                  href="#Projects"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Projects
                </a>

                <a
                  href="#Experience"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Experience
                </a>

                <a
                  href="#Faq"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  FAQ
                </a>

                <a
                  href="#Contact"
                  className="hover:text-indigo-500 transition-all duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-[18px] font-semibold">Contact</h3>

              <div className="flex flex-col gap-3 text-[#9CA3AF] text-[14px] md:text-[15px]">
                <p>Lagos, Nigeria</p>
                <p>ayoeze191@gmail.com</p>
                <p>+2349037183645</p>
              </div>

              <a
                href="mailto:ayoeze191@gmail.com"
                className="w-fit mt-2 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white px-5 py-3 rounded-lg text-[14px] font-medium"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </Fade>

        {/* Bottom */}
        <Fade delay={0.02} inView>
          <div className="border-t border-gray-700/40 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#6B7280] text-[13px] md:text-[14px] text-center md:text-left">
              © {new Date().getFullYear()} Ezekiel. All rights reserved.
            </p>

            <p className="text-[#6B7280] text-[13px] md:text-[14px]">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;
