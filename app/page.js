import Image from "next/image";
import Hero from "./Hero";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Faq from "./Faq";
import GetInTouch from "./components/GetInTouch";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Experiences />
      <Projects />
      <Faq />
      <GetInTouch />
      <Footer />
    </div>
  );
}
