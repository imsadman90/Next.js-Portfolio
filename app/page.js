import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative bg-linear-to-br from-background-dark via-[#1a1635] to-background-dark font-display text-white antialiased overflow-x-hidden min-h-screen">
      {/* Main Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
