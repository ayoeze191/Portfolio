"use client";

import React from "react";
import Fade from "./Fade";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const GetInTouch = () => {
  return (
    <section
      id="Contact"
      className="relative py-[40px] md:py-[85px] px-[20px] w-full  overflow-hidden"
    >
      <div className="relative z-10 max-w-xl  w-full  mx-auto flex flex-col gap-[20px] md:gap-[40px] items-center">
        <Fade delay={0.005} inView>
          <h2 className="text-white text-[20px] md:text-[30px] font-bold mx-auto">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
        </Fade>

        <div className="flex justify-center w-full  ">
          <Fade delay={0.02} inView className={"w-full"}>
            <form className="bg-[#1F2937] w-full border border-gray-600/30 rounded-lg p-6 md:p-8 hover:border-gray-500/50 transition-all duration-300 flex flex-col gap-5">
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
                className="bg-[#6366f1] hover:bg-[#4F51D1] flex items-center justify-center gap-4 cursor-pointer z-10 shadow px-4 py-2 text-[16px] rounded-[8px] text-white font-medium"
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
