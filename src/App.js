import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Achievements from "./components/Achivements";
import Education from "./components/Education";

const App = () => {
  return (
    <div className="bg-[#150050]">
      <NavBar />
      <Home />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Work />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;
