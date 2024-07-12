import { useEffect, useState } from "react";
import { FaBarsStaggered, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { LINKS } from "../constants/constants";
import NavIcons from "./NavIcons";

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
    <nav className="flex items-center justify-between fixed top-0 left-0 w-screen px-10 py-8 bg-gradient-to-b from-black via-black">
      <a
        href="#home"
        className="flex flex-shrink-0 items-end font-bold select-none z-10"
      >
        <span className="text-red-500 text-3xl leading-[0.74]">ME</span>
        <span className="leading-[0.74]">dev</span>
      </a>
      <div className="items-center justify-center gap-4 text-xl hidden md:flex">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <div className="md:hidden z-10">
        <button onClick={toggleMenu}>
          {isOpen ? <FaX /> : <FaBarsStaggered />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 z-1 h-full w-full p-10 flex text-center flex-col justify-evenly text-5xl bg-black">
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
          <NavIcons />
        </div>
      )}
    </nav>
  );
};
export default Navbar;
