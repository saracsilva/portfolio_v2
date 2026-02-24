import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
      <Contact />
    </>
  );
}

export default App;
