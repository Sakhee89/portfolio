import { BrowserRouter } from "react-router-dom";
import AboutMe from "./components/About/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import { Navbar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Tech from "./components/Projects/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gradient-to-r from-[#100534] to-[#050112]">
        <div>
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <AboutMe />
          <Projects />
          <Tech />
          <ContactMe />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
