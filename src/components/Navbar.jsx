import { useEffect, useState } from "react";
import { FaBarsStaggered, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { LINKS } from "../constants/constants";
import NavIcons from "./NavIcons";
import SlideIn from "./SlideIn";
import { AnimatePresence } from "framer-motion";
import StaggerBox from "./StaggerBox";
import MenuLink from "./MenuLink";
import HoverTap from "./HoverTap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const stopBodyScroll = () => {
    if (isOpen && typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  useEffect(stopBodyScroll, [isOpen]);

  return (
    <SlideIn
      className="flex items-center justify-between fixed top-0 left-0 w-screen px-10 py-8 bg-gradient-to-b from-black via-black z-50"
      initialY={"-100%"}
      exitY={"-100%"}
      duration={0.5}
    >
      <HoverTap
        hoveredScale={1.1}
        hoveredColor="#b91c1c"
        tappedColor="#b91c1c"
        duration={0.2}
      >
        <a
          href="#home"
          className="flex flex-shrink-0 items-end font-bold select-none z-10"
        >
          <span className="text-red-500 text-3xl leading-[0.74]">ME</span>
          <span className="leading-[0.74]">dev</span>
        </a>
      </HoverTap>
      <div className="items-center justify-center gap-4 text-xl hidden md:flex">
        <HoverTap hoveredScale={1.1} duration={0.2}>
          <a href="#about">About</a>
        </HoverTap>
        <HoverTap hoveredScale={1.1} duration={0.2}>
          <a href="#projects">Projects</a>
        </HoverTap>
        <HoverTap hoveredScale={1.1} duration={0.2}>
          <a href="#contact">Contact</a>
        </HoverTap>
        <HoverTap hoveredScale={1.1} duration={0.2}>
          <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </HoverTap>
        <HoverTap hoveredScale={1.1} duration={0.2}>
          <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </HoverTap>
      </div>
      <div className="md:hidden z-10">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <HoverTap hoveredScale={1.2} duration={0.2}>
              <FaX />
            </HoverTap>
          ) : (
            <HoverTap hoveredScale={1.2} duration={0.2}>
              <FaBarsStaggered />
            </HoverTap>
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <SlideIn
            className="md:hidden fixed top-0 left-0 z-1 h-screen w-full p-10 bg-black"
            initialY={"-100%"}
            exitY={"-100%"}
            duration={0.5}
          >
            <StaggerBox
              className="h-full flex text-right flex-col justify-evenly text-5xl font-light"
              onView
              staggerChildren={0.2}
            >
              <MenuLink href="#about" onClick={toggleMenu}>
                About
              </MenuLink>
              <MenuLink href="#projects" onClick={toggleMenu}>
                Projects
              </MenuLink>
              <MenuLink href="#contact" onClick={toggleMenu}>
                Contact
              </MenuLink>
              <NavIcons />
            </StaggerBox>
          </SlideIn>
        )}
      </AnimatePresence>
    </SlideIn>
  );
};
export default Navbar;
