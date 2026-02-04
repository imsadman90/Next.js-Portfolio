import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-gradient-to-br from-[#0b0c15] via-[#1a1635] to-[#0b0c15] font-display text-white antialiased overflow-x-hidden min-h-screen">
      {/* Background Grid Effect - Removed for mobile performance */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] bg-grid bg-grid-pattern"></div> */}

      {/* Animated Gradient Blobs - Disabled for mobile performance */}
      {/* <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div> */}

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

export default App;
