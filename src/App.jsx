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
import { AnimatePresence } from "framer-motion";
import HoverTap from "./components/HoverTap";

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
      <AnimatePresence>{isVisibleNavbar && <Navbar />}</AnimatePresence>
      <PageContainer>
        <Home />
        <About />
        <Projects />
        <Contact />
        <div className="flex justify-center text-5xl my-5 text-red-500">
          <HoverTap
            initialColor="rgb(239 68 68 1)"
            hoveredColor="rgb(185 28 28 1)"
            tappedColor="rgb(185 28 28 1)"
            hoveredScale={1.1}
            spring
          >
            <a href="#home">
              <SlideInView once duration={1}>
                <Swaying initialY={5} duration={1}>
                  <PiCaretDoubleUpThin />
                </Swaying>
              </SlideInView>
            </a>
          </HoverTap>
        </div>
      </PageContainer>
    </>
  );
};
export default App;
