import Hero from "./sections/Hero";
import Navbar from "./layout/Navbar";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <Projects />
      <Technologies />
      <AboutMe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
