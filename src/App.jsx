import { useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
// import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AnimatedBackground from "./components/background/AnimatedBackground";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <ScrollProgress />
      <nav className={`site-nav${isNavOpen ? " nav-open" : ""}`}>
        <div className="nav-header">
          <a className="nav-brand" href="#home" onClick={closeNav}>AV</a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsNavOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={closeNav}>About</a>
          <a href="#education" onClick={closeNav}>Education</a>
          <a href="#skills" onClick={closeNav}>Skills</a>
          {/* <a href="#projects" onClick={closeNav}>Projects</a> */}
          <a href="#certificates" onClick={closeNav}>Certificates</a>
          <a href="#achievements" onClick={closeNav}>Achievements</a>
          <a href="#contact" onClick={closeNav}>Contact</a>
        </div>
      </nav>
      <Hero />
      <About />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
      <AnimatedBackground />
    </>
  );
}
