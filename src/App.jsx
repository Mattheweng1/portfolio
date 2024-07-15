import Navbar from "./components/Navbar";
import PageContainer from "./components/PageContainer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { PiCaretDoubleUpThin } from "react-icons/pi";
import { useEffect, useState } from "react";
import Swaying from "./components/Swaying";
import SlideInView from "./components/SlideInView";

const App = () => {
  const [isVisibleNavbar, setIsVisibleNavbar] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Get current scroll position
    const elementPosition = document.getElementById("about").offsetTop; // Get element's position from top

    if (scrollPosition >= elementPosition) {
      setIsVisibleNavbar(true);
    } else {
      setIsVisibleNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisibleNavbar && <Navbar />}
      <PageContainer>
        <Home />
        <About />
        <Projects />
        <Contact />
        <div className="flex justify-center">
          <a href="#home">
            <SlideInView>
              <Swaying initialY={5} duration={1}>
                <PiCaretDoubleUpThin className="text-5xl my-5 text-red-500" />
              </Swaying>
            </SlideInView>
          </a>
        </div>
      </PageContainer>
    </>
  );
};
export default App;
