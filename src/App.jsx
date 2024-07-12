import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiCaretDoubleUpThin } from "react-icons/pi";
import { LINKS } from "./constants/constants";

const App = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Home />
        <About />
        <Projects />
        <Contact />
        <div className="flex justify-center">
          <a href="#home">
            <PiCaretDoubleUpThin className="text-5xl my-5 text-red-500" />
          </a>
        </div>
      </PageContainer>
      <div className="flex flex-col fixed bottom-0 left-0 w-10 text-3xl gap-10 items-center">
        <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <div className="w-1 h-20 bg-neutral-300 rounded-t-sm"></div>
      </div>
    </>
  );
};
export default App;
