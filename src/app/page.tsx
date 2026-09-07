import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Preloader from "@/components/Preloader";
import GlobalBackground from "@/components/GlobalBackgroundLoader";
import ScrollZones from "@/components/ScrollZones";
import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <GlobalBackground />
      <ScrollZones />
      <CustomCursor />
      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
