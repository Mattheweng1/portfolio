import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { LINKS } from "../constants/constants";

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
    <nav className="flex items-center justify-between fixed top-0 left-0 w-screen px-10 py-8">
      <NavLink
        to={"/"}
        className="flex flex-shrink-0 items-end font-bold select-none z-10"
      >
        <span className="text-red-500 text-3xl leading-[0.74]">ME</span>
        <span className="leading-[0.74]">dev</span>
      </NavLink>
      <div className="items-center justify-center gap-4 text-xl hidden md:flex">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
        <div className="md:hidden fixed top-0 left-0 z-1 h-full w-full flex items-center flex-col justify-evenly text-5xl bg-black">
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/projects" onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
          <a href={LINKS.linkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={LINKS.gitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
