import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Projects from "./Components/projects/Projects";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
        <a href="#hero" className="scroll-top">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </main>
    </>
  );
}

export default App;
