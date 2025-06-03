import Image from "next/image";
import Hero from "./Hero";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Faq from "./Faq";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Experiences />
      <Projects />
      <Faq />
    </div>
  );
}
