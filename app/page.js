import Image from "next/image";
import Hero from "./Hero";
import Experiences from "./Experiences";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Experiences />
      <Projects />
    </div>
  );
}
