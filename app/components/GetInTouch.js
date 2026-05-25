"use client";

import React from "react";
import Fade from "./Fade";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <section
      id="Contact"
      className="relative py-[40px] md:py-[85px] px-[20px] min-h-screen overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <Fade delay={0.005} inView>
          <h2 className="text-white text-[20px] md:text-[30px] font-bold mx-auto">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
        </Fade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left Side */}
          <Fade delay={0.01} inView>
            <div className="bg-[#1F2937] border border-gray-600/30 rounded-lg p-6 md:p-8 hover:border-gray-500/50 transition-all duration-300 h-full">
              <p className="text-indigo-500 font-medium mb-3">
                Contact Information
              </p>

              <h3 className="text-white text-[24px] md:text-[32px] font-bold leading-tight">
                Let’s work on your next big project together.
              </h3>

              <p className="text-[#9CA3AF] mt-5 leading-relaxed text-[14px] md:text-[16px]">
                I’m currently open to freelance opportunities, frontend and
                full-stack roles, collaborations, and exciting startup ideas.
                Feel free to reach out anytime.
              </p>

              <div className="flex flex-col gap-5 mt-10">
                <div className="flex items-center gap-4 group">
                  <div className="bg-[#374151] p-3 rounded-lg group-hover:bg-indigo-600 transition-all duration-300">
                    <Mail size={20} className="text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white text-[15px] md:text-[16px]">
                      ayoeze191@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-[#374151] p-3 rounded-lg group-hover:bg-indigo-600 transition-all duration-300">
                    <Phone size={20} className="text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white text-[15px] md:text-[16px]">
                      +2349037183645
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="bg-[#374151] p-3 rounded-lg group-hover:bg-indigo-600 transition-all duration-300">
                    <MapPin size={20} className="text-white" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-[15px] md:text-[16px]">
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* Right Side */}
          <Fade delay={0.02} inView>
            <form className="bg-[#1F2937] border border-gray-600/30 rounded-lg p-6 md:p-8 hover:border-gray-500/50 transition-all duration-300 flex flex-col gap-5">
              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#111827] border border-gray-700 focus:border-indigo-600 focus:ring-0 outline-none rounded-lg px-4 py-3 text-white transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="w-full bg-[#111827] border border-gray-700 focus:border-indigo-600 focus:ring-0 outline-none rounded-lg px-4 py-3 text-white transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-[#111827] border border-gray-700 focus:border-indigo-600 focus:ring-0 outline-none rounded-lg px-4 py-3 text-white transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-2 block">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#111827] border border-gray-700 focus:border-indigo-600 focus:ring-0 outline-none rounded-lg px-4 py-3 text-white resize-none transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
